import { authHeader, v2Path } from "./shared";
/**
 * v2 room — 서버 apiHandler_room.go (컨트롤러 apiController_room.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class RoomService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /rooms */
    async listRooms(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/rooms", query), { header: authHeader(token), cancelId });
    }
    /** GET /room */
    async getRoom(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/room", query), { header: authHeader(token), cancelId });
    }
    /** POST /room */
    async createRoom(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/room", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /room */
    async patchRoom(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/room", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /room */
    async deleteRoom(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/room", query), { header: authHeader(token), body, cancelId });
    }
}
