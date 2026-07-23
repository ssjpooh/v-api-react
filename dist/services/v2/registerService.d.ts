import { ApiClient, type FoxApiResult, type V2BodyParams } from "./shared";
/**
 * v2 register — 서버 apiHandler_register.go (컨트롤러 apiController_register.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class RegisterService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /register */
    register(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /register/emailChallenge */
    signupEmailChallenge(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /register/verifyEmail */
    signupVerifyEmail(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /register/resendEmail */
    signupResendEmail(params: V2BodyParams): Promise<FoxApiResult>;
}
