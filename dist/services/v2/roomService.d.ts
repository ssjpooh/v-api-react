import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 room — 서버 apiHandler_room.go (컨트롤러 apiController_room.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class RoomService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /rooms */
    listRooms(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /room */
    getRoom(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /room */
    createRoom(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /room */
    patchRoom(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /room */
    deleteRoom(params: V2BodyParams): Promise<FoxApiResult>;
}
