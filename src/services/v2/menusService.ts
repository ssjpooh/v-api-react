import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 menus — 서버 apiHandler_menus.go (컨트롤러 apiController_menus.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class MenusService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /menus */
  async listMenus(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/menus", query), { header: authHeader(token), cancelId });
  }

  /** GET /menu */
  async getMenu(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/menu", query), { header: authHeader(token), cancelId });
  }

  /** POST /menu */
  async createMenu(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/menu", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /menu */
  async patchMenu(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/menu", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /menu */
  async deleteMenu(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/menu", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /myMenus */
  async getMyMenus(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/myMenus", query), { header: authHeader(token), cancelId });
  }
}
