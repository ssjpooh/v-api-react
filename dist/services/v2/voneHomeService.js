import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_home — 서버 apiHandler_vone_home.go (컨트롤러 apiController_vone_home.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneHomeService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /notifications */
    async listVoneNotifications(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/notifications", query), { header: authHeader(token), cancelId });
    }
    /** GET /notification-count */
    async getVoneNotificationCount(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/notification-count", query), { header: authHeader(token), cancelId });
    }
    /** POST /notification-read */
    async readVoneNotification(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/notification-read", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /notification-read-all */
    async readAllVoneNotifications(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/notification-read-all", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /notification-unread-all-undo */
    async undoReadAllVoneNotifications(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/notification-unread-all-undo", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /notification-target-read */
    async readVoneNotificationsByTarget(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/notification-target-read", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /notification-settings */
    async listVoneNotificationSettings(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/notification-settings", query), { header: authHeader(token), cancelId });
    }
    /** POST /notification-setting */
    async upsertVoneNotificationSetting(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/notification-setting", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /notification-setting */
    async deleteVoneNotificationSetting(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/notification-setting", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /activities */
    async listVoneActivities(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/activities", query), { header: authHeader(token), cancelId });
    }
    /** GET /home-widgets */
    async getVoneHomeWidgets(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/home-widgets", query), { header: authHeader(token), cancelId });
    }
    /** GET /user-drafts */
    async listVoneUserDrafts(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/user-drafts", query), { header: authHeader(token), cancelId });
    }
    /** GET /user-draft */
    async getVoneUserDraft(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/user-draft", query), { header: authHeader(token), cancelId });
    }
    /** POST /user-draft */
    async createVoneUserDraft(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/user-draft", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /user-draft */
    async patchVoneUserDraft(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/user-draft", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /user-draft */
    async deleteVoneUserDraft(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/user-draft", query), { header: authHeader(token), body, cancelId });
    }
}
