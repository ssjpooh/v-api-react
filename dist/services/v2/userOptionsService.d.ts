import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 user_options — 서버 apiHandler_user_options.go (컨트롤러 apiController_user_options.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class UserOptionsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /myOptions */
    listMyOptions(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /myOption */
    patchMyOption(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /myOption */
    deleteMyOption(params: V2BodyParams): Promise<FoxApiResult>;
}
