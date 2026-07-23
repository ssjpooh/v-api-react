import { handleResult } from "../resultUtils";
import { GroupData } from "../models";
export class GroupService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getGroups(params) {
        const { token, cancelId } = params;
        const response = await this.apiClient.get("/v1/group/getList", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(response, (json) => GroupData.fromJsonList(json));
    }
    async addGroup(params) {
        const { token, body, cancelId } = params;
        const response = await this.apiClient.post("/v1/group/add", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
        return handleResult(response, (json) => GroupData.fromJson(json));
    }
    async removeGroup(params) {
        const { token, body, cancelId } = params;
        const response = await this.apiClient.delete("/v1/group/remove", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
        return handleResult(response);
    }
    async getGroupInfo(params) {
        const { token, groupID, cancelId } = params;
        const response = await this.apiClient.get(`/v1/group/get/${groupID}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(response, (json) => GroupData.fromJson(json));
    }
}
