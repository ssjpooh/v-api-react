import { ApiClient, type FoxApiResult } from "../apiClient";
export declare class StatisticsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStatisticsHeader(params: {
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsGroups(params: {
        token: string;
        cancelId?: string;
        startDate?: string;
        endDate?: string;
        rangeType?: number;
    }): Promise<FoxApiResult>;
    getStatisticsGroupDetail(params: {
        token: string;
        cancelId?: string;
        startDate?: string;
        endDate?: string;
        groupID?: string;
        rangeType: number;
        viewType: number;
    }): Promise<FoxApiResult>;
    getStatisticsSites(params: {
        token: string;
        startDate: string;
        endDate: string;
        rangeType: number;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsSiteDetail(params: {
        token: string;
        rangeType: number;
        startDate: string;
        endDate: string;
        siteID: string;
        viewType: number;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getConcurrentInfo(params: {
        token: string;
        range: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsSiteList(params: {
        token: string;
        query: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsGroupList(params: {
        token: string;
        query: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsGroupDetailByQuery(params: {
        token: string;
        groupID: string;
        query: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsSiteDetailByQuery(params: {
        token: string;
        siteID: string;
        query: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsRoomState(params: {
        token: string;
        query: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsAttendeeState(params: {
        token: string;
        query: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getStatisticsSiteDailyDetail(params: {
        token: string;
        query: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
