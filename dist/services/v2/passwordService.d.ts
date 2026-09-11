import { ApiClient, type FoxApiResult, type V2BodyParams } from "./shared";
/**
 * v2 password — 서버 apiHandler_password.go (컨트롤러 apiController_password.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class PasswordService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /password/reset — body: { SiteID, UserID, Locale } 또는 { Email[, SiteID], Locale } (2026.09.11 Email 갈래 — v1 sendMailType/sendNewPassword 대체). 대상 유무와 무관하게 200 {Accepted:true} */
    resetPassword(params: V2BodyParams): Promise<FoxApiResult>;
}
