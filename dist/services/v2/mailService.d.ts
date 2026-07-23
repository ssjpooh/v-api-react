import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 mail — 서버 apiHandler_mail.go (컨트롤러 apiController_mail.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class MailService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /sendMails */
    sendMails(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /mail/unsubscribe */
    unsubscribeMail(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /mail/resubscribe */
    resubscribeMail(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /mail/unsubscribes */
    listMailUnsubscribes(params: V2BaseParams): Promise<FoxApiResult>;
    /** DELETE /mail/unsubscribe */
    removeMailUnsubscribe(params: V2BodyParams): Promise<FoxApiResult>;
}
