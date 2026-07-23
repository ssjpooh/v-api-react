import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 room_logs — 서버 apiHandler_room_logs.go (컨트롤러 apiController_room_logs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class RoomLogsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /roomLogs */
    listRoomLogs(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /roomLog */
    getRoomLog(params: V2BaseParams): Promise<FoxApiResult>;
}
