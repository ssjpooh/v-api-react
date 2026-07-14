import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 site — 서버 apiHandler_site.go (컨트롤러 apiController_site.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class SiteService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /sites */
  async listSites(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/sites", query), { header: authHeader(token), cancelId });
  }

  /** GET /site */
  async getSite(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/site", query), { header: authHeader(token), cancelId });
  }

  /** POST /site */
  async createSite(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/site", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /site */
  async updateSite(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/site", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /site */
  async deleteSite(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/site", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /site/newSiteSecret */
  async newSiteSecret(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/site/newSiteSecret", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /distributedUsers */
  async distributedUsers(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/distributedUsers", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /site/exists */
  async siteExists(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/site/exists", query), { header: authHeader(token), cancelId });
  }
}
