import { ApiClient, type FoxApiResult, type RequestOptions } from "../apiClient";
import { LoginResult, TwoFactorCodeMismatchResult, TwoFactorExpiredResult, TwoFactorRequiredResult, TwoFactorResendResult } from "../models";
export declare const RESULT_2FA_REQUIRED = 701;
export declare const RESULT_2FA_CODE_MISMATCH = 702;
export declare const RESULT_2FA_EXPIRED = 703;
export type LoginResponse = LoginResult | TwoFactorRequiredResult;
export type TwoFactorVerifyResponse = LoginResult | TwoFactorCodeMismatchResult | TwoFactorExpiredResult;
export type TwoFactorResendResponse = TwoFactorResendResult | TwoFactorExpiredResult;
export declare class CommonService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    login(params: {
        token: string;
        siteID?: string;
        body?: RequestOptions["body"];
        credentials?: RequestCredentials;
        cancelId?: string;
    }): Promise<FoxApiResult<LoginResponse>>;
    twoFactorVerify(params: {
        twoFactorToken: string;
        code: string;
        credentials?: RequestCredentials;
        cancelId?: string;
    }): Promise<FoxApiResult<TwoFactorVerifyResponse>>;
    twoFactorResend(params: {
        twoFactorToken: string;
        credentials?: RequestCredentials;
        cancelId?: string;
    }): Promise<FoxApiResult<TwoFactorResendResponse>>;
    logout(params: {
        token?: string;
        body?: RequestOptions["body"];
        userID?: string;
        siteIndex?: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    checkTokenByID(params: {
        userID: string;
        cancelId?: string;
    }): Promise<FoxApiResult<LoginResult>>;
    isExistRoom(params: {
        roomCode: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    checkAccessToken(params: {
        roomCode: string;
        attdID: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    roomServerAddr(params: {
        roomCode: string;
        cancelId?: string;
    }): Promise<FoxApiResult>;
    baseDomain(params: {
        cancelId?: string;
    }): Promise<FoxApiResult>;
    isWebServer(): Promise<FoxApiResult>;
    healthCheck(params: {
        cancelId?: string;
    }): Promise<FoxApiResult>;
    getTimeZoneList(params: {
        cancelId?: string;
    }): Promise<FoxApiResult>;
}
