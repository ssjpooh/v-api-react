import { authHeader, v2Path } from "./shared";
/**
 * v2 password — 서버 apiHandler_password.go (컨트롤러 apiController_password.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class PasswordService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** POST /password/reset — body: { SiteID, UserID, Locale } 또는 { Email[, SiteID], Locale } (2026.09.11 Email 갈래 — v1 sendMailType/sendNewPassword 대체). 대상 유무와 무관하게 200 {Accepted:true} */
    async resetPassword(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/password/reset", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /password/complete — body: { SiteID, Finfo, Password } (2026.10.02 — 메일 링크로 비밀번호 설정 완료 · 재설정 · 가입 공용 · 무인증). 200 { Accepted, SiteID, UserID, Purpose:"reset"|"signup" } — 토큰 없음(새 비밀번호로 로그인). 400 "LINK_CONSUMED: …" = 소비·재발급·만료 링크 · 400 "PASSWORD_COMPLEXITY: …" = 규칙 위반(링크 유지). 종전 checkTokenByID → PATCH /v1/user 대체 */
    async completePassword(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/password/complete", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /password/signupLink — body: { SiteID, UserID, Locale } (2026.10.02 — 만료된 가입 링크 재발송 · 무인증). 대상 유무와 무관하게 200 {Accepted:true}. 종전 checkTokenByID → sendEmailCertify 대체 */
    async signupLink(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/password/signupLink", query), { header: authHeader(token), body, cancelId });
    }
}
