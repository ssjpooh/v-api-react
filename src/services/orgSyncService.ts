import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";
import { handleResult } from "../resultUtils";
import { OrgSyncGetResponse, type OrgSyncRequest, OrgSyncResponse, OrgTreeResponse } from "../models";

type OrgSyncQuery = Record<string, string | number | boolean>;

type OrgSyncQueryParams = {
  siteIndex?: string;
  mode?: string;
  query?: OrgSyncQuery;
  cancelId?: string;
};

type OrgSyncBodyParams = {
  token: string;
  body: OrgSyncRequest | RequestOptions["body"];
  siteIndex?: string;
  clear?: boolean;
  query?: OrgSyncQuery;
  cancelId?: string;
};

type OrgSyncExcelParams = {
  token: string;
  file?: Blob | string;
  body?: RequestOptions["body"];
  siteIndex?: string;
  clear?: boolean;
  query?: OrgSyncQuery;
  cancelId?: string;
};

function authHeader(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}`, From: "web" };
}

function orgSyncPath(path: string, params: { siteIndex?: string; clear?: boolean; mode?: string; query?: OrgSyncQuery }): string {
  return buildPath(path, params.query ?? { siteIndex: params.siteIndex, clear: params.clear, mode: params.mode });
}

function multipartBody(params: OrgSyncExcelParams): FormData {
  if (params.body instanceof FormData) return params.body;

  const form = new FormData();
  if (params.body && typeof params.body === "object" && !(params.body instanceof Blob)) {
    Object.entries(params.body as Record<string, unknown>).forEach(([key, value]) => {
      if (value == null) return;
      if (value instanceof Blob) {
        form.append(key, value);
      } else {
        form.append(key, String(value));
      }
    });
  }

  if (params.file != null && !form.has("file")) {
    if (params.file instanceof Blob) {
      form.append("file", params.file);
    } else {
      form.append("file", params.file);
    }
  }

  return form;
}

export class OrgSyncService {
  constructor(private readonly apiClient: ApiClient) {}

  async getOrgSync(params: { token: string } & OrgSyncQueryParams): Promise<FoxApiResult<OrgSyncGetResponse>> {
    const { token, cancelId } = params;
    const result = await this.apiClient.get(orgSyncPath("/v1/org-sync", params), {
      header: authHeader(token),
      cancelId,
    });
    return handleResult(result, (json) => OrgSyncGetResponse.fromJson(json));
  }

  async getOrgTree(params: { token: string } & OrgSyncQueryParams): Promise<FoxApiResult<OrgTreeResponse>> {
    const { token, cancelId } = params;
    const result = await this.apiClient.get(orgSyncPath("/v1/org-tree", params), {
      header: authHeader(token),
      cancelId,
    });
    return handleResult(result, (json) => OrgTreeResponse.fromJson(json));
  }

  async syncOrg(params: OrgSyncBodyParams): Promise<FoxApiResult<OrgSyncResponse>> {
    const { token, body, cancelId } = params;
    const result = await this.apiClient.post(orgSyncPath("/v1/org-sync", params), {
      header: authHeader(token),
      body: body as RequestOptions["body"],
      cancelId,
    });
    return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
  }

  async patchOrg(params: OrgSyncBodyParams): Promise<FoxApiResult<OrgSyncResponse>> {
    const { token, body, cancelId } = params;
    const result = await this.apiClient.patch(orgSyncPath("/v1/org-sync", params), {
      header: authHeader(token),
      body: body as RequestOptions["body"],
      cancelId,
    });
    return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
  }

  async deleteOrgSync(params: { token: string; siteIndex?: string; query?: OrgSyncQuery; cancelId?: string }): Promise<FoxApiResult<boolean>> {
    const { token, cancelId } = params;
    const result = await this.apiClient.delete(orgSyncPath("/v1/org-sync", params), {
      header: authHeader(token),
      cancelId,
    });
    return handleResult(result, (json) => Boolean(json));
  }

  async syncOrgExcel(params: OrgSyncExcelParams): Promise<FoxApiResult<OrgSyncResponse>> {
    const { token, cancelId } = params;
    const result = await this.apiClient.multipartPost(orgSyncPath("/v1/org-sync-excel", params), {
      header: authHeader(token),
      body: multipartBody(params),
      cancelId,
    });
    return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
  }

  async patchOrgExcel(params: OrgSyncExcelParams): Promise<FoxApiResult<OrgSyncResponse>> {
    const { token, cancelId } = params;
    const result = await this.apiClient.patch(orgSyncPath("/v1/org-sync-excel", params), {
      header: authHeader(token),
      body: multipartBody(params),
      cancelId,
    });
    return handleResult(result, (json) => OrgSyncResponse.fromJson(json));
  }
}
