import { authHeader, v2Path } from "./shared";
/**
 * v2 vone_board_channels — 서버 apiHandler_vone_board_channels.go (컨트롤러 apiController_vone_board_channels.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class VoneBoardChannelsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /board-channels */
    async listVoneBoardChannels(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/board-channels", query), { header: authHeader(token), cancelId });
    }
    /** POST /board-channel */
    async createVoneBoardChannel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.post(v2Path(siteId, "/board-channel", query), { header: authHeader(token), body, cancelId });
    }
    /** PATCH /board-channel */
    async patchVoneBoardChannel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/board-channel", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /board-channel */
    async deleteVoneBoardChannel(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/board-channel", query), { header: authHeader(token), body, cancelId });
    }
}
