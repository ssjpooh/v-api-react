import { ApiClient, type FoxApiResult, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class ServerService {
  constructor(private readonly apiClient: ApiClient) {}

  async getServers(params: { token: string; keyword?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, keyword, cancelId } = params;
    let keywordURL = keyword ?? "";
        return this.apiClient.get(`/v1/servers?keyword=${keywordURL}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getProvisioningServers(params: { token: string; keyword?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, keyword, cancelId } = params;
    let keywordURL = keyword ?? "";
        return this.apiClient.get(`/v1/provisioningServers?keyword=${keywordURL}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getWebServerDomain(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/webServerDomain", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getServerInfoByIndex(params: { token: string; serverIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, serverIndex, cancelId } = params;
    return this.apiClient.get(`/v1/serverInfo/${serverIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async updateServerInfoByIndex(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.patch("/v1/servers", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeProvisionServer(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.delete("/v1/deleteProvisioningServer", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }
}
