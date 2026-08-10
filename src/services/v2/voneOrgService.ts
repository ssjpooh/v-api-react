import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_org — 서버 apiHandler_vone_org.go (컨트롤러 apiController_vone_org.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneOrgService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /contacts */
  async listContacts(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/contacts", query), { header: authHeader(token), cancelId });
  }

  /** GET /contact */
  async getContact(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/contact", query), { header: authHeader(token), cancelId });
  }

  /** POST /contact */
  async createContact(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/contact", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /contact */
  async patchContact(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/contact", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /contact */
  async deleteContact(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/contact", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /contact-categories */
  async listContactCategories(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/contact-categories", query), { header: authHeader(token), cancelId });
  }

  /** POST /contact-category */
  async upsertContactCategory(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/contact-category", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /contact-category */
  async deleteContactCategory(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/contact-category", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /user-absences */
  async listUserAbsences(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/user-absences", query), { header: authHeader(token), cancelId });
  }

  /** POST /user-absence */
  async createUserAbsence(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/user-absence", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /user-absence */
  async patchUserAbsence(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/user-absence", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /user-absence */
  async deleteUserAbsence(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/user-absence", query), { header: authHeader(token), body, cancelId });
  }
}
