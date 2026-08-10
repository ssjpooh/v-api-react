import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_home — 서버 apiHandler_vone_home.go (컨트롤러 apiController_vone_home.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneHomeService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /notifications */
    listVoneNotifications(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /notification-count */
    getVoneNotificationCount(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /notification-read */
    readVoneNotification(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /notification-read-all */
    readAllVoneNotifications(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /notification-unread-all-undo */
    undoReadAllVoneNotifications(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /notification-target-read */
    readVoneNotificationsByTarget(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /notification-settings */
    listVoneNotificationSettings(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /notification-setting */
    upsertVoneNotificationSetting(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /notification-setting */
    deleteVoneNotificationSetting(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /activities */
    listVoneActivities(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /home-widgets */
    getVoneHomeWidgets(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /user-drafts */
    listVoneUserDrafts(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /user-draft */
    getVoneUserDraft(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /user-draft */
    createVoneUserDraft(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /user-draft */
    patchVoneUserDraft(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /user-draft */
    deleteVoneUserDraft(params: V2BodyParams): Promise<FoxApiResult>;
}
