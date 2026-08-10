import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_messages — 서버 apiHandler_vone_messages.go (컨트롤러 apiController_vone_messages.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneMessagesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** POST /message */
    async sendVoneMessage(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/message", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /message-box */
    async listVoneMessageBox(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/message-box", query), { header: authHeader(token), cancelId });
    }
    /** GET /message */
    async getVoneMessage(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/message", query), { header: authHeader(token), cancelId });
    }
    /** POST /message-read */
    async readVoneMessage(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/message-read", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /message-unread */
    async unreadVoneMessage(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/message-unread", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /message-move */
    async moveVoneMessage(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/message-move", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /message-star */
    async starVoneMessage(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/message-star", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /message */
    async deleteVoneMessage(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/message", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /message-unread-count */
    async getVoneMessageUnreadCount(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/message-unread-count", query), { header: authHeader(token), cancelId });
    }
    /** GET /message-templates */
    async listVoneMessageTemplates(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/message-templates", query), { header: authHeader(token), cancelId });
    }
    /** POST /message-template */
    async createVoneMessageTemplate(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/message-template", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /message-template */
    async patchVoneMessageTemplate(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/message-template", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /message-template */
    async deleteVoneMessageTemplate(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/message-template", query), { header: authHeader(token), body, cancelId });
    }
}
