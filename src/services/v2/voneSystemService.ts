import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_system — 서버 apiHandler_vone_system.go (컨트롤러 apiController_vone_system.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneSystemService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /system-dashboard */
  async getSystemDashboard(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-dashboard", query), { header: authHeader(token), cancelId });
  }

  /** GET /system-users */
  async listSystemUsers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-users", query), { header: authHeader(token), cancelId });
  }

  /** GET /system-user */
  async getSystemUser(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-user", query), { header: authHeader(token), cancelId });
  }

  /** PATCH /system-user */
  async patchSystemUser(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/system-user", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /system-user-state */
  async setSystemUserState(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/system-user-state", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /system-user-retire */
  async retireSystemUser(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/system-user-retire", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /system-user-reset-password */
  async resetSystemUserPassword(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/system-user-reset-password", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /system-user-logout-all */
  async logoutSystemUserAll(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/system-user-logout-all", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /system-user-offboard */
  async getSystemUserOffboard(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-user-offboard", query), { header: authHeader(token), cancelId });
  }

  /** GET /system-kinds */
  async listSystemKinds(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-kinds", query), { header: authHeader(token), cancelId });
  }

  /** PATCH /system-kind */
  async patchSystemKind(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/system-kind", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /system-roles */
  async listSystemRoles(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-roles", query), { header: authHeader(token), cancelId });
  }

  /** POST /system-role */
  async createSystemRole(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/system-role", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /system-role */
  async patchSystemRole(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/system-role", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /system-role */
  async deleteSystemRole(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/system-role", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /system-depts */
  async listSystemDepts(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-depts", query), { header: authHeader(token), cancelId });
  }

  /** GET /system-dept */
  async getSystemDept(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-dept", query), { header: authHeader(token), cancelId });
  }

  /** POST /system-dept */
  async createSystemDept(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/system-dept", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /system-dept */
  async patchSystemDept(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/system-dept", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /system-dept */
  async deleteSystemDept(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/system-dept", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /system-positions */
  async listSystemPositions(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-positions", query), { header: authHeader(token), cancelId });
  }

  /** PATCH /system-positions */
  async saveSystemPositions(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/system-positions", query), { header: authHeader(token), body, cancelId });
  }

  /** PUT /system-positions */
  async putSystemPositions(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.put(v2Path(siteId, "/system-positions", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /system-settings */
  async getSystemSettings(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/system-settings", query), { header: authHeader(token), cancelId });
  }

  /** PATCH /system-settings */
  async saveSystemSettings(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/system-settings", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /audit-logs */
  async listAuditLogs(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/audit-logs", query), { header: authHeader(token), cancelId });
  }

  /** GET /audit-retention */
  async getAuditRetention(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/audit-retention", query), { header: authHeader(token), cancelId });
  }

  /** PATCH /audit-retention */
  async patchAuditRetention(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/audit-retention", query), { header: authHeader(token), body, cancelId });
  }

  /** PUT /audit-retention */
  async putAuditRetention(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.put(v2Path(siteId, "/audit-retention", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /audit-export */
  async exportAuditLogs(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/audit-export", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /audit-export-file */
  async downloadAuditExport(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/audit-export-file", query), { header: authHeader(token), cancelId });
  }
}
