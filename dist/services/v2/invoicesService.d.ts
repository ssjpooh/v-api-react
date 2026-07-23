import { ApiClient, type FoxApiResult, type V2BaseParams } from "./shared";
/**
 * v2 invoices — 서버 apiHandler_invoices.go (컨트롤러 apiController_invoices.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class InvoicesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /invoices */
    listInvoices(params: V2BaseParams): Promise<FoxApiResult>;
    /** GET /invoice */
    getInvoice(params: V2BaseParams): Promise<FoxApiResult>;
}
