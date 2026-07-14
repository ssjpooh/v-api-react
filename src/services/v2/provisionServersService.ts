import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 provision_servers — 서버 apiHandler_provision_servers.go (컨트롤러 apiController_provision_servers.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ProvisionServersService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /provisioningServers */
  async listProvisionServers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/provisioningServers", query), { header: authHeader(token), cancelId });
  }

  /** GET /provisioningServer */
  async getProvisionServer(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), cancelId });
  }

  /** DELETE /provisioningServer */
  async deleteProvisionServer(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /provisioningServer */
  async createProvisionServer(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /provisioningServer */
  async updateProvisionServer(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), body, cancelId });
  }
}
