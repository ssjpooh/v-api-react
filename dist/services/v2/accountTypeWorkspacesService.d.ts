import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 account_type_workspaces — 서버 apiHandler_account_type_workspaces.go (컨트롤러 apiController_account_type_workspaces.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class AccountTypeWorkspacesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /accountTypeWorkspaces */
    listAccountTypeWorkspaces(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /accountTypeWorkspace */
    getAccountTypeWorkspace(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /accountTypeWorkspace */
    saveAccountTypeWorkspace(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /accountTypeWorkspace */
    patchAccountTypeWorkspace(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /accountTypeWorkspace */
    deleteAccountTypeWorkspace(params: V2BodyParams): Promise<FoxApiResult>;
}
