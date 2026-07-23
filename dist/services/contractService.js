export class ContractService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async addContract(params) {
        const { token, body, siteIndex, cancelId } = params;
        return this.apiClient.post(`/v1/contract/add/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async addContractLog(params) {
        const { token, contractNo, body, cancelId } = params;
        return this.apiClient.post(`/v1/contractLogs/add/${contractNo}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getContractLog(params) {
        const { token, contractNo, cancelId } = params;
        return this.apiClient.get(`/v1/contractLogs/getList/${contractNo}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getAllContractLogs(params) {
        const { token, siteIndex, groupID, cancelId } = params;
        return this.apiClient.get(`/v1/contractLogs/getList/all/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getContractDataInfo(params) {
        const { token, contractNo, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/contract/getInfo/contractNo/${contractNo}/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getContractLogs(params) {
        const { token, contractNo, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/contractLogs/getList/contractNo/${contractNo}/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async patchContract(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.patch("/v1/contract/patch", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getCurrentContract(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/contract/get/currentContract/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getContractList(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/contract/getList/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async patchContractLogByIndex(params) {
        const { token, index, body, cancelId } = params;
        return this.apiClient.patch(`/v1/contractLogs/patch/index/${index}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifyContractState(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.patch("/v1/contract/patch/state", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
}
