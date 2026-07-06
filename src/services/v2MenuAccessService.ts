import { ApiClient, type FoxApiResult, buildPath } from "../apiClient";

export type V2MenuAccessQuery = Record<string, string | number | boolean | null | undefined>;

export type V2MenuAccessParams = {
  token: string;
  siteId?: string;
  query?: V2MenuAccessQuery;
  cancelId?: string;
};

function authHeader(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}`, From: "web" };
}

function v2Path(siteId: string | undefined, path: string, query?: V2MenuAccessQuery): string {
  const prefix = siteId ? `/v2/${encodeURIComponent(siteId)}` : "/v2";
  return buildPath(`${prefix}${path}`, query ?? {});
}

export class V2MenuAccessService {
  constructor(private readonly apiClient: ApiClient) {}

  async listAccountTypes(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypes", query), { header: authHeader(token), cancelId });
  }

  async getAccountType(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountType", query), { header: authHeader(token), cancelId });
  }

  async listMenus(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/menus", query), { header: authHeader(token), cancelId });
  }

  async getMenu(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/menu", query), { header: authHeader(token), cancelId });
  }

  async listWorkspaces(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/workspaces", query), { header: authHeader(token), cancelId });
  }

  async getWorkspace(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/workspace", query), { header: authHeader(token), cancelId });
  }

  async listAccountTypeWorkspaces(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspaces", query), { header: authHeader(token), cancelId });
  }

  async getAccountTypeWorkspace(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspace", query), { header: authHeader(token), cancelId });
  }

  async listAccountTypeWorkspaceMenus(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspaceMenus", query), { header: authHeader(token), cancelId });
  }

  async getAccountTypeWorkspaceMenu(params: V2MenuAccessParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/accountTypeWorkspaceMenu", query), { header: authHeader(token), cancelId });
  }
}
