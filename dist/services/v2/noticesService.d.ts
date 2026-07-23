import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 notices — 서버 apiHandler_notices.go (컨트롤러 apiController_notices.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class NoticesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /notices */
    listNotices(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /notice */
    getNotice(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /notice/files */
    getNoticeFiles(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /notice */
    createNotice(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /notice/file */
    createNoticeFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /notice */
    updateNotice(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /notice */
    deleteNotice(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /notice/file */
    deleteNoticeFile(params: V2BodyParams): Promise<FoxApiResult>;
}
