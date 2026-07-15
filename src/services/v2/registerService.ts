import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 register — 서버 apiHandler_register.go (컨트롤러 apiController_register.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class RegisterService {
  constructor(private readonly apiClient: ApiClient) {}

  /** POST /register */
  async register(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/register", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /register/emailChallenge */
  async signupEmailChallenge(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/register/emailChallenge", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /register/verifyEmail */
  async signupVerifyEmail(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/register/verifyEmail", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /register/resendEmail */
  async signupResendEmail(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/register/resendEmail", query), { header: authHeader(token), body, cancelId });
  }
}
