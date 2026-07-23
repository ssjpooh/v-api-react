import { authHeader, v2Path } from "./shared";
/**
 * v2 payments — 서버 apiHandler_payments.go (컨트롤러 apiController_payments.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PaymentsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /payments */
    async listPayments(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/payments", query), { header: authHeader(token), cancelId });
    }
    /** GET /payment */
    async getPayment(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/payment", query), { header: authHeader(token), cancelId });
    }
    /** POST /payment/retry */
    async retryPayment(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/payment/retry", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /payment/webhook */
    async paymentWebhook(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/payment/webhook", query), { header: authHeader(token), body, cancelId });
    }
}
