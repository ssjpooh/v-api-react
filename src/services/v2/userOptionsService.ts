import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 user_options — 서버 apiHandler_user_options.go (컨트롤러 apiController_user_options.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class UserOptionsService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /myOptions */
  async listMyOptions(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/myOptions", query), { header: authHeader(token), cancelId });
  }

  /** PATCH /myOption */
  async patchMyOption(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/myOption", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /myOption */
  async deleteMyOption(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/myOption", query), { header: authHeader(token), body, cancelId });
  }
}
