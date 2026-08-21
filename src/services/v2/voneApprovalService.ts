import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_approval — 서버 apiHandler_vone_approval.go (컨트롤러 apiController_vone_approval.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneApprovalService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /approval-forms */
  async listApprovalForms(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/approval-forms", query), { header: authHeader(token), cancelId });
  }

  /** GET /approval-lines */
  async listApprovalLines(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/approval-lines", query), { header: authHeader(token), cancelId });
  }

  /** GET /approval-line */
  async getApprovalLine(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/approval-line", query), { header: authHeader(token), cancelId });
  }

  /** POST /approval-line */
  async createApprovalLine(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-line", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /approval-line */
  async patchApprovalLine(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/approval-line", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /approval-line */
  async deleteApprovalLine(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/approval-line", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /approval-documents */
  async listApprovalDocuments(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/approval-documents", query), { header: authHeader(token), cancelId });
  }

  /** GET /approval-document */
  async getApprovalDocument(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/approval-document", query), { header: authHeader(token), cancelId });
  }

  /** GET /approval-count */
  async getApprovalCount(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/approval-count", query), { header: authHeader(token), cancelId });
  }

  /** POST /approval-document */
  async createApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-document", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /approval-document */
  async patchApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/approval-document", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /approval-document */
  async deleteApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/approval-document", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /approval-submit */
  async submitApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-submit", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /approval-withdraw */
  async withdrawApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-withdraw", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /approval-cancel */
  async cancelApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-cancel", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /approval-approve */
  async approveApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-approve", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /approval-reject */
  async rejectApprovalDocument(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-reject", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /approval-file */
  async addApprovalFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/approval-file", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /approval-file */
  async removeApprovalFile(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/approval-file", query), { header: authHeader(token), body, cancelId });
  }
}
