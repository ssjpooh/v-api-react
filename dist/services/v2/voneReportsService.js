import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_reports — 서버 apiHandler_vone_reports.go (컨트롤러 apiController_vone_reports.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneReportsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /reports */
    async listReports(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/reports", query), { header: authHeader(token), cancelId });
    }
    /** GET /report */
    async getReport(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/report", query), { header: authHeader(token), cancelId });
    }
    /** POST /report */
    async createReport(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/report", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /report */
    async patchReport(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/report", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /report */
    async deleteReport(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/report", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /report-submit */
    async submitReport(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/report-submit", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /report-unsubmit */
    async unsubmitReport(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/report-unsubmit", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /report-file */
    async addReportFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/report-file", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /report-file */
    async removeReportFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/report-file", query), { header: authHeader(token), body, cancelId });
    }
}
