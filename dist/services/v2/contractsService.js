import { authHeader, v2Path } from "./shared";
/**
 * v2 contracts — 서버 apiHandler_contracts.go (컨트롤러 apiController_contracts.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class ContractsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /contracts */
    async listContracts(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/contracts", query), { header: authHeader(token), cancelId });
    }
    /** GET /contract */
    async getContract(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/contract", query), { header: authHeader(token), cancelId });
    }
    /** POST /contract */
    async createContract(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/contract", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /contract */
    async updateContract(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/contract", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /contract/state */
    async updateContractState(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/contract/state", query), { header: authHeader(token), body, cancelId });
    }
    /** GET /contract/current */
    async getCurrentContract(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/contract/current", query), { header: authHeader(token), cancelId });
    }
}
