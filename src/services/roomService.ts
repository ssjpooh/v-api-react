import { ApiClient, type FoxApiResult, type RequestOptions, buildPath, toMultipartValue } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class RoomService {
  constructor(private readonly apiClient: ApiClient) {}

  async classRoomInfo(params: { roomCode: string; attdID: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, attdID, token, cancelId } = params;
    return this.apiClient.get(`/v1/classRoomInfo?roomCode=${roomCode}&attdID=${attdID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomScheduledLists(params: { userID: string; token: string; pageNo?: number; keyword?: string; startDate?: string; endDate?: string; orderType?: number; state?: string; pagePerRow?: number; cancelId?: string; onlyInvited?: boolean; onlyPermanent?: boolean }): Promise<FoxApiResult> {
    const { userID, token, pageNo, keyword, startDate, endDate, orderType, state, pagePerRow, cancelId, onlyInvited, onlyPermanent } = params;
    return this.apiClient.get(`/v1/room/${userID}/ongoing?keyword=${keyword ?? ''}&orderType=${orderType ?? 0}&state=${state ?? '0'}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}&pageNo=${pageNo ?? 0}&pagePerRow=${pagePerRow ?? 10}&onlyInvited=${onlyInvited ?? false}&onlyPermanent=${onlyPermanent ?? false}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAdminRoomScheduledLists(params: { userID: string; token: string; siteIndex?: string; pageNo?: number; keyword?: string; startDate?: string; endDate?: string; orderType?: number; state?: string; pagePerRow?: number; cancelId?: string; onlyInvited?: boolean; onlyPermanent?: boolean }): Promise<FoxApiResult> {
    const { userID, token, siteIndex, pageNo, keyword, startDate, endDate, orderType, state, pagePerRow, cancelId, onlyInvited, onlyPermanent } = params;
    return this.apiClient.get(`/v1/room/admin/get/roomList?siteIndex=${siteIndex ?? ''}&keyword=${keyword ?? ''}&orderType=${orderType ?? 0}&state=${state ?? '0'}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}&pageNo=${pageNo ?? 0}&pagePerRow=${pagePerRow ?? 10}&onlyInvited=${onlyInvited ?? false}&onlyPermanent=${onlyPermanent ?? false}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomHistoryLists(params: { userID: string; token: string; siteIndex?: string; pagePerRow?: number; keyword?: string; startDate?: string; endDate?: string; pageNo?: number; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, siteIndex, pagePerRow, keyword, startDate, endDate, pageNo, cancelId } = params;
    return this.apiClient.get(`/v1/room/finished/${userID}?pagePerRow=${pagePerRow ?? 10}&pageNo=${pageNo ?? 0}&keyword=${keyword ?? ''}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}&siteIndex=${siteIndex ?? ''}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAdminRoomHistoryLists(params: { userID: string; token: string; siteIndex?: string; pagePerRow?: number; keyword?: string; startDate?: string; endDate?: string; pageNo?: number; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, siteIndex, pagePerRow, keyword, startDate, endDate, pageNo, cancelId } = params;
    return this.apiClient.get(`/v1/room/admin/get/finishedList?siteIndex=${siteIndex ?? ''}&pagePerRow=${pagePerRow ?? 10}&pageNo=${pageNo ?? 0}&keyword=${keyword ?? ''}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async postRoom(params: { userID: string; token: string; site: string; body?: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, site, body, cancelId } = params;
    return this.apiClient.post(`/v1/room/${userID}?site=${site}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async postRoomByAdmin(params: { siteIndex: string; adminID: string; token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { siteIndex, adminID, token, body, cancelId } = params;
    return this.apiClient.post(`/v1/room/post/byAdmin/${siteIndex}/${adminID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifyRoom(params: { userID: string; roomCode: string; token: string; body?: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, roomCode, token, body, cancelId } = params;
    return this.apiClient.patch(`/v1/room/${userID}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async isPossibleToRemoveRoom(params: { roomCode: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, token, cancelId } = params;
    return this.apiClient.get(`/v1/IsPossibleToRemoveRoom/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async removeRoomByRoomCode(params: { userID: string; roomCode: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, roomCode, token, cancelId } = params;
    return this.apiClient.delete(`/v1/room/${userID}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomInfo(params: { roomCode: string; userId: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, userId, token, cancelId } = params;
    return this.apiClient.get(`/v1/room/${userId}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomOption(params: { userId: string; roomCode: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userId, roomCode, token, cancelId } = params;
    return this.apiClient.get(`/v1/getRoomOption/${userId}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomOptionByInstanceIndex(params: { userId: string; instanceIndex: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userId, instanceIndex, token, cancelId } = params;
    return this.apiClient.get(`/v1/getRoomOption/${userId}/instanceIndex/${instanceIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getInvitedList(params: { userID: string; roomCode: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, roomCode, token, cancelId } = params;
    return this.apiClient.get(`/v1/attendee/${userID}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAttendeeLog(params: { instanceIndex: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { instanceIndex, token, cancelId } = params;
    return this.apiClient.get(`/v1/attendeeLog/${instanceIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAttendeeLogInfo(params: { instanceIndex: string; token: string; attendeeID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { instanceIndex, token, attendeeID, cancelId } = params;
    return this.apiClient.get(`/v1/attendeeLog/${instanceIndex}/${attendeeID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomLogs(params: { startDate: string; endDate: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { startDate, endDate, token, cancelId } = params;
    return this.apiClient.get(`/v1/roomLog?startDate=${startDate}&endDate=${endDate}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomHistoryInfo(params: { instanceIndex: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { instanceIndex, token, cancelId } = params;
    return this.apiClient.get(`/v1/roomLog/${instanceIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async joinRoomInfo(params: { finfo: string; siteID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { finfo, siteID, cancelId } = params;
    return this.apiClient.get(`/v1/joinRoomInfo?siteID=${siteID}&finfo=${finfo}`, { cancelId: cancelId });
  }

  async getInstanceIdxFromRoomCode(params: { roomCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, cancelId } = params;
    return this.apiClient.get(`/v1/room/instanceIdx/${roomCode}`, { cancelId: cancelId });
  }

  async getAttendanceList(params: { instanceIndex: string; token: string; type: string; status: string; range: string; cancelId?: string }): Promise<FoxApiResult> {
    const { instanceIndex, token, type, status, range, cancelId } = params;
    return this.apiClient.get(`/v1/attendanceList/${instanceIndex}?type=${type}&stats=${status}&range=${range}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomPolicyInfo(params: { token: string; groupId?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, groupId, cancelId } = params;
    return this.apiClient.get(`/v1/room/policyInfo?groupID=${groupId ?? ''}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async roomFileAttach(params: { token: string; name: string; bytes: BlobPart; userID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, name, bytes, userID, cancelId } = params;
    return this.apiClient.multipartPost(`/v1/file/attachFile/${userID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: {"file": new File([bytes], name)}, cancelId: cancelId });
  }

  async addFiles(params: { body: RequestOptions["body"]; token: string; userID: string; roomCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { body, token, userID, roomCode, cancelId } = params;
    return this.apiClient.post(`/v1/file/addFile/${userID}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeFiles(params: { body: RequestOptions["body"]; userID: string; roomCode: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { body, userID, roomCode, token, cancelId } = params;
    return this.apiClient.delete(`/v1/file/removeFile/${userID}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getNotePages(params: { roomCode: string; userID: string; noteId?: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { roomCode, userID, noteId, token, cancelId } = params;
    let path = noteId == undefined || noteId.length === 0
            ? `/v1/room/notes/${userID}/${roomCode}`
            : `/v1/room/notes/${userID}/${roomCode}/${noteId}`;
        return this.apiClient.get(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }
}
