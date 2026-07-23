import { buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { LoginResult, TwoFactorCodeMismatchResult, TwoFactorExpiredResult, TwoFactorRequiredResult, TwoFactorResendResult } from "../models";
export const RESULT_2FA_REQUIRED = 701;
export const RESULT_2FA_CODE_MISMATCH = 702;
export const RESULT_2FA_EXPIRED = 703;
function asRecord(value) {
    return value && typeof value === "object" ? value : {};
}
function unwrapResponse(value) {
    const record = asRecord(value);
    return asRecord(record["data"] ?? record["Data"] ?? value);
}
function readCode(value) {
    const record = unwrapResponse(value);
    const raw = record["code"] ?? record["Code"] ?? record["result"] ?? record["Result"];
    const numeric = typeof raw === "number" ? raw : Number(raw);
    return Number.isFinite(numeric) ? numeric : 0;
}
export class CommonService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async login(params) {
        const { siteID, body, credentials, cancelId } = params;
        const path = buildPath("/v1/login", { siteID });
        const result = await this.apiClient.post(path, { header: { From: "login" }, body: body, credentials: credentials, cancelId: cancelId });
        return handleResult(result, (json) => {
            const source = unwrapResponse(json);
            return readCode(source) === RESULT_2FA_REQUIRED
                ? TwoFactorRequiredResult.fromJson(source)
                : LoginResult.fromJson(source);
        });
    }
    async twoFactorVerify(params) {
        const { twoFactorToken, code, credentials, cancelId } = params;
        const result = await this.apiClient.post("/v1/auth/2fa/verify", {
            header: { From: "twoFactorVerify" },
            body: { two_factor_token: twoFactorToken, code },
            credentials: credentials,
            cancelId: cancelId,
        });
        return handleResult(result, (json) => {
            const source = unwrapResponse(json);
            switch (readCode(source)) {
                case RESULT_2FA_CODE_MISMATCH:
                    return TwoFactorCodeMismatchResult.fromJson(source);
                case RESULT_2FA_EXPIRED:
                    return TwoFactorExpiredResult.fromJson();
                default:
                    return LoginResult.fromJson(source);
            }
        });
    }
    async twoFactorResend(params) {
        const { twoFactorToken, credentials, cancelId } = params;
        const result = await this.apiClient.post("/v1/auth/2fa/resend", {
            header: { From: "twoFactorResend" },
            body: { two_factor_token: twoFactorToken },
            credentials: credentials,
            cancelId: cancelId,
        });
        return handleResult(result, (json) => {
            const source = unwrapResponse(json);
            return readCode(source) === RESULT_2FA_EXPIRED
                ? TwoFactorExpiredResult.fromJson()
                : TwoFactorResendResult.fromJson(source);
        });
    }
    async logout(params) {
        const { token, body, userID, siteIndex, cancelId } = params;
        const jsonBody = body ?? { UserID: userID ?? "", Token: token ?? "", SiteIndex: siteIndex ?? "" };
        const result = await this.apiClient.post("/v1/logout", { header: { Authorization: token ? `Bearer ${token}` : "", From: "logout" }, body: jsonBody, cancelId: cancelId });
        return handleResult(result);
    }
    async checkTokenByID(params) {
        const { userID, cancelId } = params;
        const result = await this.apiClient.get(`/v1/checkTokenByID/${userID}`, { cancelId: cancelId });
        return handleResult(result, (json) => LoginResult.fromJson(json));
    }
    async isExistRoom(params) {
        const { roomCode, cancelId } = params;
        const result = await this.apiClient.get(`/v1/isExistRoom/${roomCode}`, { cancelId: cancelId });
        return handleResult(result);
    }
    async checkAccessToken(params) {
        const { roomCode, attdID, cancelId } = params;
        const result = await this.apiClient.get(`/v1/checkTokenInfo?roomCode=${roomCode}&attdID=${attdID}`, { cancelId: cancelId });
        return handleResult(result);
    }
    async roomServerAddr(params) {
        const { roomCode, cancelId } = params;
        const result = await this.apiClient.get(`/v1/roomServerAddr/${roomCode}`, { cancelId: cancelId });
        return handleResult(result);
    }
    async baseDomain(params) {
        const { cancelId } = params;
        const result = await this.apiClient.get("/v1/baseDomain", { cancelId: cancelId });
        return handleResult(result);
    }
    async isWebServer() {
        const result = await this.apiClient.get("/v1/isWebServer");
        return handleResult(result);
    }
    async healthCheck(params) {
        const { cancelId } = params;
        const result = await this.apiClient.get("/v1/healthz", { cancelId: cancelId });
        return handleResult(result);
    }
    async getTimeZoneList(params) {
        const { cancelId } = params;
        const result = await this.apiClient.get("/v1/getTimeZone", { cancelId: cancelId });
        return handleResult(result);
    }
}
