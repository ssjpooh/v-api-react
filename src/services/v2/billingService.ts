import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 billing — 서버 apiHandler_billing.go (컨트롤러 apiController_billing.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class BillingService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /billingInfo */
  async getBillingInfo(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/billingInfo", query), { header: authHeader(token), cancelId });
  }

  /** POST /billing/contract */
  async createBillingContract(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/billing/contract", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /billing/upgrade */
  async upgradeBilling(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/billing/upgrade", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /billing/downgrade */
  async downgradeBilling(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/billing/downgrade", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /billing/cancel */
  async cancelBilling(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/billing/cancel", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /billing/reactivate */
  async reactivateBilling(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/billing/reactivate", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /billing/preview */
  async previewBilling(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/billing/preview", query), { header: authHeader(token), body, cancelId });
  }
}
