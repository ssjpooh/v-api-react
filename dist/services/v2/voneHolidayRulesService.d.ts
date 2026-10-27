import { ApiClient, type FoxApiResult, type V2BaseParams, type V2BodyParams } from "./shared";
/**
 * v2 vone_holiday_rules — 서버 apiHandler_vone_holiday_rules.go (컨트롤러 apiController_vone_holiday_rules.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export declare class VoneHolidayRulesService {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    /** GET /company-holiday-rules */
    listCompanyHolidayRules(params: V2BaseParams): Promise<FoxApiResult>;
    /** POST /company-holiday-rule */
    createCompanyHolidayRule(params: V2BodyParams): Promise<FoxApiResult>;
    /** PATCH /company-holiday-rule */
    updateCompanyHolidayRule(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /company-holiday-rule-stop */
    stopCompanyHolidayRule(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /company-holiday-rule-occurrence — 회차 하나 옮기기 · 빼기 ({RuleIndex, Date, NewDate("" = 빼기)} · 409 HOLIDAY_EXISTS · 422 NOT_AN_OCCURRENCE · PAST_DATE · RULE_STOPPED) */
    moveCompanyHolidayRuleOccurrence(params: V2BodyParams): Promise<FoxApiResult>;
    /** POST /company-holiday-rule-occurrence-reset — 회차 되돌리기 ({RuleIndex, Date} · 예외 없으면 404) */
    resetCompanyHolidayRuleOccurrence(params: V2BodyParams): Promise<FoxApiResult>;
}
