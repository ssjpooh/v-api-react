import { authHeader, v2Path } from "./shared";
/**
 * v2 billing — 서버 apiHandler_billing.go (컨트롤러 apiController_billing.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class BillingService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /billingInfo */
    async getBillingInfo(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/billingInfo", query), { header: authHeader(token), cancelId });
    }
    /** POST /billing/contract */
    async createBillingContract(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/billing/contract", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /billing/upgrade */
    async upgradeBilling(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/billing/upgrade", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /billing/downgrade */
    async downgradeBilling(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/billing/downgrade", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /billing/cancel */
    async cancelBilling(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/billing/cancel", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /billing/reactivate */
    async reactivateBilling(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/billing/reactivate", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /billing/preview */
    async previewBilling(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/billing/preview", query), { header: authHeader(token), body, cancelId });
    }
}
