import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 account_type_workspace_menus — 서버 apiHandler_account_type_workspace_menus.go (컨트롤러 apiController_account_type_workspace_menus.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class AccountTypeWorkspaceMenusService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /accountTypeWorkspaceMenus */
    listAccountTypeWorkspaceMenus(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /accountTypeWorkspaceMenu */
    getAccountTypeWorkspaceMenu(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /accountTypeWorkspaceMenu */
    saveAccountTypeWorkspaceMenu(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /accountTypeWorkspaceMenu */
    patchAccountTypeWorkspaceMenu(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /accountTypeWorkspaceMenu */
    deleteAccountTypeWorkspaceMenu(params: V2BodyParams): Promise<FoxApiResult>;
}
