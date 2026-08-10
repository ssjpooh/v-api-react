import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_leave — 서버 apiHandler_vone_leave.go (컨트롤러 apiController_vone_leave.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneLeaveService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /leave-types */
  async listLeaveTypes(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/leave-types", query), { header: authHeader(token), cancelId });
  }

  /** GET /leave-balance */
  async getLeaveBalance(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/leave-balance", query), { header: authHeader(token), cancelId });
  }

  /** GET /leave-balances */
  async listLeaveBalances(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/leave-balances", query), { header: authHeader(token), cancelId });
  }

  /** POST /leave-balance */
  async grantLeaveBalance(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/leave-balance", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /leave-adjust */
  async adjustLeaveBalance(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/leave-adjust", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /leave-logs */
  async listLeaveLogs(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/leave-logs", query), { header: authHeader(token), cancelId });
  }

  /** GET /leave-requests */
  async listLeaveRequests(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/leave-requests", query), { header: authHeader(token), cancelId });
  }

  /** GET /leave-occupancy */
  async listLeaveOccupancy(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/leave-occupancy", query), { header: authHeader(token), cancelId });
  }
}
