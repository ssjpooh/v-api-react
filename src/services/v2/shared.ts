import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../../apiClient";

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

export function authHeader(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}`, From: "web" };
}

/**
 * v2 경로 빌더.
 * v2 는 path 폼(/v2/:siteId/...) 을 쓰지 않고 siteID(SITE_ID) 를 쿼리로 전달한다.
 * 서버 siteIDResolverMiddleware 가 ?siteID= 를 siteIndex 로 리졸브한다 (쿼리 키는 대문자 siteID).
 */
export function v2Path(siteId: string | undefined, path: string, query?: V2Query): string {
  const q: V2Query = { ...(query ?? {}) };
  if (siteId) q.siteID = siteId;
  return buildPath(`/v2${path}`, q);
}

export { ApiClient };
export type { FoxApiResult, RequestOptions };
