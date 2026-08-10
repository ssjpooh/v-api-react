import { ApiClient, type FoxApiResult, type V2BodyParams } from "./shared";
/**
 * v2 password — 서버 apiHandler_password.go (컨트롤러 apiController_password.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class PasswordService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /password/reset */
    resetPassword(params: V2BodyParams): Promise<FoxApiResult>;
}
