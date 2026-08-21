import { ApiClient } from "../../apiClient";
import { AccountTypesService } from "./accountTypesService";
import { BrandingService } from "./brandingService";
import { CalendarsService } from "./calendarsService";
import { ClientTokensService } from "./clientTokensService";
import { CommonService } from "./commonService";
import { ContractsService } from "./contractsService";
import { ContractLogsService } from "./contractLogsService";
import { CreditsService } from "./creditsService";
import { CreditPacksService } from "./creditPacksService";
import { EdgePackagesService } from "./edgePackagesService";
import { InvoicesService } from "./invoicesService";
import { MailService } from "./mailService";
import { MaterialsService } from "./materialsService";
import { NoticesService } from "./noticesService";
import { OptionsService } from "./optionsService";
import { OrgFederationService } from "./orgFederationService";
import { OrgSyncService } from "./orgSyncService";
import { OrgUsersService } from "./orgUsersService";
import { PasswordService } from "./passwordService";
import { PaymentsService } from "./paymentsService";
import { PaymentMethodsService } from "./paymentMethodsService";
import { ProvisionServersService } from "./provisionServersService";
import { RegisterService } from "./registerService";
import { RoomService } from "./roomService";
import { RoomAttendeesService } from "./roomAttendeesService";
import { RoomAttendeeLogsService } from "./roomAttendeeLogsService";
import { RoomDetailService } from "./roomDetailService";
import { RoomLogsService } from "./roomLogsService";
import { RoomNotesService } from "./roomNotesService";
import { SchedulesService } from "./schedulesService";
import { ScheduleRecurrencesService } from "./scheduleRecurrencesService";
import { SectorService } from "./sectorService";
import { ServerService } from "./serverService";
import { ServerDomainsService } from "./serverDomainsService";
import { SiteService } from "./siteService";
import { UserService } from "./userService";
import { UserOptionsService } from "./userOptionsService";
import { VoneApprovalService } from "./voneApprovalService";
import { VoneAttendanceService } from "./voneAttendanceService";
import { VoneBoardsService } from "./voneBoardsService";
import { VoneDriveService } from "./voneDriveService";
import { VoneHomeService } from "./voneHomeService";
import { VoneLeaveService } from "./voneLeaveService";
import { VoneMessagesService } from "./voneMessagesService";
import { VoneOrgService } from "./voneOrgService";
import { VonePlatformService } from "./vonePlatformService";
import { VoneProjectsService } from "./voneProjectsService";
import { VoneReportsService } from "./voneReportsService";
import { VoneResourcesService } from "./voneResourcesService";
import { VoneSurveysService } from "./voneSurveysService";
import { VoneSystemService } from "./voneSystemService";
import { VoneTasksService } from "./voneTasksService";

export {
  RESULT_SIGNUP_EMAIL_NOT_VERIFIED,
  RESULT_SIGNUP_CODE_MISMATCH,
  RESULT_SIGNUP_CODE_EXPIRED,
  RESULT_SIGNUP_EMAIL_ALREADY_REGISTERED,
} from "./shared";
export { AccountTypesService } from "./accountTypesService";
export { BrandingService } from "./brandingService";
export { CalendarsService } from "./calendarsService";
export { ClientTokensService } from "./clientTokensService";
export { CommonService } from "./commonService";
export { ContractsService } from "./contractsService";
export { ContractLogsService } from "./contractLogsService";
export { CreditsService } from "./creditsService";
export { CreditPacksService } from "./creditPacksService";
export { EdgePackagesService } from "./edgePackagesService";
export { InvoicesService } from "./invoicesService";
export { MailService } from "./mailService";
export { MaterialsService } from "./materialsService";
export { NoticesService } from "./noticesService";
export { OptionsService } from "./optionsService";
export { OrgFederationService } from "./orgFederationService";
export { OrgSyncService } from "./orgSyncService";
export { OrgUsersService } from "./orgUsersService";
export { PasswordService } from "./passwordService";
export { PaymentsService } from "./paymentsService";
export { PaymentMethodsService } from "./paymentMethodsService";
export { ProvisionServersService } from "./provisionServersService";
export { RegisterService } from "./registerService";
export { RoomService } from "./roomService";
export { RoomAttendeesService } from "./roomAttendeesService";
export { RoomAttendeeLogsService } from "./roomAttendeeLogsService";
export { RoomDetailService } from "./roomDetailService";
export { RoomLogsService } from "./roomLogsService";
export { RoomNotesService } from "./roomNotesService";
export { SchedulesService } from "./schedulesService";
export { ScheduleRecurrencesService } from "./scheduleRecurrencesService";
export { SectorService } from "./sectorService";
export { ServerService } from "./serverService";
export { ServerDomainsService } from "./serverDomainsService";
export { SiteService } from "./siteService";
export { UserService } from "./userService";
export { UserOptionsService } from "./userOptionsService";
export { VoneApprovalService } from "./voneApprovalService";
export { VoneAttendanceService } from "./voneAttendanceService";
export { VoneBoardsService } from "./voneBoardsService";
export { VoneDriveService } from "./voneDriveService";
export { VoneHomeService } from "./voneHomeService";
export { VoneLeaveService } from "./voneLeaveService";
export { VoneMessagesService } from "./voneMessagesService";
export { VoneOrgService } from "./voneOrgService";
export { VonePlatformService } from "./vonePlatformService";
export { VoneProjectsService } from "./voneProjectsService";
export { VoneReportsService } from "./voneReportsService";
export { VoneResourcesService } from "./voneResourcesService";
export { VoneSurveysService } from "./voneSurveysService";
export { VoneSystemService } from "./voneSystemService";
export { VoneTasksService } from "./voneTasksService";

/** foxApi.v2.* 네임스페이스를 구성한다. 서버 v2 컨트롤러와 1:1. 자동 생성. */
export function createV2Api(apiClient: ApiClient) {
  return {
    accountTypes: new AccountTypesService(apiClient),
    branding: new BrandingService(apiClient),
    calendars: new CalendarsService(apiClient),
    clientTokens: new ClientTokensService(apiClient),
    common: new CommonService(apiClient),
    contracts: new ContractsService(apiClient),
    contractLogs: new ContractLogsService(apiClient),
    credits: new CreditsService(apiClient),
    creditPacks: new CreditPacksService(apiClient),
    edgePackages: new EdgePackagesService(apiClient),
    invoices: new InvoicesService(apiClient),
    mail: new MailService(apiClient),
    materials: new MaterialsService(apiClient),
    notices: new NoticesService(apiClient),
    options: new OptionsService(apiClient),
    orgFederation: new OrgFederationService(apiClient),
    orgSync: new OrgSyncService(apiClient),
    orgUsers: new OrgUsersService(apiClient),
    password: new PasswordService(apiClient),
    payments: new PaymentsService(apiClient),
    paymentMethods: new PaymentMethodsService(apiClient),
    provisionServers: new ProvisionServersService(apiClient),
    register: new RegisterService(apiClient),
    room: new RoomService(apiClient),
    roomAttendees: new RoomAttendeesService(apiClient),
    roomAttendeeLogs: new RoomAttendeeLogsService(apiClient),
    roomDetail: new RoomDetailService(apiClient),
    roomLogs: new RoomLogsService(apiClient),
    roomNotes: new RoomNotesService(apiClient),
    schedules: new SchedulesService(apiClient),
    scheduleRecurrences: new ScheduleRecurrencesService(apiClient),
    sector: new SectorService(apiClient),
    server: new ServerService(apiClient),
    serverDomains: new ServerDomainsService(apiClient),
    site: new SiteService(apiClient),
    user: new UserService(apiClient),
    userOptions: new UserOptionsService(apiClient),
    voneApproval: new VoneApprovalService(apiClient),
    voneAttendance: new VoneAttendanceService(apiClient),
    voneBoards: new VoneBoardsService(apiClient),
    voneDrive: new VoneDriveService(apiClient),
    voneHome: new VoneHomeService(apiClient),
    voneLeave: new VoneLeaveService(apiClient),
    voneMessages: new VoneMessagesService(apiClient),
    voneOrg: new VoneOrgService(apiClient),
    vonePlatform: new VonePlatformService(apiClient),
    voneProjects: new VoneProjectsService(apiClient),
    voneReports: new VoneReportsService(apiClient),
    voneResources: new VoneResourcesService(apiClient),
    voneSurveys: new VoneSurveysService(apiClient),
    voneSystem: new VoneSystemService(apiClient),
    voneTasks: new VoneTasksService(apiClient),
  };
}

export type V2Api = ReturnType<typeof createV2Api>;
