import { authHeader, v2Path } from "./shared";
/**
 * v2 schedule_recurrences — 서버 apiHandler_schedule_recurrences.go (컨트롤러 apiController_schedule_recurrences.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ScheduleRecurrencesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /schedule-recurrences */
    async listScheduleRecurrences(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/schedule-recurrences", query), { header: authHeader(token), cancelId });
    }
    /** GET /schedule-recurrence */
    async getScheduleRecurrence(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/schedule-recurrence", query), { header: authHeader(token), cancelId });
    }
    /** POST /schedule-recurrence */
    async createScheduleRecurrence(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/schedule-recurrence", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /schedule-recurrence */
    async patchScheduleRecurrence(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/schedule-recurrence", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /schedule-recurrence */
    async deleteScheduleRecurrence(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/schedule-recurrence", query), { header: authHeader(token), body, cancelId });
    }
}
