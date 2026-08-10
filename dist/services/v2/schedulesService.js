import { authHeader, v2Path } from "./shared";
/**
 * v2 schedules — 서버 apiHandler_schedules.go (컨트롤러 apiController_schedules.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class SchedulesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /mySchedules */
    async listMySchedules(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/mySchedules", query), { header: authHeader(token), cancelId });
    }
    /** GET /schedules */
    async listSchedules(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/schedules", query), { header: authHeader(token), cancelId });
    }
    /** GET /schedule */
    async getSchedule(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/schedule", query), { header: authHeader(token), cancelId });
    }
    /** POST /schedule */
    async createSchedule(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/schedule", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /schedule */
    async patchSchedule(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/schedule", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /schedule */
    async deleteSchedule(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/schedule", query), { header: authHeader(token), body, cancelId });
    }
}
