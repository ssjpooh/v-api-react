import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 contracts — 서버 apiHandler_contracts.go (컨트롤러 apiController_contracts.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ContractsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /contracts */
    listContracts(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /contract */
    getContract(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /contract */
    createContract(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /contract */
    updateContract(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /contract/state */
    updateContractState(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /contract/current */
    getCurrentContract(params: V2BaseParams): Promise<FoxApiResult>;
}
