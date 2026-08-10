import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_leave — 서버 apiHandler_vone_leave.go (컨트롤러 apiController_vone_leave.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneLeaveService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /leave-types */
    listLeaveTypes(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /leave-balance */
    getLeaveBalance(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /leave-balances */
    listLeaveBalances(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /leave-balance */
    grantLeaveBalance(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /leave-adjust */
    adjustLeaveBalance(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /leave-logs */
    listLeaveLogs(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /leave-requests */
    listLeaveRequests(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /leave-occupancy */
    listLeaveOccupancy(params: V2BaseParams): Promise<FoxApiResult>;
}
