import { ApiClient, buildPath } from "../../apiClient";
/**
 * 가입 이메일 인증 상태 코드 (서버 apiController_register.go — 응답 body.code 이자 HTTP status).
 * v1 700(SITE)/701~703(2FA) 과 겹치지 않는 704~ 대역.
 */
export const RESULT_SIGNUP_EMAIL_NOT_VERIFIED = 704;
export const RESULT_SIGNUP_CODE_MISMATCH = 705;
export const RESULT_SIGNUP_CODE_EXPIRED = 706;
/** 이미 해당 이메일로 가입(사이트 대표 계정)됨 — emailChallenge/register 공통 */
export const RESULT_SIGNUP_EMAIL_ALREADY_REGISTERED = 707;
export function authHeader(token) {
    return { Authorization: `Bearer ${token}`, From: "web" };
}
/**
 * v2 경로 빌더.
 * v2 는 path 폼(/v2/:siteId/...) 을 쓰지 않고 siteID(SITE_ID) 를 쿼리로 전달한다.
 * 서버 siteIDResolverMiddleware 가 ?siteID= 를 siteIndex 로 리졸브한다 (쿼리 키는 대문자 siteID).
 */
export function v2Path(siteId, path, query) {
    const q = { ...(query ?? {}) };
    if (siteId)
        q.siteID = siteId;
    return buildPath(`/v2${path}`, q);
}
export { ApiClient };
