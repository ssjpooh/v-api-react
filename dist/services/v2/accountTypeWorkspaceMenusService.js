import { authHeader, v2Path } from "./shared";
/**
 * v2 account_type_workspace_menus — 서버 apiHandler_account_type_workspace_menus.go (컨트롤러 apiController_account_type_workspace_menus.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class AccountTypeWorkspaceMenusService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /accountTypeWorkspaceMenus */
    async listAccountTypeWorkspaceMenus(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspaceMenus", query), { header: authHeader(token), cancelId });
    }
    /** GET /accountTypeWorkspaceMenu */
    async getAccountTypeWorkspaceMenu(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspaceMenu", query), { header: authHeader(token), cancelId });
    }
    /** POST /accountTypeWorkspaceMenu */
    async saveAccountTypeWorkspaceMenu(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/accountTypeWorkspaceMenu", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /accountTypeWorkspaceMenu */
    async patchAccountTypeWorkspaceMenu(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/accountTypeWorkspaceMenu", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /accountTypeWorkspaceMenu */
    async deleteAccountTypeWorkspaceMenu(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/accountTypeWorkspaceMenu", query), { header: authHeader(token), body, cancelId });
    }
}
