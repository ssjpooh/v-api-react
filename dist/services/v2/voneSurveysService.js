import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_surveys — 서버 apiHandler_vone_surveys.go (컨트롤러 apiController_vone_surveys.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneSurveysService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /surveys */
    async listVoneSurveys(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/surveys", query), { header: authHeader(token), cancelId });
    }
    /** GET /survey */
    async getVoneSurvey(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/survey", query), { header: authHeader(token), cancelId });
    }
    /** POST /survey */
    async createVoneSurvey(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/survey", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /survey */
    async patchVoneSurvey(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/survey", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /survey */
    async deleteVoneSurvey(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/survey", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /survey-publish */
    async publishVoneSurvey(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/survey-publish", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /survey-close */
    async closeVoneSurvey(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/survey-close", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /survey-response */
    async submitVoneSurveyResponse(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/survey-response", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /survey-results */
    async getVoneSurveyResults(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/survey-results", query), { header: authHeader(token), cancelId });
    }
    /** GET /survey-participants */
    async getVoneSurveyParticipants(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/survey-participants", query), { header: authHeader(token), cancelId });
    }
}
