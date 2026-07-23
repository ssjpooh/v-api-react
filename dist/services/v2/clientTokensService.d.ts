import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 client_tokens — 서버 apiHandler_client_tokens.go (컨트롤러 apiController_client_tokens.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ClientTokensService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /client/tokens */
    createClientToken(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /checkTokenInfo */
    checkTokenInfo(params: V2BaseParams): Promise<FoxApiResult>;
}
