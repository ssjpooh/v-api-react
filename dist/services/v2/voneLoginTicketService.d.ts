import { ApiClient, type FoxApiResult, type V2BodyParams } from "./shared";
/**
 * v2 vone_login_ticket — 서버 apiHandler_vone_login_ticket.go (컨트롤러 apiController_vone_login_ticket.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneLoginTicketService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /vone-login-ticket/check */
    checkVoneLoginTicket(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /vone-login-ticket */
    redeemVoneLoginTicket(params: V2BodyParams): Promise<FoxApiResult>;
}
