import { ApiClient, type FoxApiResult, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class UserService {
  constructor(private readonly apiClient: ApiClient) {}

  async getLoginUserInfo(params: { userID: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, cancelId } = params;
    const result = await this.apiClient.get(`/v1/user/${userID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
        return handleResult(result, (json) => UserData.fromJson(json as any));
  }

  async getUserInfoByIndex(params: { userIndex: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userIndex, token, cancelId } = params;
    return this.apiClient.get(`/v1/user/idx/${userIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async searchUserListByKeyword(params: { userID: string; token: string; keyword: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, keyword, cancelId } = params;
    return this.apiClient.get(`/v1/user/${userID}/searchUserByKeyword?keyword=${keyword}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async userListInfo(params: { userID: string; token: string; pageNo: number; userTypes: string[]; userStates: string[]; searchKeyword: string; isManager: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, pageNo, userTypes, userStates, searchKeyword, isManager, cancelId } = params;
    let userType = userTypes.length === 0 ? "all" : userTypes.join(",");
        let userState = userStates.length === 0 ? "all" : userStates.join(",");

        return this.apiClient.get(`/v1/user/listInfo/${userID}?userType=${userType}&userState=${userState}&keyword=${searchKeyword}&ismanager=${isManager}&pageNo=${pageNo}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAdminSiteUserList(params: { token: string; siteIndex: string; pageNo: number; userTypes: string[]; userStates: string[]; searchKeyword: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, pageNo, userTypes, userStates, searchKeyword, cancelId } = params;
    let userType = userTypes.length === 0 ? "all" : userTypes.join(",");
        let userState = userStates.length === 0 ? "all" : userStates.join(",");

        return this.apiClient.get(`/v1/user/admin/${siteIndex}?userType=${userType}&userState=${userState}&pageNo=${pageNo}&keyword=${searchKeyword}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async modifyUser(params: { userId?: string; userIndex?: string; token: string; body?: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userId, userIndex, token, body, cancelId } = params;
    let path = (userId != undefined && userId.length > 0) ? `/v1/user/${userId}` : `/v1/user/index/${userIndex}`;
        return this.apiClient.patch(path, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifyUserRole(params: { userIndex: string; userRole: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userIndex, userRole, token, cancelId } = params;
    return this.apiClient.patch(`/v1/userRole/${userIndex}/${userRole}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async modifyUserRoleSiteHolderToSiteManager(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.patch(`/v1/uerRoleHolderToManager/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async removeUserByIndex(params: { removeList: Record<string, string>[]; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { removeList, token, cancelId } = params;
    let jsonBody = JSON.stringify(removeList);
        return this.apiClient.delete("/v1/deleteUsers", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: jsonBody, cancelId: cancelId });
  }

  async createOperator(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.post("/v1/user/operator", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async createAccount(params: { token: string; siteID: string; body: string; locale: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteID, body, locale, cancelId } = params;
    return this.apiClient.post(`/v1/user?site=${siteID}&locale=${locale}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async checkOldPassWord(params: { userID: string; token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, body, cancelId } = params;
    return this.apiClient.post(`/v1/user/${userID}/oldPasswordCheck`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getUserListBySiteIndex(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/users?siteIndex=${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async operatorListInfo(params: { userID: string; token: string; userTypes: string[]; userStates: string[]; searchKeyword: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userID, token, userTypes, userStates, searchKeyword, cancelId } = params;
    let userType = userTypes.join(",");
        let userState = userStates.join(",");
        return this.apiClient.get(`/v1/user/operatorList/${userID}?userType=${userType}&userState=${userState}&keyword=${searchKeyword}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getUserTypes(params: { token: string; userID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, userID, cancelId } = params;
    return this.apiClient.get(`/v1/userType/${userID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getHostCount(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/user/get/hostCount/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAvailableCreateUser(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/site/getAvailableCreateUser/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, cancelId: cancelId });
  }
}
