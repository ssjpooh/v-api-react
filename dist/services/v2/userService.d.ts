import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 user — 서버 apiHandler_user.go (컨트롤러 apiController_user.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class UserService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /users */
    listUsers(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /user */
    getUser(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /user */
    createUsers(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /user */
    deleteUser(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /user */
    updateUser(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /user/grant */
    grantManager(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /user/password/verify */
    passwordVerify(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /user/accountType */
    assignAccountType(params: V2BodyParams): Promise<FoxApiResult>;
}
