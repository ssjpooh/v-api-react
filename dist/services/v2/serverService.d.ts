import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 server — 서버 apiHandler_server.go (컨트롤러 apiController_server.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ServerService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /servers */
    listServers(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /server */
    getServer(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /server */
    createServer(params: V2BodyParams): Promise<FoxApiResult>;
    /** PUT /server */
    updateServer(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /server */
    deleteServer(params: V2BodyParams): Promise<FoxApiResult>;
}
