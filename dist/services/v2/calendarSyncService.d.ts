import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 calendar_sync — 서버 apiHandler_calendar_sync.go (컨트롤러 apiController_calendar_sync.go) 대응.
 * 외부 캘린더(Google · Outlook) 동기화 — vOne 일정을 사용자 계정의 전용 캘린더(기본 「vworks」)로 보낸다. Outlook 도 2026.10.07 받아 오기까지(Inbound 는 Google 과 같은 규칙 · 일정 응답 SourceType="outlook" · 받는 범위 = 오늘 −30일 ~ +365일).
 * 계약 정본 = vwork/doc/vone-클라이언트-개발가이드.md 3.62 · 3.72 · 3.73 · 3.77 · 서버 API 가이드 Rev 86 · 96 · 97 · 101.
 * 2단계(2026.10.06 — Google → vOne 받아 오기) : 사용자가 Google 의 그 캘린더에 직접 넣은 일정이 vOne 개인 일정으로 들어온다(일정 응답 SourceType="google").
 * 콜백(GET /calendar-oauth-callback)은 Google 이 팝업 창으로 부르는 주소라 미러하지 않는다.
 * 변경 알림(POST /calendar-google-notify · /calendar-outlook-notify)도 Google · Microsoft 가 서버를 부르는 주소라 미러하지 않는다.
 */
export declare class CalendarSyncService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /calendar-providers — 사이트가 켠 provider [{Provider, Enabled, Inbound}] (끔이면 빈 배열 · Inbound = 사이트가 받아 오기를 켰는가) */
    listCalendarProviders(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /calendar-oauth-authorize?provider= — {URL} (새 창으로 연다) */
    getCalendarOAuthURL(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /calendar-accounts — 본인 연동 계정 (State AC · RV(다시 연결 필요) · DS(연동 멈춤) · CalendarName = 보내는 캘린더 이름 · SyncInbound = 「{provider} 에서 만든 일정을 가져옵니다」 스위치) */
    listCalendarAccounts(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /calendar-account — body: { Provider, SyncSchedule?, SyncInvited?, SyncCompany?, SyncInbound?, RemindMinutes? } (보낸 칸만) */
    updateCalendarAccount(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /calendar-account — body: { Provider } 또는 ?provider= (해제 = 전용 캘린더째 삭제 · 응답 CalendarDeleted: true / false(못 지움) / 칸 없음(옛 계정) · ImportedEvents = 해제 직전에 Google 에서 받아 온 일정 수 · ImportFailed = true 면 받아 오지 못함 — 둘 다 칸 없음 = 받아 오기가 꺼진 계정) */
    deleteCalendarAccount(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /calendar-sync — body: { Provider } 전체 재동기화 (계정당 1분 1회 · 넘으면 429) */
    requestCalendarFullSync(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /calendar-sync-status?provider= — 대기 · 실패 건수 · LastError · LastSyncedDate · LastInboundDate(마지막으로 받아 온 시각) · InboundState(ok / stale / off) · SkippedRecurrences(반복을 못 옮긴 건수) */
    getCalendarSyncStatus(params: V2BaseParams): Promise<FoxApiResult>;
}
