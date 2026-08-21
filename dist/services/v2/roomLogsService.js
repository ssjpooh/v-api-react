import { authHeader, v2Path } from "./shared";
/**
 * v2 room_logs — 서버 apiHandler_room_logs.go (컨트롤러 apiController_room_logs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class RoomLogsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /roomLogs */
    async listRoomLogs(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/roomLogs", query), { header: authHeader(token), cancelId });
    }
    /** GET /roomLog */
    async getRoomLog(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/roomLog", query), { header: authHeader(token), cancelId });
    }
    /** GET /roomLogNotes */
    async getRoomLogNotes(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/roomLogNotes", query), { header: authHeader(token), cancelId });
    }
}
