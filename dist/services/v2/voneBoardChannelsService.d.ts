import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_board_channels — 서버 apiHandler_vone_board_channels.go (컨트롤러 apiController_vone_board_channels.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneBoardChannelsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /board-channels */
    listVoneBoardChannels(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /board-channel */
    createVoneBoardChannel(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /board-channel */
    patchVoneBoardChannel(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /board-channel */
    deleteVoneBoardChannel(params: V2BodyParams): Promise<FoxApiResult>;
}
