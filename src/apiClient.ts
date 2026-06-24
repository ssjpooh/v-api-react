export const TIMEOUT_DURATION_MS = 10_000;

export type RequestOptions = {
  cancelId?: string;
  header?: Record<string, string>;
  body?: BodyInit | Record<string, unknown> | unknown[] | null;
};

export type FoxApiResult<T = unknown> = {
  isSuccess: boolean;
  data?: T;
  message?: string;
  statusCode?: number;
};

export class ApiClient {
  private static baseUrlValue?: string;
  private activeControllers = new Map<string, AbortController>();

  static initialize(url: string): void {
    ApiClient.baseUrlValue = url.replace(/\/+$/, "");
  }

  static get baseUrl(): string {
    if (!ApiClient.baseUrlValue) {
      throw new Error("ApiClient is not initialized. Call FoxcomApi.init({ baseUrl }) first.");
    }
    return ApiClient.baseUrlValue;
  }

  get(path: string, options: RequestOptions = {}): Promise<FoxApiResult> {
    return this.request("GET", path, options);
  }

  post(path: string, options: RequestOptions = {}): Promise<FoxApiResult> {
    return this.request("POST", path, options);
  }

  patch(path: string, options: RequestOptions = {}): Promise<FoxApiResult> {
    return this.request("PATCH", path, options);
  }

  delete(path: string, options: RequestOptions = {}): Promise<FoxApiResult> {
    return this.request("DELETE", path, options);
  }

  async multipartPost(path: string, options: RequestOptions = {}): Promise<FoxApiResult> {
    const form = new FormData();
    const body = options.body;

    if (body && typeof body === "object" && !(body instanceof FormData) && !(body instanceof Blob)) {
      Object.entries(body).forEach(([key, value]) => {
        if (value == null) return;
        if (value instanceof Blob) {
          form.append(key, value);
        } else {
          form.append(key, String(value));
        }
      });
    }

    return this.request("POST", path, { ...options, body: body instanceof FormData ? body : form });
  }

  cancelRequest(cancelId: string): void {
    this.activeControllers.get(cancelId)?.abort();
    this.activeControllers.delete(cancelId);
  }

  private async request(method: string, path: string, options: RequestOptions): Promise<FoxApiResult> {
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
      });
      const data = await this.parseResponse(response);

      return {
        isSuccess: response.status >= 200 && response.status < 300,
        data,
        statusCode: response.status,
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: error instanceof Error ? error.message : String(error),
        statusCode: 404,
      };
    } finally {
      globalThis.clearTimeout(timeoutId);
      this.activeControllers.delete(id);
    }
  }

  private resolveUrl(path: string): string {
    return /^https?:\/\//i.test(path) ? path : `${ApiClient.baseUrl}${path}`;
  }

  private resolveBody(body: RequestOptions["body"]): BodyInit | null | undefined {
    if (body == null) return body;
    if (typeof body === "string" || body instanceof FormData || body instanceof Blob) return body;
    return JSON.stringify(body);
  }

  private async parseResponse(response: Response): Promise<unknown> {
    const text = await response.text();
    if (!text) return null;

    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }
}

export function authHeaders(token: string, from = "web"): Record<string, string> {
  return { Authorization: `Bearer ${token}`, From: from };
}

export function buildPath(path: string, query: Record<string, string | number | boolean | null | undefined>): string {
  const search = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) search.set(key, String(value));
  });
  const qs = search.toString();
  return qs ? `${path}?${qs}` : path;
}

export function toMultipartValue(value: unknown, fallbackName = "file"): Blob | string {
  if (value instanceof Blob) return value;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (record.file instanceof Blob) return record.file;
    if (record.blob instanceof Blob) return record.blob;
    if (record.bytes instanceof Blob) return record.bytes;
    if (record.bytes instanceof Uint8Array) return new File([record.bytes as BlobPart], String(record.name ?? fallbackName));
  }
  return String(value ?? "");
}
