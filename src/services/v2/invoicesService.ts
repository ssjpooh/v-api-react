import { ApiClient, type FoxApiResult, type V2BaseParams, authHeader, v2Path } from "./shared";

/**
 * v2 invoices — 서버 apiHandler_invoices.go (컨트롤러 apiController_invoices.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class InvoicesService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /invoices */
  async listInvoices(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/invoices", query), { header: authHeader(token), cancelId });
  }

  /** GET /invoice */
  async getInvoice(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/invoice", query), { header: authHeader(token), cancelId });
  }
}
