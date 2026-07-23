import { authHeader, v2Path } from "./shared";
/**
 * v2 branding — 서버 apiHandler_branding.go (컨트롤러 apiController_branding.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class BrandingService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /branding */
    async getBrandingInfo(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/branding", query), { header: authHeader(token), cancelId });
    }
    /** POST /branding */
    async saveBrandingInfo(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/branding", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /branding */
    async patchBrandingInfo(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/branding", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /branding */
    async deleteBrandingInfo(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/branding", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /branding-file */
    async getBrandingFileURL(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/branding-file", query), { header: authHeader(token), cancelId });
    }
    /** POST /branding-file */
    async uploadBrandingFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/branding-file", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /branding-file/base */
    async getBaseBrandingFileURL(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/branding-file/base", query), { header: authHeader(token), cancelId });
    }
    /** POST /branding-file/base */
    async uploadBaseBrandingFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/branding-file/base", query), { header: authHeader(token), body, cancelId });
    }
}
