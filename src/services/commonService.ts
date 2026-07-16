import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, LoginResult, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, TwoFactorCodeMismatchResult, TwoFactorExpiredResult, TwoFactorRequiredResult, TwoFactorResendResult, User, UserData, UserListData } from "../models";

export const RESULT_2FA_REQUIRED = 701;
export const RESULT_2FA_CODE_MISMATCH = 702;
export const RESULT_2FA_EXPIRED = 703;

export type LoginResponse = LoginResult | TwoFactorRequiredResult;
export type TwoFactorVerifyResponse =
  | LoginResult
  | TwoFactorCodeMismatchResult
  | TwoFactorExpiredResult;
export type TwoFactorResendResponse = TwoFactorResendResult | TwoFactorExpiredResult;

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : {};
}

function unwrapResponse(value: unknown): Record<string, unknown> {
  const record = asRecord(value);
  return asRecord(record["data"] ?? record["Data"] ?? value);
}

function readCode(value: unknown): number {
  const record = unwrapResponse(value);
  const raw = record["code"] ?? record["Code"] ?? record["result"] ?? record["Result"];
  const numeric = typeof raw === "number" ? raw : Number(raw);
  return Number.isFinite(numeric) ? numeric : 0;
}

export class CommonService {
  constructor(private readonly apiClient: ApiClient) {}

  async login(params: { token: string; siteID?: string; body?: RequestOptions["body"]; credentials?: RequestCredentials; cancelId?: string }): Promise<FoxApiResult<LoginResponse>> {
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

  async twoFactorVerify(params: { twoFactorToken: string; code: string; credentials?: RequestCredentials; cancelId?: string }): Promise<FoxApiResult<TwoFactorVerifyResponse>> {
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

  async twoFactorResend(params: { twoFactorToken: string; credentials?: RequestCredentials; cancelId?: string }): Promise<FoxApiResult<TwoFactorResendResponse>> {
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

  async logout(params: { token?: string; body?: RequestOptions["body"]; userID?: string; siteIndex?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, userID, siteIndex, cancelId } = params;
    const jsonBody = body ?? { UserID: userID ?? "", Token: token ?? "", SiteIndex: siteIndex ?? "" };
        const result = await this.apiClient.post("/v1/logout", { header: {Authorization: token ? `Bearer ${token}` : "", From: "logout"}, body: jsonBody, cancelId: cancelId });
        return handleResult(result);
  }

  async checkTokenByID(params: { userID: string; cancelId?: string }): Promise<FoxApiResult<LoginResult>> {
    const { userID, cancelId } = params;
    const result = await this.apiClient.get(`/v1/checkTokenByID/${userID}`, { cancelId: cancelId });
        return handleResult(result, (json) => LoginResult.fromJson(json));
  }

  async isExistRoom(params: { roomCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, cancelId } = params;
    const result = await this.apiClient.get(`/v1/isExistRoom/${roomCode}`, { cancelId: cancelId });
        return handleResult(result);
  }

  async checkAccessToken(params: { roomCode: string; attdID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, attdID, cancelId } = params;
    const result = await this.apiClient.get(`/v1/checkTokenInfo?roomCode=${roomCode}&attdID=${attdID}`, { cancelId: cancelId });
        return handleResult(result);
  }

  async roomServerAddr(params: { roomCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, cancelId } = params;
    const result = await this.apiClient.get(`/v1/roomServerAddr/${roomCode}`, { cancelId: cancelId });
        return handleResult(result);
  }

  async baseDomain(params: { cancelId?: string }): Promise<FoxApiResult> {
    const { cancelId } = params;
    const result = await this.apiClient.get("/v1/baseDomain", { cancelId: cancelId });
        return handleResult(result);
  }

  async isWebServer(): Promise<FoxApiResult> {
    const result = await this.apiClient.get("/v1/isWebServer");
        return handleResult(result);
  }

  async healthCheck(params: { cancelId?: string }): Promise<FoxApiResult> {
    const { cancelId } = params;
    const result = await this.apiClient.get("/v1/healthz", { cancelId: cancelId });
        return handleResult(result);
  }

  async getTimeZoneList(params: { cancelId?: string }): Promise<FoxApiResult> {
    const { cancelId } = params;
    const result = await this.apiClient.get("/v1/getTimeZone", { cancelId: cancelId });
        return handleResult(result);
  }
}
