import { authHeader, v2Path } from "./shared";
/**
 * v2 calendar_sync — 서버 apiHandler_calendar_sync.go (컨트롤러 apiController_calendar_sync.go) 대응.
 * 외부 캘린더(Google) 동기화 — vOne 일정을 사용자 Google 계정의 전용 캘린더(기본 「vworks」)로 보낸다.
 * 계약 정본 = vwork/doc/vone-클라이언트-개발가이드.md 3.62 · 3.72 · 3.73 · 서버 API 가이드 Rev 86 · 96 · 97.
 * 콜백(GET /calendar-oauth-callback)은 Google 이 팝업 창으로 부르는 주소라 미러하지 않는다.
 */
export class CalendarSyncService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /calendar-providers — 사이트가 켠 provider [{Provider, Enabled}] (끔이면 빈 배열) */
    async listCalendarProviders(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/calendar-providers", query), { header: authHeader(token), cancelId });
    }
    /** GET /calendar-oauth-authorize?provider= — {URL} (새 창으로 연다) */
    async getCalendarOAuthURL(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/calendar-oauth-authorize", query), { header: authHeader(token), cancelId });
    }
    /** GET /calendar-accounts — 본인 연동 계정 (State AC · RV(다시 연결 필요) · CalendarName = 보내는 캘린더 이름) */
    async listCalendarAccounts(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/calendar-accounts", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /calendar-account — body: { Provider, SyncSchedule?, SyncInvited?, SyncCompany?, RemindMinutes? } (보낸 칸만) */
    async updateCalendarAccount(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/calendar-account", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /calendar-account — body: { Provider } 또는 ?provider= (해제 = 전용 캘린더째 삭제 · 응답 CalendarDeleted: true / false(못 지움) / 칸 없음(옛 계정)) */
    async deleteCalendarAccount(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/calendar-account", query), { header: authHeader(token), body, cancelId });
    }
    /** POST /calendar-sync — body: { Provider } 전체 재동기화 (계정당 1분 1회 · 넘으면 429) */
    async requestCalendarFullSync(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/calendar-sync", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /calendar-sync-status?provider= — 대기 · 실패 건수 · LastError · LastSyncedDate */
    async getCalendarSyncStatus(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/calendar-sync-status", query), { header: authHeader(token), cancelId });
    }
}
