import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_body_images — 서버 apiHandler_vone_body_images.go (컨트롤러 apiController_vone_body_images.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneBodyImagesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** POST /vone-image */
    async uploadVoneBodyImage(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/vone-image", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /vone-image */
    async downloadVoneBodyImage(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/vone-image", query), { header: authHeader(token), cancelId });
    }
}
