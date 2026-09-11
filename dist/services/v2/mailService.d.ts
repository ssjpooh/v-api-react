import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 mail — 서버 apiHandler_mail.go (컨트롤러 apiController_mail.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class MailService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /**
     * POST /inquiry — 도입 문의 (무인증 공개 · 2026.09.11). body: { CompanyName, SenderName, SenderEmail(필수), Phone, Type, ExpectedUsers, Message(필수), Locale }.
     * 수신 주소는 서버 옵션(SendMail.Config.InquiryTo) — 종전 v1 sendMailType/inquiry 의 receiverEmail 은 받지 않는다. 429 = IP 분당 제한 · 503 = 수신 주소 미설정.
     */
    sendInquiry(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /mail/unsubscribe */
    unsubscribeMail(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /mail/resubscribe */
    resubscribeMail(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /mail/unsubscribes */
    listMailUnsubscribes(params: V2BaseParams): Promise<FoxApiResult>;
    /** DELETE /mail/unsubscribe */
    removeMailUnsubscribe(params: V2BodyParams): Promise<FoxApiResult>;
}
