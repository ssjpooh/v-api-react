import { authHeader, v2Path } from "./shared";
/**
 * v2 mail — 서버 apiHandler_mail.go (컨트롤러 apiController_mail.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class MailService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** POST /sendMails */
    async sendMails(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/sendMails", query), { header: authHeader(token), body, cancelId });
    }
}
