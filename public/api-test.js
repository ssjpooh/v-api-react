const fields = {
  apiUrl: document.querySelector("#apiUrl"),
  tokenId: document.querySelector("#tokenId"),
  siteSecret: document.querySelector("#siteSecret"),
  issueTokenButton: document.querySelector("#issueTokenButton"),
  tokenStatus: document.querySelector("#tokenStatus"),
  tokenPreview: document.querySelector("#tokenPreview"),
  accountType: document.querySelector("#accountType"),
  caseSearch: document.querySelector("#caseSearch"),
  caseGroups: document.querySelector("#caseGroups"),
  selectedCaseName: document.querySelector("#selectedCaseName"),
  selectedCaseDescription: document.querySelector("#selectedCaseDescription"),
  method: document.querySelector("#method"),
  path: document.querySelector("#path"),
  body: document.querySelector("#body"),
  sendButton: document.querySelector("#sendButton"),
  responseMeta: document.querySelector("#responseMeta"),
  responseOutput: document.querySelector("#responseOutput"),
};

const emptyBody = "";
const jsonBody = (value) => JSON.stringify(value, null, 2);

const apiGroups = [
  {
    name: "Common / Auth",
    cases: [
      { name: "OAuth Token", method: "POST", path: "/v1/oauth/token", auth: false, body: "token_id={tokenID}&site_secret={siteSecret}", description: "토큰 발급은 상단 버튼으로도 실행됩니다." },
      { name: "Login", method: "POST", path: "/v1/login?siteID={siteID}", body: jsonBody({ userID: "{userID}", Password: "" }) },
      { name: "Logout", method: "POST", path: "/v1/logout", body: jsonBody({ UserID: "{userID}", Token: "{token}", SiteIndex: "{siteIndex}" }) },
      { name: "Check Token By ID", method: "GET", path: "/v1/checkTokenByID/{userID}", auth: false },
      { name: "Is Exist Room", method: "GET", path: "/v1/isExistRoom/{roomCode}", auth: false },
      { name: "Check Access Token", method: "GET", path: "/v1/checkTokenInfo?roomCode={roomCode}&attdID={attendeeID}", auth: false },
      { name: "Room Server Address", method: "GET", path: "/v1/roomServerAddr/{roomCode}", auth: false },
      { name: "Base Domain", method: "GET", path: "/v1/baseDomain", auth: false },
      { name: "Is Web Server", method: "GET", path: "/v1/isWebServer", auth: false },
      { name: "Health Check", method: "GET", path: "/v1/healthz", auth: false },
      { name: "Time Zone List", method: "GET", path: "/v1/getTimeZone", auth: false },
    ],
  },
  {
    name: "User",
    cases: [
      { name: "Login User Info", method: "GET", path: "/v1/user/{userID}" },
      { name: "User Info By Index", method: "GET", path: "/v1/user/idx/{userIndex}" },
      { name: "Search User By Keyword", method: "GET", path: "/v1/user/{userID}/searchUserByKeyword?keyword=" },
      { name: "User List Info", method: "GET", path: "/v1/user/listInfo/{userID}?userType=all&userState=all&keyword=&pageNo=1&pagePerRow=10" },
      { name: "Admin Site User List", method: "GET", path: "/v1/user/admin/{siteIndex}?userType=all&userState=all&pageNo=1&pagePerRow=10&keyword=" },
      { name: "Modify User By ID", method: "PATCH", path: "/v1/user/{userID}", body: jsonBody({ Name: "" }) },
      { name: "Modify User By Index", method: "PATCH", path: "/v1/user/index/{userIndex}", body: jsonBody({ Name: "" }) },
      { name: "Modify User Role", method: "PATCH", path: "/v1/userRole/{userIndex}/{userRole}" },
      { name: "Holder To Manager", method: "PATCH", path: "/v1/uerRoleHolderToManager/{siteIndex}" },
      { name: "Delete Users", method: "DELETE", path: "/v1/deleteUsers", body: jsonBody({ userIndexList: ["{userIndex}"] }) },
      { name: "Create Operator", method: "POST", path: "/v1/user/operator", body: jsonBody({ UserID: "", Name: "", Password: "" }) },
      { name: "Create Account", method: "POST", path: "/v1/user?site={siteID}&locale=ko", body: jsonBody({ UserID: "", Name: "", Password: "" }) },
      { name: "Old Password Check", method: "POST", path: "/v1/user/{userID}/oldPasswordCheck", body: jsonBody({ Password: "" }) },
      { name: "Users By Site Index", method: "GET", path: "/v1/users?siteIndex={siteIndex}" },
      { name: "Operator List Info", method: "GET", path: "/v1/user/operatorList/{userID}?userType=all&userState=all&keyword=&pageNo=1&pagePerRow=10" },
      { name: "Selected User Types", method: "GET", path: "/v1/getSelectedUserType/{siteIndex}" },
      { name: "Site Manager Role User Types", method: "GET", path: "/v1/getSiteManagerRoleUserTypes/{siteIndex}" },
      { name: "My User Types", method: "GET", path: "/v1/getMyUserTypes/{siteIndex}/{userIndex}" },
      { name: "Host Count", method: "GET", path: "/v1/user/get/hostCount/{siteIndex}" },
      { name: "Available Create User", method: "GET", path: "/v1/site/getAvailableCreateUser/{siteIndex}" },
    ],
  },
  {
    name: "Org Sync",
    cases: [
      { name: "Org Sync Status", method: "GET", path: "/v1/org-sync?siteIndex={siteIndex}&mode=all" },
      { name: "Org Tree", method: "GET", path: "/v1/org-tree?siteIndex={siteIndex}" },
      {
        name: "Sync Org",
        method: "POST",
        path: "/v1/org-sync?siteIndex={siteIndex}&clear=false",
        body: jsonBody({
          departments: [
            {
              dept_code: "dept-001",
              parent_dept_code: "",
              name: "Department",
              eng_name: "Department",
              dept_order: 1,
              description: "",
            },
          ],
          positions: [
            {
              position_code: "position-001",
              name: "Position",
              eng_name: "Position",
              position_order: 1,
            },
          ],
          duties: [
            {
              duty_code: "duty-001",
              name: "Duty",
              eng_name: "Duty",
              duty_order: 1,
            },
          ],
          members: [
            {
              user_id: "{userID}",
              name: "User",
              eng_name: "User",
              email: "",
              nickname: "",
              dept_code: "dept-001",
              position_code: "position-001",
              position_name: "Position",
              duty_code: "duty-001",
              duty_name: "Duty",
              user_order: 1,
            },
          ],
        }),
      },
      {
        name: "Patch Org",
        method: "PATCH",
        path: "/v1/org-sync?siteIndex={siteIndex}",
        body: jsonBody({
          departments: [],
          positions: [],
          duties: [],
          members: [],
        }),
      },
      { name: "Delete Org Sync", method: "DELETE", path: "/v1/org-sync?siteIndex={siteIndex}" },
      { name: "Sync Org Excel", method: "MULTIPART_POST", path: "/v1/org-sync-excel?siteIndex={siteIndex}&clear=false", body: jsonBody({ file: "select-file-in-real-client" }) },
      { name: "Patch Org Excel", method: "MULTIPART_PATCH", path: "/v1/org-sync-excel?siteIndex={siteIndex}", body: jsonBody({ file: "select-file-in-real-client" }) },
    ],
  },
  {
    name: "Site",
    cases: [
      { name: "Admin Site List", method: "GET", path: "/v1/site?keyword=&groupID=&pageNo=1&pagePerRow=10&isActive=1" },
      { name: "Site List", method: "GET", path: "/v1/site/getList" },
      { name: "Add Site", method: "POST", path: "/v1/site?site={siteID}", body: jsonBody({ Name: "", SiteID: "{siteID}" }) },
      { name: "Modify Site", method: "PATCH", path: "/v1/site/siteIdx/{siteIndex}", body: jsonBody({ Name: "" }) },
      { name: "Remove Site", method: "DELETE", path: "/v1/removeSite", body: jsonBody([{ SiteIndex: "{siteIndex}" }]) },
      { name: "DB Site Info", method: "GET", path: "/v1/site/siteIDX/{siteIndex}", auth: false },
      { name: "Site Info", method: "GET", path: "/v1/site/{siteIndex}" },
      { name: "Site Count", method: "GET", path: "/v1/site/getCount/{siteIndex}" },
      { name: "Regenerate Secret Key", method: "POST", path: "/v1/site/reGenerateSecretKey/{siteIndex}" },
      { name: "Available Create User", method: "GET", path: "/v1/site/getAvailableCreateUser/{siteIndex}" },
    ],
  },
  {
    name: "Group",
    cases: [
      { name: "Group List", method: "GET", path: "/v1/group/getList" },
      { name: "Add Group", method: "POST", path: "/v1/group/add", body: jsonBody({ GroupID: "", Name: "" }) },
      { name: "Remove Group", method: "DELETE", path: "/v1/group/remove", body: jsonBody([{ GroupID: "{groupID}" }]) },
      { name: "Group Info", method: "GET", path: "/v1/group/get/{groupID}" },
    ],
  },
  {
    name: "Room",
    cases: [
      { name: "Class Room Info", method: "GET", path: "/v1/classRoomInfo?roomCode={roomCode}&attdID={attendeeID}" },
      { name: "Scheduled Rooms", method: "GET", path: "/v1/room/{userID}/ongoing?keyword=&orderType=0&state=0&startDate=&endDate=&pageNo=0&pagePerRow=10&onlyInvited=false&onlyPermanent=false" },
      { name: "Admin Scheduled Rooms", method: "GET", path: "/v1/room/admin/get/roomList?siteIndex={siteIndex}&keyword=&orderType=0&state=0&startDate=&endDate=&pageNo=0&pagePerRow=10&onlyInvited=false&onlyPermanent=false" },
      { name: "Room History", method: "GET", path: "/v1/room/finished/{userID}?pagePerRow=10&pageNo=0&keyword=&startDate=&endDate=&siteIndex={siteIndex}" },
      { name: "Admin Room History", method: "GET", path: "/v1/room/admin/get/finishedList?siteIndex={siteIndex}&pagePerRow=10&pageNo=0&keyword=&startDate=&endDate=" },
      { name: "Create Room", method: "POST", path: "/v1/room/{userID}?site={siteID}", body: jsonBody({ Name: "", RoomType: "class" }) },
      { name: "Create Room By Admin", method: "POST", path: "/v1/room/post/byAdmin/{siteIndex}/{userID}", body: jsonBody({ Name: "" }) },
      { name: "Modify Room", method: "PATCH", path: "/v1/room/{userID}/{roomCode}", body: jsonBody({ Name: "" }) },
      { name: "Can Remove Room", method: "GET", path: "/v1/IsPossibleToRemoveRoom/{roomCode}" },
      { name: "Remove Room", method: "DELETE", path: "/v1/room/{userID}/{roomCode}" },
      { name: "Room Info", method: "GET", path: "/v1/room/{userID}/{roomCode}" },
      { name: "Room Option", method: "GET", path: "/v1/getRoomOption/{userID}/{roomCode}" },
      { name: "Room Option By Instance", method: "GET", path: "/v1/getRoomOption/{userID}/instanceIndex/{instanceIndex}" },
      { name: "Invited List", method: "GET", path: "/v1/attendee/{userID}/{roomCode}" },
      { name: "Attendee Log", method: "GET", path: "/v1/attendeeLog/{instanceIndex}" },
      { name: "Attendee Log Info", method: "GET", path: "/v1/attendeeLog/{instanceIndex}/{attendeeID}" },
      { name: "Room Logs", method: "GET", path: "/v1/roomLog?startDate={startDate}&endDate={endDate}" },
      { name: "Room History Info", method: "GET", path: "/v1/roomLog/{instanceIndex}" },
      { name: "Join Room Info", method: "GET", path: "/v1/joinRoomInfo?siteID={siteID}&finfo={finfo}", auth: false },
      { name: "Instance Index From Room Code", method: "GET", path: "/v1/room/instanceIdx/{roomCode}", auth: false },
      { name: "Attendance List", method: "GET", path: "/v1/attendanceList/{instanceIndex}?type=all&stats=all&range=all" },
      { name: "Room Policy Info", method: "GET", path: "/v1/room/policyInfo?groupID={groupID}" },
      { name: "Attach Room File", method: "MULTIPART_POST", path: "/v1/file/attachFile/{userID}", body: jsonBody({ file: "select-file-in-real-client" }) },
      { name: "Add Room Files", method: "POST", path: "/v1/file/addFile/{userID}/{roomCode}", body: jsonBody({ files: [] }) },
      { name: "Remove Room Files", method: "DELETE", path: "/v1/file/removeFile/{userID}/{roomCode}", body: jsonBody({ files: [] }) },
      { name: "Note Pages", method: "GET", path: "/v1/room/notes/{userID}/{roomCode}" },
      { name: "Note Pages By Note", method: "GET", path: "/v1/room/notes/{userID}/{roomCode}/{noteID}" },
    ],
  },
  {
    name: "V2 Account Types",
    cases: [
      { name: "listAccountTypes", method: "GET", path: "/v2/accountTypes?siteID={siteID}" },
      { name: "listAccountTypeUserCounts", method: "GET", path: "/v2/accountTypeUserCounts?siteID={siteID}" },
      { name: "getAccountType", method: "GET", path: "/v2/accountType?siteID={siteID}" },
      { name: "createAccountType", method: "POST", path: "/v2/accountType?siteID={siteID}", body: emptyBody },
      { name: "patchAccountType", method: "PATCH", path: "/v2/accountType?siteID={siteID}", body: emptyBody },
      { name: "deleteAccountType", method: "DELETE", path: "/v2/accountType?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Billing",
    cases: [
      { name: "getBillingInfo", method: "GET", path: "/v2/billingInfo?siteID={siteID}" },
      { name: "createBillingContract", method: "POST", path: "/v2/billing/contract?siteID={siteID}", body: emptyBody },
      { name: "upgradeBilling", method: "POST", path: "/v2/billing/upgrade?siteID={siteID}", body: emptyBody },
      { name: "downgradeBilling", method: "POST", path: "/v2/billing/downgrade?siteID={siteID}", body: emptyBody },
      { name: "cancelBilling", method: "POST", path: "/v2/billing/cancel?siteID={siteID}", body: emptyBody },
      { name: "reactivateBilling", method: "POST", path: "/v2/billing/reactivate?siteID={siteID}", body: emptyBody },
      { name: "previewBilling", method: "POST", path: "/v2/billing/preview?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Branding",
    cases: [
      { name: "getBrandingInfo", method: "GET", path: "/v2/branding?siteID={siteID}" },
      { name: "saveBrandingInfo", method: "POST", path: "/v2/branding?siteID={siteID}", body: emptyBody },
      { name: "patchBrandingInfo", method: "PATCH", path: "/v2/branding?siteID={siteID}", body: emptyBody },
      { name: "deleteBrandingInfo", method: "DELETE", path: "/v2/branding?siteID={siteID}", body: emptyBody },
      { name: "getBrandingFileURL", method: "GET", path: "/v2/branding-file?siteID={siteID}" },
      { name: "uploadBrandingFile", method: "POST", path: "/v2/branding-file?siteID={siteID}", body: emptyBody },
      { name: "getBaseBrandingFileURL", method: "GET", path: "/v2/branding-file/base?siteID={siteID}" },
      { name: "uploadBaseBrandingFile", method: "POST", path: "/v2/branding-file/base?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Client Tokens",
    cases: [
      { name: "createClientToken", method: "POST", path: "/v2/client/tokens?siteID={siteID}", body: emptyBody },
      { name: "checkTokenInfo", method: "GET", path: "/v2/checkTokenInfo?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Common",
    cases: [
      { name: "getUserTypes", method: "GET", path: "/v2/userTypes?siteID={siteID}" },
      { name: "getManagerUserTypes", method: "GET", path: "/v2/getManagerUserTypes?siteID={siteID}" },
      { name: "getUserType", method: "GET", path: "/v2/userType?siteID={siteID}" },
      { name: "getMonitorCount", method: "GET", path: "/v2/monitorCount?siteID={siteID}" },
      { name: "getConcurrent", method: "GET", path: "/v2/concurrent?siteID={siteID}" },
      { name: "getBaseDomain", method: "GET", path: "/v2/baseDomain?siteID={siteID}" },
      { name: "webServerDomain", method: "GET", path: "/v2/webServerDomain?siteID={siteID}" },
      { name: "getTimeZone", method: "GET", path: "/v2/getTimeZone?siteID={siteID}" },
      { name: "healthCheck", method: "GET", path: "/v2/healthz?siteID={siteID}" },
      { name: "isWebServer", method: "GET", path: "/v2/isWebServer?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Contracts",
    cases: [
      { name: "listContracts", method: "GET", path: "/v2/contracts?siteID={siteID}" },
      { name: "getContract", method: "GET", path: "/v2/contract?siteID={siteID}" },
      { name: "createContract", method: "POST", path: "/v2/contract?siteID={siteID}", body: emptyBody },
      { name: "updateContract", method: "PATCH", path: "/v2/contract?siteID={siteID}", body: emptyBody },
      { name: "updateContractState", method: "PATCH", path: "/v2/contract/state?siteID={siteID}", body: emptyBody },
      { name: "getCurrentContract", method: "GET", path: "/v2/contract/current?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Contract Logs",
    cases: [
      { name: "getContractLogsBySite", method: "GET", path: "/v2/contract-logs?siteID={siteID}" },
      { name: "patchContractLogIsDisplay", method: "PATCH", path: "/v2/contract-log?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Credits",
    cases: [
      { name: "listCredits", method: "GET", path: "/v2/credits?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Edge Packages",
    cases: [
      { name: "getEdgePackageManifest", method: "GET", path: "/v2/edge/package?siteID={siteID}" },
      { name: "downloadEdgePackage", method: "GET", path: "/v2/edge/package/download?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Invoices",
    cases: [
      { name: "listInvoices", method: "GET", path: "/v2/invoices?siteID={siteID}" },
      { name: "getInvoice", method: "GET", path: "/v2/invoice?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Mail",
    cases: [
      { name: "sendMails", method: "POST", path: "/v2/sendMails?siteID={siteID}", body: emptyBody },
      { name: "unsubscribeMail", method: "GET", path: "/v2/mail/unsubscribe?siteID={siteID}" },
      { name: "resubscribeMail", method: "GET", path: "/v2/mail/resubscribe?siteID={siteID}" },
      { name: "listMailUnsubscribes", method: "GET", path: "/v2/mail/unsubscribes?siteID={siteID}" },
      { name: "removeMailUnsubscribe", method: "DELETE", path: "/v2/mail/unsubscribe?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Materials",
    cases: [
      { name: "listMaterials", method: "GET", path: "/v2/materials?siteID={siteID}" },
      { name: "getMaterial", method: "GET", path: "/v2/material?siteID={siteID}" },
      { name: "getMaterialDownloadURL", method: "GET", path: "/v2/material-download-url?siteID={siteID}" },
      { name: "createDocMaterial", method: "POST", path: "/v2/material-doc?siteID={siteID}", body: emptyBody },
      { name: "createVideoFileMaterial", method: "POST", path: "/v2/material-video-file?siteID={siteID}", body: emptyBody },
      { name: "createVideoURLMaterial", method: "POST", path: "/v2/material-video-url?siteID={siteID}", body: emptyBody },
      { name: "issueMaterialUploadURL", method: "POST", path: "/v2/material-upload-url?siteID={siteID}", body: emptyBody },
      { name: "commitMaterialUpload", method: "POST", path: "/v2/material-commit?siteID={siteID}", body: emptyBody },
      { name: "cancelMaterialUpload", method: "POST", path: "/v2/material-upload-cancel?siteID={siteID}", body: emptyBody },
      { name: "patchMaterial", method: "PATCH", path: "/v2/material?siteID={siteID}", body: emptyBody },
      { name: "deleteMaterial", method: "DELETE", path: "/v2/material?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Notices",
    cases: [
      { name: "listNotices", method: "GET", path: "/v2/notices?siteID={siteID}" },
      { name: "getNotice", method: "GET", path: "/v2/notice?siteID={siteID}" },
      { name: "getNoticeFiles", method: "GET", path: "/v2/notice/files?siteID={siteID}" },
      { name: "createNotice", method: "POST", path: "/v2/notice?siteID={siteID}", body: emptyBody },
      { name: "createNoticeFile", method: "POST", path: "/v2/notice/file?siteID={siteID}", body: emptyBody },
      { name: "updateNotice", method: "PATCH", path: "/v2/notice?siteID={siteID}", body: emptyBody },
      { name: "deleteNotice", method: "DELETE", path: "/v2/notice?siteID={siteID}", body: emptyBody },
      { name: "deleteNoticeFile", method: "DELETE", path: "/v2/notice/file?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Options",
    cases: [
      { name: "listOption", method: "GET", path: "/v2/options?siteID={siteID}" },
      { name: "inheritOption", method: "POST", path: "/v2/option/inherit?siteID={siteID}", body: emptyBody },
      { name: "overrideOption", method: "POST", path: "/v2/option/override?siteID={siteID}", body: emptyBody },
      { name: "selectedOption", method: "POST", path: "/v2/option/selected?siteID={siteID}", body: emptyBody },
      { name: "restoreOption", method: "DELETE", path: "/v2/option/restore?siteID={siteID}", body: emptyBody },
      { name: "deleteOption", method: "DELETE", path: "/v2/option?siteID={siteID}", body: emptyBody },
      { name: "addOptionItem", method: "POST", path: "/v2/option/item?siteID={siteID}", body: emptyBody },
      { name: "getOption", method: "GET", path: "/v2/option?siteID={siteID}" },
      { name: "getBaseOptionItems", method: "GET", path: "/v2/baseOptionItems?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Org Federation",
    cases: [
      { name: "getOrgFederation", method: "GET", path: "/v2/orgFederation?siteID={siteID}" },
      { name: "createOrgFederation", method: "POST", path: "/v2/orgFederation?siteID={siteID}", body: emptyBody },
      { name: "deleteOrgFederation", method: "DELETE", path: "/v2/orgFederation?siteID={siteID}", body: emptyBody },
      { name: "listOrgFederationInvites", method: "GET", path: "/v2/orgFederationInvites?siteID={siteID}" },
      { name: "createOrgFederationInvite", method: "POST", path: "/v2/orgFederationInvite?siteID={siteID}", body: emptyBody },
      { name: "deleteOrgFederationInvite", method: "DELETE", path: "/v2/orgFederationInvite?siteID={siteID}", body: emptyBody },
      { name: "acceptOrgFederationInvite", method: "POST", path: "/v2/orgFederationInvite/accept?siteID={siteID}", body: emptyBody },
      { name: "rejectOrgFederationInvite", method: "POST", path: "/v2/orgFederationInvite/reject?siteID={siteID}", body: emptyBody },
      { name: "leaveOrgFederation", method: "DELETE", path: "/v2/orgFederationSite?siteID={siteID}", body: emptyBody },
      { name: "patchOrgFederationVisibility", method: "PATCH", path: "/v2/orgFederationVisibility?siteID={siteID}", body: emptyBody },
      { name: "listOrgFederationAudits", method: "GET", path: "/v2/orgFederationAudits?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Org Sync",
    cases: [
      { name: "getOrgSync", method: "GET", path: "/v2/org-sync?siteID={siteID}" },
      { name: "getOrgTree", method: "GET", path: "/v2/org-tree?siteID={siteID}" },
      { name: "syncOrg", method: "POST", path: "/v2/org-sync?siteID={siteID}", body: emptyBody },
      { name: "patchOrg", method: "PATCH", path: "/v2/org-sync?siteID={siteID}", body: emptyBody },
      { name: "deleteOrgSync", method: "DELETE", path: "/v2/org-sync?siteID={siteID}", body: emptyBody },
      { name: "syncOrgExcel", method: "POST", path: "/v2/org-sync-excel?siteID={siteID}", body: emptyBody },
      { name: "patchOrgExcel", method: "PATCH", path: "/v2/org-sync-excel?siteID={siteID}", body: emptyBody },
      { name: "syncDeptUsers", method: "POST", path: "/v2/org-sync-dept-users?siteID={siteID}", body: emptyBody },
      { name: "patchDeptUsers", method: "PATCH", path: "/v2/org-sync-dept-users?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Password",
    cases: [
      { name: "resetPassword", method: "POST", path: "/v2/password/reset?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Payments",
    cases: [
      { name: "listPayments", method: "GET", path: "/v2/payments?siteID={siteID}" },
      { name: "getPayment", method: "GET", path: "/v2/payment?siteID={siteID}" },
      { name: "retryPayment", method: "POST", path: "/v2/payment/retry?siteID={siteID}", body: emptyBody },
      { name: "paymentWebhook", method: "POST", path: "/v2/payment/webhook?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Payment Methods",
    cases: [
      { name: "listPaymentMethods", method: "GET", path: "/v2/paymentMethods?siteID={siteID}" },
      { name: "addPaymentMethod", method: "POST", path: "/v2/paymentMethod?siteID={siteID}", body: emptyBody },
      { name: "setDefaultPaymentMethod", method: "PATCH", path: "/v2/paymentMethod/default?siteID={siteID}", body: emptyBody },
      { name: "deletePaymentMethod", method: "DELETE", path: "/v2/paymentMethod?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Pending Changes",
    cases: [
      { name: "listPendingChanges", method: "GET", path: "/v2/pendingChanges?siteID={siteID}" },
      { name: "cancelPendingChange", method: "PATCH", path: "/v2/pendingChange/cancel?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Plans",
    cases: [
      { name: "listPlans", method: "GET", path: "/v2/plans?siteID={siteID}" },
      { name: "getPlan", method: "GET", path: "/v2/plan?siteID={siteID}" },
      { name: "createPlan", method: "POST", path: "/v2/plan?siteID={siteID}", body: emptyBody },
      { name: "patchPlan", method: "PATCH", path: "/v2/plan?siteID={siteID}", body: emptyBody },
      { name: "deletePlan", method: "DELETE", path: "/v2/plan?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Provision Servers",
    cases: [
      { name: "listProvisionServers", method: "GET", path: "/v2/provisioningServers?siteID={siteID}" },
      { name: "getProvisionServer", method: "GET", path: "/v2/provisioningServer?siteID={siteID}" },
      { name: "deleteProvisionServer", method: "DELETE", path: "/v2/provisioningServer?siteID={siteID}", body: emptyBody },
      { name: "createProvisionServer", method: "POST", path: "/v2/provisioningServer?siteID={siteID}", body: emptyBody },
      { name: "updateProvisionServer", method: "PATCH", path: "/v2/provisioningServer?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Register",
    cases: [
      { name: "register", method: "POST", path: "/v2/register?siteID={siteID}", body: emptyBody },
      { name: "signupEmailChallenge", method: "POST", path: "/v2/register/emailChallenge?siteID={siteID}", body: emptyBody },
      { name: "signupVerifyEmail", method: "POST", path: "/v2/register/verifyEmail?siteID={siteID}", body: emptyBody },
      { name: "signupResendEmail", method: "POST", path: "/v2/register/resendEmail?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Room",
    cases: [
      { name: "listRooms", method: "GET", path: "/v2/rooms?siteID={siteID}" },
      { name: "getRoom", method: "GET", path: "/v2/room?siteID={siteID}" },
      { name: "createRoom", method: "POST", path: "/v2/room?siteID={siteID}", body: emptyBody },
      { name: "patchRoom", method: "PATCH", path: "/v2/room?siteID={siteID}", body: emptyBody },
      { name: "deleteRoom", method: "DELETE", path: "/v2/room?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Room Attendees",
    cases: [
      { name: "listAttendees", method: "GET", path: "/v2/attendees?siteID={siteID}" },
      { name: "getAttendee", method: "GET", path: "/v2/attendee?siteID={siteID}" },
      { name: "getInvitedAttendee", method: "GET", path: "/v2/attendee/invited?siteID={siteID}" },
      { name: "addInvitedAttendee", method: "POST", path: "/v2/attendees?siteID={siteID}", body: emptyBody },
      { name: "updateInvitedAttendee", method: "PATCH", path: "/v2/attendees?siteID={siteID}", body: emptyBody },
      { name: "deleteInvitedAttendee", method: "DELETE", path: "/v2/attendees?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Room Attendee Logs",
    cases: [
      { name: "listRoomAttendeeLogs", method: "GET", path: "/v2/attendee-logs?siteID={siteID}" },
      { name: "getRoomAttendeeLogs", method: "GET", path: "/v2/attendee-log?siteID={siteID}" },
      { name: "getAttendance", method: "GET", path: "/v2/attendance?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Room Detail",
    cases: [
      { name: "getRoomDetail", method: "GET", path: "/v2/roomDetail?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Room Logs",
    cases: [
      { name: "listRoomLogs", method: "GET", path: "/v2/roomLogs?siteID={siteID}" },
      { name: "getRoomLog", method: "GET", path: "/v2/roomLog?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Room Notes",
    cases: [
      { name: "getRoomNotes", method: "GET", path: "/v2/roomNotes?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Schedules",
    cases: [
      { name: "listMySchedules", method: "GET", path: "/v2/mySchedules?siteID={siteID}" },
      { name: "listSchedules", method: "GET", path: "/v2/schedules?siteID={siteID}" },
      { name: "getSchedule", method: "GET", path: "/v2/schedule?siteID={siteID}" },
      { name: "createSchedule", method: "POST", path: "/v2/schedule?siteID={siteID}", body: emptyBody },
      { name: "patchSchedule", method: "PATCH", path: "/v2/schedule?siteID={siteID}", body: emptyBody },
      { name: "deleteSchedule", method: "DELETE", path: "/v2/schedule?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Sector",
    cases: [
      { name: "listSectors", method: "GET", path: "/v2/sectors?siteID={siteID}" },
      { name: "getSector", method: "GET", path: "/v2/sector?siteID={siteID}" },
      { name: "createSector", method: "POST", path: "/v2/sector?siteID={siteID}", body: emptyBody },
      { name: "updateSector", method: "PATCH", path: "/v2/sector?siteID={siteID}", body: emptyBody },
      { name: "deleteSector", method: "DELETE", path: "/v2/sector?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Server",
    cases: [
      { name: "listServers", method: "GET", path: "/v2/servers?siteID={siteID}" },
      { name: "getServer", method: "GET", path: "/v2/server?siteID={siteID}" },
      { name: "createServer", method: "POST", path: "/v2/server?siteID={siteID}", body: emptyBody },
      { name: "updateServer", method: "PUT", path: "/v2/server?siteID={siteID}", body: emptyBody },
      { name: "deleteServer", method: "DELETE", path: "/v2/server?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Server Domains",
    cases: [
      { name: "listServerDomains", method: "GET", path: "/v2/domains?siteID={siteID}" },
      { name: "getServerDomain", method: "GET", path: "/v2/domain?siteID={siteID}" },
      { name: "createServerDomain", method: "POST", path: "/v2/domain?siteID={siteID}", body: emptyBody },
      { name: "updateServerDomain", method: "PATCH", path: "/v2/domain?siteID={siteID}", body: emptyBody },
      { name: "deleteServerDomain", method: "DELETE", path: "/v2/domain?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Site",
    cases: [
      { name: "listSites", method: "GET", path: "/v2/sites?siteID={siteID}" },
      { name: "getSite", method: "GET", path: "/v2/site?siteID={siteID}" },
      { name: "createSite", method: "POST", path: "/v2/site?siteID={siteID}", body: emptyBody },
      { name: "updateSite", method: "PATCH", path: "/v2/site?siteID={siteID}", body: emptyBody },
      { name: "deleteSite", method: "DELETE", path: "/v2/site?siteID={siteID}", body: emptyBody },
      { name: "newSiteSecret", method: "POST", path: "/v2/site/newSiteSecret?siteID={siteID}", body: emptyBody },
      { name: "distributedUsers", method: "PATCH", path: "/v2/distributedUsers?siteID={siteID}", body: emptyBody },
      { name: "siteExists", method: "GET", path: "/v2/site/exists?siteID={siteID}" },
    ],
  },
  {
    name: "V2 User",
    cases: [
      { name: "listUsers", method: "GET", path: "/v2/users?siteID={siteID}" },
      { name: "getUser", method: "GET", path: "/v2/user?siteID={siteID}" },
      { name: "createUsers", method: "POST", path: "/v2/user?siteID={siteID}", body: emptyBody },
      { name: "deleteUser", method: "DELETE", path: "/v2/user?siteID={siteID}", body: emptyBody },
      { name: "updateUser", method: "PATCH", path: "/v2/user?siteID={siteID}", body: emptyBody },
      { name: "grantManager", method: "PATCH", path: "/v2/user/grant?siteID={siteID}", body: emptyBody },
      { name: "passwordVerify", method: "POST", path: "/v2/user/password/verify?siteID={siteID}", body: emptyBody },
      { name: "assignAccountType", method: "PATCH", path: "/v2/user/accountType?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 User Options",
    cases: [
      { name: "listMyOptions", method: "GET", path: "/v2/myOptions?siteID={siteID}" },
      { name: "patchMyOption", method: "PATCH", path: "/v2/myOption?siteID={siteID}", body: emptyBody },
      { name: "deleteMyOption", method: "DELETE", path: "/v2/myOption?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Approval",
    cases: [
      { name: "listApprovalForms", method: "GET", path: "/v2/approval-forms?siteID={siteID}" },
      { name: "listApprovalLines", method: "GET", path: "/v2/approval-lines?siteID={siteID}" },
      { name: "getApprovalLine", method: "GET", path: "/v2/approval-line?siteID={siteID}" },
      { name: "createApprovalLine", method: "POST", path: "/v2/approval-line?siteID={siteID}", body: emptyBody },
      { name: "patchApprovalLine", method: "PATCH", path: "/v2/approval-line?siteID={siteID}", body: emptyBody },
      { name: "deleteApprovalLine", method: "DELETE", path: "/v2/approval-line?siteID={siteID}", body: emptyBody },
      { name: "listApprovalDocuments", method: "GET", path: "/v2/approval-documents?siteID={siteID}" },
      { name: "getApprovalDocument", method: "GET", path: "/v2/approval-document?siteID={siteID}" },
      { name: "getApprovalCount", method: "GET", path: "/v2/approval-count?siteID={siteID}" },
      { name: "createApprovalDocument", method: "POST", path: "/v2/approval-document?siteID={siteID}", body: emptyBody },
      { name: "patchApprovalDocument", method: "PATCH", path: "/v2/approval-document?siteID={siteID}", body: emptyBody },
      { name: "deleteApprovalDocument", method: "DELETE", path: "/v2/approval-document?siteID={siteID}", body: emptyBody },
      { name: "submitApprovalDocument", method: "POST", path: "/v2/approval-submit?siteID={siteID}", body: emptyBody },
      { name: "withdrawApprovalDocument", method: "POST", path: "/v2/approval-withdraw?siteID={siteID}", body: emptyBody },
      { name: "approveApprovalDocument", method: "POST", path: "/v2/approval-approve?siteID={siteID}", body: emptyBody },
      { name: "rejectApprovalDocument", method: "POST", path: "/v2/approval-reject?siteID={siteID}", body: emptyBody },
      { name: "addApprovalFile", method: "POST", path: "/v2/approval-file?siteID={siteID}", body: emptyBody },
      { name: "removeApprovalFile", method: "DELETE", path: "/v2/approval-file?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Attendance",
    cases: [
      { name: "getAttendanceToday", method: "GET", path: "/v2/attendance-today?siteID={siteID}" },
      { name: "listAttendances", method: "GET", path: "/v2/attendances?siteID={siteID}" },
      { name: "getAttendanceSummary", method: "GET", path: "/v2/attendance-summary?siteID={siteID}" },
      { name: "checkInAttendance", method: "POST", path: "/v2/attendance-check-in?siteID={siteID}", body: emptyBody },
      { name: "checkOutAttendance", method: "POST", path: "/v2/attendance-check-out?siteID={siteID}", body: emptyBody },
      { name: "patchAttendance", method: "PATCH", path: "/v2/attendance?siteID={siteID}", body: emptyBody },
      { name: "closeAttendanceMonth", method: "POST", path: "/v2/attendance-close?siteID={siteID}", body: emptyBody },
      { name: "reopenAttendanceMonth", method: "POST", path: "/v2/attendance-reopen?siteID={siteID}", body: emptyBody },
      { name: "listCompanyHolidays", method: "GET", path: "/v2/company-holidays?siteID={siteID}" },
      { name: "upsertCompanyHoliday", method: "POST", path: "/v2/company-holiday?siteID={siteID}", body: emptyBody },
      { name: "deleteCompanyHoliday", method: "DELETE", path: "/v2/company-holiday?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Boards",
    cases: [
      { name: "listVoneBoards", method: "GET", path: "/v2/boards?siteID={siteID}" },
      { name: "getVoneBoard", method: "GET", path: "/v2/board?siteID={siteID}" },
      { name: "createVoneBoard", method: "POST", path: "/v2/board?siteID={siteID}", body: emptyBody },
      { name: "patchVoneBoard", method: "PATCH", path: "/v2/board?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneBoard", method: "DELETE", path: "/v2/board?siteID={siteID}", body: emptyBody },
      { name: "readVoneBoard", method: "POST", path: "/v2/board-read?siteID={siteID}", body: emptyBody },
      { name: "readAllVoneBoards", method: "POST", path: "/v2/board-read-all?siteID={siteID}", body: emptyBody },
      { name: "getVoneBoardUnreadCount", method: "GET", path: "/v2/board-unread-count?siteID={siteID}" },
      { name: "listVoneBoardComments", method: "GET", path: "/v2/board-comments?siteID={siteID}" },
      { name: "createVoneBoardComment", method: "POST", path: "/v2/board-comment?siteID={siteID}", body: emptyBody },
      { name: "patchVoneBoardComment", method: "PATCH", path: "/v2/board-comment?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneBoardComment", method: "DELETE", path: "/v2/board-comment?siteID={siteID}", body: emptyBody },
      { name: "addVoneBoardFile", method: "POST", path: "/v2/board-file?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneBoardFile", method: "DELETE", path: "/v2/board-file?siteID={siteID}", body: emptyBody },
      { name: "addVoneBoardShare", method: "POST", path: "/v2/board-share?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneBoardShare", method: "DELETE", path: "/v2/board-share?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Drive",
    cases: [
      { name: "listDriveFolders", method: "GET", path: "/v2/drive-folders?siteID={siteID}" },
      { name: "createDriveFolder", method: "POST", path: "/v2/drive-folder?siteID={siteID}", body: emptyBody },
      { name: "patchDriveFolder", method: "PATCH", path: "/v2/drive-folder?siteID={siteID}", body: emptyBody },
      { name: "deleteDriveFolder", method: "DELETE", path: "/v2/drive-folder?siteID={siteID}", body: emptyBody },
      { name: "restoreDriveFolder", method: "POST", path: "/v2/drive-folder-restore?siteID={siteID}", body: emptyBody },
      { name: "listDriveFiles", method: "GET", path: "/v2/drive-files?siteID={siteID}" },
      { name: "getDriveFile", method: "GET", path: "/v2/drive-file?siteID={siteID}" },
      { name: "getDriveFileDownloadURL", method: "GET", path: "/v2/drive-file-download-url?siteID={siteID}" },
      { name: "createDriveFile", method: "POST", path: "/v2/drive-file?siteID={siteID}", body: emptyBody },
      { name: "patchDriveFile", method: "PATCH", path: "/v2/drive-file?siteID={siteID}", body: emptyBody },
      { name: "deleteDriveFile", method: "DELETE", path: "/v2/drive-file?siteID={siteID}", body: emptyBody },
      { name: "getDriveUploadPolicy", method: "GET", path: "/v2/drive-upload-policy?siteID={siteID}" },
      { name: "issueDriveFileUploadURL", method: "POST", path: "/v2/drive-file-upload-url?siteID={siteID}", body: emptyBody },
      { name: "issueDriveFileUploadURLs", method: "POST", path: "/v2/drive-file-upload-urls?siteID={siteID}", body: emptyBody },
      { name: "cancelDriveFileUpload", method: "POST", path: "/v2/drive-file-upload-cancel?siteID={siteID}", body: emptyBody },
      { name: "commitDriveFileUpload", method: "POST", path: "/v2/drive-file-commit?siteID={siteID}", body: emptyBody },
      { name: "restoreDriveFile", method: "POST", path: "/v2/drive-file-restore?siteID={siteID}", body: emptyBody },
      { name: "listDriveShares", method: "GET", path: "/v2/drive-shares?siteID={siteID}" },
      { name: "createDriveShare", method: "POST", path: "/v2/drive-share?siteID={siteID}", body: emptyBody },
      { name: "deleteDriveShare", method: "DELETE", path: "/v2/drive-share?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Home",
    cases: [
      { name: "listVoneNotifications", method: "GET", path: "/v2/notifications?siteID={siteID}" },
      { name: "getVoneNotificationCount", method: "GET", path: "/v2/notification-count?siteID={siteID}" },
      { name: "readVoneNotification", method: "POST", path: "/v2/notification-read?siteID={siteID}", body: emptyBody },
      { name: "readAllVoneNotifications", method: "POST", path: "/v2/notification-read-all?siteID={siteID}", body: emptyBody },
      { name: "undoReadAllVoneNotifications", method: "POST", path: "/v2/notification-unread-all-undo?siteID={siteID}", body: emptyBody },
      { name: "readVoneNotificationsByTarget", method: "POST", path: "/v2/notification-target-read?siteID={siteID}", body: emptyBody },
      { name: "listVoneNotificationSettings", method: "GET", path: "/v2/notification-settings?siteID={siteID}" },
      { name: "upsertVoneNotificationSetting", method: "POST", path: "/v2/notification-setting?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneNotificationSetting", method: "DELETE", path: "/v2/notification-setting?siteID={siteID}", body: emptyBody },
      { name: "listVoneActivities", method: "GET", path: "/v2/activities?siteID={siteID}" },
      { name: "getVoneHomeWidgets", method: "GET", path: "/v2/home-widgets?siteID={siteID}" },
      { name: "listVoneUserDrafts", method: "GET", path: "/v2/user-drafts?siteID={siteID}" },
      { name: "getVoneUserDraft", method: "GET", path: "/v2/user-draft?siteID={siteID}" },
      { name: "createVoneUserDraft", method: "POST", path: "/v2/user-draft?siteID={siteID}", body: emptyBody },
      { name: "patchVoneUserDraft", method: "PATCH", path: "/v2/user-draft?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneUserDraft", method: "DELETE", path: "/v2/user-draft?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Leave",
    cases: [
      { name: "listLeaveTypes", method: "GET", path: "/v2/leave-types?siteID={siteID}" },
      { name: "getLeaveBalance", method: "GET", path: "/v2/leave-balance?siteID={siteID}" },
      { name: "listLeaveBalances", method: "GET", path: "/v2/leave-balances?siteID={siteID}" },
      { name: "grantLeaveBalance", method: "POST", path: "/v2/leave-balance?siteID={siteID}", body: emptyBody },
      { name: "adjustLeaveBalance", method: "POST", path: "/v2/leave-adjust?siteID={siteID}", body: emptyBody },
      { name: "listLeaveLogs", method: "GET", path: "/v2/leave-logs?siteID={siteID}" },
      { name: "listLeaveRequests", method: "GET", path: "/v2/leave-requests?siteID={siteID}" },
      { name: "listLeaveOccupancy", method: "GET", path: "/v2/leave-occupancy?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Vone Messages",
    cases: [
      { name: "sendVoneMessage", method: "POST", path: "/v2/message?siteID={siteID}", body: emptyBody },
      { name: "listVoneMessageBox", method: "GET", path: "/v2/message-box?siteID={siteID}" },
      { name: "getVoneMessage", method: "GET", path: "/v2/message?siteID={siteID}" },
      { name: "readVoneMessage", method: "POST", path: "/v2/message-read?siteID={siteID}", body: emptyBody },
      { name: "unreadVoneMessage", method: "POST", path: "/v2/message-unread?siteID={siteID}", body: emptyBody },
      { name: "moveVoneMessage", method: "POST", path: "/v2/message-move?siteID={siteID}", body: emptyBody },
      { name: "starVoneMessage", method: "POST", path: "/v2/message-star?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneMessage", method: "DELETE", path: "/v2/message?siteID={siteID}", body: emptyBody },
      { name: "getVoneMessageUnreadCount", method: "GET", path: "/v2/message-unread-count?siteID={siteID}" },
      { name: "listVoneMessageTemplates", method: "GET", path: "/v2/message-templates?siteID={siteID}" },
      { name: "createVoneMessageTemplate", method: "POST", path: "/v2/message-template?siteID={siteID}", body: emptyBody },
      { name: "patchVoneMessageTemplate", method: "PATCH", path: "/v2/message-template?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneMessageTemplate", method: "DELETE", path: "/v2/message-template?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Org",
    cases: [
      { name: "listContacts", method: "GET", path: "/v2/contacts?siteID={siteID}" },
      { name: "getContact", method: "GET", path: "/v2/contact?siteID={siteID}" },
      { name: "createContact", method: "POST", path: "/v2/contact?siteID={siteID}", body: emptyBody },
      { name: "patchContact", method: "PATCH", path: "/v2/contact?siteID={siteID}", body: emptyBody },
      { name: "deleteContact", method: "DELETE", path: "/v2/contact?siteID={siteID}", body: emptyBody },
      { name: "listContactCategories", method: "GET", path: "/v2/contact-categories?siteID={siteID}" },
      { name: "upsertContactCategory", method: "POST", path: "/v2/contact-category?siteID={siteID}", body: emptyBody },
      { name: "deleteContactCategory", method: "DELETE", path: "/v2/contact-category?siteID={siteID}", body: emptyBody },
      { name: "listUserAbsences", method: "GET", path: "/v2/user-absences?siteID={siteID}" },
      { name: "createUserAbsence", method: "POST", path: "/v2/user-absence?siteID={siteID}", body: emptyBody },
      { name: "patchUserAbsence", method: "PATCH", path: "/v2/user-absence?siteID={siteID}", body: emptyBody },
      { name: "deleteUserAbsence", method: "DELETE", path: "/v2/user-absence?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Platform",
    cases: [
      { name: "listVoneMenus", method: "GET", path: "/v2/vone-menus?siteID={siteID}" },
      { name: "listMenuPermissions", method: "GET", path: "/v2/menu-permissions?siteID={siteID}" },
      { name: "grantMenuPermission", method: "POST", path: "/v2/menu-permission?siteID={siteID}", body: emptyBody },
      { name: "revokeMenuPermission", method: "DELETE", path: "/v2/menu-permission?siteID={siteID}", body: emptyBody },
      { name: "listLoginAttempts", method: "GET", path: "/v2/login-attempts?siteID={siteID}" },
      { name: "clearLoginAttempts", method: "POST", path: "/v2/login-attempt-clear?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Projects",
    cases: [
      { name: "listVoneProducts", method: "GET", path: "/v2/vone-products?siteID={siteID}" },
      { name: "createVoneProduct", method: "POST", path: "/v2/vone-product?siteID={siteID}", body: emptyBody },
      { name: "patchVoneProduct", method: "PATCH", path: "/v2/vone-product?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneProduct", method: "DELETE", path: "/v2/vone-product?siteID={siteID}", body: emptyBody },
      { name: "listProjects", method: "GET", path: "/v2/projects?siteID={siteID}" },
      { name: "getProject", method: "GET", path: "/v2/project?siteID={siteID}" },
      { name: "createProject", method: "POST", path: "/v2/project?siteID={siteID}", body: emptyBody },
      { name: "patchProject", method: "PATCH", path: "/v2/project?siteID={siteID}", body: emptyBody },
      { name: "deleteProject", method: "DELETE", path: "/v2/project?siteID={siteID}", body: emptyBody },
      { name: "restoreProject", method: "POST", path: "/v2/project-restore?siteID={siteID}", body: emptyBody },
      { name: "archiveProject", method: "POST", path: "/v2/project-archive?siteID={siteID}", body: emptyBody },
      { name: "unarchiveProject", method: "POST", path: "/v2/project-unarchive?siteID={siteID}", body: emptyBody },
      { name: "listProjectMembers", method: "GET", path: "/v2/project-members?siteID={siteID}" },
      { name: "addProjectMember", method: "POST", path: "/v2/project-member?siteID={siteID}", body: emptyBody },
      { name: "removeProjectMember", method: "DELETE", path: "/v2/project-member?siteID={siteID}", body: emptyBody },
      { name: "listProjectPosts", method: "GET", path: "/v2/project-posts?siteID={siteID}" },
      { name: "createProjectPost", method: "POST", path: "/v2/project-post?siteID={siteID}", body: emptyBody },
      { name: "patchProjectPost", method: "PATCH", path: "/v2/project-post?siteID={siteID}", body: emptyBody },
      { name: "deleteProjectPost", method: "DELETE", path: "/v2/project-post?siteID={siteID}", body: emptyBody },
      { name: "touchProjectRead", method: "POST", path: "/v2/project-read?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Reports",
    cases: [
      { name: "listReports", method: "GET", path: "/v2/reports?siteID={siteID}" },
      { name: "getReport", method: "GET", path: "/v2/report?siteID={siteID}" },
      { name: "createReport", method: "POST", path: "/v2/report?siteID={siteID}", body: emptyBody },
      { name: "patchReport", method: "PATCH", path: "/v2/report?siteID={siteID}", body: emptyBody },
      { name: "deleteReport", method: "DELETE", path: "/v2/report?siteID={siteID}", body: emptyBody },
      { name: "submitReport", method: "POST", path: "/v2/report-submit?siteID={siteID}", body: emptyBody },
      { name: "unsubmitReport", method: "POST", path: "/v2/report-unsubmit?siteID={siteID}", body: emptyBody },
      { name: "addReportFile", method: "POST", path: "/v2/report-file?siteID={siteID}", body: emptyBody },
      { name: "removeReportFile", method: "DELETE", path: "/v2/report-file?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Vone Surveys",
    cases: [
      { name: "listVoneSurveys", method: "GET", path: "/v2/surveys?siteID={siteID}" },
      { name: "getVoneSurvey", method: "GET", path: "/v2/survey?siteID={siteID}" },
      { name: "createVoneSurvey", method: "POST", path: "/v2/survey?siteID={siteID}", body: emptyBody },
      { name: "patchVoneSurvey", method: "PATCH", path: "/v2/survey?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneSurvey", method: "DELETE", path: "/v2/survey?siteID={siteID}", body: emptyBody },
      { name: "publishVoneSurvey", method: "POST", path: "/v2/survey-publish?siteID={siteID}", body: emptyBody },
      { name: "closeVoneSurvey", method: "POST", path: "/v2/survey-close?siteID={siteID}", body: emptyBody },
      { name: "submitVoneSurveyResponse", method: "POST", path: "/v2/survey-response?siteID={siteID}", body: emptyBody },
      { name: "getVoneSurveyResults", method: "GET", path: "/v2/survey-results?siteID={siteID}" },
      { name: "getVoneSurveyParticipants", method: "GET", path: "/v2/survey-participants?siteID={siteID}" },
    ],
  },
  {
    name: "V2 Vone Tasks",
    cases: [
      { name: "listVoneTasks", method: "GET", path: "/v2/tasks?siteID={siteID}" },
      { name: "getVoneTask", method: "GET", path: "/v2/task?siteID={siteID}" },
      { name: "createVoneTask", method: "POST", path: "/v2/task?siteID={siteID}", body: emptyBody },
      { name: "patchVoneTask", method: "PATCH", path: "/v2/task?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneTask", method: "DELETE", path: "/v2/task?siteID={siteID}", body: emptyBody },
      { name: "changeVoneTaskStatus", method: "POST", path: "/v2/task-status?siteID={siteID}", body: emptyBody },
      { name: "moveVoneTask", method: "POST", path: "/v2/task-move?siteID={siteID}", body: emptyBody },
      { name: "restoreVoneTask", method: "POST", path: "/v2/task-restore?siteID={siteID}", body: emptyBody },
      { name: "listVoneTaskComments", method: "GET", path: "/v2/task-comments?siteID={siteID}" },
      { name: "createVoneTaskComment", method: "POST", path: "/v2/task-comment?siteID={siteID}", body: emptyBody },
      { name: "patchVoneTaskComment", method: "PATCH", path: "/v2/task-comment?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneTaskComment", method: "DELETE", path: "/v2/task-comment?siteID={siteID}", body: emptyBody },
      { name: "createVoneTaskLink", method: "POST", path: "/v2/task-link?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneTaskLink", method: "DELETE", path: "/v2/task-link?siteID={siteID}", body: emptyBody },
      { name: "listVoneLabels", method: "GET", path: "/v2/labels?siteID={siteID}" },
      { name: "createVoneLabel", method: "POST", path: "/v2/label?siteID={siteID}", body: emptyBody },
      { name: "patchVoneLabel", method: "PATCH", path: "/v2/label?siteID={siteID}", body: emptyBody },
      { name: "deleteVoneLabel", method: "DELETE", path: "/v2/label?siteID={siteID}", body: emptyBody },
      { name: "addVoneTaskLabel", method: "POST", path: "/v2/task-label?siteID={siteID}", body: emptyBody },
      { name: "removeVoneTaskLabel", method: "DELETE", path: "/v2/task-label?siteID={siteID}", body: emptyBody },
      { name: "markVoneTaskRead", method: "POST", path: "/v2/task-read?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "Notice",
    cases: [
      { name: "Notice List", method: "GET", path: "/v1/notice/get/list?keyword=&page=1&pagePerRow=10&type=2" },
      { name: "Notice Info", method: "GET", path: "/v1/notice/get/info/{noticeIndex}" },
      { name: "Notice File List", method: "GET", path: "/v1/notice/get/fileList/{noticeIndex}" },
      { name: "Add Notice Contents", method: "POST", path: "/v1/notice/add/contents", body: jsonBody({ Subject: "", Contents: "" }) },
      { name: "Add Notice Files", method: "MULTIPART_POST", path: "/v1/notice/add/file/{noticeIndex}", body: jsonBody({ file_0: "select-file-in-real-client" }) },
      { name: "Modify Notice", method: "PATCH", path: "/v1/notice/modify/info", body: jsonBody({ NoticeIndex: "{noticeIndex}", Subject: "" }) },
      { name: "Remove Notice", method: "DELETE", path: "/v1/notice/delete/{noticeIndex}" },
      { name: "Remove Notice File", method: "DELETE", path: "/v1/notice/delete/file/{noticeIndex}/{fileKey}" },
    ],
  },
  {
    name: "Option",
    cases: [
      { name: "Room Option", method: "GET", path: "/v1/getRoomOption/{userID}/{roomCode}" },
      { name: "Base Options", method: "GET", path: "/v1/baseOptions" },
      { name: "Base Option By Key", method: "GET", path: "/v1/getBaseOption?key={optionKey}", auth: false },
      { name: "Base Option By Name", method: "GET", path: "/v1/baseOptionItemByName/{optionName}" },
      { name: "Add Base Option", method: "POST", path: "/v1/addBaseOption", body: jsonBody({ Name: "", Value: "" }) },
      { name: "Modify Base Option", method: "PATCH", path: "/v1/modifyBaseOption", body: jsonBody({ Name: "", Value: "" }) },
      { name: "Remove Base Option Item", method: "DELETE", path: "/v1/baseOptionItem", body: jsonBody({ Name: "", Item: "" }) },
      { name: "Site Options", method: "GET", path: "/v1/siteOptions/{siteIndex}" },
      { name: "Site Option By Key", method: "GET", path: "/v1/getSiteOption/{siteIndex}?key={optionKey}" },
      { name: "Site Option By Name", method: "GET", path: "/v1/getSiteOption/{siteIndex}/{optionName}" },
      { name: "Add Site Option", method: "POST", path: "/v1/addSiteOption?subMenu=false", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "", Value: "" }) },
      { name: "Modify Site Option", method: "PATCH", path: "/v1/modifySiteOption", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "", Value: "" }) },
      { name: "Group Option", method: "GET", path: "/v1/option/get/group/{groupID}" },
      { name: "Group Option By Name", method: "GET", path: "/v1/groupOptionByName/{groupID}/{optionName}" },
      { name: "Add Group Option", method: "POST", path: "/v1/addGroupOption?subMenu=false", body: jsonBody({ GroupID: "{groupID}", Name: "", Value: "" }) },
      { name: "Modify Group Option", method: "PATCH", path: "/v1/modifyGroupOption/{groupID}", body: jsonBody({ Name: "", Value: "" }) },
      { name: "Remove Group Option", method: "DELETE", path: "/v1/removeGroupOption", body: jsonBody({ GroupID: "{groupID}", Name: "" }) },
      { name: "Policies", method: "GET", path: "/v1/option/get/policies" },
      { name: "Policy Option", method: "GET", path: "/v1/policyOption/{policyCode}" },
      { name: "Add Policy Option", method: "POST", path: "/v1/policyOption/add/{policyCode}", body: jsonBody({ Name: "", Value: "" }) },
      { name: "Modify Policy Option", method: "PATCH", path: "/v1/policyOption/modify/{policyCode}", body: jsonBody({ Name: "", Value: "" }) },
      { name: "Delete Policy Option", method: "DELETE", path: "/v1/policyOption/delete/{policyCode}", body: jsonBody({ Name: "" }) },
      { name: "Add Option Item Base", method: "POST", path: "/v1/optionItem/add/", body: jsonBody({ Name: "", Item: "", Value: "" }) },
      { name: "Add Option Item Site", method: "POST", path: "/v1/optionItem/add/site", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "", Item: "", Value: "" }) },
      { name: "Add Option Item Group", method: "POST", path: "/v1/optionItem/add/group", body: jsonBody({ GroupID: "{groupID}", Name: "", Item: "", Value: "" }) },
      { name: "Add Option Item Policy", method: "POST", path: "/v1/optionItem/add/policy", body: jsonBody({ PolicyCode: "{policyCode}", Name: "", Item: "", Value: "" }) },
      { name: "Add Option Item Room", method: "POST", path: "/v1/optionItem/add/room", body: jsonBody({ RoomCode: "{roomCode}", Name: "", Item: "", Value: "" }) },
      { name: "Add Option Inherit Site", method: "POST", path: "/v1/option/inherit/add/site", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "" }) },
      { name: "Override Option Site", method: "POST", path: "/v1/option/override/site", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "", Value: "" }) },
      { name: "Restore Option Site", method: "POST", path: "/v1/option/restore/site", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "" }) },
      { name: "Selected Option Site", method: "POST", path: "/v1/option/selected/site", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "", Selected: "" }) },
      { name: "Delete Option Item Site", method: "DELETE", path: "/v1/option/deleteItem/site", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "", Item: "" }) },
      { name: "Change Option Item Order Site", method: "POST", path: "/v1/option/changeItemOrder/site", body: jsonBody({ SiteIndex: "{siteIndex}", Name: "", Items: [] }) },
    ],
  },
  {
    name: "Server / Domain",
    cases: [
      { name: "Servers", method: "GET", path: "/v1/servers" },
      { name: "Servers By Keyword", method: "GET", path: "/v1/servers?keyword=" },
      { name: "Provisioning Servers", method: "GET", path: "/v1/provisioningServers" },
      { name: "Web Server Domain", method: "GET", path: "/v1/webServerDomain" },
      { name: "Server Info", method: "GET", path: "/v1/serverInfo/{serverIndex}" },
      { name: "Update Server", method: "PATCH", path: "/v1/servers", body: jsonBody({ ServerIndex: "{serverIndex}" }) },
      { name: "Apply Server Config", method: "GET", path: "/v1/server/applyConfig/{sectorName}" },
      { name: "Modify Site Sector", method: "PATCH", path: "/v1/siteSector/{sectorName}", body: jsonBody({ SiteIndexes: [], Sector: "" }) },
      { name: "Server Domains", method: "GET", path: "/v1/serverDomains?sector=&keyword=" },
      { name: "Add Server Domain", method: "POST", path: "/v1/serverDomains", body: jsonBody({ Sector: "", Domain: "" }) },
      { name: "Modify Server Domain", method: "PATCH", path: "/v1/serverDomains/{sectorName}/{domainName}", body: jsonBody({ Domain: "" }) },
      { name: "Remove Server Domain", method: "DELETE", path: "/v1/serverDomains", body: jsonBody({ Sector: "", Domain: "" }) },
      { name: "Remove Provision Server", method: "DELETE", path: "/v1/deleteProvisioningServer", body: jsonBody({ ServerIndexes: [] }) },
    ],
  },
  {
    name: "Sector",
    cases: [
      { name: "Sectors", method: "GET", path: "/v1/sectors" },
      { name: "Sector Info", method: "GET", path: "/v1/sector/{sectorName}" },
      { name: "Server List By Sector", method: "GET", path: "/v1/serverListBySector/{sectorName}" },
      { name: "Server Sectors", method: "GET", path: "/v1/serverSectors" },
      { name: "Server Sectors By Keyword", method: "GET", path: "/v1/serverSectors?keyword=" },
      { name: "Add Sector", method: "POST", path: "/v1/sector", body: jsonBody({ Sector: "", Master: "", Slave: "" }) },
      { name: "Modify Sector", method: "PATCH", path: "/v1/sectors/{sectorName}", body: jsonBody({ Master: "", Slave: "" }) },
      { name: "Remove Sectors", method: "DELETE", path: "/v1/deleteServerSectors", body: jsonBody({ Sectors: ["{sectorName}"] }) },
      { name: "Can Delete Sector", method: "GET", path: "/v1/sectors/get/isAvailableDelete/{sectorName}" },
    ],
  },
  {
    name: "Contract",
    cases: [
      { name: "Add Contract", method: "POST", path: "/v1/contract/add/{siteIndex}", body: jsonBody({}) },
      { name: "Add Contract Log", method: "POST", path: "/v1/contractLogs/add/{contractNo}", body: jsonBody({}) },
      { name: "Contract Log List", method: "GET", path: "/v1/contractLogs/getList/{contractNo}" },
      { name: "All Contract Logs", method: "GET", path: "/v1/contractLogs/getList/all/{siteIndex}" },
      { name: "Contract Info", method: "GET", path: "/v1/contract/getInfo/contractNo/{contractNo}/{siteIndex}" },
      { name: "Contract Logs By Site", method: "GET", path: "/v1/contractLogs/getList/contractNo/{contractNo}/{siteIndex}" },
      { name: "Patch Contract", method: "PATCH", path: "/v1/contract/patch", body: jsonBody({ ContractNo: "{contractNo}" }) },
      { name: "Current Contract", method: "GET", path: "/v1/contract/get/currentContract/{siteIndex}" },
      { name: "Patch Contract Log", method: "PATCH", path: "/v1/contractLogs/patch/index/{index}", body: jsonBody({}) },
      { name: "Modify Contract State", method: "PATCH", path: "/v1/contract/patch/state", body: jsonBody({ ContractNo: "{contractNo}", State: "" }) },
    ],
  },
  {
    name: "Dashboard",
    cases: [
      { name: "Dashboard Server List", method: "GET", path: "/v1/dashboard/serverList" },
      { name: "Server Memory Log", method: "GET", path: "/v1/dashboard/serverLogMemory" },
      { name: "Server CPU Log", method: "GET", path: "/v1/dashboard/serverLogCPU" },
      { name: "Customer", method: "GET", path: "/v1/dashboard/customer?mode=day" },
      { name: "Usage", method: "GET", path: "/v1/dashboard/usage?mode=day" },
      { name: "Room Stat", method: "GET", path: "/v1/dashboard/serverRooms?mode=day&startDate={startDate}&endDate={endDate}" },
      { name: "Attendee Stat", method: "GET", path: "/v1/dashboard/serverAttendees?mode=day&startDate={startDate}&endDate={endDate}" },
    ],
  },
  {
    name: "Statistics",
    cases: [
      { name: "Statistics Header", method: "GET", path: "/v1/statistics/all/header" },
      { name: "Statistics Groups", method: "GET", path: "/v1/statistics/get/group?rangeType=0&startDate={startDate}&endDate={endDate}" },
      { name: "Statistics Group Detail", method: "GET", path: "/v1/statistics/get/groupDetail/{groupID}?rangeType=0&viewType=0&startDate={startDate}&endDate={endDate}" },
      { name: "Statistics Sites", method: "GET", path: "/v1/statistics/get/site?rangeType=0&startDate={startDate}&endDate={endDate}" },
      { name: "Statistics Site Detail", method: "GET", path: "/v1/statistics/get/siteDetail/{siteID}?rangeType=0&startDate={startDate}&endDate={endDate}&viewType=0" },
      { name: "Concurrent Info", method: "GET", path: "/v1/concurrent/get?range=day" },
      { name: "Room License State", method: "GET", path: "/v1/statistics/serverRoomLicense?startDate={startDate}&endDate={endDate}" },
      { name: "Attendee License State", method: "GET", path: "/v1/statistics/serverAttendeesLicense?startDate={startDate}&endDate={endDate}" },
      { name: "Site Daily Detail", method: "GET", path: "/v1/statistics/siteDetail?startDate={startDate}&endDate={endDate}" },
    ],
  },
  {
    name: "Mail",
    cases: [
      { name: "Send Email", method: "POST", path: "/v1/sendMailType/{mailObject}", auth: false, body: jsonBody({}) },
      { name: "Sign Up Email Verify", method: "GET", path: "/v1/signUpEmailVerify?siteID={siteID}&finfo={finfo}", auth: false },
      { name: "New Password Email Verify", method: "GET", path: "/v1/newPasswordEmailVerify?siteID={siteID}&finfo={finfo}", auth: false },
      { name: "Send Certify Email", method: "POST", path: "/v1/sendEmailCertify/{userIndex}" },
    ],
  },
];

let token = "";
let tokenSiteIndex = "";
let tokenTimer = 0;
let saveTimer = 0;
let initialized = false;
let selectedCase = apiGroups[0].cases.find((item) => item.name === "Health Check") ?? apiGroups[0].cases[0];

function todayText(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function replacements() {
  const tokenId = fields.tokenId.value.trim() || "ssj";
  return {
    accountTypeCode: fields.accountType.value.trim() || "default",
    attendeeID: "attendee",
    contractNo: "1",
    domainName: "example.com",
    endDate: todayText(),
    fileKey: "file-key",
    finfo: "finfo",
    groupID: "group",
    index: "1",
    instanceIndex: "1",
    mailObject: "sendNewPassword",
    menuCode: "home",
    noteID: "note",
    noticeIndex: "1",
    optionKey: "key",
    optionName: "User.PasswordComplexity",
    policyCode: "policy",
    roomCode: "room",
    sectorName: "default",
    serverIndex: "server",
    siteID: tokenId,
    siteIndex: tokenSiteIndex || "00000000-0000-0000-0000-000000000000",
    siteSecret: fields.siteSecret.value.trim(),
    startDate: todayText(-7),
    token,
    tokenID: tokenId,
    userID: tokenId,
    userIndex: "1",
    userRole: "manager",
    workspaceCode: "default",
  };
}

function applyTemplate(value) {
  const map = replacements();
  return String(value ?? "").replace(/\{([A-Za-z0-9_]+)\}/g, (match, key) => {
    return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : match;
  });
}

function hasUnresolvedTemplate(value) {
  return /\{[A-Za-z0-9_]+\}/.test(value);
}

function readConfig() {
  return {
    api_url: fields.apiUrl.value.trim(),
    token_id: fields.tokenId.value.trim(),
    site_secret: fields.siteSecret.value.trim(),
  };
}

function setStatus(message, type = "") {
  fields.tokenStatus.textContent = message;
  fields.tokenStatus.className = `status ${type}`.trim();
}

function setToken(nextToken) {
  token = nextToken || "";
  fields.tokenPreview.textContent = token ? `token: ${token}` : "token: -";
  fields.sendButton.disabled = !token && selectedCase?.auth !== false;
  if (!token) {
    tokenSiteIndex = "";
    setAccountTypes([]);
  }
}

function setAccountTypes(items) {
  fields.accountType.innerHTML = "";
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = items.length > 0 ? "선택" : "-";
  fields.accountType.appendChild(emptyOption);

  for (const item of items) {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    fields.accountType.appendChild(option);
  }

  fields.accountType.disabled = items.length === 0;
}

function writeResponse(value, meta = "-") {
  fields.responseMeta.textContent = meta;
  fields.responseOutput.textContent = JSON.stringify(value, null, 2);
}

async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) {
    const error = new Error(data.error || `HTTP ${response.status}`);
    error.data = data;
    throw error;
  }
  return data;
}

function unwrapData(value) {
  if (!value || typeof value !== "object") return value;
  if ("data" in value) return unwrapData(value.data);
  if ("Main" in value) return unwrapData(value.Main);
  return value;
}

function readAccessToken(value) {
  const data = unwrapData(value);
  if (!data || typeof data !== "object") return "";
  return String(
    data.access_token ??
      data.accessToken ??
      data.AccessToken ??
      data.token ??
      data.Token ??
      "",
  ).trim();
}

function readSiteIndex(value) {
  const data = unwrapData(value);
  if (!data || typeof data !== "object") return "";
  return String(data.site_index ?? data.siteIndex ?? data.SiteIndex ?? data.token_site_index ?? "").trim();
}

function readAccountTypes(value) {
  const data = unwrapData(value);
  const duties = data && typeof data === "object" ? (data.duties ?? data.Duties ?? []) : [];
  if (!Array.isArray(duties)) return [];

  return duties.map((item) => {
    const dutyCode = item?.duty_code ?? item?.dutyCode ?? item?.DutyCode ?? "";
    const name = item?.name ?? item?.Name ?? "";
    return {
      value: String(dutyCode || name).trim(),
      label: String(name || dutyCode).trim(),
    };
  }).filter((item) => item.value || item.label);
}

async function loadAccountTypesAfterLogin(config, loginData) {
  const loginToken = readAccessToken(loginData) || token;
  const siteIndex = readSiteIndex(loginData) || tokenSiteIndex;
  if (!loginToken) {
    setAccountTypes([]);
    return null;
  }

  setToken(loginToken);

  const result = await postJson("/api/request", {
    ...config,
    auth: true,
    token: loginToken,
    method: "GET",
    path: siteIndex ? `/v1/org-sync?siteIndex=${encodeURIComponent(siteIndex)}&mode=3` : "/v1/org-sync?mode=3",
    body: "",
  });
  setAccountTypes(readAccountTypes(result.data));
  return result;
}

async function saveConfigWithoutToken() {
  await postJson("/api/config", readConfig());
}

async function issueToken() {
  const config = readConfig();
  if (!config.api_url || !config.token_id || !config.site_secret) {
    setStatus("토큰 발급 대기: 설정값을 입력하세요");
    setToken("");
    return;
  }

  fields.issueTokenButton.disabled = true;
  setStatus("토큰 발급 중");

  try {
    const result = await postJson("/api/token", config);
    tokenSiteIndex = String(result.token_site_index ?? "").trim();
    setToken(result.token);
    setStatus(`토큰 발급 완료 (${result.token_type || "token"})`, "success");
    writeResponse(result, `token HTTP ${result.status}`);
  } catch (error) {
    setToken("");
    setStatus("토큰 발급 실패", "error");
    writeResponse(error.data || { error: error.message }, "token failed");
  } finally {
    fields.issueTokenButton.disabled = false;
  }
}

function scheduleTokenRefresh() {
  if (!initialized) return;
  window.clearTimeout(saveTimer);
  window.clearTimeout(tokenTimer);
  setToken("");
  setStatus("설정 변경됨: 토큰 삭제");

  saveTimer = window.setTimeout(() => {
    saveConfigWithoutToken().catch((error) => {
      writeResponse(error.data || { error: error.message }, "config save failed");
    });
  }, 250);

  tokenTimer = window.setTimeout(() => {
    issueToken();
  }, 700);
}

async function loadEnv() {
  const response = await fetch("/env.json", { cache: "no-store" });
  const env = await response.json();

  fields.apiUrl.value = env.api_url || "";
  fields.tokenId.value = env.token_id || "";
  fields.siteSecret.value = env.site_secret || "";
  tokenSiteIndex = String(env.token_site_index ?? env.site_index ?? env.siteIndex ?? env.SiteIndex ?? "").trim();
  setToken(env.token || "");

  if (env.token) {
    setStatus(`env.json 토큰 사용 중 (${env.token_type || "token"})`, "success");
  } else {
    setStatus("env.json 토큰 없음");
    await issueToken();
  }

  initialized = true;
}

function renderCases() {
  const keyword = fields.caseSearch.value.trim().toLowerCase();
  fields.caseGroups.innerHTML = "";

  for (const group of apiGroups) {
    const cases = group.cases.filter((item) => {
      const haystack = `${group.name} ${item.name} ${item.method} ${item.path}`.toLowerCase();
      return !keyword || haystack.includes(keyword);
    });
    if (cases.length === 0) continue;

    const details = document.createElement("details");
    details.className = "case-group";
    details.open = keyword.length > 0 || group.cases.includes(selectedCase);

    const summary = document.createElement("summary");
    summary.innerHTML = `<span>${group.name}</span><span class="case-count">${cases.length}</span>`;
    details.appendChild(summary);

    const list = document.createElement("div");
    list.className = "case-list";

    for (const item of cases) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `case-button ${item === selectedCase ? "active" : ""} ${item.method === "GET" ? "" : "mutating"}`.trim();
      button.innerHTML = `
        <span class="method-badge ${item.method}">${item.method.replace(/^MULTIPART_/, "")}</span>
        <span>
          <span class="case-name">${item.name}</span>
          <span class="case-path">${item.path}</span>
        </span>
      `;
      button.addEventListener("click", () => selectCase(item));
      list.appendChild(button);
    }

    details.appendChild(list);
    fields.caseGroups.appendChild(details);
  }
}

function selectCase(item) {
  selectedCase = item;
  fields.selectedCaseName.textContent = item.name;
  fields.selectedCaseDescription.textContent = item.description ?? (item.method === "GET" ? "GET 요청은 선택 시 바로 실행됩니다." : "변경성 API입니다. body를 확인한 뒤 요청 버튼을 누르세요.");
  fields.method.value = item.method;
  fields.path.value = applyTemplate(item.path);
  fields.body.value = applyTemplate(item.body ?? emptyBody);
  fields.sendButton.disabled = !token && item.auth !== false;
  renderCases();

  if (item.method === "GET" && !hasUnresolvedTemplate(fields.path.value)) {
    sendRequest();
  }
}

async function sendRequest() {
  const config = readConfig();
  if (selectedCase?.auth !== false && !token) {
    await issueToken();
  }

  if (selectedCase?.auth !== false && !token) return;

  fields.sendButton.disabled = true;
  fields.responseMeta.textContent = "requesting";

  try {
    const result = await postJson("/api/request", {
      ...config,
      auth: selectedCase?.auth !== false,
      token,
      method: fields.method.value,
      path: fields.path.value.trim(),
      body: fields.body.value,
    });

    if (selectedCase?.name === "Login" && result.ok) {
      const accountTypesResult = await loadAccountTypesAfterLogin(config, result.data);
      writeResponse(
        {
          login: result.data,
          accountTypes: accountTypesResult?.data ?? null,
        },
        `${result.status} login${accountTypesResult ? `, ${accountTypesResult.status} org-sync` : ""}`.trim(),
      );
      return;
    }

    writeResponse(result.data, `${result.status} ${result.statusText || ""}`.trim());
  } catch (error) {
    writeResponse(error.data || { error: error.message }, "request failed");
  } finally {
    fields.sendButton.disabled = !token && selectedCase?.auth !== false;
  }
}

for (const input of [fields.apiUrl, fields.tokenId, fields.siteSecret]) {
  input.addEventListener("input", () => {
    scheduleTokenRefresh();
    if (selectedCase) {
      fields.path.value = applyTemplate(selectedCase.path);
      fields.body.value = applyTemplate(selectedCase.body ?? emptyBody);
    }
  });
}

fields.caseSearch.addEventListener("input", renderCases);
fields.issueTokenButton.addEventListener("click", issueToken);
fields.sendButton.addEventListener("click", sendRequest);

selectCase(selectedCase);
loadEnv()
  .then(() => selectCase(selectedCase))
  .catch((error) => {
    setStatus("env.json 읽기 실패", "error");
    writeResponse({ error: error.message }, "load failed");
  });
