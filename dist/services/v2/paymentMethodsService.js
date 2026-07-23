import { authHeader, v2Path } from "./shared";
/**
 * v2 payment_methods — 서버 apiHandler_payment_methods.go (컨트롤러 apiController_payment_methods.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PaymentMethodsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /paymentMethods */
    async listPaymentMethods(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/paymentMethods", query), { header: authHeader(token), cancelId });
    }
    /** POST /paymentMethod */
    async addPaymentMethod(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/paymentMethod", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /paymentMethod/default */
    async setDefaultPaymentMethod(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/paymentMethod/default", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /paymentMethod */
    async deletePaymentMethod(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/paymentMethod", query), { header: authHeader(token), body, cancelId });
    }
}
