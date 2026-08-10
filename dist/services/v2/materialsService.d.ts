import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 materials — 서버 apiHandler_materials.go (컨트롤러 apiController_materials.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class MaterialsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /materials */
    listMaterials(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /material */
    getMaterial(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /material-download-url */
    getMaterialDownloadURL(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /material-doc */
    createDocMaterial(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /material-video-file */
    createVideoFileMaterial(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /material-video-url */
    createVideoURLMaterial(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /material-upload-url */
    issueMaterialUploadURL(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /material-commit */
    commitMaterialUpload(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /material-upload-cancel */
    cancelMaterialUpload(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /material */
    patchMaterial(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /material */
    deleteMaterial(params: V2BodyParams): Promise<FoxApiResult>;
}
