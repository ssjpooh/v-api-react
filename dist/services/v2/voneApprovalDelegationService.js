import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_approval_delegation — 서버 apiHandler_vone_approval_delegation.go (컨트롤러 apiController_vone_approval_delegation.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneApprovalDelegationService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /approval-delegations */
    async listApprovalDelegations(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/approval-delegations", query), { header: authHeader(token), cancelId });
    }
    /** POST /approval-delegation */
    async createApprovalDelegation(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-delegation", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /approval-delegation */
    async patchApprovalDelegation(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/approval-delegation", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /approval-delegation */
    async deleteApprovalDelegation(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/approval-delegation", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /approval-step-delegate */
    async setApprovalStepDelegate(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/approval-step-delegate", query), { header: authHeader(token), body, cancelId });
    }
}
