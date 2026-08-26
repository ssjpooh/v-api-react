import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 live_presence — 서버 apiHandler_live_presence.go (컨트롤러 apiController_live_presence.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class LivePresenceService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /livePresenceUsers */
    listLivePresenceUsers(params: V2BaseParams): Promise<FoxApiResult>;
}
