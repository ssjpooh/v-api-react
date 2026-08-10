import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_drive — 서버 apiHandler_vone_drive.go (컨트롤러 apiController_vone_drive.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneDriveService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /drive-folders */
    async listDriveFolders(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/drive-folders", query), { header: authHeader(token), cancelId });
    }
    /** POST /drive-folder */
    async createDriveFolder(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-folder", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /drive-folder */
    async patchDriveFolder(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/drive-folder", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /drive-folder */
    async deleteDriveFolder(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/drive-folder", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /drive-folder-restore */
    async restoreDriveFolder(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-folder-restore", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /drive-files */
    async listDriveFiles(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/drive-files", query), { header: authHeader(token), cancelId });
    }
    /** GET /drive-file */
    async getDriveFile(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/drive-file", query), { header: authHeader(token), cancelId });
    }
    /** GET /drive-file-download-url */
    async getDriveFileDownloadURL(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/drive-file-download-url", query), { header: authHeader(token), cancelId });
    }
    /** POST /drive-file */
    async createDriveFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-file", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /drive-file */
    async patchDriveFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/drive-file", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /drive-file */
    async deleteDriveFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/drive-file", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /drive-upload-policy */
    async getDriveUploadPolicy(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/drive-upload-policy", query), { header: authHeader(token), cancelId });
    }
    /** POST /drive-file-upload-url */
    async issueDriveFileUploadURL(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-file-upload-url", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /drive-file-upload-urls */
    async issueDriveFileUploadURLs(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-file-upload-urls", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /drive-file-upload-cancel */
    async cancelDriveFileUpload(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-file-upload-cancel", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /drive-file-commit */
    async commitDriveFileUpload(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-file-commit", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /drive-file-restore */
    async restoreDriveFile(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-file-restore", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /drive-shares */
    async listDriveShares(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/drive-shares", query), { header: authHeader(token), cancelId });
    }
    /** POST /drive-share */
    async createDriveShare(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/drive-share", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /drive-share */
    async deleteDriveShare(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/drive-share", query), { header: authHeader(token), body, cancelId });
    }
}
