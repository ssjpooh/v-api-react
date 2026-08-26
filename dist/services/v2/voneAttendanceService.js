import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_attendance — 서버 apiHandler_vone_attendance.go (컨트롤러 apiController_vone_attendance.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneAttendanceService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /attendance-today */
    async getAttendanceToday(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendance-today", query), { header: authHeader(token), cancelId });
    }
    /** GET /attendances */
    async listAttendances(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendances", query), { header: authHeader(token), cancelId });
    }
    /** GET /attendance-summary */
    async getAttendanceSummary(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendance-summary", query), { header: authHeader(token), cancelId });
    }
    /** POST /attendance-check-in */
    async checkInAttendance(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/attendance-check-in", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /attendance-check-out */
    async checkOutAttendance(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/attendance-check-out", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /attendance-late-check-out */
    async lateCheckOutAttendance(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/attendance-late-check-out", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /attendance */
    async patchAttendance(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/attendance", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /attendance-close */
    async closeAttendanceMonth(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/attendance-close", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /attendance-reopen */
    async reopenAttendanceMonth(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/attendance-reopen", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /company-holidays */
    async listCompanyHolidays(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/company-holidays", query), { header: authHeader(token), cancelId });
    }
    /** POST /company-holiday */
    async upsertCompanyHoliday(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/company-holiday", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /company-holiday-sync */
    async syncCompanyHolidays(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/company-holiday-sync", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /company-holiday */
    async deleteCompanyHoliday(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/company-holiday", query), { header: authHeader(token), body, cancelId });
    }
}
