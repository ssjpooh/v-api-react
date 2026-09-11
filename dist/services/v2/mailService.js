import { authHeader, v2Path } from "./shared";
/**
 * v2 mail — 서버 apiHandler_mail.go (컨트롤러 apiController_mail.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class MailService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    // POST /sendMails 는 2026.09.11 서버에서 제거 (무인증 발송 껍데기 — 호출처 없음).
    /**
     * POST /inquiry — 도입 문의 (무인증 공개 · 2026.09.11). body: { CompanyName, SenderName, SenderEmail(필수), Phone, Type, ExpectedUsers, Message(필수), Locale }.
     * 수신 주소는 서버 옵션(SendMail.Config.InquiryTo) — 종전 v1 sendMailType/inquiry 의 receiverEmail 은 받지 않는다. 429 = IP 분당 제한 · 503 = 수신 주소 미설정.
     */
    async sendInquiry(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/inquiry", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /mail/unsubscribe */
    async unsubscribeMail(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/mail/unsubscribe", query), { header: authHeader(token), cancelId });
    }
    /** GET /mail/resubscribe */
    async resubscribeMail(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/mail/resubscribe", query), { header: authHeader(token), cancelId });
    }
    /** GET /mail/unsubscribes */
    async listMailUnsubscribes(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/mail/unsubscribes", query), { header: authHeader(token), cancelId });
    }
    /** DELETE /mail/unsubscribe */
    async removeMailUnsubscribe(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/mail/unsubscribe", query), { header: authHeader(token), body, cancelId });
    }
}
