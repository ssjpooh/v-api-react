// v2 서비스 생성기 — vwork 서버 v2 핸들러(registerBoth / 평문 라우트)를 읽어
// src/services/v2/{domain}Service.ts 를 도메인(서버 컨트롤러) 1:1 로 생성한다.
// 사용: node tools/gen-v2-services.mjs
import fs from "node:fs";
import path from "node:path";

const HANDLER_DIR = "D:/StudioProjects/react-project/vwork/src/server/v2/handler";
const OUT_DIR = path.resolve("src/services/v2");

const toCamel = (s) => s.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
const toPascal = (s) => { const c = toCamel(s); return c.charAt(0).toUpperCase() + c.slice(1); };
const hasBody = (m) => m === "POST" || m === "PATCH" || m === "PUT" || m === "DELETE";

const RE_REGISTER_BOTH = /registerBoth\([^,]+,[^,]+,\s*"(GET|POST|PATCH|DELETE|PUT)"\s*,\s*"([^"]+)"\s*,\s*([A-Za-z0-9_]+)/g;
const RE_PLAIN = /\b(?:v2|authed|siteAuthed|siteGroup|public)\.(GET|POST|PATCH|DELETE|PUT)\(\s*"([^"]+)"\s*,\s*([A-Za-z0-9_]+)/g;

function extractRoutes(src) {
  const seen = new Set();
  const routes = [];
  const add = (method, p, handler) => {
    const key = `${method} ${p}`;
    if (seen.has(key)) return;
    seen.add(key);
    const methodName = handler.replace(/Handler$/, "");
    routes.push({ method, path: p, methodName });
  };
  let m;
  while ((m = RE_REGISTER_BOTH.exec(src))) add(m[1], m[2], m[3]);
  while ((m = RE_PLAIN.exec(src))) add(m[1], m[2], m[3]);
  return routes;
}

function genMethod({ method, path: p, methodName }) {
  const verb = method.toLowerCase();
  if (hasBody(method)) {
    return `  /** ${method} ${p} */
  async ${methodName}(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.${verb}(v2Path(siteId, ${JSON.stringify(p)}, query), { header: authHeader(token), body, cancelId });
  }`;
  }
  return `  /** ${method} ${p} */
  async ${methodName}(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.${verb}(v2Path(siteId, ${JSON.stringify(p)}, query), { header: authHeader(token), cancelId });
  }`;
}

function genService(domain, routes) {
  const cls = `${toPascal(domain)}Service`;
  const usesBody = routes.some((r) => hasBody(r.method));
  const typeImports = usesBody ? "type V2BaseParams, type V2BodyParams" : "type V2BaseParams";
  const body = routes.map(genMethod).join("\n\n");
  return `import { ApiClient, type FoxApiResult, ${typeImports}, authHeader, v2Path } from "./shared";

/**
 * v2 ${domain} — 서버 apiHandler_${domain}.go (컨트롤러 apiController_${domain}.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ${cls} {
  constructor(private readonly apiClient: ApiClient) {}

${body}
}
`;
}

const files = fs.readdirSync(HANDLER_DIR)
  .filter((f) => f.startsWith("apiHandler_") && f.endsWith(".go") && !f.endsWith("_test.go"));

fs.mkdirSync(OUT_DIR, { recursive: true });

const generated = [];
for (const file of files) {
  const domain = file.replace(/^apiHandler_/, "").replace(/\.go$/, "");
  const src = fs.readFileSync(path.join(HANDLER_DIR, file), "utf8");
  const routes = extractRoutes(src);
  if (routes.length === 0) { console.log(`skip ${domain} (0 routes)`); continue; }
  const cls = `${toPascal(domain)}Service`;
  fs.writeFileSync(path.join(OUT_DIR, `${toCamel(domain)}Service.ts`), genService(domain, routes), "utf8");
  generated.push({ domain, cls, file: `${toCamel(domain)}Service`, count: routes.length, routes });
}

// public/api-test.js v2 그룹 프래그먼트 생성 (섹션 교체용)
const titleize = (s) => s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const testFragment = generated.map((g) => {
  const cases = g.routes.map((r) => {
    const bodyPart = hasBody(r.method) ? ", body: emptyBody" : "";
    return `      { name: ${JSON.stringify(r.methodName)}, method: ${JSON.stringify(r.method)}, path: ${JSON.stringify(`/v2${r.path}?siteID={siteID}`)}${bodyPart} },`;
  }).join("\n");
  return `  {\n    name: "V2 ${titleize(g.domain)}",\n    cases: [\n${cases}\n    ],\n  },`;
}).join("\n");
fs.writeFileSync(path.resolve("tools/v2-test-cases.gen.txt"), testFragment + "\n", "utf8");

// v2/index.ts — 서비스 export + createV2Api 팩토리(facade 의 foxApi.v2 네임스페이스)
const exports = generated.map((g) => `export { ${g.cls} } from "./${g.file}";`).join("\n");
const factoryFields = generated.map((g) => `    ${toCamel(g.domain)}: new ${g.cls}(apiClient),`).join("\n");
// ★ 수기 유지분 — 생성기가 index.ts 를 통째로 덮어쓰므로 여기 없으면 재생성 때마다 사라진다.
//   (2026.07.27 실제로 v2.RESULT_SIGNUP_* 공개 export 가 지워져 되돌린 이력이 있다.)
//   서비스 클래스가 아닌 공개 export 를 shared.ts 에 추가하면 이 목록에도 넣을 것.
const MANUAL_EXPORTS = `export {
  RESULT_SIGNUP_EMAIL_NOT_VERIFIED,
  RESULT_SIGNUP_CODE_MISMATCH,
  RESULT_SIGNUP_CODE_EXPIRED,
  RESULT_SIGNUP_EMAIL_ALREADY_REGISTERED,
} from "./shared";`;

const index = `import { ApiClient } from "../../apiClient";
${generated.map((g) => `import { ${g.cls} } from "./${g.file}";`).join("\n")}

${MANUAL_EXPORTS}
${exports}

/** foxApi.v2.* 네임스페이스를 구성한다. 서버 v2 컨트롤러와 1:1. 자동 생성. */
export function createV2Api(apiClient: ApiClient) {
  return {
${factoryFields}
  };
}

export type V2Api = ReturnType<typeof createV2Api>;
`;
fs.writeFileSync(path.join(OUT_DIR, "index.ts"), index, "utf8");

console.log(`\ngenerated ${generated.length} services, ${generated.reduce((a, g) => a + g.count, 0)} methods`);
generated.forEach((g) => console.log(`  ${g.file}.ts  (${g.cls}, ${g.count})`));
