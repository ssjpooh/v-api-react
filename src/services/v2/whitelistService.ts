import { ApiClient, type FoxApiResult, type V2BaseParams, authHeader, v2Path } from "./shared";

/**
 * v2 whitelist — 서버 apiController_whitelist.go 대응 (접속 IP 화이트리스트 · 2026.09.07).
 * 생성기(tools/gen-v2-services.mjs) 재실행 전까지 수기 작성 — 라우트 모양은 생성기 출력과 동일하게 유지한다.
 */
export class WhitelistService {
  constructor(private readonly apiClient: ApiClient) {}

  /**
   * GET /my-address — 서버가 화이트리스트 대조에 쓰는 요청자 주소.
   * 응답 data: { Address, PeerAddress, ViaProxy, TrustedProxies, Door("AdminWeb"|"Web") }
   */
  async getMyAddress(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/my-address", query), { header: authHeader(token), cancelId });
  }
}
