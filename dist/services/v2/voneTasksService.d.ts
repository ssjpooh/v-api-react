import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_tasks — 서버 apiHandler_vone_tasks.go (컨트롤러 apiController_vone_tasks.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneTasksService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /tasks */
    listVoneTasks(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /task */
    getVoneTask(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /task */
    createVoneTask(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /task */
    patchVoneTask(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /task */
    deleteVoneTask(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-status */
    changeVoneTaskStatus(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-move */
    moveVoneTask(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-restore */
    restoreVoneTask(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /task-comments */
    listVoneTaskComments(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /task-comment */
    createVoneTaskComment(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /task-comment */
    patchVoneTaskComment(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /task-comment */
    deleteVoneTaskComment(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-link */
    createVoneTaskLink(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /task-link */
    deleteVoneTaskLink(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /labels */
    listVoneLabels(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /label */
    createVoneLabel(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /label */
    patchVoneLabel(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /label */
    deleteVoneLabel(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-label */
    addVoneTaskLabel(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /task-label */
    removeVoneTaskLabel(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-read */
    markVoneTaskRead(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-file */
    addVoneTaskFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /task-file */
    deleteVoneTaskFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /task-purge */
    purgeVoneTask(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /task-trash-empty */
    emptyVoneTaskTrash(params: V2BodyParams): Promise<FoxApiResult>;
}
