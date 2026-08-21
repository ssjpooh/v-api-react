import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_system — 서버 apiHandler_vone_system.go (컨트롤러 apiController_vone_system.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneSystemService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /system-dashboard */
    async getSystemDashboard(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-dashboard", query), { header: authHeader(token), cancelId });
    }
    /** GET /system-users */
    async listSystemUsers(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-users", query), { header: authHeader(token), cancelId });
    }
    /** GET /system-user */
    async getSystemUser(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-user", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /system-user */
    async patchSystemUser(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/system-user", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /system-user-state */
    async setSystemUserState(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/system-user-state", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /system-user-retire */
    async retireSystemUser(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/system-user-retire", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /system-user-reset-password */
    async resetSystemUserPassword(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/system-user-reset-password", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /system-user-logout-all */
    async logoutSystemUserAll(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/system-user-logout-all", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /system-user-offboard */
    async getSystemUserOffboard(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-user-offboard", query), { header: authHeader(token), cancelId });
    }
    /** GET /system-kinds */
    async listSystemKinds(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-kinds", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /system-kind */
    async patchSystemKind(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/system-kind", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /system-roles */
    async listSystemRoles(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-roles", query), { header: authHeader(token), cancelId });
    }
    /** POST /system-role */
    async createSystemRole(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/system-role", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /system-role */
    async patchSystemRole(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/system-role", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /system-role */
    async deleteSystemRole(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/system-role", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /system-depts */
    async listSystemDepts(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-depts", query), { header: authHeader(token), cancelId });
    }
    /** GET /system-dept */
    async getSystemDept(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-dept", query), { header: authHeader(token), cancelId });
    }
    /** POST /system-dept */
    async createSystemDept(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/system-dept", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /system-dept */
    async patchSystemDept(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/system-dept", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /system-dept */
    async deleteSystemDept(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/system-dept", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /system-positions */
    async listSystemPositions(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-positions", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /system-positions */
    async saveSystemPositions(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/system-positions", query), { header: authHeader(token), body, cancelId });
    }
    /** PUT /system-positions */
    async putSystemPositions(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.put(v2Path(siteId, "/system-positions", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /system-settings */
    async getSystemSettings(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/system-settings", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /system-settings */
    async saveSystemSettings(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/system-settings", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /audit-logs */
    async listAuditLogs(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/audit-logs", query), { header: authHeader(token), cancelId });
    }
    /** GET /audit-retention */
    async getAuditRetention(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/audit-retention", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /audit-retention */
    async patchAuditRetention(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/audit-retention", query), { header: authHeader(token), body, cancelId });
    }
    /** PUT /audit-retention */
    async putAuditRetention(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.put(v2Path(siteId, "/audit-retention", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /audit-export */
    async exportAuditLogs(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/audit-export", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /audit-export-file */
    async downloadAuditExport(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/audit-export-file", query), { header: authHeader(token), cancelId });
    }
}
