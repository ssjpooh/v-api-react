export * from "./apiClient";
export * from "./resultUtils";
export * from "./models";
export * from "./services";
export * as v2 from "./services/v2";
import { ApiClient } from "./apiClient";
import { createV2Api } from "./services/v2";
import { CommonService, ContractService, DashboardService, GroupService, MailService, NoticeService, OptionService, OrgSyncService, RoomService, SectorService, ServerService, SiteService, StatisticsService, UserService, } from "./services";
export class FoxcomApi {
    static init({ baseUrl }) {
        FoxcomApi.instanceValue = new FoxcomApi(baseUrl);
        return FoxcomApi.instanceValue;
    }
    static get instance() {
        if (!FoxcomApi.instanceValue) {
            throw new Error("FoxcomApi is not initialized. Call FoxcomApi.init({ baseUrl }) first.");
        }
        return FoxcomApi.instanceValue;
    }
    constructor(baseUrl) {
        ApiClient.initialize(baseUrl);
        this.apiClient = new ApiClient();
        this.commonService = new CommonService(this.apiClient);
        this.userService = new UserService(this.apiClient);
        this.roomService = new RoomService(this.apiClient);
        this.siteService = new SiteService(this.apiClient);
        this.optionService = new OptionService(this.apiClient);
        this.noticeService = new NoticeService(this.apiClient);
        this.orgSyncService = new OrgSyncService(this.apiClient);
        this.serverService = new ServerService(this.apiClient);
        this.sectorService = new SectorService(this.apiClient);
        this.contractService = new ContractService(this.apiClient);
        this.dashboardService = new DashboardService(this.apiClient);
        this.statisticsService = new StatisticsService(this.apiClient);
        this.mailService = new MailService(this.apiClient);
        this.groupService = new GroupService(this.apiClient);
        this.v2 = createV2Api(this.apiClient);
    }
}
