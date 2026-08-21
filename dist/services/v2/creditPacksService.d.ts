import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 credit_packs — 서버 apiHandler_credit_packs.go (컨트롤러 apiController_credit_packs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class CreditPacksService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /creditPacks */
    listCreditPacks(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /creditPack/order */
    createCreditPackOrder(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /creditPack/confirm */
    confirmCreditPackOrder(params: V2BodyParams): Promise<FoxApiResult>;
}
