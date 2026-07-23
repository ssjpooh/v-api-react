import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 mail — 서버 apiHandler_mail.go (컨트롤러 apiController_mail.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class MailService {
  constructor(private readonly apiClient: ApiClient) {}

  /** POST /sendMails */
  async sendMails(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/sendMails", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /mail/unsubscribe */
  async unsubscribeMail(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/mail/unsubscribe", query), { header: authHeader(token), cancelId });
  }

  /** GET /mail/resubscribe */
  async resubscribeMail(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/mail/resubscribe", query), { header: authHeader(token), cancelId });
  }

  /** GET /mail/unsubscribes */
  async listMailUnsubscribes(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/mail/unsubscribes", query), { header: authHeader(token), cancelId });
  }

  /** DELETE /mail/unsubscribe */
  async removeMailUnsubscribe(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/mail/unsubscribe", query), { header: authHeader(token), body, cancelId });
  }
}
