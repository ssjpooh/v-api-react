import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_approval — 서버 apiHandler_vone_approval.go (컨트롤러 apiController_vone_approval.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneApprovalService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /approval-forms */
    listApprovalForms(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /approval-lines */
    listApprovalLines(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /approval-line */
    getApprovalLine(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /approval-line */
    createApprovalLine(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /approval-line */
    patchApprovalLine(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /approval-line */
    deleteApprovalLine(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /approval-documents */
    listApprovalDocuments(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /approval-document */
    getApprovalDocument(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /approval-count */
    getApprovalCount(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /approval-document */
    createApprovalDocument(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /approval-document */
    patchApprovalDocument(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /approval-document */
    deleteApprovalDocument(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /approval-submit */
    submitApprovalDocument(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /approval-withdraw */
    withdrawApprovalDocument(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /approval-approve */
    approveApprovalDocument(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /approval-reject */
    rejectApprovalDocument(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /approval-file */
    addApprovalFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /approval-file */
    removeApprovalFile(params: V2BodyParams): Promise<FoxApiResult>;
}
