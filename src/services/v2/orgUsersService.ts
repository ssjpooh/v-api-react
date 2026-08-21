import { ApiClient, type FoxApiResult, type V2BaseParams, authHeader, v2Path } from "./shared";

/**
 * v2 org_users — 서버 apiHandler_org_users.go (컨트롤러 apiController_org_users.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class OrgUsersService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /orgUsers */
  async listOrgUsers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/orgUsers", query), { header: authHeader(token), cancelId });
  }

  /** GET /orgSearch */
  async searchOrgUsers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/orgSearch", query), { header: authHeader(token), cancelId });
  }
}
