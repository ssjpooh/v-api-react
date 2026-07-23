export const TIMEOUT_DURATION_MS = 10000;
export class ApiClient {
    constructor() {
        this.activeControllers = new Map();
    }
    static initialize(url) {
        ApiClient.baseUrlValue = url.replace(/\/+$/, "");
    }
    static get baseUrl() {
        if (!ApiClient.baseUrlValue) {
            throw new Error("ApiClient is not initialized. Call FoxcomApi.init({ baseUrl }) first.");
        }
        return ApiClient.baseUrlValue;
    }
    get(path, options = {}) {
        return this.request("GET", path, options);
    }
    post(path, options = {}) {
        return this.request("POST", path, options);
    }
    patch(path, options = {}) {
        return this.request("PATCH", path, options);
    }
    delete(path, options = {}) {
        return this.request("DELETE", path, options);
    }
    put(path, options = {}) {
        return this.request("PUT", path, options);
    }
    async multipartPost(path, options = {}) {
        const form = new FormData();
        const body = options.body;
        if (body && typeof body === "object" && !(body instanceof FormData) && !(body instanceof Blob)) {
            Object.entries(body).forEach(([key, value]) => {
                if (value == null)
                    return;
                if (value instanceof Blob) {
                    form.append(key, value);
                }
                else {
                    form.append(key, String(value));
                }
            });
        }
        return this.request("POST", path, { ...options, body: body instanceof FormData ? body : form });
    }
    cancelRequest(cancelId) {
        this.activeControllers.get(cancelId)?.abort();
        this.activeControllers.delete(cancelId);
    }
    async request(method, path, options) {
        const controller = new AbortController();
        const id = options.cancelId ?? globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
        const timeoutId = globalThis.setTimeout(() => controller.abort(), TIMEOUT_DURATION_MS);
        this.activeControllers.set(id, controller);
        try {
            const response = await fetch(this.resolveUrl(path), {
                method,
                headers: options.header,
                body: this.resolveBody(options.body),
                signal: controller.signal,
                credentials: options.credentials,
            });
            const data = await this.parseResponse(response);
            return {
                isSuccess: response.status >= 200 && response.status < 300,
                data,
                statusCode: response.status,
            };
        }
        catch (error) {
            return {
                isSuccess: false,
                message: error instanceof Error ? error.message : String(error),
                statusCode: 404,
            };
        }
        finally {
            globalThis.clearTimeout(timeoutId);
            this.activeControllers.delete(id);
        }
    }
    resolveUrl(path) {
        return /^https?:\/\//i.test(path) ? path : `${ApiClient.baseUrl}${path}`;
    }
    resolveBody(body) {
        if (body == null)
            return body;
        if (typeof body === "string" || body instanceof FormData || body instanceof Blob)
            return body;
        return JSON.stringify(body);
    }
    async parseResponse(response) {
        const text = await response.text();
        if (!text)
            return null;
        try {
            return JSON.parse(text);
        }
        catch {
            return text;
        }
    }
}
export function authHeaders(token, from = "web") {
    return { Authorization: `Bearer ${token}`, From: from };
}
export function buildPath(path, query) {
    const search = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== null)
            search.set(key, String(value));
    });
    const qs = search.toString();
    return qs ? `${path}?${qs}` : path;
}
export function toMultipartValue(value, fallbackName = "file") {
    if (value instanceof Blob)
        return value;
    if (value && typeof value === "object") {
        const record = value;
        if (record.file instanceof Blob)
            return record.file;
        if (record.blob instanceof Blob)
            return record.blob;
        if (record.bytes instanceof Blob)
            return record.bytes;
        if (record.bytes instanceof Uint8Array)
            return new File([record.bytes], String(record.name ?? fallbackName));
    }
    return String(value ?? "");
}
