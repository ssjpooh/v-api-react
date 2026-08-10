import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 room_detail — 서버 apiHandler_room_detail.go (컨트롤러 apiController_room_detail.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class RoomDetailService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /roomDetail */
    getRoomDetail(params: V2BaseParams): Promise<FoxApiResult>;
}
