export class DashboardService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getServerList(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/dashboard/serverList", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getServerLogMemory(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/dashboard/serverLogMemory", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getServerLogCpu(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/dashboard/serverLogCPU", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getCustomer(params) {
        const { token, mode, cancelId } = params;
        return this.apiClient.get(`/v1/dashboard/customer?mode=${mode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getUsage(params) {
        const { token, mode, cancelId } = params;
        return this.apiClient.get(`/v1/dashboard/usage?mode=${mode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getRoomStat(params) {
        const { token, mode, startDate, endDate, cancelId } = params;
        return this.apiClient.get(`/v1/dashboard/serverRooms?mode=${mode}&startDate=${startDate}&endDate=${endDate}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getAttendeeStat(params) {
        const { token, mode, startDate, endDate, cancelId } = params;
        return this.apiClient.get(`/v1/dashboard/serverAttendees?mode=${mode}&startDate=${startDate}&endDate=${endDate}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
}
