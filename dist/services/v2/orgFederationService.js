import { authHeader, v2Path } from "./shared";
/**
 * v2 org_federation — 서버 apiHandler_org_federation.go (컨트롤러 apiController_org_federation.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class OrgFederationService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /orgFederation */
    async getOrgFederation(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/orgFederation", query), { header: authHeader(token), cancelId });
    }
    /** POST /orgFederation */
    async createOrgFederation(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/orgFederation", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /orgFederation */
    async deleteOrgFederation(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/orgFederation", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /orgFederationInvites */
    async listOrgFederationInvites(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/orgFederationInvites", query), { header: authHeader(token), cancelId });
    }
    /** POST /orgFederationInvite */
    async createOrgFederationInvite(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/orgFederationInvite", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /orgFederationInvite */
    async deleteOrgFederationInvite(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/orgFederationInvite", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /orgFederationInvite/accept */
    async acceptOrgFederationInvite(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/orgFederationInvite/accept", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /orgFederationInvite/reject */
    async rejectOrgFederationInvite(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/orgFederationInvite/reject", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /orgFederationSite */
    async leaveOrgFederation(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/orgFederationSite", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /orgFederationVisibility */
    async patchOrgFederationVisibility(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/orgFederationVisibility", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /orgFederationAudits */
    async listOrgFederationAudits(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/orgFederationAudits", query), { header: authHeader(token), cancelId });
    }
}
