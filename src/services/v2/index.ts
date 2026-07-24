import { ApiClient } from "../../apiClient";
import { AccountTypesService } from "./accountTypesService";
import { AccountTypeWorkspacesService } from "./accountTypeWorkspacesService";
import { AccountTypeWorkspaceMenusService } from "./accountTypeWorkspaceMenusService";
import { BillingService } from "./billingService";
import { BrandingService } from "./brandingService";
import { ClientTokensService } from "./clientTokensService";
import { CommonService } from "./commonService";
import { ContractsService } from "./contractsService";
import { ContractLogsService } from "./contractLogsService";
import { CreditsService } from "./creditsService";
import { EdgePackagesService } from "./edgePackagesService";
import { InvoicesService } from "./invoicesService";
import { MailService } from "./mailService";
import { MaterialsService } from "./materialsService";
import { MenusService } from "./menusService";
import { NoticesService } from "./noticesService";
import { OptionsService } from "./optionsService";
import { OrgSyncService } from "./orgSyncService";
import { PaymentsService } from "./paymentsService";
import { PaymentMethodsService } from "./paymentMethodsService";
import { PendingChangesService } from "./pendingChangesService";
import { PlansService } from "./plansService";
import { ProvisionServersService } from "./provisionServersService";
import { RegisterService } from "./registerService";
import { RoomService } from "./roomService";
import { RoomAttendeesService } from "./roomAttendeesService";
import { RoomAttendeeLogsService } from "./roomAttendeeLogsService";
import { RoomLogsService } from "./roomLogsService";
import { SectorService } from "./sectorService";
import { ServerService } from "./serverService";
import { ServerDomainsService } from "./serverDomainsService";
import { SiteService } from "./siteService";
import { UserService } from "./userService";
import { UserOptionsService } from "./userOptionsService";
import { WorkspacesService } from "./workspacesService";

export {
  RESULT_SIGNUP_EMAIL_NOT_VERIFIED,
  RESULT_SIGNUP_CODE_MISMATCH,
  RESULT_SIGNUP_CODE_EXPIRED,
  RESULT_SIGNUP_EMAIL_ALREADY_REGISTERED,
} from "./shared";
export { AccountTypesService } from "./accountTypesService";
export { AccountTypeWorkspacesService } from "./accountTypeWorkspacesService";
export { AccountTypeWorkspaceMenusService } from "./accountTypeWorkspaceMenusService";
export { BillingService } from "./billingService";
export { BrandingService } from "./brandingService";
export { ClientTokensService } from "./clientTokensService";
export { CommonService } from "./commonService";
export { ContractsService } from "./contractsService";
export { ContractLogsService } from "./contractLogsService";
export { CreditsService } from "./creditsService";
export { EdgePackagesService } from "./edgePackagesService";
export { InvoicesService } from "./invoicesService";
export { MailService } from "./mailService";
export { MaterialsService } from "./materialsService";
export { MenusService } from "./menusService";
export { NoticesService } from "./noticesService";
export { OptionsService } from "./optionsService";
export { OrgSyncService } from "./orgSyncService";
export { PaymentsService } from "./paymentsService";
export { PaymentMethodsService } from "./paymentMethodsService";
export { PendingChangesService } from "./pendingChangesService";
export { PlansService } from "./plansService";
export { ProvisionServersService } from "./provisionServersService";
export { RegisterService } from "./registerService";
export { RoomService } from "./roomService";
export { RoomAttendeesService } from "./roomAttendeesService";
export { RoomAttendeeLogsService } from "./roomAttendeeLogsService";
export { RoomLogsService } from "./roomLogsService";
export { SectorService } from "./sectorService";
export { ServerService } from "./serverService";
export { ServerDomainsService } from "./serverDomainsService";
export { SiteService } from "./siteService";
export { UserService } from "./userService";
export { UserOptionsService } from "./userOptionsService";
export { WorkspacesService } from "./workspacesService";

/** foxApi.v2.* 네임스페이스를 구성한다. 서버 v2 컨트롤러와 1:1. 자동 생성. */
export function createV2Api(apiClient: ApiClient) {
  return {
    accountTypes: new AccountTypesService(apiClient),
    accountTypeWorkspaces: new AccountTypeWorkspacesService(apiClient),
    accountTypeWorkspaceMenus: new AccountTypeWorkspaceMenusService(apiClient),
    billing: new BillingService(apiClient),
    branding: new BrandingService(apiClient),
    clientTokens: new ClientTokensService(apiClient),
    common: new CommonService(apiClient),
    contracts: new ContractsService(apiClient),
    contractLogs: new ContractLogsService(apiClient),
    credits: new CreditsService(apiClient),
    edgePackages: new EdgePackagesService(apiClient),
    invoices: new InvoicesService(apiClient),
    mail: new MailService(apiClient),
    materials: new MaterialsService(apiClient),
    menus: new MenusService(apiClient),
    notices: new NoticesService(apiClient),
    options: new OptionsService(apiClient),
    orgSync: new OrgSyncService(apiClient),
    payments: new PaymentsService(apiClient),
    paymentMethods: new PaymentMethodsService(apiClient),
    pendingChanges: new PendingChangesService(apiClient),
    plans: new PlansService(apiClient),
    provisionServers: new ProvisionServersService(apiClient),
    register: new RegisterService(apiClient),
    room: new RoomService(apiClient),
    roomAttendees: new RoomAttendeesService(apiClient),
    roomAttendeeLogs: new RoomAttendeeLogsService(apiClient),
    roomLogs: new RoomLogsService(apiClient),
    sector: new SectorService(apiClient),
    server: new ServerService(apiClient),
    serverDomains: new ServerDomainsService(apiClient),
    site: new SiteService(apiClient),
    user: new UserService(apiClient),
    userOptions: new UserOptionsService(apiClient),
    workspaces: new WorkspacesService(apiClient),
  };
}

export type V2Api = ReturnType<typeof createV2Api>;
