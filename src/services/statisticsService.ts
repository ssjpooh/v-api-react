import { ApiClient, type FoxApiResult, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class StatisticsService {
  constructor(private readonly apiClient: ApiClient) {}

  async getStatisticsHeader(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/statistics/all/header", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getStatisticsGroups(params: { token: string; cancelId?: string; startDate?: string; endDate?: string; rangeType?: number }): Promise<FoxApiResult> {
    const { token, cancelId, startDate, endDate, rangeType } = params;
    let path = "/v1/statistics/get/group";
        const queryParams: Record<string, string | number | boolean> = {'rangeType': rangeType?.toString() ?? '0'};
        if (startDate != undefined) queryParams['startDate'] = startDate;
        if (endDate != undefined) queryParams['endDate'] = endDate;

        const uri = buildPath(path, queryParams);
        return this.apiClient.get(uri, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getStatisticsGroupDetail(params: { token: string; cancelId?: string; startDate?: string; endDate?: string; groupID?: string; rangeType: number; viewType: number }): Promise<FoxApiResult> {
    const { token, cancelId, startDate, endDate, groupID, rangeType, viewType } = params;
    let path = `/v1/statistics/get/groupDetail/${groupID}`;
        const queryParams: Record<string, string | number | boolean> = {'rangeType': rangeType, 'viewType': viewType};
        if (startDate != undefined) queryParams['startDate'] = startDate;
        if (endDate != undefined) queryParams['endDate'] = endDate;

        const uri = buildPath(path, queryParams);
        return this.apiClient.get(uri, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getStatisticsSites(params: { token: string; startDate: string; endDate: string; rangeType: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, startDate, endDate, rangeType, cancelId } = params;
    return this.apiClient.get(`/v1/statistics/get/site?rangeType=${rangeType}&startDate=${startDate}&endDate=${endDate}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getStatisticsSiteDetail(params: { token: string; rangeType: number; startDate: string; endDate: string; siteID: string; viewType: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, rangeType, startDate, endDate, siteID, viewType, cancelId } = params;
    return this.apiClient.get(`/v1/statistics/get/siteDetail/${siteID}?rangeType=${rangeType}&startDate=${startDate}&endDate=${endDate}&viewType=${viewType}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getConcurrentInfo(params: { token: string; range: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, range, cancelId } = params;
    const result = await this.apiClient.get(`/v1/concurrent/get?range=${range}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
        return handleResult(result, (json) => ConcurrentInfo.fromJson(json));
  }
}
