import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class SiteService {
  constructor(private readonly apiClient: ApiClient) {}

  async getSites(params: { token: string; cancelId?: string; query?: Record<string, string | number | boolean>; pageNo?: number; pagePerRow?: number; keyword?: string; groupID?: string; isActive?: string | number }): Promise<FoxApiResult> {
    const { token, cancelId, query, pageNo, pagePerRow, keyword, groupID, isActive } = params;
    const path = buildPath("/v1/site", query ?? { keyword, groupID, pageNo, pagePerRow, isActive });
    const result = await this.apiClient.get(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });

        return handleResult(result, (json) => SitesList.fromJson(json));
  }

  async getSiteList(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/site/getList", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async addSite(params: { token: string; site: string; body?: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, site, body, cancelId } = params;
    return this.apiClient.post(`/v1/site?site=${site}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifySite(params: { token: string; siteIdx?: string; siteIndex?: string; body?: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIdx, body, cancelId } = params;
    const targetSiteIndex = params.siteIndex ?? siteIdx;
    return this.apiClient.patch(`/v1/site/siteIdx/${targetSiteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeSite(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.delete("/v1/removeSite", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getDBSiteInfo(params: { siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/site/siteIDX/${siteIndex}`, { cancelId: cancelId });
  }

  async getSiteInfo(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/site/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getSiteInfoCount(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/site/getCount/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async reGenerateSecretKey(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.post(`/v1/site/reGenerateSecretKey/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAvailableCreateUser(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    const result = await this.apiClient.get(`/v1/site/getAvailableCreateUser/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
        return handleResult(result, (json) => SiteAvailableData.fromJson(json));
  }
}
