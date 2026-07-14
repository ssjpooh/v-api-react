import { ApiClient, type FoxApiResult, type V2BaseParams, authHeader, v2Path } from "./shared";

/**
 * v2 common — 서버 apiHandler_common.go (컨트롤러 apiController_common.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class CommonService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /userTypes */
  async getUserTypes(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/userTypes", query), { header: authHeader(token), cancelId });
  }

  /** GET /getManagerUserTypes */
  async getManagerUserTypes(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/getManagerUserTypes", query), { header: authHeader(token), cancelId });
  }

  /** GET /userType */
  async getUserType(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/userType", query), { header: authHeader(token), cancelId });
  }

  /** GET /monitorCount */
  async getMonitorCount(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/monitorCount", query), { header: authHeader(token), cancelId });
  }

  /** GET /concurrent */
  async getConcurrent(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/concurrent", query), { header: authHeader(token), cancelId });
  }

  /** GET /baseDomain */
  async getBaseDomain(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/baseDomain", query), { header: authHeader(token), cancelId });
  }

  /** GET /webServerDomain */
  async webServerDomain(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/webServerDomain", query), { header: authHeader(token), cancelId });
  }

  /** GET /getTimeZone */
  async getTimeZone(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/getTimeZone", query), { header: authHeader(token), cancelId });
  }

  /** GET /healthz */
  async healthCheck(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/healthz", query), { header: authHeader(token), cancelId });
  }

  /** GET /isWebServer */
  async isWebServer(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/isWebServer", query), { header: authHeader(token), cancelId });
  }
}
