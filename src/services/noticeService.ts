import { ApiClient, type FoxApiResult, type RequestOptions, buildPath, toMultipartValue } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class NoticeService {
  constructor(private readonly apiClient: ApiClient) {}

  async getNotices(params: { token: string; keyword?: string; page?: number; pageNo?: number; pagePerRow?: number; query?: Record<string, string | number | boolean>; cancelId?: string }): Promise<FoxApiResult> {
    const { token, keyword, page, pageNo, pagePerRow, query, cancelId } = params;
    const path = buildPath("/v1/notice/get/list", { ...(query ?? { keyword, page: page ?? pageNo, pagePerRow }), type: 2 });
    return this.apiClient.get(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getNoticeInfo(params: { token: string; noticeIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, noticeIndex, cancelId } = params;
    return this.apiClient.get(`/v1/notice/get/info/${noticeIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getNoticeFileList(params: { token: string; noticeIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, noticeIndex, cancelId } = params;
    return this.apiClient.get(`/v1/notice/get/fileList/${noticeIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async addNoticeContents(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.post("/v1/notice/add/contents", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async addNoticeFiles(params: { token: string; files?: any[]; formData?: FormData; noticeIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, files, formData, noticeIndex, cancelId } = params;
    const fileList = files ?? [];
    const body: RequestOptions["body"] = formData ?? {};
        for (let i = 0; i < fileList.length; i++) {
          const fileData = fileList[i];
          (body as Record<string, unknown>)[`file_${i}`] = toMultipartValue(fileData);
        }

        return this.apiClient.multipartPost(`/v1/notice/add/file/${noticeIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifyNotice(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.patch("/v1/notice/modify/info", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeNotice(params: { token: string; noticeIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, noticeIndex, cancelId } = params;
    return this.apiClient.delete(`/v1/notice/delete/${noticeIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async removeNoticeFile(params: { token: string; key: string; noticeIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, key, noticeIndex, cancelId } = params;
    return this.apiClient.delete(`/v1/notice/delete/file/${noticeIndex}/${encodeURIComponent(key)}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }
}
