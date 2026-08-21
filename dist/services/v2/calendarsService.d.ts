import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 calendars — 서버 apiHandler_calendars.go (컨트롤러 apiController_calendars.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class CalendarsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /calendars */
    listCalendars(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /calendar */
    getCalendar(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /calendar */
    createCalendar(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /calendar */
    patchCalendar(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /calendar */
    deleteCalendar(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /calendar-subscription */
    setCalendarSubscription(params: V2BodyParams): Promise<FoxApiResult>;
}
