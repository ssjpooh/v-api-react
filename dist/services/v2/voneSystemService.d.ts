import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_system — 서버 apiHandler_vone_system.go (컨트롤러 apiController_vone_system.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneSystemService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /system-dashboard */
    getSystemDashboard(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /system-users */
    listSystemUsers(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /system-user */
    getSystemUser(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /system-user */
    patchSystemUser(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /system-user-state */
    setSystemUserState(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /system-user-retire */
    retireSystemUser(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /system-user-reset-password */
    resetSystemUserPassword(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /system-user-logout-all */
    logoutSystemUserAll(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /system-user-offboard */
    getSystemUserOffboard(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /system-kinds */
    listSystemKinds(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /system-kind */
    patchSystemKind(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /system-roles */
    listSystemRoles(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /system-role */
    createSystemRole(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /system-role */
    patchSystemRole(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /system-role */
    deleteSystemRole(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /system-depts */
    listSystemDepts(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /system-dept */
    getSystemDept(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /system-dept */
    createSystemDept(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /system-dept */
    patchSystemDept(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /system-dept */
    deleteSystemDept(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /system-positions */
    listSystemPositions(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /system-positions */
    saveSystemPositions(params: V2BodyParams): Promise<FoxApiResult>;
    /** PUT /system-positions */
    putSystemPositions(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /system-settings */
    getSystemSettings(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /system-settings */
    saveSystemSettings(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /audit-logs */
    listAuditLogs(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /audit-retention */
    getAuditRetention(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /audit-retention */
    patchAuditRetention(params: V2BodyParams): Promise<FoxApiResult>;
    /** PUT /audit-retention */
    putAuditRetention(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /audit-export */
    exportAuditLogs(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /audit-export-file */
    downloadAuditExport(params: V2BaseParams): Promise<FoxApiResult>;
}
