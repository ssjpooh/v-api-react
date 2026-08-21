import { authHeader, v2Path } from "./shared";
/**
 * v2 org_users — 서버 apiHandler_org_users.go (컨트롤러 apiController_org_users.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class OrgUsersService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /orgUsers */
    async listOrgUsers(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/orgUsers", query), { header: authHeader(token), cancelId });
    }
    /** GET /orgSearch */
    async searchOrgUsers(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/orgSearch", query), { header: authHeader(token), cancelId });
    }
}
