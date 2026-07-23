import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 room_attendees — 서버 apiHandler_room_attendees.go (컨트롤러 apiController_room_attendees.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class RoomAttendeesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /attendees */
    listAttendees(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /attendee */
    getAttendee(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /attendee/invited */
    getInvitedAttendee(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /attendees */
    addInvitedAttendee(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /attendees */
    updateInvitedAttendee(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /attendees */
    deleteInvitedAttendee(params: V2BodyParams): Promise<FoxApiResult>;
}
