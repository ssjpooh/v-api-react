import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 schedules — 서버 apiHandler_schedules.go (컨트롤러 apiController_schedules.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class SchedulesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /mySchedules */
    listMySchedules(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /schedules */
    listSchedules(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /schedule */
    getSchedule(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /schedule */
    createSchedule(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /schedule */
    patchSchedule(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /schedule */
    deleteSchedule(params: V2BodyParams): Promise<FoxApiResult>;
}
