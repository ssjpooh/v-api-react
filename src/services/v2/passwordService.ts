import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 password — 서버 apiHandler_password.go (컨트롤러 apiController_password.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PasswordService {
  constructor(private readonly apiClient: ApiClient) {}

  /** POST /password/reset */
  async resetPassword(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/password/reset", query), { header: authHeader(token), body, cancelId });
  }
}
