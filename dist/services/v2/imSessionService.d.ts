import { ApiClient, type FoxApiResult, type V2BodyParams } from "./shared";
/**
 * v2 im_session — 서버 apiHandler_im_session.go (컨트롤러 apiController_im_session.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ImSessionService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** POST /im-session */
    issueIMSession(params: V2BodyParams): Promise<FoxApiResult>;
}
