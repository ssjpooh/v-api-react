import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_boards — 서버 apiHandler_vone_boards.go (컨트롤러 apiController_vone_boards.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneBoardsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /boards */
    listVoneBoards(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /board */
    getVoneBoard(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /board */
    createVoneBoard(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /board */
    patchVoneBoard(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /board */
    deleteVoneBoard(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /board-read */
    readVoneBoard(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /board-read-all */
    readAllVoneBoards(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /board-unread-count */
    getVoneBoardUnreadCount(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /board-comments */
    listVoneBoardComments(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /board-comment */
    createVoneBoardComment(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /board-comment */
    patchVoneBoardComment(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /board-comment */
    deleteVoneBoardComment(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /board-file */
    addVoneBoardFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /board-file */
    deleteVoneBoardFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /board-share */
    addVoneBoardShare(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /board-share */
    deleteVoneBoardShare(params: V2BodyParams): Promise<FoxApiResult>;
}
