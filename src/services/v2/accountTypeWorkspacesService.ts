import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 account_type_workspaces — 서버 apiHandler_account_type_workspaces.go (컨트롤러 apiController_account_type_workspaces.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class AccountTypeWorkspacesService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /accountTypeWorkspaces */
  async listAccountTypeWorkspaces(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspaces", query), { header: authHeader(token), cancelId });
  }

  /** GET /accountTypeWorkspace */
  async getAccountTypeWorkspace(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspace", query), { header: authHeader(token), cancelId });
  }

  /** POST /accountTypeWorkspace */
  async saveAccountTypeWorkspace(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/accountTypeWorkspace", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /accountTypeWorkspace */
  async patchAccountTypeWorkspace(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/accountTypeWorkspace", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /accountTypeWorkspace */
  async deleteAccountTypeWorkspace(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/accountTypeWorkspace", query), { header: authHeader(token), body, cancelId });
  }
}
