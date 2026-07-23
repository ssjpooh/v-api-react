import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 workspaces — 서버 apiHandler_workspaces.go (컨트롤러 apiController_workspaces.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class WorkspacesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /workspaces */
    listWorkspaces(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /workspace */
    getWorkspace(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /workspace */
    createWorkspace(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /workspace */
    patchWorkspace(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /workspace */
    deleteWorkspace(params: V2BodyParams): Promise<FoxApiResult>;
}
