import { authHeader, v2Path } from "./shared";
/**
 * v2 credits — 서버 apiHandler_credits.go (컨트롤러 apiController_credits.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class CreditsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /credits */
    async listCredits(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/credits", query), { header: authHeader(token), cancelId });
    }
}
