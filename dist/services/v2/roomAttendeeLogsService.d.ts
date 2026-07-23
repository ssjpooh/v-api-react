import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 room_attendee_logs — 서버 apiHandler_room_attendee_logs.go (컨트롤러 apiController_room_attendee_logs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class RoomAttendeeLogsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /attendee-logs */
    listRoomAttendeeLogs(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /attendee-log */
    getRoomAttendeeLogs(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /attendance */
    getAttendance(params: V2BaseParams): Promise<FoxApiResult>;
}
