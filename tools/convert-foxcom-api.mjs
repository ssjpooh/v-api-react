import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "..", "foxcom_api", "lib", "src");
const outRoot = path.resolve(process.cwd(), "src");

const modelDir = path.join(root, "models");
const serviceDir = path.join(root, "services");
const modelClassNames = new Set();

fs.mkdirSync(path.join(outRoot, "models"), { recursive: true });
fs.mkdirSync(path.join(outRoot, "services"), { recursive: true });

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${content.trim()}\n`, "utf8");
}

function splitTopLevel(input) {
  const result = [];
  let current = "";
  let depth = 0;
  let quote = "";

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    const prev = input[i - 1];
    if (quote) {
      current += ch;
      if (ch === quote && prev !== "\\") quote = "";
      continue;
    }
    if (ch === "'" || ch === '"') {
      quote = ch;
      current += ch;
      continue;
    }
    if ("([{<".includes(ch)) depth += 1;
    if (")]}>" .includes(ch)) depth -= 1;
    if (ch === "," && depth === 0) {
      if (current.trim()) result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) result.push(current.trim());
  return result;
}

function findMatching(text, openIndex, open = "{", close = "}") {
  let depth = 0;
  let quote = "";
  for (let i = openIndex; i < text.length; i += 1) {
    const ch = text[i];
    const prev = text[i - 1];
    if (quote) {
      if (ch === quote && prev !== "\\") quote = "";
      continue;
    }
    if (ch === "'" || ch === '"') {
      quote = ch;
      continue;
    }
    if (ch === open) depth += 1;
    if (ch === close) depth -= 1;
    if (depth === 0) return i;
  }
  return -1;
}

function extractBlocks(text, keyword) {
  const blocks = [];
  const re = new RegExp(`${keyword}\\s+(\\w+)[^{]*\\{`, "g");
  let match;
  while ((match = re.exec(text))) {
    const open = text.indexOf("{", match.index);
    const close = findMatching(text, open);
    blocks.push({ name: match[1], start: match.index, open, close, body: text.slice(open + 1, close) });
    re.lastIndex = close + 1;
  }
  return blocks;
}

function dartTypeToTs(type) {
  const clean = type.replace(/\?/g, "").replace(/^final\s+/, "").trim();
  if (clean === "List<Map<String, String>>") return "Record<string, string>[]";
  if (clean === "List<Map<String, dynamic>>") return "Record<string, any>[]";
  if (clean === "String") return "string";
  if (clean === "int" || clean === "double" || clean === "num") return "number";
  if (clean === "bool") return "boolean";
  if (clean === "dynamic") return "any";
  if (clean === "Uint8List") return "BlobPart";
  if (clean.startsWith("List<")) return `${dartTypeToTs(clean.slice(5, -1))}[]`;
  if (clean === "Map") return "Record<string, any>";
  if (clean.startsWith("Map<")) return "Record<string, any>";
  return clean;
}

function defaultForType(type) {
  const ts = dartTypeToTs(type);
  if (ts === "string") return '""';
  if (ts === "number") return "0";
  if (ts === "boolean") return "false";
  if (ts === "BlobPart") return "new Blob([])";
  if (ts.endsWith("[]")) return "[]";
  if (ts.startsWith("Record<")) return "{}";
  if (/^[A-Z]\w+$/.test(ts)) return `new ${ts}()`;
  return "undefined";
}

function convertDartString(input) {
  const trimmed = input.trim();
  const quote = trimmed[0];
  if ((quote !== '"' && quote !== "'") || trimmed.at(-1) !== quote) return input;
  const inner = trimmed.slice(1, -1);
  if (!inner.includes("$")) return `"${inner.replaceAll('"', '\\"')}"`;
  const converted = inner
    .replace(/\$\{([^}]+)\}/g, "${$1}")
    .replace(/\$([A-Za-z_]\w*)/g, "${$1}")
    .replaceAll("`", "\\`");
  return `\`${converted}\``;
}

function convertExpression(expr) {
  let out = expr.trim();
  out = out.replace(/json\.encode\(([^)]+)\)/g, "JSON.stringify($1)");
  out = out.replace(/(\w+)\.isEmpty/g, "!$1");
  out = out.replace(/(\w+)\.isNotEmpty/g, "$1");
  out = out.replace(/\.toString\(\)/g, ".toString()");
  out = out.replace(/\bnull\b/g, "undefined");
  out = out.replace(/\btrue\b/g, "true").replace(/\bfalse\b/g, "false");
  if (/^(['"]).*\1$/.test(out)) out = convertDartString(out);
  return out;
}

function convertMapLiteral(expr) {
  return expr
    .replace(/'Authorization'\s*:\s*'Bearer \$token'/g, "Authorization: `Bearer ${token}`")
    .replace(/"Authorization"\s*:\s*'Bearer \$token'/g, "Authorization: `Bearer ${token}`")
    .replace(/'From'\s*:/g, "From:")
    .replace(/"From"\s*:/g, "From:")
    .replace(/'([^']+)'\s*:/g, '"$1":')
    .replace(/:\s*'([^'$]*)'/g, ': "$1"');
}

function convertApiCalls(body) {
  let out = body;
  let index = 0;
  while (index < out.length) {
    const match = /_apiClient\.(get|post|patch|delete|multipartPost)\(/g.exec(out.slice(index));
    if (!match) break;
    const start = index + match.index;
    const open = out.indexOf("(", start);
    const close = findMatching(out, open, "(", ")");
    const args = splitTopLevel(out.slice(open + 1, close));
    const first = convertExpression(args.shift() ?? '""');
    const named = {};
    for (const arg of args) {
      const namedMatch = arg.match(/^(\w+):\s*([\s\S]+)$/);
      if (namedMatch) named[namedMatch[1]] = convertExpression(convertMapLiteral(namedMatch[2]));
    }
    const options = [];
    if (named.header) options.push(`header: ${named.header}`);
    if (named.body) options.push(`body: ${named.body}`);
    if (named.cancelId) options.push(`cancelId: ${named.cancelId}`);
    const replacement = `this.apiClient.${match[1]}(${first}${options.length ? `, { ${options.join(", ")} }` : ""})`;
    out = `${out.slice(0, start)}${replacement}${out.slice(close + 1)}`;
    index = start + replacement.length;
  }
  return out;
}

function convertParams(paramBlock) {
  const params = splitTopLevel(paramBlock.replace(/\/\/.*$/gm, "").replace(/[{}]/g, ""));
  return params
    .filter(Boolean)
    .map((raw) => raw.replace(/\/\/.*$/g, "").trim())
    .filter(Boolean)
    .map((raw) => {
      const optional = raw.includes("?");
      const clean = raw.replace(/^required\s+/, "").replace(/\s*=\s*[^,]+$/, "").trim();
      const match = clean.match(/^(.+?)\s+(\w+)$/);
      if (!match) return null;
      return { name: match[2], type: dartTypeToTs(match[1]), optional };
    })
    .filter(Boolean);
}

function convertServiceBody(body) {
  let out = body.trim();
  out = convertApiCalls(out);
  out = out.replace(/FoxApiResult(?:<[^>]+>)?\s+(\w+)\s*=/g, "const $1 =");
  out = out.replace(/final\s+(\w+)\s*=/g, "const $1 =");
  out = out.replace(/String\s+(\w+)\s*=/g, "let $1 =");
  out = out.replace(/Map<String,\s*String>\s+(\w+)\s*=\s*/g, "const $1: Record<string, string | number | boolean> = ");
  out = out.replace(/Map<String,\s*dynamic>\s+(\w+)\s*=\s*/g, "const $1: Record<string, any> = ");
  out = out.replace(/for\s*\(int\s+(\w+)/g, "for (let $1");
  out = out.replace(/Uri\(path:\s*(\w+),\s*queryParameters:\s*(\w+)\)/g, "buildPath($1, $2)");
  out = out.replace(/(\w+)\.toString\(\)/g, "$1");
  out = out.replace(/ResultUtils\.handleResult\(([^,\n)]+),\s*type:\s*[^,\n)]+,\s*mapper:\s*\((\w+)\)\s*=>\s*([^)]+\.fromJson(?:List)?\(\2\))\s*\)/g, "handleResult($1, ($2) => $3)");
  out = out.replace(/ResultUtils\.handleResult\(([^)]+)\)/g, "handleResult($1)");
  out = out.replace(/ResultUtils\.handleResult<[^>]+>\(\s*([^,]+),\s*type:\s*[^,]+,\s*mapper:\s*\((\w+)\)\s*=>\s*(\w+)\.fromJson\(\2\),\s*\)/g, "handleResult($1, ($2) => $3.fromJson($2 as any))");
  out = out.replace(/ResultUtils\.handleResult<[^>]+>\(\s*([^,]+),\s*type:\s*[^,]+,\s*mapper:\s*\((\w+)\)\s*=>\s*(\w+)\.fromJsonList\(\2\),\s*\)/g, "handleResult($1, ($2) => $3.fromJsonList($2))");
  out = out.replace(/ResultUtils\.handleResult\(\s*([^,]+),\s*type:\s*[^,]+,\s*mapper:\s*\((\w+)\)\s*=>\s*(\w+)\.fromJson\(\2\),\s*\)/g, "handleResult($1, ($2) => $3.fromJson($2 as any))");
  out = out.replace(/ResultUtils\.handleResult\(\s*([^,]+),\s*type:\s*[^,]+,\s*mapper:\s*\((\w+)\)\s*=>\s*(\w+)\.fromJsonList\(\2\),\s*\)/g, "handleResult($1, ($2) => $3.fromJsonList($2))");
  out = out.replace(/handleResult\(\s*([^,]+),\s*type:\s*[^,]+,\s*mapper:\s*\((\w+)\)\s*=>\s*(\w+)\.fromJson\(\2\),\s*\)/g, "handleResult($1, ($2) => $3.fromJson($2 as any))");
  out = out.replace(/handleResult\(\s*([^,]+),\s*type:\s*[^,]+,\s*mapper:\s*\((\w+)\)\s*=>\s*(\w+)\.fromJsonList\(\2\),\s*\)/g, "handleResult($1, ($2) => $3.fromJsonList($2))");
  out = out.replace(/http\.MultipartFile\.fromBytes\('file',\s*bytes,\s*filename:\s*name\)/g, "new File([bytes], name)");
  out = out.replace(/(\w+)\.toMultipartFile\('file'\)/g, "toMultipartValue($1)");
  out = out.replace(/'file_\$i'/g, "`file_${i}`");
  out = out.replace(/json\.encode\(([^)]+)\)/g, "JSON.stringify($1)");
  out = out.replace(/\bnull\b/g, "undefined");
  out = out.replace(/\bjsonBody\b/g, "jsonBody");
  out = out.replace(/return await /g, "return ");
  out = out.replace(/Uri\.parse\([^)]+\)/g, "");
  out = out.replace(/^\s*print\([^)]+\);\s*$/gm, "");
  out = out.replace(/(\w+)\.isEmpty/g, "$1.length === 0");
  out = out.replace(/(\w+)\.isNotEmpty/g, "$1.length > 0");
  out = out.replace(/(["'])([^"'\\]*(?:\\.[^"'\\]*)*)\1/g, (full) => (full.includes("$") ? convertDartString(full) : full));

  return out;
}

function convertServices() {
  const serviceExports = [];
  for (const file of fs.readdirSync(serviceDir).filter((name) => name.endsWith(".dart"))) {
    const text = read(path.join(serviceDir, file));
    const classMatch = text.match(/class\s+(\w+)/);
    if (!classMatch) continue;
    const className = classMatch[1];
    const serviceName = file.replace(".dart", "").replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    const methods = [];
    const re = /Future<FoxApiResult(?:<[^>]+>)?>\s+(\w+)\s*\(([\s\S]*?)\)\s*async\s*\{/g;
    let match;
    while ((match = re.exec(text))) {
      const open = text.indexOf("{", text.indexOf("async", match.index));
      const close = findMatching(text, open);
      const name = match[1];
      const params = convertParams(match[2]);
      const body = convertServiceBody(text.slice(open + 1, close));
      const paramType = params.length
        ? `params: { ${params.map((p) => `${p.name}${p.optional ? "?" : ""}: ${p.type}`).join("; ")} }`
        : "";
      const destructure = params.length ? `\n    const { ${params.map((p) => p.name).join(", ")} } = params;\n` : "\n";
      methods.push(`  async ${name}(${paramType}): Promise<FoxApiResult> {${destructure}${indent(body, 4)}\n  }`);
      re.lastIndex = close + 1;
    }

    const extraImports = className === "NoticeService" || className === "RoomService" ? ", toMultipartValue" : "";
    const modelImports = Array.from(modelClassNames).sort().join(", ");
    const optionConstants = className === "OptionService" ? `
export const OPTION_CLASS_UNKNOWN = -1;
export const OPTION_CLASS_BASE = 0;
export const OPTION_CLASS_GROUP = 1;
export const OPTION_CLASS_SITE = 2;
export const OPTION_CLASS_POLICY = 3;
export const OPTION_CLASS_ROOM = 4;
` : "";
    const content = `
import { ApiClient, type FoxApiResult, buildPath${extraImports} } from "../apiClient";
import { handleResult } from "../resultUtils";
import { ${modelImports} } from "../models";

${optionConstants}
export class ${className} {
  constructor(private readonly apiClient: ApiClient) {}

${methods.join("\n\n")}
}
`;
    write(path.join(outRoot, "services", `${serviceName}.ts`), content);
    serviceExports.push({ className, file: serviceName });
  }

  const index = serviceExports
    .map(({ className, file }) => `export { ${className} } from "./${file}";`)
    .join("\n");
  write(path.join(outRoot, "services", "index.ts"), index);
}

function indent(text, spaces) {
  const prefix = " ".repeat(spaces);
  return text
    .split("\n")
    .map((line) => (line.trim() ? `${prefix}${line.trimEnd()}` : ""))
    .join("\n");
}

function extractFields(body) {
  const fields = [];
  const re = /^\s*(?:final\s+)?(.+?)\s+(\w+);/gm;
  let match;
  while ((match = re.exec(body))) {
    if (/^(static|factory|return|if|for|switch|case)\b/.test(match[1].trim())) continue;
    if (match[1].includes("(") || match[1].includes("=")) continue;
    fields.push({ type: match[1], name: match[2] });
  }
  return fields;
}

function extractJsonKeys(body) {
  const keys = new Map();
  const re = /(\w+):\s*(?:[A-Za-z0-9_]+\.fromJson(?:List)?\()?json\[['"]([^'"]+)['"]\]/g;
  let match;
  while ((match = re.exec(body))) keys.set(match[1], match[2]);
  return keys;
}

function convertModels() {
  const classParts = [];
  for (const file of fs.readdirSync(modelDir).filter((name) => name.endsWith(".dart") && name !== "api_result.dart")) {
    const text = read(path.join(modelDir, file));
    for (const block of extractBlocks(text, "class")) {
      if (modelClassNames.has(block.name)) continue;
      const fields = extractFields(block.body);
      const keys = extractJsonKeys(block.body);
      if (!fields.length) continue;
      modelClassNames.add(block.name);
      const fieldLines = fields.map((field) => `  ${field.name}: ${dartTypeToTs(field.type)} = ${defaultForType(field.type)};`);
      const fromJsonLines = fields.map((field) => {
        const key = keys.get(field.name) ?? pascal(field.name);
        const tsType = dartTypeToTs(field.type);
        if (tsType === "string") return `    value.${field.name} = asString(json["${key}"], value.${field.name});`;
        if (tsType === "number") return `    value.${field.name} = asNumber(json["${key}"], value.${field.name});`;
        if (tsType === "boolean") return `    value.${field.name} = asBoolean(json["${key}"], value.${field.name});`;
        if (tsType === "BlobPart") return `    value.${field.name} = json["${key}"] instanceof Blob ? json["${key}"] : value.${field.name};`;
        if (tsType.endsWith("[]")) {
          const item = tsType.slice(0, -2);
          return /^[A-Z]\w+$/.test(item)
            ? `    value.${field.name} = ${item}.fromJsonList(json["${key}"]);`
            : `    value.${field.name} = Array.isArray(json["${key}"]) ? json["${key}"] : value.${field.name};`;
        }
        if (/^[A-Z]\w+$/.test(tsType)) return `    value.${field.name} = ${tsType}.fromJson(json["${key}"] ?? {});`;
        return `    value.${field.name} = json["${key}"] ?? value.${field.name};`;
      });
      classParts.push(`
export class ${block.name} {
${fieldLines.join("\n")}

  constructor(init: Partial<${block.name}> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ${block.name} {
    const json = asRecord(jsonInput);
    const value = new ${block.name}();
${fromJsonLines.join("\n")}
    return value;
  }

  static fromJsonList(jsonList: unknown): ${block.name}[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ${block.name}.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}
`);
    }
  }

  const content = `
export type AnyRecord = Record<string, any>;

function asRecord(value: unknown): AnyRecord {
  return value && typeof value === "object" ? (value as AnyRecord) : {};
}

function asString(value: unknown, fallback = ""): string {
  return value == null ? fallback : String(value);
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : Number(value ?? fallback) || fallback;
}

function asBoolean(value: unknown, fallback = false): boolean {
  return typeof value === "boolean" ? value : fallback;
}

${classParts.join("\n")}
`;
  write(path.join(outRoot, "models", "index.ts"), content);
}

function pascal(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

convertModels();
convertServices();
