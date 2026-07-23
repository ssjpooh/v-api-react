export * from "./apiClient";
export * from "./resultUtils";
export * from "./models";
export * from "./services";
export * as v2 from "./services/v2";
import { ApiClient } from "./apiClient";
import { type V2Api } from "./services/v2";
import { CommonService, ContractService, DashboardService, GroupService, MailService, NoticeService, OptionService, OrgSyncService, RoomService, SectorService, ServerService, SiteService, StatisticsService, UserService } from "./services";
export declare class FoxcomApi {
    private static instanceValue?;
    static init({ baseUrl }: {
        baseUrl: string;
    }): FoxcomApi;
    static get instance(): FoxcomApi;
    readonly apiClient: ApiClient;
    readonly commonService: CommonService;
    readonly userService: UserService;
    readonly roomService: RoomService;
    readonly siteService: SiteService;
    readonly optionService: OptionService;
    readonly noticeService: NoticeService;
    readonly orgSyncService: OrgSyncService;
    readonly serverService: ServerService;
    readonly sectorService: SectorService;
    readonly contractService: ContractService;
    readonly dashboardService: DashboardService;
    readonly statisticsService: StatisticsService;
    readonly mailService: MailService;
    readonly groupService: GroupService;
    /** v2 API 네임스페이스 — 서버 v2 컨트롤러와 1:1 (foxApi.v2.notices, foxApi.v2.user …) */
    readonly v2: V2Api;
    private constructor();
}
