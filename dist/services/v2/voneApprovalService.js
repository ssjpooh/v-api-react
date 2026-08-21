import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_approval — 서버 apiHandler_vone_approval.go (컨트롤러 apiController_vone_approval.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneApprovalService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /approval-forms */
    async listApprovalForms(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/approval-forms", query), { header: authHeader(token), cancelId });
    }
    /** GET /approval-lines */
    async listApprovalLines(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/approval-lines", query), { header: authHeader(token), cancelId });
    }
    /** GET /approval-line */
    async getApprovalLine(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/approval-line", query), { header: authHeader(token), cancelId });
    }
    /** POST /approval-line */
    async createApprovalLine(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-line", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /approval-line */
    async patchApprovalLine(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/approval-line", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /approval-line */
    async deleteApprovalLine(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/approval-line", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /approval-documents */
    async listApprovalDocuments(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/approval-documents", query), { header: authHeader(token), cancelId });
    }
    /** GET /approval-document */
    async getApprovalDocument(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/approval-document", query), { header: authHeader(token), cancelId });
    }
    /** GET /approval-count */
    async getApprovalCount(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/approval-count", query), { header: authHeader(token), cancelId });
    }
    /** POST /approval-document */
    async createApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-document", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /approval-document */
    async patchApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/approval-document", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /approval-document */
    async deleteApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/approval-document", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /approval-submit */
    async submitApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-submit", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /approval-withdraw */
    async withdrawApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-withdraw", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /approval-cancel */
    async cancelApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-cancel", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /approval-approve */
    async approveApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-approve", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /approval-reject */
    async rejectApprovalDocument(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-reject", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /approval-file */
    async addApprovalFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-file", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /approval-file */
    async removeApprovalFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/approval-file", query), { header: authHeader(token), body, cancelId });
    }
}
