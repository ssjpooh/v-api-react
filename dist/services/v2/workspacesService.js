import { authHeader, v2Path } from "./shared";
/**
 * v2 workspaces — 서버 apiHandler_workspaces.go (컨트롤러 apiController_workspaces.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class WorkspacesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /workspaces */
    async listWorkspaces(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/workspaces", query), { header: authHeader(token), cancelId });
    }
    /** GET /workspace */
    async getWorkspace(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/workspace", query), { header: authHeader(token), cancelId });
    }
    /** POST /workspace */
    async createWorkspace(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/workspace", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /workspace */
    async patchWorkspace(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/workspace", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /workspace */
    async deleteWorkspace(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/workspace", query), { header: authHeader(token), body, cancelId });
    }
}
