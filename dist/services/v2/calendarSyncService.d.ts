import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 calendar_sync — 서버 apiHandler_calendar_sync.go (컨트롤러 apiController_calendar_sync.go) 대응.
 * 외부 캘린더(Google) 동기화 — vOne 일정을 사용자 Google 계정의 전용 캘린더(기본 「vworks」)로 보낸다.
 * 계약 정본 = vwork/doc/vone-클라이언트-개발가이드.md 3.62 · 3.72 · 3.73 · 서버 API 가이드 Rev 86 · 96 · 97.
 * 콜백(GET /calendar-oauth-callback)은 Google 이 팝업 창으로 부르는 주소라 미러하지 않는다.
 */
export declare class CalendarSyncService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /calendar-providers — 사이트가 켠 provider [{Provider, Enabled}] (끔이면 빈 배열) */
    listCalendarProviders(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /calendar-oauth-authorize?provider= — {URL} (새 창으로 연다) */
    getCalendarOAuthURL(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /calendar-accounts — 본인 연동 계정 (State AC · RV(다시 연결 필요) · CalendarName = 보내는 캘린더 이름) */
    listCalendarAccounts(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /calendar-account — body: { Provider, SyncSchedule?, SyncInvited?, SyncCompany?, RemindMinutes? } (보낸 칸만) */
    updateCalendarAccount(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /calendar-account — body: { Provider } 또는 ?provider= (해제 = 전용 캘린더째 삭제 · 응답 CalendarDeleted: true / false(못 지움) / 칸 없음(옛 계정)) */
    deleteCalendarAccount(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /calendar-sync — body: { Provider } 전체 재동기화 (계정당 1분 1회 · 넘으면 429) */
    requestCalendarFullSync(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /calendar-sync-status?provider= — 대기 · 실패 건수 · LastError · LastSyncedDate */
    getCalendarSyncStatus(params: V2BaseParams): Promise<FoxApiResult>;
}
