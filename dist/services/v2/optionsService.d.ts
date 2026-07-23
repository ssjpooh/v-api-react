import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 options — 서버 apiHandler_options.go (컨트롤러 apiController_options.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class OptionsService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /options */
    listOption(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /option/inherit */
    inheritOption(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /option/override */
    overrideOption(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /option/selected */
    selectedOption(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /option/restore */
    restoreOption(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /option */
    deleteOption(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /option/item */
    addOptionItem(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /option */
    getOption(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /baseOptionItems */
    getBaseOptionItems(params: V2BaseParams): Promise<FoxApiResult>;
}
