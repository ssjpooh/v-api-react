import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 credits — 서버 apiHandler_credits.go (컨트롤러 apiController_credits.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class CreditsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /credits */
    listCredits(params: V2BaseParams): Promise<FoxApiResult>;
}
