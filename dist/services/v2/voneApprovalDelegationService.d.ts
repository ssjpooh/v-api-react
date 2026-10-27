import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_approval_delegation — 서버 apiHandler_vone_approval_delegation.go (컨트롤러 apiController_vone_approval_delegation.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneApprovalDelegationService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /approval-delegations */
    listApprovalDelegations(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /approval-delegation */
    createApprovalDelegation(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /approval-delegation */
    patchApprovalDelegation(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /approval-delegation */
    deleteApprovalDelegation(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /approval-step-delegate */
    setApprovalStepDelegate(params: V2BodyParams): Promise<FoxApiResult>;
}
