import { authHeader, v2Path } from "./shared";
/**
 * v2 user_options — 서버 apiHandler_user_options.go (컨트롤러 apiController_user_options.go) 대응.
 * 사용자 개인 옵션 (즐겨찾기·대시보드 위젯·알림 설정 등 UI 설정) — name 단위 JSON 저장.
 */
export class UserOptionsService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /** GET /myOptions — names(콤마 구분) 지정 시 해당 옵션만, 미지정 시 전체 */
    async listMyOptions(params) {
        const { token, siteId, query, cancelId } = params;
        return this.apiClient.get(v2Path(siteId, "/myOptions", query), { header: authHeader(token), cancelId });
    }
    /** PATCH /myOption — name 단위 전체 교체 (upsert, last-write-wins). body: { Name, Value(임의 JSON) } */
    async patchMyOption(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.patch(v2Path(siteId, "/myOption", query), { header: authHeader(token), body, cancelId });
    }
    /** DELETE /myOption — name 단건 삭제 (멱등). query: { name } */
    async deleteMyOption(params) {
        const { token, siteId, query, body, cancelId } = params;
        return this.apiClient.delete(v2Path(siteId, "/myOption", query), { header: authHeader(token), body, cancelId });
    }
}
