import { authHeader, v2Path } from "./shared";
/**
 * v2 pending_changes — 서버 apiHandler_pending_changes.go (컨트롤러 apiController_pending_changes.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PendingChangesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /pendingChanges */
    async listPendingChanges(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/pendingChanges", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /pendingChange/cancel */
    async cancelPendingChange(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/pendingChange/cancel", query), { header: authHeader(token), body, cancelId });
    }
}
