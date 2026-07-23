import { authHeader, v2Path } from "./shared";
/**
 * v2 plans — 서버 apiHandler_plans.go (컨트롤러 apiController_plans.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PlansService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /plans */
    async listPlans(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/plans", query), { header: authHeader(token), cancelId });
    }
    /** GET /plan */
    async getPlan(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/plan", query), { header: authHeader(token), cancelId });
    }
    /** POST /plan */
    async createPlan(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/plan", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /plan */
    async patchPlan(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/plan", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /plan */
    async deletePlan(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/plan", query), { header: authHeader(token), body, cancelId });
    }
}
