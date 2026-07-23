import { authHeader, v2Path } from "./shared";
/**
 * v2 account_types — 서버 apiHandler_account_types.go (컨트롤러 apiController_account_types.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class AccountTypesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /accountTypes */
    async listAccountTypes(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/accountTypes", query), { header: authHeader(token), cancelId });
    }
    /** GET /accountType */
    async getAccountType(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/accountType", query), { header: authHeader(token), cancelId });
    }
    /** POST /accountType */
    async createAccountType(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/accountType", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /accountType */
    async patchAccountType(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/accountType", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /accountType */
    async deleteAccountType(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/accountType", query), { header: authHeader(token), body, cancelId });
    }
}
