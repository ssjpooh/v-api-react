import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 user — 서버 apiHandler_user.go (컨트롤러 apiController_user.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class UserService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /users */
  async listUsers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/users", query), { header: authHeader(token), cancelId });
  }

  /** GET /user */
  async getUser(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/user", query), { header: authHeader(token), cancelId });
  }

  /** POST /user */
  async createUsers(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/user", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /user */
  async deleteUser(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/user", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /user */
  async updateUser(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/user", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /user/grant */
  async grantManager(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/user/grant", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /user/password/verify */
  async passwordVerify(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/user/password/verify", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /user/accountType */
  async assignAccountType(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/user/accountType", query), { header: authHeader(token), body, cancelId });
  }
}
