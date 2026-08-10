import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_projects — 서버 apiHandler_vone_projects.go (컨트롤러 apiController_vone_projects.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneProjectsService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /vone-products */
  async listVoneProducts(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/vone-products", query), { header: authHeader(token), cancelId });
  }

  /** POST /vone-product */
  async createVoneProduct(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/vone-product", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /vone-product */
  async patchVoneProduct(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/vone-product", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /vone-product */
  async deleteVoneProduct(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/vone-product", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /projects */
  async listProjects(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/projects", query), { header: authHeader(token), cancelId });
  }

  /** GET /project */
  async getProject(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/project", query), { header: authHeader(token), cancelId });
  }

  /** POST /project */
  async createProject(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/project", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /project */
  async patchProject(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/project", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /project */
  async deleteProject(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/project", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /project-restore */
  async restoreProject(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/project-restore", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /project-archive */
  async archiveProject(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/project-archive", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /project-unarchive */
  async unarchiveProject(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/project-unarchive", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /project-members */
  async listProjectMembers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/project-members", query), { header: authHeader(token), cancelId });
  }

  /** POST /project-member */
  async addProjectMember(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/project-member", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /project-member */
  async removeProjectMember(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/project-member", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /project-posts */
  async listProjectPosts(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/project-posts", query), { header: authHeader(token), cancelId });
  }

  /** POST /project-post */
  async createProjectPost(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/project-post", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /project-post */
  async patchProjectPost(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/project-post", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /project-post */
  async deleteProjectPost(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/project-post", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /project-read */
  async touchProjectRead(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/project-read", query), { header: authHeader(token), body, cancelId });
  }
}
