import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, LoginResult, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class CommonService {
  constructor(private readonly apiClient: ApiClient) {}

  async login(params: { token: string; body?: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult<LoginResult>> {
    const { token, body, cancelId } = params;
    const result = await this.apiClient.post("/v1/login", { header: {Authorization: `Bearer ${token}`, From: "login"}, body: body, cancelId: cancelId });
        return handleResult(result, (json) => LoginResult.fromJson(json));
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
    const result = await this.apiClient.get("/v1/healtz", { cancelId: cancelId });
        return handleResult(result);
  }

  async getTimeZoneList(params: { cancelId?: string }): Promise<FoxApiResult> {
    const { cancelId } = params;
    const result = await this.apiClient.get("/v1/getTimeZone", { cancelId: cancelId });
        return handleResult(result);
  }
}
