import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 org_sync — 서버 apiHandler_org_sync.go (컨트롤러 apiController_org_sync.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class OrgSyncService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /org-sync */
    getOrgSync(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /org-tree */
    getOrgTree(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /org-sync */
    syncOrg(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /org-sync */
    patchOrg(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /org-sync */
    deleteOrgSync(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /org-sync-excel */
    syncOrgExcel(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /org-sync-excel */
    patchOrgExcel(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /org-sync-dept-users */
    syncDeptUsers(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /org-sync-dept-users */
    patchDeptUsers(params: V2BodyParams): Promise<FoxApiResult>;
}
