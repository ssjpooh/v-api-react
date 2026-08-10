import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_org — 서버 apiHandler_vone_org.go (컨트롤러 apiController_vone_org.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneOrgService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /contacts */
    listContacts(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /contact */
    getContact(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /contact */
    createContact(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /contact */
    patchContact(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /contact */
    deleteContact(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /contact-categories */
    listContactCategories(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /contact-category */
    upsertContactCategory(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /contact-category */
    deleteContactCategory(params: V2BodyParams): Promise<FoxApiResult>;
    /** GET /user-absences */
    listUserAbsences(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /user-absence */
    createUserAbsence(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /user-absence */
    patchUserAbsence(params: V2BodyParams): Promise<FoxApiResult>;
    /** DELETE /user-absence */
    deleteUserAbsence(params: V2BodyParams): Promise<FoxApiResult>;
}
