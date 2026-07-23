export class MailService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
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
