import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 server — 서버 apiHandler_server.go (컨트롤러 apiController_server.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ServerService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /servers */
  async listServers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/servers", query), { header: authHeader(token), cancelId });
  }

  /** GET /server */
  async getServer(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/server", query), { header: authHeader(token), cancelId });
  }

  /** POST /server */
  async createServer(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/server", query), { header: authHeader(token), body, cancelId });
  }

  /** PUT /server */
  async updateServer(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.put(v2Path(siteId, "/server", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /server */
  async deleteServer(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/server", query), { header: authHeader(token), body, cancelId });
  }
}
