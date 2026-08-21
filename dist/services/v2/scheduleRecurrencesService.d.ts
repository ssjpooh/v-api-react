import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 schedule_recurrences — 서버 apiHandler_schedule_recurrences.go (컨트롤러 apiController_schedule_recurrences.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class ScheduleRecurrencesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /schedule-recurrences */
    listScheduleRecurrences(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /schedule-recurrence */
    getScheduleRecurrence(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /schedule-recurrence */
    createScheduleRecurrence(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /schedule-recurrence */
    patchScheduleRecurrence(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /schedule-recurrence */
    deleteScheduleRecurrence(params: V2BodyParams): Promise<FoxApiResult>;
}
