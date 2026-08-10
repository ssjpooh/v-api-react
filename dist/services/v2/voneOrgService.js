import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_org — 서버 apiHandler_vone_org.go (컨트롤러 apiController_vone_org.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneOrgService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /contacts */
    async listContacts(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/contacts", query), { header: authHeader(token), cancelId });
    }
    /** GET /contact */
    async getContact(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/contact", query), { header: authHeader(token), cancelId });
    }
    /** POST /contact */
    async createContact(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/contact", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /contact */
    async patchContact(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/contact", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /contact */
    async deleteContact(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/contact", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /contact-categories */
    async listContactCategories(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/contact-categories", query), { header: authHeader(token), cancelId });
    }
    /** POST /contact-category */
    async upsertContactCategory(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/contact-category", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /contact-category */
    async deleteContactCategory(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/contact-category", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /user-absences */
    async listUserAbsences(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/user-absences", query), { header: authHeader(token), cancelId });
    }
    /** POST /user-absence */
    async createUserAbsence(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/user-absence", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /user-absence */
    async patchUserAbsence(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/user-absence", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /user-absence */
    async deleteUserAbsence(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/user-absence", query), { header: authHeader(token), body, cancelId });
    }
}
