import { ApiClient, type FoxApiResult } from "../apiClient";

export class DashboardService {
  constructor(private readonly apiClient: ApiClient) {}

  async getServerList(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/dashboard/serverList", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getServerLogMemory(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/dashboard/serverLogMemory", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getServerLogCpu(params: { token: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, cancelId } = params;
    return this.apiClient.get("/v1/dashboard/serverLogCPU", { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getCustomer(params: { token: string; mode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, mode, cancelId } = params;
    return this.apiClient.get(`/v1/dashboard/customer?mode=${mode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getUsage(params: { token: string; mode: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, mode, cancelId } = params;
    return this.apiClient.get(`/v1/dashboard/usage?mode=${mode}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getRoomStat(params: { token: string; mode: string; startDate: string; endDate: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, mode, startDate, endDate, cancelId } = params;
    return this.apiClient.get(`/v1/dashboard/serverRooms?mode=${mode}&startDate=${startDate}&endDate=${endDate}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }

  async getAttendeeStat(params: { token: string; mode: string; startDate: string; endDate: string; cancelId?: string }): Promise<FoxApiResult> {
    const { token, mode, startDate, endDate, cancelId } = params;
    return this.apiClient.get(`/v1/dashboard/serverAttendees?mode=${mode}&startDate=${startDate}&endDate=${endDate}`, { header: {Authorization: `Bearer ${token}`, From: "web"}, cancelId: cancelId });
  }
}
