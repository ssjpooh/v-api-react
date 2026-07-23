import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 edge_packages — 서버 apiHandler_edge_packages.go (컨트롤러 apiController_edge_packages.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class EdgePackagesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /edge/package */
    getEdgePackageManifest(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /edge/package/download */
    downloadEdgePackage(params: V2BaseParams): Promise<FoxApiResult>;
}
