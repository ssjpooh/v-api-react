import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
export declare class SiteService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getSites(params: {
        token: string;
        cancelId?: string;
        query?: Record<string, string | number | boolean>;
        pageNo?: number;
        pagePerRow?: number;
        keyword?: string;
        groupID?: string;
        isActive?: string | number;
    }): Promise<FoxApiResult>;
    getSiteList(params: {
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    addSite(params: {
        token: string;
        site: string;
        body?: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    modifySite(params: {
        token: string;
        siteIdx?: string;
        siteIndex?: string;
        body?: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    removeSite(params: {
        token: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getDBSiteInfo(params: {
        siteIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getSiteInfo(params: {
        token: string;
        siteIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getSiteInfoCount(params: {
        token: string;
        siteIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    reGenerateSecretKey(params: {
        token: string;
        siteIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getAvailableCreateUser(params: {
        token: string;
        siteIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
