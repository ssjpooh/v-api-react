import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 billing — 서버 apiHandler_billing.go (컨트롤러 apiController_billing.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class BillingService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /billingInfo */
    getBillingInfo(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /billing/contract */
    createBillingContract(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /billing/upgrade */
    upgradeBilling(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /billing/downgrade */
    downgradeBilling(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /billing/cancel */
    cancelBilling(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /billing/reactivate */
    reactivateBilling(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /billing/preview */
    previewBilling(params: V2BodyParams): Promise<FoxApiResult>;
}
