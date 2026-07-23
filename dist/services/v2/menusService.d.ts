import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 menus — 서버 apiHandler_menus.go (컨트롤러 apiController_menus.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class MenusService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /menus */
    listMenus(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /menu */
    getMenu(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /menu */
    createMenu(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /menu */
    patchMenu(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /menu */
    deleteMenu(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /myMenus */
    getMyMenus(params: V2BaseParams): Promise<FoxApiResult>;
}
