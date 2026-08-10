import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 org_federation — 서버 apiHandler_org_federation.go (컨트롤러 apiController_org_federation.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class OrgFederationService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /orgFederation */
    getOrgFederation(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /orgFederation */
    createOrgFederation(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /orgFederation */
    deleteOrgFederation(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /orgFederationInvites */
    listOrgFederationInvites(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /orgFederationInvite */
    createOrgFederationInvite(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /orgFederationInvite */
    deleteOrgFederationInvite(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /orgFederationInvite/accept */
    acceptOrgFederationInvite(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /orgFederationInvite/reject */
    rejectOrgFederationInvite(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /orgFederationSite */
    leaveOrgFederation(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /orgFederationVisibility */
    patchOrgFederationVisibility(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /orgFederationAudits */
    listOrgFederationAudits(params: V2BaseParams): Promise<FoxApiResult>;
}
