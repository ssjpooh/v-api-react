import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_platform — 서버 apiHandler_vone_platform.go (컨트롤러 apiController_vone_platform.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VonePlatformService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /vone-menus */
  async listVoneMenus(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/vone-menus", query), { header: authHeader(token), cancelId });
  }

  /** GET /roles */
  async listVoneRoles(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/roles", query), { header: authHeader(token), cancelId });
  }

  /** GET /menu-permissions */
  async listMenuPermissions(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/menu-permissions", query), { header: authHeader(token), cancelId });
  }

  /** POST /menu-permission */
  async grantMenuPermission(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/menu-permission", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /menu-permission */
  async revokeMenuPermission(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/menu-permission", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /login-attempts */
  async listLoginAttempts(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/login-attempts", query), { header: authHeader(token), cancelId });
  }

  /** POST /login-attempt-clear */
  async clearLoginAttempts(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/login-attempt-clear", query), { header: authHeader(token), body, cancelId });
  }
}
