import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_messages — 서버 apiHandler_vone_messages.go (컨트롤러 apiController_vone_messages.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneMessagesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /message */
    sendVoneMessage(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /message-box */
    listVoneMessageBox(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /message */
    getVoneMessage(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /message-read */
    readVoneMessage(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /message-unread */
    unreadVoneMessage(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /message-move */
    moveVoneMessage(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /message-star */
    starVoneMessage(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /message */
    deleteVoneMessage(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /message-unread-count */
    getVoneMessageUnreadCount(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /message-templates */
    listVoneMessageTemplates(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /message-template */
    createVoneMessageTemplate(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /message-template */
    patchVoneMessageTemplate(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /message-template */
    deleteVoneMessageTemplate(params: V2BodyParams): Promise<FoxApiResult>;
}
