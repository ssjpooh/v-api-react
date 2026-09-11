import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_body_media — 서버 apiHandler_vone_body_media.go (컨트롤러 apiController_vone_body_media.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneBodyMediaService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /vone-image */
    uploadVoneBodyMedia(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /vone-media-upload-policy */
    getVoneMediaUploadPolicy(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /vone-media-upload-urls */
    issueVoneMediaUploadURLs(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /vone-media-upload-cancel */
    cancelVoneMediaUpload(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /vone-media-commit */
    commitVoneMediaUpload(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /vone-image */
    downloadVoneBodyMedia(params: V2BaseParams): Promise<FoxApiResult>;
}
