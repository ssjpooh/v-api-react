import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 credits — 서버 apiHandler_credits.go (컨트롤러 apiController_credits.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class CreditsService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /credits */
  async getCreditBalance(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/credits", query), { header: authHeader(token), cancelId });
  }

  /** GET /creditGrants */
  async listCreditGrants(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/creditGrants", query), { header: authHeader(token), cancelId });
  }

  /** GET /creditLedger */
  async listCreditLedger(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/creditLedger", query), { header: authHeader(token), cancelId });
  }

  /** POST /creditGrant */
  async grantCredit(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/creditGrant", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /creditRevoke */
  async revokeCredit(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/creditRevoke", query), { header: authHeader(token), body, cancelId });
  }
}
