import { ApiClient, type FoxApiResult, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class GroupService {
  constructor(private readonly apiClient: ApiClient) {}

  async removeGroup(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    const response = await this.apiClient.delete("/v1/group/remove", { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: cancelId });

        return handleResult(response);
  }

  async getGroupInfo(params: { token: string; groupID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, groupID, cancelId } = params;
    const response = await this.apiClient.get(`/v1/group/get/${groupID}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, cancelId: cancelId });

        return handleResult(response, (json) => GroupData.fromJson(json));
  }
}
