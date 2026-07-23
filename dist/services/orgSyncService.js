import { buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { OrgSyncGetResponse, OrgSyncResponse, OrgTreeResponse } from "../models";
function authHeader(token) {
    return { Authorization: `Bearer ${token}`, From: "web" };
}
function orgSyncPath(path, params) {
    return buildPath(path, params.query ?? { siteIndex: params.siteIndex, clear: params.clear, mode: params.mode });
}
function multipartBody(params) {
    if (params.body instanceof FormData)
        return params.body;
    const form = new FormData();
    if (params.body && typeof params.body === "object" && !(params.body instanceof Blob)) {
        Object.entries(params.body).forEach(([key, value]) => {
            if (value == null)
                return;
            if (value instanceof Blob) {
                form.append(key, value);
            }
            else {
                form.append(key, String(value));
            }
        });
    }
    if (params.file != null && !form.has("file")) {
        if (params.file instanceof Blob) {
            form.append("file", params.file);
        }
        else {
            form.append("file", params.file);
        }
    }
    return form;
}
export class OrgSyncService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getOrgSync(params) {
        const { token, cancelId } = params;
        const result = await this.apiClient.get(orgSyncPath("/v1/org-sync", params), {
            header: authHeader(token),
            cancelId,
        });
        return handleResult(result, (json) => OrgSyncGetResponse.fromJson(json));
    }
    async getOrgTree(params) {
        const { token, cancelId } = params;
        const result = await this.apiClient.get(orgSyncPath("/v1/org-tree", params), {
            header: authHeader(token),
            cancelId,
        });
        return handleResult(result, (json) => OrgTreeResponse.fromJson(json));
    }
    async syncOrg(params) {
        const { token, body, cancelId } = params;
        const result = await this.apiClient.post(orgSyncPath("/v1/org-sync", params), {
            header: authHeader(token),
            body: body,
            cancelId,
        });
        return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
    }
    async patchOrg(params) {
        const { token, body, cancelId } = params;
        const result = await this.apiClient.patch(orgSyncPath("/v1/org-sync", params), {
            header: authHeader(token),
            body: body,
            cancelId,
        });
        return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
    }
    async deleteOrgSync(params) {
        const { token, cancelId } = params;
        const result = await this.apiClient.delete(orgSyncPath("/v1/org-sync", params), {
            header: authHeader(token),
            cancelId,
        });
        return handleResult(result, (json) => Boolean(json));
    }
    async syncOrgExcel(params) {
        const { token, cancelId } = params;
        const result = await this.apiClient.multipartPost(orgSyncPath("/v1/org-sync-excel", params), {
            header: authHeader(token),
            body: multipartBody(params),
            cancelId,
        });
        return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
    }
    async patchOrgExcel(params) {
        const { token, cancelId } = params;
        const result = await this.apiClient.patch(orgSyncPath("/v1/org-sync-excel", params), {
            header: authHeader(token),
            body: multipartBody(params),
            cancelId,
        });
        return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
    }
}
