import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 site — 서버 apiHandler_site.go (컨트롤러 apiController_site.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class SiteService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /sites */
    listSites(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /site */
    getSite(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /site */
    createSite(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /site */
    updateSite(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /site */
    deleteSite(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /site/newSiteSecret */
    newSiteSecret(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /distributedUsers */
    distributedUsers(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /site/exists */
    siteExists(params: V2BaseParams): Promise<FoxApiResult>;
}
