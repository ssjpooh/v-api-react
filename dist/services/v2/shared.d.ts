import { ApiClient, type FoxApiResult, type RequestOptions } from "../../apiClient";
export type V2Query = Record<string, string | number | boolean>;
export type V2BaseParams = {
    /** 인증 토큰 (Authorization: Bearer) */
    token: string;
    /** SITE_ID(문자열). 서버가 ?siteID= 로 받아 siteIndex 로 리졸브한다. 미지정 시 토큰의 사이트 사용 */
    siteId?: string;
    /** 추가 쿼리스트링 (예: noticeIndex, keyword, pageNo …) */
    query?: V2Query;
    /** 요청 취소용 식별자 */
    cancelId?: string;
};
export type V2BodyParams = V2BaseParams & {
    /** 요청 본문 (POST/PATCH/PUT/DELETE) */
    body?: RequestOptions["body"];
};
/**
 * 가입 이메일 인증 상태 코드 (서버 apiController_register.go — 응답 body.code 이자 HTTP status).
 * v1 700(SITE)/701~703(2FA) 과 겹치지 않는 704~ 대역.
 */
export declare const RESULT_SIGNUP_EMAIL_NOT_VERIFIED = 704;
export declare const RESULT_SIGNUP_CODE_MISMATCH = 705;
export declare const RESULT_SIGNUP_CODE_EXPIRED = 706;
/** 이미 해당 이메일로 가입(사이트 대표 계정)됨 — emailChallenge/register 공통 */
export declare const RESULT_SIGNUP_EMAIL_ALREADY_REGISTERED = 707;
export declare function authHeader(token: string): Record<string, string>;
/**
 * v2 경로 빌더.
 * v2 는 path 폼(/v2/:siteId/...) 을 쓰지 않고 siteID(SITE_ID) 를 쿼리로 전달한다.
 * 서버 siteIDResolverMiddleware 가 ?siteID= 를 siteIndex 로 리졸브한다 (쿼리 키는 대문자 siteID).
 */
export declare function v2Path(siteId: string | undefined, path: string, query?: V2Query): string;
export { ApiClient };
export type { FoxApiResult, RequestOptions };
