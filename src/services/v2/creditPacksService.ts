import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 credit_packs — 서버 apiHandler_credit_packs.go (컨트롤러 apiController_credit_packs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class CreditPacksService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /creditPacks */
  async listCreditPacks(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/creditPacks", query), { header: authHeader(token), cancelId });
  }

  /** POST /creditPack/order */
  async createCreditPackOrder(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/creditPack/order", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /creditPack/confirm */
  async confirmCreditPackOrder(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/creditPack/confirm", query), { header: authHeader(token), body, cancelId });
  }
}
