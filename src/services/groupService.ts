import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class GroupService {
  constructor(private readonly apiClient: ApiClient) {}

  async getGroups(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    const response = await this.apiClient.get("/v1/group/getList", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });

        return handleResult(response, (json) => GroupData.fromJsonList(json));
  }

  async addGroup(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    const response = await this.apiClient.post("/v1/group/add", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });

        return handleResult(response, (json) => GroupData.fromJson(json));
  }

  async removeGroup(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    const response = await this.apiClient.delete("/v1/group/remove", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });

        return handleResult(response);
  }

  async getGroupInfo(params: { token: string; groupID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, groupID, cancelId } = params;
    const response = await this.apiClient.get(`/v1/group/get/${groupID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });

        return handleResult(response, (json) => GroupData.fromJson(json));
  }
}
