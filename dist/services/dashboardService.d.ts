import { ApiClient, type FoxApiResult } from "../apiClient";
export declare class DashboardService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getServerList(params: {
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getServerLogMemory(params: {
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getServerLogCpu(params: {
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getCustomer(params: {
        token: string;
        mode: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getUsage(params: {
        token: string;
        mode: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getRoomStat(params: {
        token: string;
        mode: string;
        startDate: string;
        endDate: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getAttendeeStat(params: {
        token: string;
        mode: string;
        startDate: string;
        endDate: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
