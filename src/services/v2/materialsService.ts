import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 materials — 서버 apiHandler_materials.go (컨트롤러 apiController_materials.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class MaterialsService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /materials */
  async listMaterials(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/materials", query), { header: authHeader(token), cancelId });
  }

  /** GET /material */
  async getMaterial(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/material", query), { header: authHeader(token), cancelId });
  }

  /** GET /material-download-url */
  async getMaterialDownloadURL(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/material-download-url", query), { header: authHeader(token), cancelId });
  }

  /** POST /material-doc */
  async createDocMaterial(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/material-doc", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /material-video-file */
  async createVideoFileMaterial(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/material-video-file", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /material-video-url */
  async createVideoURLMaterial(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/material-video-url", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /material-upload-url */
  async issueMaterialUploadURL(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/material-upload-url", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /material-commit */
  async commitMaterialUpload(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/material-commit", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /material-upload-cancel */
  async cancelMaterialUpload(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/material-upload-cancel", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /material */
  async patchMaterial(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/material", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /material */
  async deleteMaterial(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/material", query), { header: authHeader(token), body, cancelId });
  }
}
