import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
export declare class NoticeService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getNotices(params: {
        token: string;
        keyword?: string;
        page?: number;
        pageNo?: number;
        pagePerRow?: number;
        query?: Record<string, string | number | boolean>;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getNoticeInfo(params: {
        token: string;
        noticeIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getNoticeFileList(params: {
        token: string;
        noticeIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    addNoticeContents(params: {
        token: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    addNoticeFiles(params: {
        token: string;
        files?: any[];
        formData?: FormData;
        noticeIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    modifyNotice(params: {
        token: string;
        body: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    removeNotice(params: {
        token: string;
        noticeIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    removeNoticeFile(params: {
        token: string;
        key: string;
        noticeIndex: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
