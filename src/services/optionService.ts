import { ApiClient, type FoxApiResult, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export const OPTION_CLASS_UNKNOWN = -1;
export const OPTION_CLASS_BASE = 0;
export const OPTION_CLASS_GROUP = 1;
export const OPTION_CLASS_SITE = 2;
export const OPTION_CLASS_POLICY = 3;
export const OPTION_CLASS_ROOM = 4;

export class OptionService {
  constructor(private readonly apiClient: ApiClient) {}

  async getRoomOption(params: { userId: string; roomCode: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { userId, roomCode, token, cancelId } = params;
    return this.apiClient.get(`/v1/getRoomOption/${userId}/${roomCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getBaseOptions(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    const result = await this.apiClient.get("/v1/baseOptions", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });

        return handleResult(result, (json) => BaseOptionEnvData.fromJson(json));
  }

  async getBaseOptionByKey(params: { key: string; cancelId?: string }): Promise<FoxApiResult> {
    const { key, cancelId } = params;
    return this.apiClient.get(`/v1/getBaseOption?key=${key}`, { cancelId: cancelId });
  }

  async getBaseOptionValueByName(params: { token: string; optionName: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, optionName, cancelId } = params;
    return this.apiClient.get(`/v1/baseOptionItemByName/${optionName}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async addBaseOption(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.post("/v1/addBaseOption", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifyBaseOption(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.patch("/v1/modifyBaseOption", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeBaseOptionItem(params: { token: string; body: any; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.delete("/v1/baseOptionItem", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getSiteOptions(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/siteOptions/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getSiteOptionByName(params: { siteIndex: string; optionName: string; token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { siteIndex, optionName, token, cancelId } = params;
    return this.apiClient.get(`/v1/getSiteOption/${siteIndex}/${optionName}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async addSiteOption(params: { token: string; body: string; subMenu: boolean; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, subMenu, cancelId } = params;
    return this.apiClient.post(`/v1/addSiteOption?subMenu=${subMenu}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async updateSiteOption(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.patch("/v1/modifySiteOption", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getGroupOption(params: { token: string; groupID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, groupID, cancelId } = params;
    const result = await this.apiClient.get(`/v1/option/get/group/${groupID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });

        return handleResult(result, (json) => GroupOptionEnvData.fromJson(json as any));
  }

  async getGroupOptionByName(params: { token: string; groupID: string; name: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, groupID, name, cancelId } = params;
    return this.apiClient.get(`/v1/groupOptionByName/${groupID}/${name}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async addGroupOption(params: { token: string; body: string; subMenu: boolean; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, subMenu, cancelId } = params;
    return this.apiClient.post(`/v1/addGroupOption?subMenu=${subMenu}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async updateGroupOption(params: { token: string; groupID: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, groupID, body, cancelId } = params;
    return this.apiClient.patch(`/v1/modifyGroupOption/${groupID}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async removeGroupOption(params: { token: string; body: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.delete("/v1/removeGroupOption", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getPolicyOption(params: { token: string; policyCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, policyCode, cancelId } = params;
    return this.apiClient.get(`/v1/policyOption/${policyCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getPolicies(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/option/get/policies", { header: {Authorization: `Bearer ${token}`, From: "Web"}, cancelId: cancelId });
  }

  async addPolicyOption(params: { token: string; body: string; policyCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, policyCode, cancelId } = params;
    return this.apiClient.post(`/v1/policyOption/add/${policyCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifyPolicyOption(params: { token: string; body: string; policyCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, policyCode, cancelId } = params;
    const result = await this.apiClient.patch(`/v1/policyOption/modify/${policyCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });

        return handleResult(result);
  }

  async deletePolicyOption(params: { token: string; body: string; policyCode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, policyCode, cancelId } = params;
    const result = await this.apiClient.delete(`/v1/policyOption/delete/${policyCode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
        return handleResult(result);
  }

  async addOptionItem(params: { token: string; body: string; type: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, type, cancelId } = params;
    let value = "";
        switch (type) {
          case OPTION_CLASS_BASE:
            value = "";
            break;

          case OPTION_CLASS_SITE:
            value = "site";
            break;
          case OPTION_CLASS_GROUP:
            value = "group";
            break;
          case OPTION_CLASS_POLICY:
            value = "policy";
            break;
          case OPTION_CLASS_ROOM:
            value = "room";
            break;
        }
        const result = await this.apiClient.post(`/v1/optionItem/add/${value}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: `addOptionItem [${type}]` });
        return handleResult(result);
  }

  async addOptionInherit(params: { token: string; body: string; type: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, type, cancelId } = params;
    let value = "";
        switch (type) {
          case OPTION_CLASS_BASE:
            value = "";
            break;

          case OPTION_CLASS_SITE:
            value = "site";
            break;
          case OPTION_CLASS_GROUP:
            value = "group";
            break;
          case OPTION_CLASS_POLICY:
            value = "policy";
            break;
          case OPTION_CLASS_ROOM:
            value = "room";
            break;
        }

        const result = await this.apiClient.post(`/v1/option/inherit/add/${value}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: `addOptionInherit [${type}]` });
        return handleResult(result);
  }

  async overrideOption(params: { token: string; body: string; type: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, type, cancelId } = params;
    let value = "";
        switch (type) {
          case OPTION_CLASS_BASE:
            value = "";
            break;
          case OPTION_CLASS_SITE:
            value = "site";
            break;
          case OPTION_CLASS_GROUP:
            value = "group";
            break;
          case OPTION_CLASS_POLICY:
            value = "policy";
            break;
          case OPTION_CLASS_ROOM:
            value = "room";
            break;
        }

        const result = await this.apiClient.post(`/v1/option/override/${value}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: `overrideOption [${type}]` });
        return handleResult(result);
  }

  async restoreOption(params: { token: string; body: string; type: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, type, cancelId } = params;
    let value = "";
        switch (type) {
          case OPTION_CLASS_BASE:
            value = "";
            break;
          case OPTION_CLASS_SITE:
            value = "site";
            break;
          case OPTION_CLASS_GROUP:
            value = "group";
            break;
          case OPTION_CLASS_POLICY:
            value = "policy";
            break;
          case OPTION_CLASS_ROOM:
            value = "room";
            break;
        }
        const result = await this.apiClient.post(`/v1/option/restore/${value}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: `restoreOption [${type}]` });

        return handleResult(result);
  }

  async selectedOption(params: { token: string; body: string; type: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, type, cancelId } = params;
    let value = "";
        switch (type) {
          case OPTION_CLASS_BASE:
            value = "";
            break;
          case OPTION_CLASS_SITE:
            value = "site";
            break;
          case OPTION_CLASS_GROUP:
            value = "group";
            break;
          case OPTION_CLASS_POLICY:
            value = "policy";
            break;
          case OPTION_CLASS_ROOM:
            value = "room";
            break;
        }

        const result = await this.apiClient.post(`/v1/option/selected/${value}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: `selectedOption [${type}]` });
        return handleResult(result);
  }

  async deleteOptionItem(params: { token: string; body: string; type: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, type, cancelId } = params;
    let value = "";
        switch (type) {
          case OPTION_CLASS_BASE:
            value = "";
            break;
          case OPTION_CLASS_SITE:
            value = "site";
            break;
          case OPTION_CLASS_GROUP:
            value = "group";
            break;
          case OPTION_CLASS_POLICY:
            value = "policy";
            break;
          case OPTION_CLASS_ROOM:
            value = "room";
            break;
        }
        const result = await this.apiClient.delete(`/v1/option/deleteItem/${value}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: `deleteOptionItem [${type}]` });
        return handleResult(result);
  }

  async changeOptionItemOrder(params: { token: string; body: string; type: number; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, type, cancelId } = params;
    let value = "";
        switch (type) {
          case OPTION_CLASS_BASE:
            value = "";
            break;
          case OPTION_CLASS_SITE:
            value = "site";
            break;
          case OPTION_CLASS_GROUP:
            value = "group";
            break;
          case OPTION_CLASS_POLICY:
            value = "policy";
            break;
          case OPTION_CLASS_ROOM:
            value = "room";
            break;
        }

        const result = await this.apiClient.post(`/v1/option/changeItemOrder/${value}`, { header: {Authorization: `Bearer ${token}`, From: "Web"}, body: body, cancelId: `changeOptionItemOrder [${type}]` });
        return handleResult(result);
  }
}
