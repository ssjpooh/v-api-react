import { ApiClient, type FoxApiResult, type V2BaseParams, authHeader, v2Path } from "./shared";

/**
 * v2 edge_packages — 서버 apiHandler_edge_packages.go (컨트롤러 apiController_edge_packages.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class EdgePackagesService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /edge/package */
  async getEdgePackageManifest(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/edge/package", query), { header: authHeader(token), cancelId });
  }

  /** GET /edge/package/download */
  async downloadEdgePackage(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/edge/package/download", query), { header: authHeader(token), cancelId });
  }
}
