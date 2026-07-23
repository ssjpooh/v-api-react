import { buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { SiteAvailableData, SitesList } from "../models";
export class SiteService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getSites(params) {
        const { token, cancelId, query, pageNo, pagePerRow, keyword, groupID, isActive } = params;
        const path = buildPath("/v1/site", query ?? { keyword, groupID, pageNo, pagePerRow, isActive });
        const result = await this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => SitesList.fromJson(json));
    }
    async getSiteList(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/site/getList", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async addSite(params) {
        const { token, site, body, cancelId } = params;
        return this.apiClient.post(`/v1/site?site=${site}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifySite(params) {
        const { token, siteIdx, body, cancelId } = params;
        const targetSiteIndex = params.siteIndex ?? siteIdx;
        return this.apiClient.patch(`/v1/site/siteIdx/${targetSiteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeSite(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.delete("/v1/removeSite", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getDBSiteInfo(params) {
        const { siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/site/siteIDX/${siteIndex}`, { cancelId: cancelId });
    }
    async getSiteInfo(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/site/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getSiteInfoCount(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/site/getCount/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async reGenerateSecretKey(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.post(`/v1/site/reGenerateSecretKey/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getAvailableCreateUser(params) {
        const { token, siteIndex, cancelId } = params;
        const result = await this.apiClient.get(`/v1/site/getAvailableCreateUser/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => SiteAvailableData.fromJson(json));
    }
}
