import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_body_images — 서버 apiHandler_vone_body_images.go (컨트롤러 apiController_vone_body_images.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneBodyImagesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /vone-image */
    uploadVoneBodyImage(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /vone-image */
    downloadVoneBodyImage(params: V2BaseParams): Promise<FoxApiResult>;
}
