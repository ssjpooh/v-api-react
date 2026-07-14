import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 server_domains — 서버 apiHandler_server_domains.go (컨트롤러 apiController_server_domains.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ServerDomainsService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /domains */
  async listServerDomains(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/domains", query), { header: authHeader(token), cancelId });
  }

  /** GET /domain */
  async getServerDomain(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/domain", query), { header: authHeader(token), cancelId });
  }

  /** POST /domain */
  async createServerDomain(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/domain", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /domain */
  async updateServerDomain(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/domain", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /domain */
  async deleteServerDomain(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/domain", query), { header: authHeader(token), body, cancelId });
  }
}
