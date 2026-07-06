import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { AddFile, AttachNoteInfo, BaseOptionEnvData, BlockListData, ClientTokenData, CommonOption, ConcurrentInfo, ContractData, ContractListData, ContractLogData, CreateRoomData, DB, FileData, GroupData, GroupOptionEnvData, HistoryRoomData, MailConfig, NoteData, NoticeData, NoticeFileData, NoticeList, OptionInfo, OptionItems, PageData, PageLists, PagesData, PagesLists, PolicyOptionEnvData, ProvisionServerData, RemoveFile, Room, RoomAttendeeData, RoomAttendeeLogData, RoomAttendees, RoomChatData, RoomData, RoomFileData, RoomLogData, RoomPolicyData, ScheduleRoomData, Scope, SectorData, SendMail, SentMailData, ServerData, ServerDomainData, ServerLogData, SiteAvailableData, SiteCount, SiteData, SiteOptionInfoMap, SitesList, TimeZoneData, User, UserData, UserListData } from "../models";


export class ContractService {
  constructor(private readonly apiClient: ApiClient) {}

  async addContract(params: { token: string; body: RequestOptions["body"]; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, siteIndex, cancelId } = params;
    return this.apiClient.post(`/v1/contract/add/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async addContractLog(params: { token: string; contractNo: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, contractNo, body, cancelId } = params;
    return this.apiClient.post(`/v1/contractLogs/add/${contractNo}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getContractLog(params: { token: string; contractNo: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, contractNo, cancelId } = params;
    return this.apiClient.get(`/v1/contractLogs/getList/${contractNo}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAllContractLogs(params: { token: string; siteIndex: string; groupID: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, groupID, cancelId } = params;
    return this.apiClient.get(`/v1/contractLogs/getList/all/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getContractDataInfo(params: { token: string; contractNo: number; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, contractNo, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/contract/getInfo/contractNo/${contractNo}/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getContractLogs(params: { token: string; contractNo: number; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, contractNo, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/contractLogs/getList/contractNo/${contractNo}/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async patchContract(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.patch("/v1/contract/patch", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async getCurrentContract(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/contract/get/currentContract/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getContractList(params: { token: string; siteIndex: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, siteIndex, cancelId } = params;
    return this.apiClient.get(`/v1/contract/getList/${siteIndex}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async patchContractLogByIndex(params: { token: string; index: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, index, body, cancelId } = params;
    return this.apiClient.patch(`/v1/contractLogs/patch/index/${index}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }

  async modifyContractState(params: { token: string; body: RequestOptions["body"]; cancelId?: string }): Promise<FoxApiResult> {
    const { token, body, cancelId } = params;
    return this.apiClient.patch("/v1/contract/patch/state", { header: {Authorization: `Bearer ${token}`, From: "web"}, body: body, cancelId: cancelId });
  }
}
