import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
import { OrgSyncGetResponse, type OrgSyncRequest, OrgSyncResponse, OrgTreeResponse } from "../models";
type OrgSyncQuery = Record<string, string | number | boolean>;
type OrgSyncQueryParams = {
    siteIndex?: string;
    mode?: string;
    query?: OrgSyncQuery;
    cancelId?: string;
};
type OrgSyncBodyParams = {
    token: string;
    body: OrgSyncRequest | RequestOptions["body"];
    siteIndex?: string;
    clear?: boolean;
    query?: OrgSyncQuery;
    cancelId?: string;
};
type OrgSyncExcelParams = {
    token: string;
    file?: Blob | string;
    body?: RequestOptions["body"];
    siteIndex?: string;
    clear?: boolean;
    query?: OrgSyncQuery;
    cancelId?: string;
};
export declare class OrgSyncService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getOrgSync(params: {
        token: string;
    } & OrgSyncQueryParams): Promise<FoxApiResult<OrgSyncGetResponse>>;
    getOrgTree(params: {
        token: string;
    } & OrgSyncQueryParams): Promise<FoxApiResult<OrgTreeResponse>>;
    syncOrg(params: OrgSyncBodyParams): Promise<FoxApiResult<OrgSyncResponse>>;
    patchOrg(params: OrgSyncBodyParams): Promise<FoxApiResult<OrgSyncResponse>>;
    deleteOrgSync(params: {
        token: string;
        siteIndex?: string;
        query?: OrgSyncQuery;
        cancelId?: string;
    }): Promise<FoxApiResult<boolean>>;
    syncOrgExcel(params: OrgSyncExcelParams): Promise<FoxApiResult<OrgSyncResponse>>;
    patchOrgExcel(params: OrgSyncExcelParams): Promise<FoxApiResult<OrgSyncResponse>>;
}
export {};
