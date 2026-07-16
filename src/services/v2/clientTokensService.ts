import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 client_tokens — 서버 apiHandler_client_tokens.go (컨트롤러 apiController_client_tokens.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ClientTokensService {
  constructor(private readonly apiClient: ApiClient) {}

  /** POST /client/tokens */
  async createClientToken(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/client/tokens", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /checkTokenInfo */
  async checkTokenInfo(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/checkTokenInfo", query), { header: authHeader(token), cancelId });
  }
}
