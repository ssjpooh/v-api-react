import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 org_sync — 서버 apiHandler_org_sync.go (컨트롤러 apiController_org_sync.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class OrgSyncService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /org-sync */
  async getOrgSync(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/org-sync", query), { header: authHeader(token), cancelId });
  }

  /** GET /org-tree */
  async getOrgTree(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/org-tree", query), { header: authHeader(token), cancelId });
  }

  /** POST /org-sync */
  async syncOrg(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/org-sync", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /org-sync */
  async patchOrg(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/org-sync", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /org-sync */
  async deleteOrgSync(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/org-sync", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /org-sync-excel */
  async syncOrgExcel(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/org-sync-excel", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /org-sync-excel */
  async patchOrgExcel(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/org-sync-excel", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /org-sync-dept-users */
  async syncDeptUsers(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/org-sync-dept-users", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /org-sync-dept-users */
  async patchDeptUsers(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/org-sync-dept-users", query), { header: authHeader(token), body, cancelId });
  }
}
