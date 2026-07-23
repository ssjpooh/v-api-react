import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 account_types — 서버 apiHandler_account_types.go (컨트롤러 apiController_account_types.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class AccountTypesService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /accountTypes */
  async listAccountTypes(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypes", query), { header: authHeader(token), cancelId });
  }

  /** GET /accountTypeUserCounts */
  async listAccountTypeUserCounts(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypeUserCounts", query), { header: authHeader(token), cancelId });
  }

  /** GET /accountType */
  async getAccountType(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountType", query), { header: authHeader(token), cancelId });
  }

  /** POST /accountType */
  async createAccountType(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/accountType", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /accountType */
  async patchAccountType(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/accountType", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /accountType */
  async deleteAccountType(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/accountType", query), { header: authHeader(token), body, cancelId });
  }
}
