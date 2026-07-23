import type { FoxApiResult } from "./apiClient";
export declare const RESULT_TYPE_DATA = 0;
export declare const RESULT_TYPE_LIST = 1;
export declare const RESULT_TYPE_JSON = 2;
export declare function handleResult<T = unknown>(result: FoxApiResult, mapper?: (json: unknown) => T): FoxApiResult<T>;
