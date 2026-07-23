import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 provision_servers — 서버 apiHandler_provision_servers.go (컨트롤러 apiController_provision_servers.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ProvisionServersService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /provisioningServers */
    listProvisionServers(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /provisioningServer */
    getProvisionServer(params: V2BaseParams): Promise<FoxApiResult>;
    /** DELETE /provisioningServer */
    deleteProvisionServer(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /provisioningServer */
    createProvisionServer(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /provisioningServer */
    updateProvisionServer(params: V2BodyParams): Promise<FoxApiResult>;
}
