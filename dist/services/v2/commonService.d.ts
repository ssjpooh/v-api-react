import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 common — 서버 apiHandler_common.go (컨트롤러 apiController_common.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class CommonService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /userTypes */
    getUserTypes(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /getManagerUserTypes */
    getManagerUserTypes(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /userType */
    getUserType(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /monitorCount */
    getMonitorCount(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /concurrent */
    getConcurrent(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /baseDomain */
    getBaseDomain(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /webServerDomain */
    webServerDomain(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /getTimeZone */
    getTimeZone(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /healthz */
    healthCheck(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /isWebServer */
    isWebServer(params: V2BaseParams): Promise<FoxApiResult>;
}
