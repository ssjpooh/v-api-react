import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class ServerService {
  constructor(private readonly apiClient: ApiClient) {}

  async getServers(params: { token: string; keyword?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, keyword, cancelId } = params;
    const path = keyword ? `/v1/servers?keyword=${encodeURIComponent(keyword)}` : "/v1/servers";
        return this.apiClient.get(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getProvisioningServers(params: { token: string; keyword?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, keyword, cancelId } = params;
    const path = keyword ? `/v1/provisioningServers?keyword=${encodeURIComponent(keyword)}` : "/v1/provisioningServers";
        return this.apiClient.get(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getWebServerDomain(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/webServerDomain", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getServerInfoByIndex(params: { token: string; serverIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, serverIndex, cancelId } = params;
    return this.apiClient.get(`/v1/serverInfo/${serverIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async updateServerInfoByIndex(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.patch("/v1/servers", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async applyConfig(params: { token: string; sector: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, sector, cancelId } = params;
    return this.apiClient.get(`/v1/server/applyConfig/${encodeURIComponent(sector)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async modifySiteSector(params: { token: string; asisSector: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, asisSector, body, cancelId } = params;
    return this.apiClient.patch(`/v1/siteSector/${encodeURIComponent(asisSector)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getServerDomains(params: { token: string; sector?: string; keyword?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, sector, keyword, cancelId } = params;
    const path = buildPath("/v1/serverDomains", { sector: sector ?? "", keyword: keyword ?? "" });
    return this.apiClient.get(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async addServerDomain(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.post("/v1/serverDomains", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifyServerDomain(params: { token: string; sector: string; domainName: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, sector, domainName, body, cancelId } = params;
    return this.apiClient.patch(`/v1/serverDomains/${encodeURIComponent(sector)}/${encodeURIComponent(domainName)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeServerDomain(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.delete("/v1/serverDomains", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeProvisionServer(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.delete("/v1/deleteProvisioningServer", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }
}
