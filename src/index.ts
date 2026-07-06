export * from "./apiClient";
export * from "./resultUtils";
export * from "./models";
export * from "./services";

import { ApiClient } from "./apiClient";
import {
  CommonService,
  ContractService,
  DashboardService,
  GroupService,
  MailService,
  NoticeService,
  OptionService,
  OrgSyncService,
  RoomService,
  SectorService,
  ServerService,
  SiteService,
  StatisticsService,
  UserService,
  V2MenuAccessService,
  V2RoomService,
} from "./services";

export class FoxcomApi {
  private static instanceValue?: FoxcomApi;

  static init({ baseUrl }: { baseUrl: string }): FoxcomApi {
    FoxcomApi.instanceValue = new FoxcomApi(baseUrl);
    return FoxcomApi.instanceValue;
  }

  static get instance(): FoxcomApi {
    if (!FoxcomApi.instanceValue) {
      throw new Error("FoxcomApi is not initialized. Call FoxcomApi.init({ baseUrl }) first.");
    }
    return FoxcomApi.instanceValue;
  }

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
  readonly v2MenuAccessService: V2MenuAccessService;
  readonly v2RoomService: V2RoomService;

  private constructor(baseUrl: string) {
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
    this.v2MenuAccessService = new V2MenuAccessService(this.apiClient);
    this.v2RoomService = new V2RoomService(this.apiClient);
  }
}
