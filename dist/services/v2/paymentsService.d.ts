import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 payments — 서버 apiHandler_payments.go (컨트롤러 apiController_payments.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class PaymentsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /payments */
    listPayments(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /payment */
    getPayment(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /payment/retry */
    retryPayment(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /payment/webhook */
    paymentWebhook(params: V2BodyParams): Promise<FoxApiResult>;
}
