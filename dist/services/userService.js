import { buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { BlockListData, SiteAvailableData, UserData, UserListData } from "../models";
function toUserDataList(json) {
    return UserListData.fromJson(json).userList;
}
export class UserService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getLoginUserInfo(params) {
        const { userID, token, cancelId } = params;
        const result = await this.apiClient.get(`/v1/user/${userID}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => UserData.fromJson(json));
    }
    async getUserInfoByIndex(params) {
        const { userIndex, token, cancelId } = params;
        const result = await this.apiClient.get(`/v1/user/idx/${userIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => UserData.fromJson(json));
    }
    async searchUserListByKeyword(params) {
        const { userID, token, keyword, cancelId } = params;
        const path = buildPath(`/v1/user/${userID}/searchUserByKeyword`, { keyword });
        const result = await this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, toUserDataList);
    }
    async userListInfo(params) {
        const { userID, token, pageNo, userTypes = [], userStates = [], searchKeyword = "", isManager, pagePerRow, query, cancelId } = params;
        let userType = userTypes.length === 0 ? "all" : userTypes.join(",");
        let userState = userStates.length === 0 ? "all" : userStates.join(",");
        const path = buildPath(`/v1/user/listInfo/${userID}`, query ?? { userType, userState, keyword: searchKeyword, ismanager: isManager, pageNo, pagePerRow });
        const result = await this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => UserListData.fromJson(json));
    }
    async getAdminSiteUserList(params) {
        const { token, siteIndex, pageNo, userTypes = [], userStates = [], searchKeyword = "", pagePerRow, query, cancelId } = params;
        let userType = userTypes.length === 0 ? "all" : userTypes.join(",");
        let userState = userStates.length === 0 ? "all" : userStates.join(",");
        const path = buildPath(`/v1/user/admin/${siteIndex}`, query ?? { userType, userState, pageNo, pagePerRow, keyword: searchKeyword });
        const result = await this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => UserListData.fromJson(json));
    }
    async modifyUser(params) {
        const { userId, userIndex, token, body, cancelId } = params;
        let path = (userId != undefined && userId.length > 0) ? `/v1/user/${userId}` : `/v1/user/index/${userIndex}`;
        return this.apiClient.patch(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifyUserRole(params) {
        const { userIndex, userRole, token, cancelId } = params;
        return this.apiClient.patch(`/v1/userRole/${userIndex}/${userRole}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async modifyUserRoleSiteHolderToSiteManager(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.patch(`/v1/uerRoleHolderToManager/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async removeUserByIndex(params) {
        const { removeList, userIndexList, token, cancelId } = params;
        const body = userIndexList ? { userIndexList } : (removeList ?? []);
        return this.apiClient.delete("/v1/deleteUsers", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async createOperator(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.post("/v1/user/operator", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async createAccount(params) {
        const { token, siteID, body, locale, cancelId } = params;
        return this.apiClient.post(`/v1/user?site=${siteID}&locale=${locale}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async checkOldPassWord(params) {
        const { userID, token, body, cancelId } = params;
        return this.apiClient.post(`/v1/user/${userID}/oldPasswordCheck`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getUserListBySiteIndex(params) {
        const { token, siteIndex, cancelId } = params;
        const result = await this.apiClient.get(`/v1/users?siteIndex=${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, toUserDataList);
    }
    async operatorListInfo(params) {
        const { userID, token, userTypes = [], userStates = [], searchKeyword = "", pageNo, pagePerRow, query, cancelId } = params;
        let userType = userTypes.length === 0 ? "all" : userTypes.join(",");
        let userState = userStates.length === 0 ? "all" : userStates.join(",");
        const path = buildPath(`/v1/user/operatorList/${userID}`, query ?? { userType, userState, keyword: searchKeyword, pageNo, pagePerRow });
        const result = await this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => UserListData.fromJson(json));
    }
    async getUserTypes(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/getSelectedUserType/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getSiteManagerRoleUserTypes(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/getSiteManagerRoleUserTypes/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getMyUserTypes(params) {
        const { token, siteIndex, userIndex, cancelId } = params;
        return this.apiClient.get(`/v1/getMyUserTypes/${siteIndex}/${userIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getHostCount(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/user/get/hostCount/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getAvailableCreateUser(params) {
        const { token, siteIndex, cancelId } = params;
        const result = await this.apiClient.get(`/v1/site/getAvailableCreateUser/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => SiteAvailableData.fromJson(json));
    }
    async getBlockList(params) {
        const { token, query, cancelId } = params;
        const path = buildPath("/v1/blockList", query ?? {});
        const result = await this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => BlockListData.fromJson(json));
    }
    async addBlockUser(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.post("/v1/blockUser", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeBlockUser(params) {
        const { token, userIndex, cancelId } = params;
        return this.apiClient.delete(`/v1/blockUser/${userIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getUserByEmail(params) {
        const { token, email, cancelId } = params;
        const path = buildPath("/v2/user", { email });
        const result = await this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => UserData.fromJson(json));
    }
}
