import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 user_options — 서버 apiHandler_user_options.go (컨트롤러 apiController_user_options.go) 대응.
 * 사용자 개인 옵션 (즐겨찾기·대시보드 위젯·알림 설정 등 UI 설정) — name 단위 JSON 저장.
 */
export declare class UserOptionsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /myOptions — names(콤마 구분) 지정 시 해당 옵션만, 미지정 시 전체 */
    listMyOptions(params: V2BaseParams): Promise<FoxApiResult>;
    /** PATCH /myOption — name 단위 전체 교체 (upsert, last-write-wins). body: { Name, Value(임의 JSON) } */
    patchMyOption(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /myOption — name 단건 삭제 (멱등). query: { name } */
    deleteMyOption(params: V2BodyParams): Promise<FoxApiResult>;
}
