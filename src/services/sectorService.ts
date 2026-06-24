import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class SectorService {
  constructor(private readonly apiClient: ApiClient) {}

  async getSectors(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/sectors", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getSectorInfo(params: { token: string; sectorName: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, sectorName, cancelId } = params;
    return this.apiClient.get(`/v1/sector/${encodeURIComponent(sectorName)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getServerListBySector(params: { token: string; sectorName: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, sectorName, cancelId } = params;
    return this.apiClient.get(`/v1/serverListBySector/${encodeURIComponent(sectorName)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getServerSectors(params: { token: string; keyword?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, keyword, cancelId } = params;
    const path = keyword ? `/v1/serverSectors?keyword=${encodeURIComponent(keyword)}` : "/v1/serverSectors";
    return this.apiClient.get(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async addSector(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.post("/v1/sector", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifySector(params: { token: string; sectorName: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, sectorName, body, cancelId } = params;
    return this.apiClient.patch(`/v1/sectors/${encodeURIComponent(sectorName)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeSectors(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.delete("/v1/deleteServerSectors", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async isAvailableDelete(params: { token: string; sectorName: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, sectorName, cancelId } = params;
    return this.apiClient.get(`/v1/sectors/get/isAvailableDelete/${encodeURIComponent(sectorName)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

}
