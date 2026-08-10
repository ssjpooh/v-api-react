import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_surveys — 서버 apiHandler_vone_surveys.go (컨트롤러 apiController_vone_surveys.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneSurveysService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /surveys */
    listVoneSurveys(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /survey */
    getVoneSurvey(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /survey */
    createVoneSurvey(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /survey */
    patchVoneSurvey(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /survey */
    deleteVoneSurvey(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /survey-publish */
    publishVoneSurvey(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /survey-close */
    closeVoneSurvey(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /survey-response */
    submitVoneSurveyResponse(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /survey-results */
    getVoneSurveyResults(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /survey-participants */
    getVoneSurveyParticipants(params: V2BaseParams): Promise<FoxApiResult>;
}
