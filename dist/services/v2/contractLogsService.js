import { authHeader, v2Path } from "./shared";
/**
 * v2 contract_logs — 서버 apiHandler_contract_logs.go (컨트롤러 apiController_contract_logs.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ContractLogsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /contract-logs */
    async getContractLogsBySite(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/contract-logs", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /contract-log */
    async patchContractLogIsDisplay(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/contract-log", query), { header: authHeader(token), body, cancelId });
    }
}
