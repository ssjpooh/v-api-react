import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
export declare class MailService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    sendEmail(params: {
        object: string;
        body?: RequestOptions["body"];
        cancelId?: string;
    }): Promise<FoxApiResult>;
    signUpEmailVerify(params: {
        finfo: string;
        siteID: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    newPasswordEmailVerify(params: {
        finfo: string;
        siteID: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    sendCertifyEmail(params: {
        userIndex: string;
        token: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
