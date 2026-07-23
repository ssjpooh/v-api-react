import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 branding — 서버 apiHandler_branding.go (컨트롤러 apiController_branding.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class BrandingService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /branding */
    getBrandingInfo(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /branding */
    saveBrandingInfo(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /branding */
    patchBrandingInfo(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /branding */
    deleteBrandingInfo(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /branding-file */
    getBrandingFileURL(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /branding-file */
    uploadBrandingFile(params: V2BodyParams): Promise<FoxApiResult>;
}
