import { authHeader, v2Path } from "./shared";
/**
 * v2 password — 서버 apiHandler_password.go (컨트롤러 apiController_password.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PasswordService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** POST /password/reset */
    async resetPassword(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/password/reset", query), { header: authHeader(token), body, cancelId });
    }
}
