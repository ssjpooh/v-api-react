import { buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { ConcurrentInfo } from "../models";
export class StatisticsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getStatisticsHeader(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/statistics/all/header", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsGroups(params) {
        const { token, cancelId, startDate, endDate, rangeType } = params;
        let path = "/v1/statistics/get/group";
        const queryParams = { 'rangeType': rangeType?.toString() ?? '0' };
        if (startDate != undefined)
            queryParams['startDate'] = startDate;
        if (endDate != undefined)
            queryParams['endDate'] = endDate;
        const uri = buildPath(path, queryParams);
        return this.apiClient.get(uri, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsGroupDetail(params) {
        const { token, cancelId, startDate, endDate, groupID, rangeType, viewType } = params;
        let path = `/v1/statistics/get/groupDetail/${groupID}`;
        const queryParams = { 'rangeType': rangeType, 'viewType': viewType };
        if (startDate != undefined)
            queryParams['startDate'] = startDate;
        if (endDate != undefined)
            queryParams['endDate'] = endDate;
        const uri = buildPath(path, queryParams);
        return this.apiClient.get(uri, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsSites(params) {
        const { token, startDate, endDate, rangeType, cancelId } = params;
        return this.apiClient.get(`/v1/statistics/get/site?rangeType=${rangeType}&startDate=${startDate}&endDate=${endDate}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsSiteDetail(params) {
        const { token, rangeType, startDate, endDate, siteID, viewType, cancelId } = params;
        return this.apiClient.get(`/v1/statistics/get/siteDetail/${siteID}?rangeType=${rangeType}&startDate=${startDate}&endDate=${endDate}&viewType=${viewType}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getConcurrentInfo(params) {
        const { token, range, cancelId } = params;
        const result = await this.apiClient.get(`/v1/concurrent/get?range=${range}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => ConcurrentInfo.fromJson(json));
    }
    async getStatisticsSiteList(params) {
        const { token, query, cancelId } = params;
        return this.apiClient.get(buildPath("/v1/statistics/get/site", query), { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsGroupList(params) {
        const { token, query, cancelId } = params;
        return this.apiClient.get(buildPath("/v1/statistics/get/group", query), { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsGroupDetailByQuery(params) {
        const { token, groupID, query, cancelId } = params;
        return this.apiClient.get(buildPath(`/v1/statistics/get/groupDetail/${groupID}`, query), { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsSiteDetailByQuery(params) {
        const { token, siteID, query, cancelId } = params;
        return this.apiClient.get(buildPath(`/v1/statistics/get/siteDetail/${siteID}`, query), { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsRoomState(params) {
        const { token, query, cancelId } = params;
        return this.apiClient.get(buildPath("/v1/statistics/serverRoomLicense", query), { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsAttendeeState(params) {
        const { token, query, cancelId } = params;
        return this.apiClient.get(buildPath("/v1/statistics/serverAttendeesLicense", query), { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getStatisticsSiteDailyDetail(params) {
        const { token, query, cancelId } = params;
        return this.apiClient.get(buildPath("/v1/statistics/siteDetail", query), { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
}
