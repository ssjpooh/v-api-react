import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_login_ticket — 서버 apiHandler_vone_login_ticket.go (컨트롤러 apiController_vone_login_ticket.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneLoginTicketService {
  constructor(private readonly apiClient: ApiClient) {}

  /** POST /vone-login-ticket/check */
  async checkVoneLoginTicket(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/vone-login-ticket/check", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /vone-login-ticket */
  async redeemVoneLoginTicket(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/vone-login-ticket", query), { header: authHeader(token), body, cancelId });
  }
}
