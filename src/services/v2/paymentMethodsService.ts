import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 payment_methods — 서버 apiHandler_payment_methods.go (컨트롤러 apiController_payment_methods.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PaymentMethodsService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /paymentMethods */
  async listPaymentMethods(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/paymentMethods", query), { header: authHeader(token), cancelId });
  }

  /** POST /paymentMethod */
  async addPaymentMethod(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/paymentMethod", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /paymentMethod/default */
  async setDefaultPaymentMethod(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/paymentMethod/default", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /paymentMethod */
  async deletePaymentMethod(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/paymentMethod", query), { header: authHeader(token), body, cancelId });
  }
}
