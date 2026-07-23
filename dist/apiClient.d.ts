export declare const TIMEOUT_DURATION_MS = 10000;
export type RequestOptions = {
    cancelId?: string;
    header?: Record<string, string>;
    body?: BodyInit | Record<string, unknown> | unknown[] | null;
    credentials?: RequestCredentials;
};
export type FoxApiResult<T = unknown> = {
    isSuccess: boolean;
    data?: T;
    message?: string;
    statusCode?: number;
};
export declare class ApiClient {
    private static baseUrlValue?;
    private activeControllers;
    static initialize(url: string): void;
    static get baseUrl(): string;
    get(path: string, options?: RequestOptions): Promise<FoxApiResult>;
    post(path: string, options?: RequestOptions): Promise<FoxApiResult>;
    patch(path: string, options?: RequestOptions): Promise<FoxApiResult>;
    delete(path: string, options?: RequestOptions): Promise<FoxApiResult>;
    put(path: string, options?: RequestOptions): Promise<FoxApiResult>;
    multipartPost(path: string, options?: RequestOptions): Promise<FoxApiResult>;
    cancelRequest(cancelId: string): void;
    private request;
    private resolveUrl;
    private resolveBody;
    private parseResponse;
}
export declare function authHeaders(token: string, from?: string): Record<string, string>;
export declare function buildPath(path: string, query: Record<string, string | number | boolean | null | undefined>): string;
export declare function toMultipartValue(value: unknown, fallbackName?: string): Blob | string;
