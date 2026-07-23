import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
export declare class SectorService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getSectors(params: {
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getSectorInfo(params: {
        token: string;
        sectorName: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getServerListBySector(params: {
        token: string;
        sectorName: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getServerSectors(params: {
        token: string;
        keyword?: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    addSector(params: {
        token: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    modifySector(params: {
        token: string;
        sectorName: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    removeSectors(params: {
        token: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    isAvailableDelete(params: {
        token: string;
        sectorName: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
