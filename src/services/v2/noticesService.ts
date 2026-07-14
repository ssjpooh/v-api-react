import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 notices — 서버 apiHandler_notices.go (컨트롤러 apiController_notices.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class NoticesService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /notices */
  async listNotices(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/notices", query), { header: authHeader(token), cancelId });
  }

  /** GET /notice */
  async getNotice(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/notice", query), { header: authHeader(token), cancelId });
  }

  /** GET /notice/files */
  async getNoticeFiles(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/notice/files", query), { header: authHeader(token), cancelId });
  }

  /** POST /notice */
  async createNotice(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/notice", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /notice/file */
  async createNoticeFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/notice/file", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /notice */
  async updateNotice(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/notice", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /notice */
  async deleteNotice(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/notice", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /notice/file */
  async deleteNoticeFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/notice/file", query), { header: authHeader(token), body, cancelId });
  }
}
