import { authHeader, v2Path } from "./shared";
/**
 * v2 room_attendees — 서버 apiHandler_room_attendees.go (컨트롤러 apiController_room_attendees.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class RoomAttendeesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /attendees */
    async listAttendees(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendees", query), { header: authHeader(token), cancelId });
    }
    /** GET /attendee */
    async getAttendee(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendee", query), { header: authHeader(token), cancelId });
    }
    /** GET /attendee/invited */
    async getInvitedAttendee(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/attendee/invited", query), { header: authHeader(token), cancelId });
    }
    /** POST /attendees */
    async addInvitedAttendee(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/attendees", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /attendees */
    async updateInvitedAttendee(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/attendees", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /attendees */
    async deleteInvitedAttendee(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/attendees", query), { header: authHeader(token), body, cancelId });
    }
}
