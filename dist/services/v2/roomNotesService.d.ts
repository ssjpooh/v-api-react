import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 room_notes — 서버 apiHandler_room_notes.go (컨트롤러 apiController_room_notes.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class RoomNotesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /roomNotes */
    getRoomNotes(params: V2BaseParams): Promise<FoxApiResult>;
}
