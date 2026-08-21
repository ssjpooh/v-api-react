import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_drive — 서버 apiHandler_vone_drive.go (컨트롤러 apiController_vone_drive.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneDriveService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /drive-folders */
    listDriveFolders(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /drive-folder */
    createDriveFolder(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /drive-folder */
    patchDriveFolder(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /drive-folder */
    deleteDriveFolder(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /drive-folder-restore */
    restoreDriveFolder(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /drive-files */
    listDriveFiles(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /drive-file */
    getDriveFile(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /drive-file-download-url */
    getDriveFileDownloadURL(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /drive-file */
    createDriveFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /drive-file */
    patchDriveFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /drive-file */
    deleteDriveFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /drive-upload-policy */
    getDriveUploadPolicy(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /drive-file-upload-url */
    issueDriveFileUploadURL(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /drive-file-upload-urls */
    issueDriveFileUploadURLs(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /drive-file-upload-cancel */
    cancelDriveFileUpload(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /drive-file-commit */
    commitDriveFileUpload(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /drive-file-restore */
    restoreDriveFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /drive-shares */
    listDriveShares(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /drive-share */
    createDriveShare(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /drive-share */
    deleteDriveShare(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /drive-usage */
    getDriveUsage(params: V2BaseParams): Promise<FoxApiResult>;
    /** DELETE /drive-file-purge */
    purgeDriveFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /drive-folder-purge */
    purgeDriveFolder(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /drive-trash */
    emptyDriveTrash(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /drive-favorite */
    addDriveFavorite(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /drive-favorite */
    removeDriveFavorite(params: V2BodyParams): Promise<FoxApiResult>;
}
