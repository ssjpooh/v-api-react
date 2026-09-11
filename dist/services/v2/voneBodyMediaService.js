import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_body_media — 서버 apiHandler_vone_body_media.go (컨트롤러 apiController_vone_body_media.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneBodyMediaService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** POST /vone-image */
    async uploadVoneBodyMedia(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/vone-image", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /vone-media-upload-policy */
    async getVoneMediaUploadPolicy(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/vone-media-upload-policy", query), { header: authHeader(token), cancelId });
    }
    /** POST /vone-media-upload-urls */
    async issueVoneMediaUploadURLs(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/vone-media-upload-urls", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /vone-media-upload-cancel */
    async cancelVoneMediaUpload(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/vone-media-upload-cancel", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /vone-media-commit */
    async commitVoneMediaUpload(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/vone-media-commit", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /vone-image */
    async downloadVoneBodyMedia(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/vone-image", query), { header: authHeader(token), cancelId });
    }
}
