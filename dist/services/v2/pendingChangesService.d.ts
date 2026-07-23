import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 pending_changes — 서버 apiHandler_pending_changes.go (컨트롤러 apiController_pending_changes.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class PendingChangesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /pendingChanges */
    listPendingChanges(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /pendingChange/cancel */
    cancelPendingChange(params: V2BodyParams): Promise<FoxApiResult>;
}
