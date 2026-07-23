import { authHeader, v2Path } from "./shared";
/**
 * v2 notices — 서버 apiHandler_notices.go (컨트롤러 apiController_notices.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class NoticesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /notices */
    async listNotices(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/notices", query), { header: authHeader(token), cancelId });
    }
    /** GET /notice */
    async getNotice(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/notice", query), { header: authHeader(token), cancelId });
    }
    /** GET /notice/files */
    async getNoticeFiles(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/notice/files", query), { header: authHeader(token), cancelId });
    }
    /** POST /notice */
    async createNotice(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/notice", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /notice/file */
    async createNoticeFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/notice/file", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /notice */
    async updateNotice(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/notice", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /notice */
    async deleteNotice(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/notice", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /notice/file */
    async deleteNoticeFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/notice/file", query), { header: authHeader(token), body, cancelId });
    }
}
