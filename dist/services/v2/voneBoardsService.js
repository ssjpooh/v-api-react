import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_boards — 서버 apiHandler_vone_boards.go (컨트롤러 apiController_vone_boards.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneBoardsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /boards */
    async listVoneBoards(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/boards", query), { header: authHeader(token), cancelId });
    }
    /** GET /board */
    async getVoneBoard(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/board", query), { header: authHeader(token), cancelId });
    }
    /** POST /board */
    async createVoneBoard(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/board", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /board */
    async patchVoneBoard(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/board", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /board */
    async deleteVoneBoard(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/board", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /board-read */
    async readVoneBoard(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/board-read", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /board-read-all */
    async readAllVoneBoards(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/board-read-all", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /board-unread-count */
    async getVoneBoardUnreadCount(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/board-unread-count", query), { header: authHeader(token), cancelId });
    }
    /** GET /board-comments */
    async listVoneBoardComments(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/board-comments", query), { header: authHeader(token), cancelId });
    }
    /** POST /board-comment */
    async createVoneBoardComment(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/board-comment", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /board-comment */
    async patchVoneBoardComment(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/board-comment", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /board-comment */
    async deleteVoneBoardComment(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/board-comment", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /board-file */
    async addVoneBoardFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/board-file", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /board-file */
    async deleteVoneBoardFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/board-file", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /board-share */
    async addVoneBoardShare(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/board-share", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /board-share */
    async deleteVoneBoardShare(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/board-share", query), { header: authHeader(token), body, cancelId });
    }
}
