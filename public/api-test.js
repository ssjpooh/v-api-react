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
      { name: "Login (Auto Login)", method: "POST", path: "/v1/login?siteID={siteID}&autoLogin=true", body: jsonBody({ userID: "{userID}", Password: "" }), description: "자동 로그인 — 응답에 refresh 쿠키(vwork_refresh, HttpOnly, Path=/v1/auth) 발급" },
      { name: "Auth Refresh", method: "POST", path: "/v1/auth/refresh", auth: false, body: emptyBody, description: "refresh 쿠키로 세션 복구 + access token 재발급 (쿠키 없으면 401)" },
      { name: "Auth Logout", method: "POST", path: "/v1/auth/logout", auth: false, body: emptyBody, description: "현재 기기 refresh 세션 폐기 + 쿠키 삭제" },
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
      { name: "getAccountType", method: "GET", path: "/v2/accountType?siteID={siteID}" },
      { name: "createAccountType", method: "POST", path: "/v2/accountType?siteID={siteID}", body: emptyBody },
      { name: "patchAccountType", method: "PATCH", path: "/v2/accountType?siteID={siteID}", body: emptyBody },
      { name: "deleteAccountType", method: "DELETE", path: "/v2/accountType?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Account Type Workspaces",
    cases: [
      { name: "listAccountTypeWorkspaces", method: "GET", path: "/v2/accountTypeWorkspaces?siteID={siteID}" },
      { name: "getAccountTypeWorkspace", method: "GET", path: "/v2/accountTypeWorkspace?siteID={siteID}" },
      { name: "saveAccountTypeWorkspace", method: "POST", path: "/v2/accountTypeWorkspace?siteID={siteID}", body: emptyBody },
      { name: "patchAccountTypeWorkspace", method: "PATCH", path: "/v2/accountTypeWorkspace?siteID={siteID}", body: emptyBody },
      { name: "deleteAccountTypeWorkspace", method: "DELETE", path: "/v2/accountTypeWorkspace?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Account Type Workspace Menus",
    cases: [
      { name: "listAccountTypeWorkspaceMenus", method: "GET", path: "/v2/accountTypeWorkspaceMenus?siteID={siteID}" },
      { name: "getAccountTypeWorkspaceMenu", method: "GET", path: "/v2/accountTypeWorkspaceMenu?siteID={siteID}" },
      { name: "saveAccountTypeWorkspaceMenu", method: "POST", path: "/v2/accountTypeWorkspaceMenu?siteID={siteID}", body: emptyBody },
      { name: "patchAccountTypeWorkspaceMenu", method: "PATCH", path: "/v2/accountTypeWorkspaceMenu?siteID={siteID}", body: emptyBody },
      { name: "deleteAccountTypeWorkspaceMenu", method: "DELETE", path: "/v2/accountTypeWorkspaceMenu?siteID={siteID}", body: emptyBody },
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
    ],
  },
  {
    name: "V2 Client Tokens",
    cases: [
      { name: "createClientToken", method: "POST", path: "/v2/client/tokens?siteID={siteID}", body: emptyBody },
      { name: "checkTokenInfo", method: "GET", path: "/v2/checkTokenInfo?siteID={siteID}" },
      { name: "checkTokenByInfo", method: "GET", path: "/v2/checkTokenByInfo?siteID={siteID}" },
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
      { name: "patchMaterial", method: "PATCH", path: "/v2/material?siteID={siteID}", body: emptyBody },
      { name: "deleteMaterial", method: "DELETE", path: "/v2/material?siteID={siteID}", body: emptyBody },
    ],
  },
  {
    name: "V2 Menus",
    cases: [
      { name: "listMenus", method: "GET", path: "/v2/menus?siteID={siteID}" },
      { name: "getMenu", method: "GET", path: "/v2/menu?siteID={siteID}" },
      { name: "createMenu", method: "POST", path: "/v2/menu?siteID={siteID}", body: emptyBody },
      { name: "patchMenu", method: "PATCH", path: "/v2/menu?siteID={siteID}", body: emptyBody },
      { name: "deleteMenu", method: "DELETE", path: "/v2/menu?siteID={siteID}", body: emptyBody },
      { name: "getMyMenus", method: "GET", path: "/v2/myMenus?siteID={siteID}" },
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
    name: "V2 Room Logs",
    cases: [
      { name: "listRoomLogs", method: "GET", path: "/v2/roomLogs?siteID={siteID}" },
      { name: "getRoomLog", method: "GET", path: "/v2/roomLog?siteID={siteID}" },
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
    name: "V2 Workspaces",
    cases: [
      { name: "listWorkspaces", method: "GET", path: "/v2/workspaces?siteID={siteID}" },
      { name: "getWorkspace", method: "GET", path: "/v2/workspace?siteID={siteID}" },
      { name: "createWorkspace", method: "POST", path: "/v2/workspace?siteID={siteID}", body: emptyBody },
      { name: "patchWorkspace", method: "PATCH", path: "/v2/workspace?siteID={siteID}", body: emptyBody },
      { name: "deleteWorkspace", method: "DELETE", path: "/v2/workspace?siteID={siteID}", body: emptyBody },
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
