import { ApiClient, type FoxApiResult, type V2BaseParams, authHeader, v2Path } from "./shared";

/**
 * v2 live_presence — 서버 apiHandler_live_presence.go (컨트롤러 apiController_live_presence.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class LivePresenceService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /livePresenceUsers */
  async listLivePresenceUsers(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/livePresenceUsers", query), { header: authHeader(token), cancelId });
  }
}
