import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_resources — 서버 apiHandler_vone_resources.go (컨트롤러 apiController_vone_resources.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneResourcesService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /resources */
  async listVoneResources(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/resources", query), { header: authHeader(token), cancelId });
  }

  /** POST /resource */
  async createVoneResource(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/resource", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /resource */
  async patchVoneResource(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/resource", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /resource */
  async deleteVoneResource(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/resource", query), { header: authHeader(token), body, cancelId });
  }
}
