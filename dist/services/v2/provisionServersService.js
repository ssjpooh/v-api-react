import { authHeader, v2Path } from "./shared";
/**
 * v2 provision_servers — 서버 apiHandler_provision_servers.go (컨트롤러 apiController_provision_servers.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ProvisionServersService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /provisioningServers */
    async listProvisionServers(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/provisioningServers", query), { header: authHeader(token), cancelId });
    }
    /** GET /provisioningServer */
    async getProvisionServer(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), cancelId });
    }
    /** DELETE /provisioningServer */
    async deleteProvisionServer(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /provisioningServer */
    async createProvisionServer(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /provisioningServer */
    async updateProvisionServer(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/provisioningServer", query), { header: authHeader(token), body, cancelId });
    }
}
