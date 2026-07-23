import { authHeader, v2Path } from "./shared";
/**
 * v2 sector — 서버 apiHandler_sector.go (컨트롤러 apiController_sector.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class SectorService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /sectors */
    async listSectors(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/sectors", query), { header: authHeader(token), cancelId });
    }
    /** GET /sector */
    async getSector(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/sector", query), { header: authHeader(token), cancelId });
    }
    /** POST /sector */
    async createSector(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/sector", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /sector */
    async updateSector(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/sector", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /sector */
    async deleteSector(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/sector", query), { header: authHeader(token), body, cancelId });
    }
}
