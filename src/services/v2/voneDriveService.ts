import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_drive — 서버 apiHandler_vone_drive.go (컨트롤러 apiController_vone_drive.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneDriveService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /drive-folders */
  async listDriveFolders(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/drive-folders", query), { header: authHeader(token), cancelId });
  }

  /** POST /drive-folder */
  async createDriveFolder(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-folder", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /drive-folder */
  async patchDriveFolder(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/drive-folder", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /drive-folder */
  async deleteDriveFolder(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/drive-folder", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /drive-folder-restore */
  async restoreDriveFolder(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-folder-restore", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /drive-files */
  async listDriveFiles(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/drive-files", query), { header: authHeader(token), cancelId });
  }

  /** GET /drive-file */
  async getDriveFile(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/drive-file", query), { header: authHeader(token), cancelId });
  }

  /** GET /drive-file-download-url */
  async getDriveFileDownloadURL(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/drive-file-download-url", query), { header: authHeader(token), cancelId });
  }

  /** POST /drive-file */
  async createDriveFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-file", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /drive-file */
  async patchDriveFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/drive-file", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /drive-file */
  async deleteDriveFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/drive-file", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /drive-upload-policy */
  async getDriveUploadPolicy(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/drive-upload-policy", query), { header: authHeader(token), cancelId });
  }

  /** POST /drive-file-upload-url */
  async issueDriveFileUploadURL(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-file-upload-url", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /drive-file-upload-urls */
  async issueDriveFileUploadURLs(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-file-upload-urls", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /drive-file-upload-cancel */
  async cancelDriveFileUpload(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-file-upload-cancel", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /drive-file-commit */
  async commitDriveFileUpload(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-file-commit", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /drive-file-restore */
  async restoreDriveFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-file-restore", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /drive-shares */
  async listDriveShares(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/drive-shares", query), { header: authHeader(token), cancelId });
  }

  /** POST /drive-share */
  async createDriveShare(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-share", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /drive-share */
  async deleteDriveShare(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/drive-share", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /drive-usage */
  async getDriveUsage(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/drive-usage", query), { header: authHeader(token), cancelId });
  }

  /** DELETE /drive-file-purge */
  async purgeDriveFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/drive-file-purge", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /drive-folder-purge */
  async purgeDriveFolder(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/drive-folder-purge", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /drive-trash */
  async emptyDriveTrash(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/drive-trash", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /drive-favorite */
  async addDriveFavorite(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/drive-favorite", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /drive-favorite */
  async removeDriveFavorite(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/drive-favorite", query), { header: authHeader(token), body, cancelId });
  }
}
