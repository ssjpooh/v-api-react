import { authHeader, v2Path } from "./shared";
/**
 * v2 edge_packages — 서버 apiHandler_edge_packages.go (컨트롤러 apiController_edge_packages.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class EdgePackagesService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /edge/package */
    async getEdgePackageManifest(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/edge/package", query), { header: authHeader(token), cancelId });
    }
    /** GET /edge/package/download */
    async downloadEdgePackage(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/edge/package/download", query), { header: authHeader(token), cancelId });
    }
}
