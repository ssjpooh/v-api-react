import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_resources — 서버 apiHandler_vone_resources.go (컨트롤러 apiController_vone_resources.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneResourcesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /resources */
    listVoneResources(params: V2BaseParams): Promise<FoxApiResult>;
    /**
     * GET /resource-bookings — 자원 축 예약 조회 (2026.09.10 · 서버 API 가이드 Rev 68).
     * query: date=YYYYMMDD(사이트 로컬 하루) 또는 from=&to=(UTC) · resourceIdx(선택). 수동 추가 — 생성기 재실행 시 보존할 것.
     */
    listVoneResourceBookings(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /resource */
    createVoneResource(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /resource */
    patchVoneResource(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /resource */
    deleteVoneResource(params: V2BodyParams): Promise<FoxApiResult>;
}
