import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_resources — 서버 apiHandler_vone_resources.go (컨트롤러 apiController_vone_resources.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneResourcesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /resources */
    async listVoneResources(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/resources", query), { header: authHeader(token), cancelId });
    }
    /**
     * GET /resource-bookings — 자원 축 예약 조회 (2026.09.10 · 서버 API 가이드 Rev 68).
     * query: date=YYYYMMDD(사이트 로컬 하루) 또는 from=&to=(UTC) · resourceIdx(선택). 수동 추가 — 생성기 재실행 시 보존할 것.
     */
    async listVoneResourceBookings(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/resource-bookings", query), { header: authHeader(token), cancelId });
    }
    /** POST /resource */
    async createVoneResource(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/resource", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /resource */
    async patchVoneResource(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/resource", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /resource */
    async deleteVoneResource(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/resource", query), { header: authHeader(token), body, cancelId });
    }
}
