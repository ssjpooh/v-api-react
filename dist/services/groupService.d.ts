import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
export declare class GroupService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getGroups(params: {
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    addGroup(params: {
        token: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    removeGroup(params: {
        token: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getGroupInfo(params: {
        token: string;
        groupID: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
