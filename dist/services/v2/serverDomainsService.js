import { authHeader, v2Path } from "./shared";
/**
 * v2 server_domains — 서버 apiHandler_server_domains.go (컨트롤러 apiController_server_domains.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ServerDomainsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /domains */
    async listServerDomains(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/domains", query), { header: authHeader(token), cancelId });
    }
    /** GET /domain */
    async getServerDomain(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/domain", query), { header: authHeader(token), cancelId });
    }
    /** POST /domain */
    async createServerDomain(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/domain", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /domain */
    async updateServerDomain(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/domain", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /domain */
    async deleteServerDomain(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/domain", query), { header: authHeader(token), body, cancelId });
    }
}
