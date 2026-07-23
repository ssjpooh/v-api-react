import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 contract_logs — 서버 apiHandler_contract_logs.go (컨트롤러 apiController_contract_logs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ContractLogsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /contract-logs */
    getContractLogsBySite(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /contract-log */
    patchContractLogIsDisplay(params: V2BodyParams): Promise<FoxApiResult>;
}
