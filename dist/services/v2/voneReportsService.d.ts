import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_reports — 서버 apiHandler_vone_reports.go (컨트롤러 apiController_vone_reports.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneReportsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /reports */
    listReports(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /report */
    getReport(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /report */
    createReport(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /report */
    patchReport(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /report */
    deleteReport(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /report-submit */
    submitReport(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /report-unsubmit */
    unsubmitReport(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /report-file */
    addReportFile(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /report-file */
    removeReportFile(params: V2BodyParams): Promise<FoxApiResult>;
}
