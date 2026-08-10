import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams, authHeader, v2Path } from "./shared";

/**
 * v2 vone_surveys — 서버 apiHandler_vone_surveys.go (컨트롤러 apiController_vone_surveys.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneSurveysService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /surveys */
  async listVoneSurveys(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/surveys", query), { header: authHeader(token), cancelId });
  }

  /** GET /survey */
  async getVoneSurvey(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/survey", query), { header: authHeader(token), cancelId });
  }

  /** POST /survey */
  async createVoneSurvey(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/survey", query), { header: authHeader(token), body, cancelId });
  }

  /** PATCH /survey */
  async patchVoneSurvey(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/survey", query), { header: authHeader(token), body, cancelId });
  }

  /** DELETE /survey */
  async deleteVoneSurvey(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/survey", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /survey-publish */
  async publishVoneSurvey(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/survey-publish", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /survey-close */
  async closeVoneSurvey(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/survey-close", query), { header: authHeader(token), body, cancelId });
  }

  /** POST /survey-response */
  async submitVoneSurveyResponse(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/survey-response", query), { header: authHeader(token), body, cancelId });
  }

  /** GET /survey-results */
  async getVoneSurveyResults(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/survey-results", query), { header: authHeader(token), cancelId });
  }

  /** GET /survey-participants */
  async getVoneSurveyParticipants(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/survey-participants", query), { header: authHeader(token), cancelId });
  }
}
