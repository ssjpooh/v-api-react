import { authHeader, v2Path } from "./shared";
/**
 * v2 options — 서버 apiHandler_options.go (컨트롤러 apiController_options.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class OptionsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /options */
    async listOption(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/options", query), { header: authHeader(token), cancelId });
    }
    /** POST /option/inherit */
    async inheritOption(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/option/inherit", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /option/override */
    async overrideOption(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/option/override", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /option/selected */
    async selectedOption(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/option/selected", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /option/restore */
    async restoreOption(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/option/restore", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /option */
    async deleteOption(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/option", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /option/item */
    async addOptionItem(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/option/item", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /option */
    async getOption(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/option", query), { header: authHeader(token), cancelId });
    }
    /** GET /baseOptionItems */
    async getBaseOptionItems(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/baseOptionItems", query), { header: authHeader(token), cancelId });
    }
}
