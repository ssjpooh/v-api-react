import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 schedules — 서버 apiHandler_schedules.go (컨트롤러 apiController_schedules.go) 대응.
 * 일정(user_schedules) — 메신저 캘린더와 **같은 테이블·같은 로직 계층**을 쓴다.
 * 유형: personal(개인) / company(회사 — Targets 로 배포) / chat(채팅방 — 조회 전용, 편집은 메신저 커맨드).
 * 시각은 UTC `YYYYMMDDhhmmss` 문자열. 게이트 IM.Schedule.Enable 이 꺼져 있으면 422.
 */
export declare class SchedulesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /mySchedules — 내 캘린더 통합(개인+회사+채팅방). query: { fromDate, toDate } 필수 */
    listMySchedules(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /schedules — 사이트 범위 목록. query: { fromDate, toDate, scheduleType?(기본 company), userIndex? } */
    listSchedules(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /schedule — 단건 상세(회사 일정은 Targets 포함). query: { scheduleIndex } */
    getSchedule(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /schedule — 생성. body: { Title, StartDate 필수 / ScheduleType?(기본 personal) / Targets?(company 필수) } */
    createSchedule(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /schedule — 보낸 필드만 수정. body: { ScheduleIndex 필수, …, Targets?(company 대상 전체 교체) } */
    patchSchedule(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /schedule — 삭제(배포 대상 규칙은 CASCADE). query: { scheduleIndex } */
    deleteSchedule(params: V2BodyParams): Promise<FoxApiResult>;
}
