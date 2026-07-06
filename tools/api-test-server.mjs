import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { spawn } from "node:child_process";

const rootDir = resolve(".");
const publicDir = resolve("public");
const envPath = join(publicDir, "env.json");
const defaultPort = Number(process.env.PORT ?? 5173);
const shouldOpenBrowser = process.env.OPEN_BROWSER !== "false";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function jsonResponse(res, status, value) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(value, null, 2));
}

function textResponse(res, status, value) {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(value);
}

async function readJsonRequest(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

async function readEnv() {
  try {
    return JSON.parse(await readFile(envPath, "utf8"));
  } catch {
    return { api_url: "", token_id: "", site_secret: "" };
  }
}

async function writeEnv(value) {
  await writeFile(envPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function normalizeBaseUrl(url) {
  return String(url ?? "").trim().replace(/\/+$/, "");
}

function requireText(value, label) {
  const text = String(value ?? "").trim();
  if (!text) throw new Error(`${label} is required.`);
  return text;
}

function withoutTokenFields(config) {
  const {
    token,
    token_type,
    expires_in,
    token_issued_at,
    token_site_index,
    ...rest
  } = config;
  return rest;
}

function unwrapData(json) {
  if (json && typeof json === "object" && "data" in json) return json.data;
  return json;
}

function readIssuedToken(data) {
  if (!data || typeof data !== "object") return "";
  return data.access_token ?? data.accessToken ?? data.AccessToken ?? data.token ?? data.Token ?? "";
}

function readTokenType(data) {
  if (!data || typeof data !== "object") return "";
  return data.token_type ?? data.tokenType ?? data.TokenType ?? "";
}

function readExpiresIn(data) {
  if (!data || typeof data !== "object") return undefined;
  return data.expires_in ?? data.expiresIn ?? data.expire_date ?? data.ExpiryDate;
}

function readSiteIndex(data) {
  if (!data || typeof data !== "object") return "";
  return data.site_index ?? data.siteIndex ?? data.SiteIndex ?? "";
}

async function readResponseBody(response) {
  const text = await response.text();
  if (!text) return { raw: "", data: null };

  try {
    return { raw: text, data: JSON.parse(text) };
  } catch {
    return { raw: text, data: text };
  }
}

async function handleSaveConfig(req, res) {
  const body = await readJsonRequest(req);
  const current = await readEnv();
  const next = withoutTokenFields({
    ...current,
    api_url: String(body.api_url ?? "").trim(),
    token_id: String(body.token_id ?? "").trim(),
    site_secret: String(body.site_secret ?? "").trim(),
  });

  await writeEnv(next);
  jsonResponse(res, 200, { ok: true, env: next });
}

async function handleIssueToken(req, res) {
  const body = await readJsonRequest(req);
  const current = await readEnv();
  const baseConfig = withoutTokenFields({
    ...current,
    api_url: String(body.api_url ?? "").trim(),
    token_id: String(body.token_id ?? "").trim(),
    site_secret: String(body.site_secret ?? "").trim(),
  });

  await writeEnv(baseConfig);

  const apiUrl = normalizeBaseUrl(requireText(baseConfig.api_url, "api_url"));
  const tokenId = requireText(baseConfig.token_id, "token_id");
  const siteSecret = requireText(baseConfig.site_secret, "site_secret");

  const response = await fetch(`${apiUrl}/v1/oauth/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      token_id: tokenId,
      site_secret: siteSecret,
    }),
  });
  const responseBody = await readResponseBody(response);
  const tokenData = unwrapData(responseBody.data);
  const token = readIssuedToken(tokenData);

  if (!response.ok || !token) {
    jsonResponse(res, response.ok ? 502 : response.status, {
      ok: false,
      status: response.status,
      data: responseBody.data,
    });
    return;
  }

  const next = {
    ...baseConfig,
    token,
    token_type: readTokenType(tokenData),
    expires_in: readExpiresIn(tokenData),
    token_site_index: readSiteIndex(tokenData),
    token_issued_at: new Date().toISOString(),
  };
  await writeEnv(next);

  jsonResponse(res, 200, {
    ok: true,
    status: response.status,
    token,
    token_type: next.token_type,
    expires_in: next.expires_in,
    token_site_index: next.token_site_index,
    token_issued_at: next.token_issued_at,
  });
}

async function handleApiRequest(req, res) {
  const body = await readJsonRequest(req);
  const apiUrl = normalizeBaseUrl(requireText(body.api_url, "api_url"));
  const requestedMethod = String(body.method ?? "GET").toUpperCase();
  const method =
    requestedMethod === "MULTIPART_POST"
      ? "POST"
      : requestedMethod === "MULTIPART_PATCH"
        ? "PATCH"
        : requestedMethod;
  const path = requireText(body.path, "path");
  const token = String(body.token ?? "").trim();
  const requestBody = String(body.body ?? "").trim();
  const useAuth = body.auth !== false;
  const targetUrl = /^https?:\/\//i.test(path) ? path : `${apiUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const headers = {
    Accept: "application/json",
    From: "web",
  };

  if (useAuth && token) headers.Authorization = `Bearer ${token}`;

  const init = { method, headers };
  if (!["GET", "HEAD"].includes(method) && requestBody) {
    headers["Content-Type"] = "application/json";
    init.body = requestBody;
  }

  const response = await fetch(targetUrl, init);
  const responseBody = await readResponseBody(response);

  jsonResponse(res, 200, {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    url: targetUrl,
    data: responseBody.data,
  });
}

async function serveStatic(req, res) {
  const requestUrl = new URL(req.url ?? "/", "http://localhost");
  const requestedPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = normalize(resolve(join(publicDir, decodeURIComponent(requestedPath))));

  if (!filePath.startsWith(publicDir)) {
    textResponse(res, 403, "Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    const contentType = contentTypes[extname(filePath)] ?? "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    res.end(content);
  } catch {
    textResponse(res, 404, "Not found");
  }
}

function createApiTestServer() {
  return createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url ?? "/", "http://localhost");

    if (req.method === "POST" && requestUrl.pathname === "/api/config") {
      await handleSaveConfig(req, res);
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/token") {
      await handleIssueToken(req, res);
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/request") {
      await handleApiRequest(req, res);
      return;
    }

    if (req.method === "GET" || req.method === "HEAD") {
      await serveStatic(req, res);
      return;
    }

    textResponse(res, 405, "Method not allowed");
  } catch (error) {
    jsonResponse(res, 500, {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
  });
}

function openBrowser(url) {
  if (!shouldOpenBrowser) return;

  const platform = process.platform;
  const command =
    platform === "win32"
      ? "cmd"
      : platform === "darwin"
        ? "open"
        : "xdg-open";
  const args =
    platform === "win32"
      ? ["/c", "start", "", url]
      : [url];

  const child = spawn(command, args, {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });
  child.unref();
}

function listen(port) {
  const server = createApiTestServer();

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, "127.0.0.1", () => {
    const address = server.address();
    const actualPort = typeof address === "object" && address ? address.port : port;
    const url = `http://127.0.0.1:${actualPort}`;
    console.log("");
    console.log(`API test page: ${url}`);
    console.log(`Workspace: ${rootDir}`);
    console.log("");
    openBrowser(url);
  });
}

listen(defaultPort);
