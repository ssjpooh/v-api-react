import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const envPath = resolve("public/env.json");

function requireText(config, key) {
  const value = config[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`public/env.json must include ${key}.`);
  }
  return value.trim();
}

async function readJson(path) {
  const text = await readFile(path, "utf8");
  return JSON.parse(text);
}

async function writeJson(path, value) {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function normalizeBaseUrl(url) {
  return url.replace(/\/+$/, "");
}

function unwrapData(json) {
  if (json && typeof json === "object" && "data" in json) {
    return json.data;
  }
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

async function readResponseJson(response) {
  const responseText = await response.text();
  if (!responseText) return null;

  try {
    return JSON.parse(responseText);
  } catch {
    return { raw: responseText };
  }
}

async function requestOauthToken(apiUrl, tokenId, siteSecret) {
  const endpoint = "/v1/oauth/token";
  const url = `${apiUrl}${endpoint}`;
  const init = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      token_id: tokenId,
      site_secret: siteSecret,
    }),
  };

  const response = await fetch(url, init);
  const json = await readResponseJson(response);
  const data = unwrapData(json);
  const token = readIssuedToken(data);

  return {
    data,
    endpoint,
    json,
    ok: response.ok && !!token,
    status: response.status,
    token,
  };
}

const config = await readJson(envPath);
const apiUrl = normalizeBaseUrl(requireText(config, "api_url"));
const tokenId = requireText(config, "token_id");
const siteSecret = requireText(config, "site_secret");

const success = await requestOauthToken(apiUrl, tokenId, siteSecret);

if (!success.ok) {
  console.error(`[${success.endpoint}] HTTP ${success.status}`);
  console.error(JSON.stringify(success.json, null, 2));
  throw new Error("OAuth token request failed.");
}

const nextConfig = {
  ...config,
  token: success.token,
  token_type: readTokenType(success.data),
  expires_in: readExpiresIn(success.data),
  token_issued_at: new Date().toISOString(),
};

await writeJson(envPath, nextConfig);

console.log(`HTTP ${success.status}`);
console.log(`endpoint: ${success.endpoint}`);
console.log("mode: form");
console.log("token saved to public/env.json");
