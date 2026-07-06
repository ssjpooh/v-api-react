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
      { name: "Health Check", method: "GET", path: "/v1/healtz", auth: false },
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
    name: "V2 Room",
    cases: [
      { name: "V2 Rooms", method: "GET", path: "/v2/rooms?siteIndex={siteIndex}&keyword=&pageNo=0&pagePerRow=50&orderType=0&onlyInvited=false&onlyPermanent=false&fileExist=0&mode=0" },
      { name: "V2 Site Rooms", method: "GET", path: "/v2/{siteID}/rooms?keyword=&pageNo=0&pagePerRow=50&orderType=0&onlyInvited=false&onlyPermanent=false&fileExist=0&mode=0" },
      { name: "V2 Room Info", method: "GET", path: "/v2/room?roomCode={roomCode}&siteIndex={siteIndex}" },
      { name: "V2 Site Room Info", method: "GET", path: "/v2/{siteID}/room?roomCode={roomCode}" },
      {
        name: "V2 Create Room",
        method: "POST",
        path: "/v2/room?locale=ko",
        body: jsonBody({
          SiteIndex: "{siteIndex}",
          UserID: "{userID}",
          RoomID: "",
          RoomCode: "",
          Policy: "",
          Title: "Room title",
          Agenda: "",
          TimeZone: "Asia/Seoul",
          IsPublic: false,
          MaxUsers: 100,
          PlannedDate: "",
          RoomDuration: 60,
          RoomOption: [],
          Attendees: [],
        }),
      },
      {
        name: "V2 Patch Room",
        method: "PATCH",
        path: "/v2/room?locale=ko",
        body: jsonBody({
          RoomCode: "{roomCode}",
          SiteIndex: "{siteIndex}",
          Title: "Room title",
          Agenda: "",
        }),
      },
      { name: "V2 Delete Room", method: "DELETE", path: "/v2/room", body: jsonBody([{ RoomCode: "{roomCode}", SiteIndex: "{siteIndex}" }]) },
      { name: "V2 Attendees", method: "GET", path: "/v2/attendees?roomCode={roomCode}&pageNo=0&pagePerRow=50" },
      { name: "V2 Attendee", method: "GET", path: "/v2/attendee?roomCode={roomCode}&attdID={attendeeID}&userID={userID}&siteIndex={siteIndex}" },
      { name: "V2 Invited Attendee", method: "GET", path: "/v2/attendee/invited?roomCode={roomCode}&attdID={attendeeID}&userID={userID}&siteIndex={siteIndex}" },
      {
        name: "V2 Add Attendees",
        method: "POST",
        path: "/v2/attendees",
        body: jsonBody([
          {
            RoomCode: "{roomCode}",
            AttdID: "{attendeeID}",
            UserID: "{userID}",
            SiteIndex: "{siteIndex}",
            Name: "Attendee",
            Email: "",
          },
        ]),
      },
      {
        name: "V2 Patch Attendee",
        method: "PATCH",
        path: "/v2/attendees?roomCode={roomCode}&attdID={attendeeID}&userID={userID}&siteIndex={siteIndex}",
        body: jsonBody([
          {
            RoomCode: "{roomCode}",
            AttdID: "{attendeeID}",
            UserID: "{userID}",
            SiteIndex: "{siteIndex}",
            Name: "Attendee",
          },
        ]),
      },
      { name: "V2 Delete Attendees", method: "DELETE", path: "/v2/attendees", body: jsonBody([{ RoomCode: "{roomCode}", AttdID: "{attendeeID}", SiteIndex: "{siteIndex}" }]) },
      { name: "V2 Attendance", method: "GET", path: "/v2/attendance?instanceIdx={instanceIndex}&pageNo=0&pagePerRow=50" },
      { name: "V2 Attendee Logs", method: "GET", path: "/v2/attendee-logs?instanceIdx={instanceIndex}&pageNo=0&pagePerRow=50" },
      { name: "V2 Attendee Log", method: "GET", path: "/v2/attendee-log?instanceIdx={instanceIndex}&attdID={attendeeID}&roomCode={roomCode}&siteIndex={siteIndex}&userID={userID}" },
      { name: "V2 Room Logs", method: "GET", path: "/v2/roomLogs?startDate={startDate}&endDate={endDate}&pageNo=0&pagePerRow=50&keyword=&groupID={groupID}&instanceIndex={instanceIndex}" },
      { name: "V2 Room Log", method: "GET", path: "/v2/roomLog?groupID={groupID}&instanceIndex={instanceIndex}" },
    ],
  },
  {
    name: "V2 Account Type",
    cases: [
      { name: "accountType List", method: "GET", path: "/v2/accountTypes?accountTypeCode=&keyword=&pageNo=0&pagePerRow=50" },
      { name: "accountType Info", method: "GET", path: "/v2/accountType?accountTypeCode={accountTypeCode}" },
    ],
  },
  {
    name: "V2 Workspace",
    cases: [
      { name: "workspace List", method: "GET", path: "/v2/workspaces?workspaceCode=&keyword=&pageNo=0&pagePerRow=50" },
      { name: "workspace Info", method: "GET", path: "/v2/workspace?workspaceCode={workspaceCode}" },
    ],
  },
  {
    name: "V2 Menu",
    cases: [
      { name: "menu List", method: "GET", path: "/v2/menus?menuCode=&workspaceCode={workspaceCode}&parentCode=&keyword=&pageNo=0&pagePerRow=50" },
      { name: "menu Info", method: "GET", path: "/v2/menu?menuCode={menuCode}" },
    ],
  },
  {
    name: "V2 Account Type Workspace",
    cases: [
      { name: "accountTypeWorkspace List", method: "GET", path: "/v2/accountTypeWorkspaces?accountTypeCode={accountTypeCode}&workspaceCode={workspaceCode}&pageNo=0&pagePerRow=50" },
      { name: "accountTypeWorkspace Info", method: "GET", path: "/v2/accountTypeWorkspace?accountTypeCode={accountTypeCode}&workspaceCode={workspaceCode}" },
    ],
  },
  {
    name: "V2 Account Type Workspace Menu",
    cases: [
      { name: "accountTypeWorkspaceMenu List", method: "GET", path: "/v2/accountTypeWorkspaceMenus?accountTypeCode={accountTypeCode}&workspaceCode={workspaceCode}&menuCode={menuCode}&pageNo=0&pagePerRow=50" },
      { name: "accountTypeWorkspaceMenu Info", method: "GET", path: "/v2/accountTypeWorkspaceMenu?accountTypeCode={accountTypeCode}&workspaceCode={workspaceCode}&menuCode={menuCode}" },
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
