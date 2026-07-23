import { handleResult } from "../resultUtils";
import { BaseOptionEnvData, GroupOptionEnvData } from "../models";
export const OPTION_CLASS_UNKNOWN = -1;
export const OPTION_CLASS_BASE = 0;
export const OPTION_CLASS_GROUP = 1;
export const OPTION_CLASS_SITE = 2;
export const OPTION_CLASS_POLICY = 3;
export const OPTION_CLASS_ROOM = 4;
export class OptionService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getRoomOption(params) {
        const { userId, roomCode, token, cancelId } = params;
        return this.apiClient.get(`/v1/getRoomOption/${userId}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getBaseOptions(params) {
        const { token, cancelId } = params;
        const result = await this.apiClient.get("/v1/baseOptions", { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => BaseOptionEnvData.fromJson(json));
    }
    async getBaseOptionByKey(params) {
        const { key, cancelId } = params;
        return this.apiClient.get(`/v1/getBaseOption?key=${key}`, { cancelId: cancelId });
    }
    async getBaseOptionValueByName(params) {
        const { token, optionName, cancelId } = params;
        return this.apiClient.get(`/v1/baseOptionItemByName/${optionName}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async addBaseOption(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.post("/v1/addBaseOption", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifyBaseOption(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.patch("/v1/modifyBaseOption", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeBaseOptionItem(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.delete("/v1/baseOptionItem", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getSiteOptions(params) {
        const { token, siteIndex, cancelId } = params;
        return this.apiClient.get(`/v1/siteOptions/${siteIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getSiteOptionByKey(params) {
        const { siteIndex, key, token, cancelId } = params;
        return this.apiClient.get(`/v1/getSiteOption/${siteIndex}?key=${encodeURIComponent(key)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getSiteOptionByName(params) {
        const { siteIndex, optionName, token, cancelId } = params;
        return this.apiClient.get(`/v1/getSiteOption/${siteIndex}/${optionName}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async addSiteOption(params) {
        const { token, body, subMenu, cancelId } = params;
        return this.apiClient.post(`/v1/addSiteOption?subMenu=${subMenu}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async updateSiteOption(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.patch("/v1/modifySiteOption", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getGroupOption(params) {
        const { token, groupID, cancelId } = params;
        const result = await this.apiClient.get(`/v1/option/get/group/${groupID}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => GroupOptionEnvData.fromJson(json));
    }
    async getGroupOptionByName(params) {
        const { token, groupID, name, cancelId } = params;
        return this.apiClient.get(`/v1/groupOptionByName/${groupID}/${name}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async addGroupOption(params) {
        const { token, body, subMenu, cancelId } = params;
        return this.apiClient.post(`/v1/addGroupOption?subMenu=${subMenu}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async updateGroupOption(params) {
        const { token, groupID, body, cancelId } = params;
        return this.apiClient.patch(`/v1/modifyGroupOption/${groupID}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeGroupOption(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.delete("/v1/removeGroupOption", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getPolicyOption(params) {
        const { token, policyCode, cancelId } = params;
        return this.apiClient.get(`/v1/policyOption/${policyCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getPolicies(params) {
        const { token, cancelId } = params;
        return this.apiClient.get("/v1/option/get/policies", { header: { Authorization: `Bearer ${token}`, From: "Web" }, cancelId: cancelId });
    }
    async addPolicyOption(params) {
        const { token, body, policyCode, cancelId } = params;
        return this.apiClient.post(`/v1/policyOption/add/${policyCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifyPolicyOption(params) {
        const { token, body, policyCode, cancelId } = params;
        const result = await this.apiClient.patch(`/v1/policyOption/modify/${policyCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
        return handleResult(result);
    }
    async deletePolicyOption(params) {
        const { token, body, policyCode, cancelId } = params;
        const result = await this.apiClient.delete(`/v1/policyOption/delete/${policyCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
        return handleResult(result);
    }
    async addOptionItem(params) {
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
        const result = await this.apiClient.post(`/v1/optionItem/add/${value}`, { header: { Authorization: `Bearer ${token}`, From: "Web" }, body: body, cancelId: `addOptionItem [${type}]` });
        return handleResult(result);
    }
    async addOptionInherit(params) {
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
        const result = await this.apiClient.post(`/v1/option/inherit/add/${value}`, { header: { Authorization: `Bearer ${token}`, From: "Web" }, body: body, cancelId: `addOptionInherit [${type}]` });
        return handleResult(result);
    }
    async overrideOption(params) {
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
        const result = await this.apiClient.post(`/v1/option/override/${value}`, { header: { Authorization: `Bearer ${token}`, From: "Web" }, body: body, cancelId: `overrideOption [${type}]` });
        return handleResult(result);
    }
    async restoreOption(params) {
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
        const result = await this.apiClient.post(`/v1/option/restore/${value}`, { header: { Authorization: `Bearer ${token}`, From: "Web" }, body: body, cancelId: `restoreOption [${type}]` });
        return handleResult(result);
    }
    async selectedOption(params) {
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
        const result = await this.apiClient.post(`/v1/option/selected/${value}`, { header: { Authorization: `Bearer ${token}`, From: "Web" }, body: body, cancelId: `selectedOption [${type}]` });
        return handleResult(result);
    }
    async deleteOptionItem(params) {
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
        const result = await this.apiClient.delete(`/v1/option/deleteItem/${value}`, { header: { Authorization: `Bearer ${token}`, From: "Web" }, body: body, cancelId: `deleteOptionItem [${type}]` });
        return handleResult(result);
    }
    async changeOptionItemOrder(params) {
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
        const result = await this.apiClient.post(`/v1/option/changeItemOrder/${value}`, { header: { Authorization: `Bearer ${token}`, From: "Web" }, body: body, cancelId: `changeOptionItemOrder [${type}]` });
        return handleResult(result);
    }
}
