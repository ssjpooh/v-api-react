import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 server_domains — 서버 apiHandler_server_domains.go (컨트롤러 apiController_server_domains.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ServerDomainsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /domains */
    listServerDomains(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /domain */
    getServerDomain(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /domain */
    createServerDomain(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /domain */
    updateServerDomain(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /domain */
    deleteServerDomain(params: V2BodyParams): Promise<FoxApiResult>;
}
