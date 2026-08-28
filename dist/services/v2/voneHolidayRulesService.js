import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_holiday_rules — 서버 apiHandler_vone_holiday_rules.go (컨트롤러 apiController_vone_holiday_rules.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneHolidayRulesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /company-holiday-rules */
    async listCompanyHolidayRules(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/company-holiday-rules", query), { header: authHeader(token), cancelId });
    }
    /** POST /company-holiday-rule */
    async createCompanyHolidayRule(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/company-holiday-rule", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /company-holiday-rule */
    async updateCompanyHolidayRule(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/company-holiday-rule", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /company-holiday-rule-stop */
    async stopCompanyHolidayRule(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/company-holiday-rule-stop", query), { header: authHeader(token), body, cancelId });
    }
}
