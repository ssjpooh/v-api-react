export class MailService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @deprecated 2026.09.11 — `POST /v1/sendMailType/:Object` 는 철거 예정. 허용 종류는 `sendNewPassword` · `inquiry` 뿐이고(그 밖은 400),
     * IP당 분당 5회(`Server.API.PublicMailRateLimitPerMin`) 를 넘으면 429. 비밀번호 재설정은 `v2/passwordService.resetPassword`,
     * 도입 문의는 `v2/mailService.sendInquiry` 로 옮길 것. 프론트 셋이 다 옮기면 이 메서드도 함께 지운다.
     */
    async sendEmail(params) {
        const { object, body, cancelId } = params;
        return this.apiClient.post(`/v1/sendMailType/${object}`, { body: body, cancelId: cancelId });
    }
    async signUpEmailVerify(params) {
        const { finfo, siteID, cancelId } = params;
        return this.apiClient.get(`/v1/signUpEmailVerify?siteID=${siteID}&finfo=${finfo}`, { cancelId: cancelId });
    }
    async newPasswordEmailVerify(params) {
        const { finfo, siteID, cancelId } = params;
        return this.apiClient.get(`/v1/newPasswordEmailVerify?siteID=${siteID}&finfo=${finfo}`, { cancelId: cancelId });
    }
    async sendCertifyEmail(params) {
        const { userIndex, token, cancelId } = params;
        return this.apiClient.post(`/v1/sendEmailCertify/${userIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
}
