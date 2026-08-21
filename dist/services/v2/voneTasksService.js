import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_tasks — 서버 apiHandler_vone_tasks.go (컨트롤러 apiController_vone_tasks.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneTasksService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /tasks */
    async listVoneTasks(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/tasks", query), { header: authHeader(token), cancelId });
    }
    /** GET /task */
    async getVoneTask(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/task", query), { header: authHeader(token), cancelId });
    }
    /** POST /task */
    async createVoneTask(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /task */
    async patchVoneTask(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/task", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /task */
    async deleteVoneTask(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/task", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-status */
    async changeVoneTaskStatus(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-status", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-move */
    async moveVoneTask(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-move", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-restore */
    async restoreVoneTask(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-restore", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /task-comments */
    async listVoneTaskComments(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/task-comments", query), { header: authHeader(token), cancelId });
    }
    /** POST /task-comment */
    async createVoneTaskComment(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-comment", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /task-comment */
    async patchVoneTaskComment(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/task-comment", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /task-comment */
    async deleteVoneTaskComment(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/task-comment", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-link */
    async createVoneTaskLink(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-link", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /task-link */
    async deleteVoneTaskLink(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/task-link", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /labels */
    async listVoneLabels(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/labels", query), { header: authHeader(token), cancelId });
    }
    /** POST /label */
    async createVoneLabel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/label", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /label */
    async patchVoneLabel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/label", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /label */
    async deleteVoneLabel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/label", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-label */
    async addVoneTaskLabel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-label", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /task-label */
    async removeVoneTaskLabel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/task-label", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-read */
    async markVoneTaskRead(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-read", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-file */
    async addVoneTaskFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-file", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /task-file */
    async deleteVoneTaskFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/task-file", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /task-purge */
    async purgeVoneTask(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/task-purge", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /task-trash-empty */
    async emptyVoneTaskTrash(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/task-trash-empty", query), { header: authHeader(token), body, cancelId });
    }
}
