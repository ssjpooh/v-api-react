import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 org_users — 서버 apiHandler_org_users.go (컨트롤러 apiController_org_users.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class OrgUsersService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /orgUsers */
    listOrgUsers(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /orgSearch */
    searchOrgUsers(params: V2BaseParams): Promise<FoxApiResult>;
}
