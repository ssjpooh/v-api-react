import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_platform — 서버 apiHandler_vone_platform.go (컨트롤러 apiController_vone_platform.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VonePlatformService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /vone-menus */
    listVoneMenus(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /roles */
    listVoneRoles(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /menu-permissions */
    listMenuPermissions(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /menu-permission */
    grantMenuPermission(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /menu-permission */
    revokeMenuPermission(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /login-attempts */
    listLoginAttempts(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /login-attempt-clear */
    clearLoginAttempts(params: V2BodyParams): Promise<FoxApiResult>;
}
