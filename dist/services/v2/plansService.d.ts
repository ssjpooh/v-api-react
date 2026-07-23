import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 plans — 서버 apiHandler_plans.go (컨트롤러 apiController_plans.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class PlansService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /plans */
    listPlans(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /plan */
    getPlan(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /plan */
    createPlan(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /plan */
    patchPlan(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /plan */
    deletePlan(params: V2BodyParams): Promise<FoxApiResult>;
}
