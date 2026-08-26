import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_attendance — 서버 apiHandler_vone_attendance.go (컨트롤러 apiController_vone_attendance.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneAttendanceService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /attendance-today */
    getAttendanceToday(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /attendances */
    listAttendances(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /attendance-summary */
    getAttendanceSummary(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /attendance-check-in */
    checkInAttendance(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /attendance-check-out */
    checkOutAttendance(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /attendance-late-check-out */
    lateCheckOutAttendance(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /attendance */
    patchAttendance(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /attendance-close */
    closeAttendanceMonth(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /attendance-reopen */
    reopenAttendanceMonth(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /company-holidays */
    listCompanyHolidays(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /company-holiday */
    upsertCompanyHoliday(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /company-holiday-sync */
    syncCompanyHolidays(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /company-holiday */
    deleteCompanyHoliday(params: V2BodyParams): Promise<FoxApiResult>;
}
