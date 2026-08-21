import { authHeader, v2Path } from "./shared";
/**
 * v2 calendars — 서버 apiHandler_calendars.go (컨트롤러 apiController_calendars.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class CalendarsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /calendars */
    async listCalendars(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/calendars", query), { header: authHeader(token), cancelId });
    }
    /** GET /calendar */
    async getCalendar(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/calendar", query), { header: authHeader(token), cancelId });
    }
    /** POST /calendar */
    async createCalendar(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/calendar", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /calendar */
    async patchCalendar(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/calendar", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /calendar */
    async deleteCalendar(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/calendar", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /calendar-subscription */
    async setCalendarSubscription(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/calendar-subscription", query), { header: authHeader(token), body, cancelId });
    }
}
