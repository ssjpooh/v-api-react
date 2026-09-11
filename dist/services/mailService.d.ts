import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
export declare class MailService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * @deprecated 2026.09.11 — `POST /v1/sendMailType/:Object` 는 철거 예정. 허용 종류는 `sendNewPassword` · `inquiry` 뿐이고(그 밖은 400),
     * IP당 분당 5회(`Server.API.PublicMailRateLimitPerMin`) 를 넘으면 429. 비밀번호 재설정은 `v2/passwordService.resetPassword`,
     * 도입 문의는 `v2/mailService.sendInquiry` 로 옮길 것. 프론트 셋이 다 옮기면 이 메서드도 함께 지운다.
     */
    sendEmail(params: {
        object: string;
        body?: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    signUpEmailVerify(params: {
        finfo: string;
        siteID: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    newPasswordEmailVerify(params: {
        finfo: string;
        siteID: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    sendCertifyEmail(params: {
        userIndex: string;
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
