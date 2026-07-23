import { buildPath } from "../apiClient";
export class ServerService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getServers(params) {
        const { token, keyword, cancelId } = params;
        const path = keyword ? `/v1/servers?keyword=${encodeURIComponent(keyword)}` : "/v1/servers";
        return this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getProvisioningServers(params) {
        const { token, keyword, cancelId } = params;
        const path = keyword ? `/v1/provisioningServers?keyword=${encodeURIComponent(keyword)}` : "/v1/provisioningServers";
        return this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getWebServerDomain(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/webServerDomain", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getServerInfoByIndex(params) {
        const { token, serverIndex, cancelId } = params;
        return this.apiClient.get(`/v1/serverInfo/${serverIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async updateServerInfoByIndex(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.patch("/v1/servers", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async applyConfig(params) {
        const { token, sector, cancelId } = params;
        return this.apiClient.get(`/v1/server/applyConfig/${encodeURIComponent(sector)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async modifySiteSector(params) {
        const { token, asisSector, body, cancelId } = params;
        return this.apiClient.patch(`/v1/siteSector/${encodeURIComponent(asisSector)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getServerDomains(params) {
        const { token, sector, keyword, cancelId } = params;
        const path = buildPath("/v1/serverDomains", { sector: sector ?? "", keyword: keyword ?? "" });
        return this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async addServerDomain(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.post("/v1/serverDomains", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifyServerDomain(params) {
        const { token, sector, domainName, body, cancelId } = params;
        return this.apiClient.patch(`/v1/serverDomains/${encodeURIComponent(sector)}/${encodeURIComponent(domainName)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeServerDomain(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.delete("/v1/serverDomains", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeProvisionServer(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.delete("/v1/deleteProvisioningServer", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
}
