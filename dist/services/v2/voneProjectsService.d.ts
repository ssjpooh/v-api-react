import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_projects — 서버 apiHandler_vone_projects.go (컨트롤러 apiController_vone_projects.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneProjectsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /vone-products */
    listVoneProducts(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /vone-product */
    createVoneProduct(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /vone-product */
    patchVoneProduct(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /vone-product */
    deleteVoneProduct(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /projects */
    listProjects(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /project */
    getProject(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /project */
    createProject(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /project */
    patchProject(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /project */
    deleteProject(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /project-restore */
    restoreProject(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /project-archive */
    archiveProject(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /project-unarchive */
    unarchiveProject(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /project-members */
    listProjectMembers(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /project-member */
    addProjectMember(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /project-member */
    removeProjectMember(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /project-posts */
    listProjectPosts(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /project-post */
    createProjectPost(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /project-post */
    patchProjectPost(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /project-post */
    deleteProjectPost(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /project-read */
    touchProjectRead(params: V2BodyParams): Promise<FoxApiResult>;
}
