import { authHeader, v2Path } from "./shared";
/**
 * v2 room_attendee_logs — 서버 apiHandler_room_attendee_logs.go (컨트롤러 apiController_room_attendee_logs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class RoomAttendeeLogsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /attendee-logs */
    async listRoomAttendeeLogs(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendee-logs", query), { header: authHeader(token), cancelId });
    }
    /** GET /attendee-log */
    async getRoomAttendeeLogs(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendee-log", query), { header: authHeader(token), cancelId });
    }
    /** GET /attendance */
    async getAttendance(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendance", query), { header: authHeader(token), cancelId });
    }
}
