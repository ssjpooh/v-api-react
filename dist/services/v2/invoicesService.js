import { authHeader, v2Path } from "./shared";
/**
 * v2 invoices — 서버 apiHandler_invoices.go (컨트롤러 apiController_invoices.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class InvoicesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /invoices */
    async listInvoices(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/invoices", query), { header: authHeader(token), cancelId });
    }
    /** GET /invoice */
    async getInvoice(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/invoice", query), { header: authHeader(token), cancelId });
    }
}
