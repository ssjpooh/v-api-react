export class SectorService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getSectors(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/sectors", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getSectorInfo(params) {
        const { token, sectorName, cancelId } = params;
        return this.apiClient.get(`/v1/sector/${encodeURIComponent(sectorName)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getServerListBySector(params) {
        const { token, sectorName, cancelId } = params;
        return this.apiClient.get(`/v1/serverListBySector/${encodeURIComponent(sectorName)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getServerSectors(params) {
        const { token, keyword, cancelId } = params;
        const path = keyword ? `/v1/serverSectors?keyword=${encodeURIComponent(keyword)}` : "/v1/serverSectors";
        return this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async addSector(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.post("/v1/sector", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifySector(params) {
        const { token, sectorName, body, cancelId } = params;
        return this.apiClient.patch(`/v1/sectors/${encodeURIComponent(sectorName)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeSectors(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.delete("/v1/deleteServerSectors", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async isAvailableDelete(params) {
        const { token, sectorName, cancelId } = params;
        return this.apiClient.get(`/v1/sectors/get/isAvailableDelete/${encodeURIComponent(sectorName)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
}
