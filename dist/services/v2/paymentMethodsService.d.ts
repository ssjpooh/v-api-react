import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 payment_methods — 서버 apiHandler_payment_methods.go (컨트롤러 apiController_payment_methods.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class PaymentMethodsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /paymentMethods */
    listPaymentMethods(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /paymentMethod */
    addPaymentMethod(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /paymentMethod/default */
    setDefaultPaymentMethod(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /paymentMethod */
    deletePaymentMethod(params: V2BodyParams): Promise<FoxApiResult>;
}
