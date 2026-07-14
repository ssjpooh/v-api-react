import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 options — 서버 apiHandler_options.go (컨트롤러 apiController_options.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class OptionsService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /options */
  async listOption(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/options", query), { header: authHeader(token), cancelId });
  }

  /** POST /option/inherit */
  async inheritOption(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/option/inherit", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /option/override */
  async overrideOption(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/option/override", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /option/selected */
  async selectedOption(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/option/selected", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /option/restore */
  async restoreOption(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/option/restore", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /option */
  async deleteOption(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/option", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /option/item */
  async addOptionItem(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/option/item", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /option */
  async getOption(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/option", query), { header: authHeader(token), cancelId });
  }
}
