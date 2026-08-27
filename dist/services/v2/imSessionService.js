import { authHeader, v2Path } from "./shared";
/**
 * v2 im_session — 서버 apiHandler_im_session.go (컨트롤러 apiController_im_session.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ImSessionService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** POST /im-session */
    async issueIMSession(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/im-session", query), { header: authHeader(token), body, cancelId });
    }
}
