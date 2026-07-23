import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 account_types — 서버 apiHandler_account_types.go (컨트롤러 apiController_account_types.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class AccountTypesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /accountTypes */
    listAccountTypes(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /accountTypeUserCounts */
    listAccountTypeUserCounts(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /accountType */
    getAccountType(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /accountType */
    createAccountType(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /accountType */
    patchAccountType(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /accountType */
    deleteAccountType(params: V2BodyParams): Promise<FoxApiResult>;
}
