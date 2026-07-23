import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 sector — 서버 apiHandler_sector.go (컨트롤러 apiController_sector.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class SectorService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /sectors */
    listSectors(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /sector */
    getSector(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /sector */
    createSector(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /sector */
    updateSector(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /sector */
    deleteSector(params: V2BodyParams): Promise<FoxApiResult>;
}
