function asRecord(value) {
    return value && typeof value === "object" ? value : {};
}
function asString(value, fallback = "") {
    return value == null ? fallback : String(value);
}
function asNumber(value, fallback = 0) {
    return typeof value === "number" && Number.isFinite(value) ? value : Number(value ?? fallback) || fallback;
}
function asBoolean(value, fallback = false) {
    return typeof value === "boolean" ? value : fallback;
}
function asStringArray(value, fallback = []) {
    return Array.isArray(value) ? value.map((item) => asString(item)) : fallback;
}
function asNumberOrNull(value, fallback = null) {
    if (value == null)
        return fallback;
    const numeric = typeof value === "number" ? value : Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
}
function withAliases(value, aliases) {
    const record = value;
    Object.entries(aliases).forEach(([alias, source]) => {
        record[alias] = record[source];
    });
    return value;
}
function unwrapMain(value) {
    const record = asRecord(value);
    return asRecord(record["Main"] ?? value);
}
function pick(json, ...keys) {
    for (const key of keys) {
        if (json[key] !== undefined)
            return json[key];
    }
    return undefined;
}
function pickArray(jsonInput, ...keys) {
    if (Array.isArray(jsonInput))
        return jsonInput;
    const record = asRecord(jsonInput);
    const source = record["Main"] ?? jsonInput;
    if (Array.isArray(source))
        return source;
    const json = asRecord(source);
    const value = pick(json, ...keys);
    return Array.isArray(value) ? value : [];
}
export class ConcurrentInfo {
    constructor(init = {}) {
        this.rooms = 0;
        this.attendees = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ConcurrentInfo();
        value.rooms = asNumber(json["Rooms"], value.rooms);
        value.attendees = asNumber(json["Attendees"], value.attendees);
        return withAliases(value, { Rooms: "rooms", Attendees: "attendees" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ConcurrentInfo.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ClientTokenData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.tokenID = "";
        this.token = "";
        this.serverIndex = "";
        this.ipAddr = "";
        this.expiryDate = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ClientTokenData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.tokenID = asString(json["TokenID"], value.tokenID);
        value.token = asString(json["Token"], value.token);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.ipAddr = asString(json["IPAddr"], value.ipAddr);
        value.expiryDate = asString(json["ExpiryDate"], value.expiryDate);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ClientTokenData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class LoginResult {
    constructor(init = {}) {
        this.tokenID = "";
        this.accessToken = "";
        this.expiryDate = 0;
        this.tokenType = "";
        this.isSiteManager = false;
        this.isSiteHolder = false;
        this.isSystemHolder = false;
        this.isSystemManager = false;
        this.supportFileFormats = [];
        this.siteID = "";
        this.domainURL = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new LoginResult();
        value.tokenID = asString(json["token_id"] ?? json["TokenID"], value.tokenID);
        value.accessToken = asString(json["access_token"] ?? json["AccessToken"], value.accessToken);
        value.expiryDate = asNumber(json["expire_date"] ?? json["ExpiryDate"], value.expiryDate);
        value.tokenType = asString(json["token_type"] ?? json["TokenType"], value.tokenType);
        value.isSiteManager = asBoolean(json["is_siteManager"] ?? json["is_site_manager"] ?? json["IsSiteManager"], value.isSiteManager);
        value.isSiteHolder = asBoolean(json["is_siteHolder"] ?? json["is_site_holder"] ?? json["IsSiteHolder"], value.isSiteHolder);
        value.isSystemHolder = asBoolean(json["is_systemHolder"] ?? json["is_system_holder"] ?? json["IsSystemHolder"], value.isSystemHolder);
        value.isSystemManager = asBoolean(json["is_systemManager"] ?? json["is_system_manager"] ?? json["IsSystemManager"], value.isSystemManager);
        value.supportFileFormats = asStringArray(json["support_file_formats"] ?? json["SupportFileFormats"], value.supportFileFormats);
        value.siteID = asString(json["site_id"] ?? json["SiteID"], value.siteID);
        value.domainURL = asString(json["domain_url"] ?? json["DomainURL"], value.domainURL);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => LoginResult.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class TwoFactorRequiredResult {
    constructor(init = {}) {
        this.requires2FA = true;
        this.twoFactorToken = "";
        this.emailMasked = "";
        this.expiresIn = 0;
        this.resendAfter = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new TwoFactorRequiredResult();
        value.twoFactorToken = asString(json["two_factor_token"] ?? json["twoFactorToken"] ?? json["TwoFactorToken"], value.twoFactorToken);
        value.emailMasked = asString(json["email_masked"] ?? json["emailMasked"] ?? json["EmailMasked"], value.emailMasked);
        value.expiresIn = asNumber(json["expires_in"] ?? json["expiresIn"] ?? json["ExpiresIn"], value.expiresIn);
        value.resendAfter = asNumber(json["resend_after"] ?? json["resendAfter"] ?? json["ResendAfter"], value.resendAfter);
        return withAliases(value, {
            two_factor_token: "twoFactorToken",
            TwoFactorToken: "twoFactorToken",
            email_masked: "emailMasked",
            EmailMasked: "emailMasked",
            expires_in: "expiresIn",
            ExpiresIn: "expiresIn",
            resend_after: "resendAfter",
            ResendAfter: "resendAfter",
        });
    }
    toJson() {
        return { ...this };
    }
}
export class TwoFactorCodeMismatchResult {
    constructor(init = {}) {
        this.codeMismatch = true;
        this.attemptsLeft = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new TwoFactorCodeMismatchResult();
        value.attemptsLeft = asNumber(json["attempts_left"] ?? json["attemptsLeft"] ?? json["AttemptsLeft"], value.attemptsLeft);
        return withAliases(value, {
            attempts_left: "attemptsLeft",
            AttemptsLeft: "attemptsLeft",
        });
    }
    toJson() {
        return { ...this };
    }
}
export class TwoFactorExpiredResult {
    constructor(init = {}) {
        this.expired = true;
        Object.assign(this, init);
    }
    static fromJson() {
        return new TwoFactorExpiredResult();
    }
    toJson() {
        return { ...this };
    }
}
export class TwoFactorResendResult {
    constructor(init = {}) {
        this.expiresIn = 0;
        this.resendAfter = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new TwoFactorResendResult();
        value.expiresIn = asNumber(json["expires_in"] ?? json["expiresIn"] ?? json["ExpiresIn"], value.expiresIn);
        value.resendAfter = asNumber(json["resend_after"] ?? json["resendAfter"] ?? json["ResendAfter"], value.resendAfter);
        return withAliases(value, {
            expires_in: "expiresIn",
            ExpiresIn: "expiresIn",
            resend_after: "resendAfter",
            ResendAfter: "resendAfter",
        });
    }
    toJson() {
        return { ...this };
    }
}
export class ContractData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.contractNo = 0;
        this.hosts = 0;
        this.limitRooms = 0;
        this.limitAttendees = 0;
        this.limitAccounts = 0;
        this.state = "";
        this.duration = 0;
        this.contractor = "";
        this.contractInfo = "";
        this.currency = "";
        this.paymentAmount = 0;
        this.isDisplay = false;
        this.startDate = "";
        this.endDate = "";
        this.pausedDate = "";
        this.resumeDate = "";
        this.cDate = "";
        this.mDate = "";
        this.newHosts = 0;
        this.newLimitRooms = 0;
        this.newLimitAttendees = 0;
        this.newLimitAccounts = 0;
        this.newState = "";
        this.newDuration = 0;
        this.newContractor = "";
        this.newContractInfo = "";
        this.newCurrency = "";
        this.newPaymentAmount = 0;
        this.newIsDisplay = false;
        this.newStartDate = "";
        this.newEndDate = "";
        this.newPausedDate = "";
        this.newResumeDate = "";
        this.index = "";
        this.lDate = "";
        this.changeNotes = "";
        this.userID = "";
        this.userName = "";
        this.userIndex = "";
        this.limitMaxAttendees = 0;
        this.addedRooms = 0;
        this.addedAttendees = 0;
        this.addedMaxAttendees = 0;
        this.addedAccounts = 0;
        this.newAddedRooms = 0;
        this.newAddedAttendees = 0;
        this.newAddedMaxAttendees = 0;
        this.newAddedAccounts = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ContractData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.contractNo = asNumber(json["ContractNo"], value.contractNo);
        value.hosts = asNumber(json["Hosts"], value.hosts);
        value.limitRooms = asNumber(json["LimitRooms"], value.limitRooms);
        value.limitAttendees = asNumber(json["LimitAttendees"], value.limitAttendees);
        value.limitAccounts = asNumber(json["LimitAccounts"], value.limitAccounts);
        value.state = asString(json["State"], value.state);
        value.duration = asNumber(json["Duration"], value.duration);
        value.contractor = asString(json["Contractor"], value.contractor);
        value.contractInfo = asString(json["ContractInfo"], value.contractInfo);
        value.currency = asString(json["Currency"], value.currency);
        value.paymentAmount = asNumber(json["PaymentAmount"], value.paymentAmount);
        value.isDisplay = asBoolean(json["IsDisplay"], value.isDisplay);
        value.startDate = asString(json["StartDate"], value.startDate);
        value.endDate = asString(json["EndDate"], value.endDate);
        value.pausedDate = asString(json["PausedDate"], value.pausedDate);
        value.resumeDate = asString(json["ResumeDate"], value.resumeDate);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.newHosts = asNumber(json["NewHosts"], value.newHosts);
        value.newLimitRooms = asNumber(json["NewLimitRooms"], value.newLimitRooms);
        value.newLimitAttendees = asNumber(json["NewLimitAttendees"], value.newLimitAttendees);
        value.newLimitAccounts = asNumber(json["NewLimitAccounts"], value.newLimitAccounts);
        value.newState = asString(json["NewState"], value.newState);
        value.newDuration = asNumber(json["NewDuration"], value.newDuration);
        value.newContractor = asString(json["NewContractor"], value.newContractor);
        value.newContractInfo = asString(json["NewContractInfo"], value.newContractInfo);
        value.newCurrency = asString(json["NewCurrency"], value.newCurrency);
        value.newPaymentAmount = asNumber(json["NewPaymentAmount"], value.newPaymentAmount);
        value.newIsDisplay = asBoolean(json["NewIsDisplay"], value.newIsDisplay);
        value.newStartDate = asString(json["NewStartDate"], value.newStartDate);
        value.newEndDate = asString(json["NewEndDate"], value.newEndDate);
        value.newPausedDate = asString(json["NewPausedDate"], value.newPausedDate);
        value.newResumeDate = asString(json["NewResumeDate"], value.newResumeDate);
        value.index = asString(json["Index"], value.index);
        value.lDate = asString(json["LDate"], value.lDate);
        value.changeNotes = asString(json["ChangeNotes"], value.changeNotes);
        value.userID = asString(json["UserID"], value.userID);
        value.userName = asString(json["UserName"], value.userName);
        value.userIndex = asString(json["UserIdx"], value.userIndex);
        value.limitMaxAttendees = asNumber(json["LimitMaxAttendees"], value.limitMaxAttendees);
        value.addedRooms = asNumber(json["AddedRooms"], value.addedRooms);
        value.addedAttendees = asNumber(json["AddedAttendees"], value.addedAttendees);
        value.addedMaxAttendees = asNumber(json["AddedMaxAttendees"], value.addedMaxAttendees);
        value.addedAccounts = asNumber(json["AddedAccounts"], value.addedAccounts);
        value.newAddedRooms = asNumber(json["NewAddedRooms"], value.newAddedRooms);
        value.newAddedAttendees = asNumber(json["NewAddedAttendees"], value.newAddedAttendees);
        value.newAddedMaxAttendees = asNumber(json["NewAddedMaxAttendees"], value.newAddedMaxAttendees);
        value.newAddedAccounts = asNumber(json["NewAddedAccounts"], value.newAddedAccounts);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ContractData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ContractListData {
    constructor(init = {}) {
        this.contractList = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ContractListData();
        value.contractList = ContractData.fromJsonList(json["ContractList"]);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ContractListData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ContractLogData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.contractNo = "";
        this.hosts = 0;
        this.limitRooms = 0;
        this.limitAttendees = 0;
        this.limitMaxAttendees = 0;
        this.limitAccounts = 0;
        this.addedRooms = 0;
        this.addedAttendees = 0;
        this.addedMaxAttendees = 0;
        this.addedAccounts = 0;
        this.state = 0;
        this.duration = 0;
        this.startDate = "";
        this.endDate = "";
        this.pausedDate = "";
        this.resumeDate = "";
        this.contractor = "";
        this.contractInfo = "";
        this.currency = "";
        this.paymentAmount = 0;
        this.isDisplay = false;
        this.newHosts = 0;
        this.newLimitRooms = 0;
        this.newLimitAttendees = 0;
        this.newLimitMaxAttendees = 0;
        this.newLimitAccounts = 0;
        this.newAddedRooms = 0;
        this.newAddedAttendees = 0;
        this.newAddedMaxAttendees = 0;
        this.newAddedAccounts = 0;
        this.newState = 0;
        this.newDuration = 0;
        this.newStartDate = "";
        this.newEndDate = "";
        this.newPausedDate = "";
        this.newResumeDate = "";
        this.newContractor = "";
        this.newContractInfo = "";
        this.newCurrency = "";
        this.newPaymentAmount = 0;
        this.newIsDisplay = false;
        this.index = "";
        this.userID = "";
        this.userIndex = "";
        this.userName = "";
        this.lDate = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ContractLogData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.contractNo = asString(json["ContractNo"], value.contractNo);
        value.hosts = asNumber(json["Hosts"], value.hosts);
        value.limitRooms = asNumber(json["LimitRooms"], value.limitRooms);
        value.limitAttendees = asNumber(json["LimitAttendees"], value.limitAttendees);
        value.limitMaxAttendees = asNumber(json["LimitMaxAttendees"], value.limitMaxAttendees);
        value.limitAccounts = asNumber(json["LimitAccounts"], value.limitAccounts);
        value.addedRooms = asNumber(json["AddedRooms"], value.addedRooms);
        value.addedAttendees = asNumber(json["AddedAttendees"], value.addedAttendees);
        value.addedMaxAttendees = asNumber(json["AddedMaxAttendees"], value.addedMaxAttendees);
        value.addedAccounts = asNumber(json["AddedAccounts"], value.addedAccounts);
        value.state = asNumber(json["State"], value.state);
        value.duration = asNumber(json["Duration"], value.duration);
        value.startDate = asString(json["StartDate"], value.startDate);
        value.endDate = asString(json["EndDate"], value.endDate);
        value.pausedDate = asString(json["PausedDate"], value.pausedDate);
        value.resumeDate = asString(json["ResumeDate"], value.resumeDate);
        value.contractor = asString(json["Contractor"], value.contractor);
        value.contractInfo = asString(json["ContractInfo"], value.contractInfo);
        value.currency = asString(json["Currency"], value.currency);
        value.paymentAmount = asNumber(json["PaymentAmount"], value.paymentAmount);
        value.isDisplay = asBoolean(json["IsDisplay"], value.isDisplay);
        value.newHosts = asNumber(json["NewHosts"], value.newHosts);
        value.newLimitRooms = asNumber(json["NewLimitRooms"], value.newLimitRooms);
        value.newLimitAttendees = asNumber(json["NewLimitAttendees"], value.newLimitAttendees);
        value.newLimitMaxAttendees = asNumber(json["NewLimitMaxAttendees"], value.newLimitMaxAttendees);
        value.newLimitAccounts = asNumber(json["NewLimitAccounts"], value.newLimitAccounts);
        value.newAddedRooms = asNumber(json["NewAddedRooms"], value.newAddedRooms);
        value.newAddedAttendees = asNumber(json["NewAddedAttendees"], value.newAddedAttendees);
        value.newAddedMaxAttendees = asNumber(json["NewAddedMaxAttendees"], value.newAddedMaxAttendees);
        value.newAddedAccounts = asNumber(json["NewAddedAccounts"], value.newAddedAccounts);
        value.newState = asNumber(json["NewState"], value.newState);
        value.newDuration = asNumber(json["NewDuration"], value.newDuration);
        value.newStartDate = asString(json["NewStartDate"], value.newStartDate);
        value.newEndDate = asString(json["NewEndDate"], value.newEndDate);
        value.newPausedDate = asString(json["NewPausedDate"], value.newPausedDate);
        value.newResumeDate = asString(json["NewResumeDate"], value.newResumeDate);
        value.newContractor = asString(json["NewContractor"], value.newContractor);
        value.newContractInfo = asString(json["NewContractInfo"], value.newContractInfo);
        value.newCurrency = asString(json["NewCurrency"], value.newCurrency);
        value.newPaymentAmount = asNumber(json["NewPaymentAmount"], value.newPaymentAmount);
        value.newIsDisplay = asBoolean(json["NewIsDisplay"], value.newIsDisplay);
        value.index = asString(json["Index"], value.index);
        value.userID = asString(json["UserID"], value.userID);
        value.userIndex = asString(json["UserIndex"], value.userIndex);
        value.userName = asString(json["UserName"], value.userName);
        value.lDate = asString(json["LDate"], value.lDate);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ContractLogData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class GroupData {
    constructor(init = {}) {
        this.groupID = "";
        this.name = "";
        this.rooms = 0;
        this.attendees = 0;
        this.notes = "";
        this.cDate = "";
        this.mDate = "";
        this.mapNameByLang = {};
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new GroupData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.name = asString(json["Name"], value.name);
        value.rooms = asNumber(json["Rooms"], value.rooms);
        value.attendees = asNumber(json["Attendees"], value.attendees);
        value.notes = asString(json["Notes"], value.notes);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.mapNameByLang = json["MapNameByLang"] ?? value.mapNameByLang;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => GroupData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class NoteData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.userID = "";
        this.roomCode = "";
        this.distType = 0;
        this.targetGroup = 0;
        this.targetIDs = "";
        this.noteID = "";
        this.orgNoteID = "";
        this.srcNoteID = "";
        this.title = "";
        this.firstPageNo = 0;
        this.pageNum = 0;
        this.pageIDs = "";
        this.pagesInfo = "";
        this.annotationInfo = "";
        this.fileSize = 0;
        this.fileHash = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new NoteData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.userID = asString(json["UserID"], value.userID);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.distType = asNumber(json["DistType"], value.distType);
        value.targetGroup = asNumber(json["TargetGroup"], value.targetGroup);
        value.targetIDs = asString(json["TargetIDs"], value.targetIDs);
        value.noteID = asString(json["NoteID"], value.noteID);
        value.orgNoteID = asString(json["OrgNoteID"], value.orgNoteID);
        value.srcNoteID = asString(json["SrcNoteID"], value.srcNoteID);
        value.title = asString(json["Title"], value.title);
        value.firstPageNo = asNumber(json["FirstPageNo"], value.firstPageNo);
        value.pageNum = asNumber(json["PageNum"], value.pageNum);
        value.pageIDs = asString(json["PageIDs"], value.pageIDs);
        value.pagesInfo = asString(json["PagesInfo"], value.pagesInfo);
        value.annotationInfo = asString(json["AnnotationInfo"], value.annotationInfo);
        value.fileSize = asNumber(json["FileSize"], value.fileSize);
        value.fileHash = asString(json["FileHash"], value.fileHash);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => NoteData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class AttachNoteInfo {
    constructor(init = {}) {
        this.title = "";
        this.noteID = "";
        this.userID = "";
        this.pageInfo = {};
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new AttachNoteInfo();
        value.title = asString(json["Title"], value.title);
        value.noteID = asString(json["NoteID"], value.noteID);
        value.userID = asString(json["UserID"], value.userID);
        value.pageInfo = json["PageInfo"] ?? value.pageInfo;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => AttachNoteInfo.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class AddFile {
    constructor(init = {}) {
        this.attachFile = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new AddFile();
        value.attachFile = Array.isArray(json["AttachFile"]) ? json["AttachFile"] : value.attachFile;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => AddFile.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class RemoveFile {
    constructor(init = {}) {
        this.removeFile = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new RemoveFile();
        value.removeFile = Array.isArray(json["RemoveFile"]) ? json["RemoveFile"] : value.removeFile;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => RemoveFile.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class NoticeData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.userID = "";
        this.userIndex = "";
        this.userName = "";
        this.category = 0;
        this.title = "";
        this.noticeIndex = "";
        this.startDate = "";
        this.endDate = "";
        this.target = "";
        this.contents = undefined;
        this.mDate = "";
        this.cDate = "";
        this.isPinned = false;
        this.isBanner = false;
        this.isStopped = false;
        this.fileList = [];
        this.viewNum = 0;
        this.existFile = false;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new NoticeData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.userID = asString(json["UserID"], value.userID);
        value.userIndex = asString(json["UserIndex"], value.userIndex);
        value.userName = asString(json["UserName"], value.userName);
        value.category = asNumber(json["Category"], value.category);
        value.title = asString(json["Title"], value.title);
        value.noticeIndex = asString(json["NoticeIndex"], value.noticeIndex);
        value.startDate = asString(json["StartDate"], value.startDate);
        value.endDate = asString(json["EndDate"], value.endDate);
        value.target = asString(json["Targets"], value.target);
        value.contents = json["Contents"] ?? value.contents;
        value.mDate = asString(json["MDate"], value.mDate);
        value.cDate = asString(json["CDate"], value.cDate);
        value.isPinned = asBoolean(json["IsPinned"], value.isPinned);
        value.isBanner = asBoolean(json["IsBanner"], value.isBanner);
        value.isStopped = asBoolean(json["IsStopped"], value.isStopped);
        value.fileList = Array.isArray(json["FileList"]) ? json["FileList"] : value.fileList;
        value.viewNum = asNumber(json["ViewNum"], value.viewNum);
        value.existFile = asBoolean(json["ExistFile"], value.existFile);
        return withAliases(value, {
            GroupID: "groupID",
            SiteIndex: "siteIndex",
            UserID: "userID",
            UserIndex: "userIndex",
            UserName: "userName",
            Category: "category",
            Title: "title",
            NoticeIndex: "noticeIndex",
            StartDate: "startDate",
            EndDate: "endDate",
            Targets: "target",
            Contents: "contents",
            MDate: "mDate",
            CDate: "cDate",
            IsPinned: "isPinned",
            IsBanner: "isBanner",
            IsStopped: "isStopped",
            FileList: "fileList",
            ViewNum: "viewNum",
            ExistFile: "existFile",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => NoticeData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class NoticeList {
    constructor(init = {}) {
        this.noticeList = [];
        this.pagesData = new PagesData();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new NoticeList();
        value.noticeList = NoticeData.fromJsonList(json["NoticeList"]);
        value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
        return withAliases(value, { NoticeList: "noticeList", PageInfo: "pagesData" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => NoticeList.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class NoticeFileData {
    constructor(init = {}) {
        this.noticeIndex = "";
        this.fileIndex = "";
        this.fileKey = "";
        this.fileUrl = "";
        this.fileName = "";
        this.files = [];
        this.fileSize = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new NoticeFileData();
        value.noticeIndex = asString(json["NoticeIndex"], value.noticeIndex);
        value.fileIndex = asString(json["FileIndex"], value.fileIndex);
        value.fileKey = asString(json["FileKey"], value.fileKey);
        value.fileUrl = asString(json["FileURL"], value.fileUrl);
        value.fileName = asString(json["FileName"], value.fileName);
        value.files = FileData.fromJsonList(json["Files"]);
        value.fileSize = asNumber(json["FileSize"], value.fileSize);
        return withAliases(value, {
            NoticeIndex: "noticeIndex",
            FileIndex: "fileIndex",
            FileKey: "fileKey",
            FileURL: "fileUrl",
            FileName: "fileName",
            FileSize: "fileSize",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => NoticeFileData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class FileData {
    constructor(init = {}) {
        this.fileName = "";
        this.fileBytes = new Blob([]);
        this.contentType = "";
        this.fileSize = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new FileData();
        value.fileName = asString(json["FileName"], value.fileName);
        value.fileBytes = json["FileBytes"] instanceof Blob ? json["FileBytes"] : value.fileBytes;
        value.contentType = asString(json["ContentType"], value.contentType);
        value.fileSize = asNumber(json["FileSize"], value.fileSize);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => FileData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class CommonOption {
    constructor(init = {}) {
        this.name = "";
        this.item = "";
        this.scope = 0;
        this.valueType = 0;
        this.value = "";
        this.defaultValue = "";
        this.dispName = "";
        this.itemOrder = 0;
        this.bytesValue = new Blob([]);
        this.notes = "";
        this.cDate = "";
        this.mDate = "";
        this.mapDispNameByLang = undefined;
        this.mapValueByLang = undefined;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new CommonOption();
        value.name = asString(json["Name"], value.name);
        value.item = asString(json["Item"], value.item);
        value.scope = asNumber(json["Scope"], value.scope);
        value.valueType = asNumber(json["ValueType"], value.valueType);
        value.value = asString(json["Value"], value.value);
        value.defaultValue = asString(json["DefaultValue"], value.defaultValue);
        value.dispName = asString(json["DispName"], value.dispName);
        value.itemOrder = asNumber(json["ItemOrder"], value.itemOrder);
        value.bytesValue = json["bytesValue"] instanceof Blob ? json["bytesValue"] : value.bytesValue;
        value.notes = asString(json["Notes"], value.notes);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.mapDispNameByLang = json["mapDispNameByLang"] ?? value.mapDispNameByLang;
        value.mapValueByLang = json["mapValueByLang"] ?? value.mapValueByLang;
        return withAliases(value, {
            Name: "name",
            Item: "item",
            Scope: "scope",
            ValueType: "valueType",
            Value: "value",
            DefaultValue: "defaultValue",
            DispName: "dispName",
            ItemOrder: "itemOrder",
            Notes: "notes",
            CDate: "cDate",
            MDate: "mDate",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => CommonOption.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class OptionInfo {
    constructor(init = {}) {
        this.commonOption = new CommonOption();
        this.classOption = 0;
        this.sectors = "";
        this.groupID = "";
        this.policy = "";
        this.siteIndex = "";
        this.roomCode = "";
        this.inherit = "";
        this.selected = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OptionInfo();
        value.commonOption = CommonOption.fromJson(json["CommonOption"] ?? json);
        value.classOption = asNumber(json["Class"], value.classOption);
        value.sectors = asString(json["Sectors"], value.sectors);
        value.groupID = asString(json["GroupID"], value.groupID);
        value.policy = asString(json["Policy"], value.policy);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.inherit = asString(json["Inherit"], value.inherit);
        value.selected = asString(json["Selected"], value.selected);
        const record = value;
        Object.assign(record, {
            name: value.commonOption.name,
            item: value.commonOption.item,
            scope: value.commonOption.scope,
            valueType: value.commonOption.valueType,
            value: value.commonOption.value,
            defaultValue: value.commonOption.defaultValue,
            dispName: value.commonOption.dispName,
            itemOrder: value.commonOption.itemOrder,
            notes: value.commonOption.notes,
            cDate: value.commonOption.cDate,
            mDate: value.commonOption.mDate,
            Name: value.commonOption.name,
            Item: value.commonOption.item,
            Scope: value.commonOption.scope,
            ValueType: value.commonOption.valueType,
            Value: value.commonOption.value,
            DefaultValue: value.commonOption.defaultValue,
            DispName: value.commonOption.dispName,
            ItemOrder: value.commonOption.itemOrder,
            Notes: value.commonOption.notes,
            CDate: value.commonOption.cDate,
            MDate: value.commonOption.mDate,
        });
        return withAliases(value, {
            Class: "classOption",
            Sectors: "sectors",
            GroupID: "groupID",
            Policy: "policy",
            SiteIndex: "siteIndex",
            RoomCode: "roomCode",
            Inherit: "inherit",
            Selected: "selected",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OptionInfo.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class DB {
    constructor(init = {}) {
        this.version = "";
        this.keepingPeriod = undefined;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new DB();
        value.version = asString(json["Version"], value.version);
        value.keepingPeriod = json["KeepingPeriod"] ?? value.keepingPeriod;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => DB.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class Room {
    constructor(init = {}) {
        this.stat = undefined;
        this.option = undefined;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new Room();
        value.stat = json["Stat"] ?? value.stat;
        value.option = json["Option"] ?? value.option;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => Room.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class User {
    constructor(init = {}) {
        this.types = new OptionItems();
        this.state = new OptionItems();
        this.passwordComplexity = new OptionItems();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new User();
        value.types = OptionItems.fromJson(json["Types"] ?? {});
        value.state = OptionItems.fromJson(json["State"] ?? {});
        value.passwordComplexity = OptionItems.fromJson(json["PasswordComplexity"] ?? {});
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => User.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class MailConfig {
    constructor(init = {}) {
        this.type = "";
        this.sender = "";
        this.senderName = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new MailConfig();
        value.type = asString(json["Type"], value.type);
        value.sender = asString(json["Sender"], value.sender);
        value.senderName = asString(json["SenderName"], value.senderName);
        return withAliases(value, { Type: "type", Sender: "sender", SenderName: "senderName" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => MailConfig.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SendMail {
    constructor(init = {}) {
        this.contents = new OptionItems();
        this.title = new OptionItems();
        this.config = new MailConfig();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SendMail();
        value.contents = OptionItems.fromJson(json["Contents"] ?? {});
        value.title = OptionItems.fromJson(json["Title"] ?? {});
        value.config = MailConfig.fromJson(json["Config"] ?? {});
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SendMail.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class OptionItems {
    constructor(init = {}) {
        this.main = new OptionInfo();
        this.array = [];
        this.map = {};
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OptionItems();
        value.main = OptionInfo.fromJson(json["Main"] ?? {});
        value.array = OptionInfo.fromJsonList(json["Array"]);
        value.map = json["Map"] ?? value.map;
        return withAliases(value, { Main: "main", Array: "array", Map: "map" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OptionItems.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class BaseOptionEnvData {
    constructor(init = {}) {
        this.mapBaseOption = {};
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new BaseOptionEnvData();
        value.mapBaseOption = json["data"] ?? value.mapBaseOption;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => BaseOptionEnvData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class GroupOptionEnvData {
    constructor(init = {}) {
        this.mapGroupOption = {};
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new GroupOptionEnvData();
        value.mapGroupOption = json["data"] ?? value.mapGroupOption;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => GroupOptionEnvData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class PolicyOptionEnvData {
    constructor(init = {}) {
        this.mapPolicyOption = {};
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new PolicyOptionEnvData();
        value.mapPolicyOption = json["data"] ?? value.mapPolicyOption;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => PolicyOptionEnvData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SiteOptionInfoMap {
    constructor(init = {}) {
        this.optionInfo = {};
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SiteOptionInfoMap();
        value.optionInfo = json["OptionInfo"] ?? value.optionInfo;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SiteOptionInfoMap.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class BlockListData {
    constructor(init = {}) {
        this.globals = new OptionInfo();
        this.customs = new OptionInfo();
        this.exceptions = new OptionInfo();
        this.maskText = new OptionInfo();
        this.scope = new Scope();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new BlockListData();
        value.globals = OptionInfo.fromJson(unwrapMain(json["GlobalBlocks"] ?? json["Globals"]));
        value.customs = OptionInfo.fromJson(unwrapMain(json["CustomBlocks"] ?? json["Customs"]));
        value.exceptions = OptionInfo.fromJson(unwrapMain(json["GlobalAllows"] ?? json["Exceptions"]));
        value.maskText = OptionInfo.fromJson(unwrapMain(json["MaskText"]));
        value.scope = Scope.fromJson(json["Scope"] ?? {});
        return withAliases(value, {
            globalBlocks: "globals",
            customBlocks: "customs",
            globalAllows: "exceptions",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => BlockListData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class Scope {
    constructor(init = {}) {
        this.chat = new OptionInfo();
        this.nickname = new OptionInfo();
        this.titleAgenda = new OptionInfo();
        this.fileName = new OptionInfo();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new Scope();
        value.chat = OptionInfo.fromJson(unwrapMain(json["Chat"]));
        value.nickname = OptionInfo.fromJson(unwrapMain(json["Nickname"]));
        value.titleAgenda = OptionInfo.fromJson(unwrapMain(json["TitleAgenda"]));
        value.fileName = OptionInfo.fromJson(unwrapMain(json["FileName"]));
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => Scope.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class PageLists {
    constructor(init = {}) {
        this.PageList = undefined;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new PageLists();
        value.PageList = json["PageList"] ?? value.PageList;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => PageLists.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class PageData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.userID = "";
        this.roomCode = "";
        this.pageID = "";
        this.orgNoteID = "";
        this.srcPageID = "";
        this.type = 0;
        this.title = "";
        this.width = 0;
        this.height = 0;
        this.imageFormat = "";
        this.thumbData = new Blob([]);
        this.imageData = new Blob([]);
        this.imageHash = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new PageData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.userID = asString(json["UserID"], value.userID);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.pageID = asString(json["PageID"], value.pageID);
        value.orgNoteID = asString(json["OrgNoteID"], value.orgNoteID);
        value.srcPageID = asString(json["SrcPageID"], value.srcPageID);
        value.type = asNumber(json["Type"], value.type);
        value.title = asString(json["Title"], value.title);
        value.width = asNumber(json["Width"], value.width);
        value.height = asNumber(json["Height"], value.height);
        value.imageFormat = asString(json["ImageFormat"], value.imageFormat);
        value.thumbData = json["ThumbData"] instanceof Blob ? json["ThumbData"] : value.thumbData;
        value.imageData = json["ImageData"] instanceof Blob ? json["ImageData"] : value.imageData;
        value.imageHash = asString(json["ImageHash"], value.imageHash);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => PageData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class PagesData {
    constructor(init = {}) {
        this.currentPageNo = 0;
        this.totalPageNo = 0;
        this.totalRowCount = 0;
        this.pagePerRow = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new PagesData();
        value.currentPageNo = asNumber(json["currentPageNo"], value.currentPageNo);
        value.totalPageNo = asNumber(json["totalPageNo"], value.totalPageNo);
        value.totalRowCount = asNumber(json["totalRowCount"], value.totalRowCount);
        value.pagePerRow = asNumber(json["pagePerRow"], value.pagePerRow);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => PagesData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class PagesLists {
    constructor(init = {}) {
        this.PagesList = undefined;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new PagesLists();
        value.PagesList = json["PageList"] ?? value.PagesList;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => PagesLists.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ProvisionServerData {
    constructor(init = {}) {
        this.provisionServerIndex = "";
        this.sector = "";
        this.serverIndex = "";
        this.serverTypes = "";
        this.privateIPAddrs = "";
        this.publicIPAddr = "";
        this.publicDomain = "";
        this.version = "";
        this.state = 0;
        this.failedReason = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ProvisionServerData();
        value.provisionServerIndex = asString(json["ProvisionServerIndex"], value.provisionServerIndex);
        value.sector = asString(json["Sector"], value.sector);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.serverTypes = asString(json["ServerTypes"], value.serverTypes);
        value.privateIPAddrs = asString(json["PrivateIPAddrs"], value.privateIPAddrs);
        value.publicIPAddr = asString(json["PublicIPAddr"], value.publicIPAddr);
        value.publicDomain = asString(json["PublicDomain"], value.publicDomain);
        value.version = asString(json["Version"], value.version);
        value.state = asNumber(json["State"], value.state);
        value.failedReason = asString(json["FailedReason"], value.failedReason);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ProvisionServerData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class RoomData {
    constructor(init = {}) {
        this.groupId = "";
        this.siteIndex = "";
        this.userIndex = "";
        this.userId = "";
        this.roomId = "";
        this.roomCode = "";
        this.policy = "";
        this.title = "";
        this.timeZone = "";
        this.startedDate = "";
        this.finishedDate = "";
        this.isLocked = false;
        this.isPublic = false;
        this.maxUsers = 0;
        this.plannedDate = "";
        this.roomDuration = 0;
        this.isRefsDone = 0;
        this.isDeleted = false;
        this.serverSector = "";
        this.serverIndex = "";
        this.password = "";
        this.agenda = "";
        this.admissionDate = "";
        this.endDate = "";
        this.noteIds = [];
        this.pageIds = [];
        this.cDate = "";
        this.mDate = "";
        this.creator = "";
        this.attendeesCount = 0;
        this.profileImageURL = "";
        this.joinedAttendees = [];
        this.isManager = false;
        this.isSubManager = false;
        this.offset = 0;
        this.sharedNoteInfo = undefined;
        this.distNoteInfo = undefined;
        this.personalNoteInfo = undefined;
        this.webUploadNoteInfo = [];
        this.pageInfo = undefined;
        this.pageList = undefined;
        this.reactionList = undefined;
        this.pageInfoList = [];
        this.instanceIndex = "";
        this.optionsInfo = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new RoomData();
        value.groupId = asString(json["GroupID"], value.groupId);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.userIndex = asString(json["UserIndex"], value.userIndex);
        value.userId = asString(json["UserID"], value.userId);
        value.roomId = asString(json["RoomID"], value.roomId);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.policy = asString(json["Policy"], value.policy);
        value.title = asString(json["Title"], value.title);
        value.timeZone = asString(json["TimeZone"], value.timeZone);
        value.startedDate = asString(json["StartedDate"], value.startedDate);
        value.finishedDate = asString(json["FinishedDate"], value.finishedDate);
        value.isLocked = asBoolean(json["IsLocked"], value.isLocked);
        value.isPublic = asBoolean(json["IsPublic"], value.isPublic);
        value.maxUsers = asNumber(json["MaxUsers"], value.maxUsers);
        value.plannedDate = asString(json["PlannedDate"], value.plannedDate);
        value.roomDuration = asNumber(json["RoomDuration"], value.roomDuration);
        value.isRefsDone = asNumber(json["IsRefsDone"], value.isRefsDone);
        value.isDeleted = asBoolean(json["IsDeleted"], value.isDeleted);
        value.serverSector = asString(json["ServerSector"], value.serverSector);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.password = asString(json["Password"], value.password);
        value.agenda = asString(json["Agenda"], value.agenda);
        value.admissionDate = asString(json["AdmissionDate"], value.admissionDate);
        value.endDate = asString(json["EndDate"], value.endDate);
        value.noteIds = Array.isArray(json["NoteIds"]) ? json["NoteIds"] : value.noteIds;
        value.pageIds = Array.isArray(json["PageIds"]) ? json["PageIds"] : value.pageIds;
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.creator = asString(json["Creator"], value.creator);
        value.attendeesCount = asNumber(json["AttendeesCount"], value.attendeesCount);
        value.profileImageURL = asString(json["ProfileImageURL"], value.profileImageURL);
        value.joinedAttendees = RoomAttendeeData.fromJsonList(json["JoinedAttendees"]);
        value.isManager = asBoolean(json["IsManager"], value.isManager);
        value.isSubManager = asBoolean(json["IsSubManager"], value.isSubManager);
        value.offset = asNumber(json["Offset"], value.offset);
        value.sharedNoteInfo = json["SharedNoteList"] ?? value.sharedNoteInfo;
        value.distNoteInfo = json["DistNoteList"] ?? value.distNoteInfo;
        value.personalNoteInfo = json["PersonalNoteList"] ?? value.personalNoteInfo;
        value.webUploadNoteInfo = Array.isArray(json["WebUploadNoteList"]) ? json["WebUploadNoteList"] : value.webUploadNoteInfo;
        value.pageInfo = json["PageInfo"] ?? value.pageInfo;
        value.pageList = json["PageList"] ?? value.pageList;
        value.reactionList = json["ReactionList"] ?? value.reactionList;
        value.pageInfoList = Array.isArray(json["PageInfoList"]) ? json["PageInfoList"] : value.pageInfoList;
        value.instanceIndex = asString(json["InstanceIndex"], value.instanceIndex);
        value.optionsInfo = asString(json["OptionsInfo"], value.optionsInfo);
        return withAliases(value, {
            GroupID: "groupId",
            SiteIndex: "siteIndex",
            UserIndex: "userIndex",
            UserID: "userId",
            RoomID: "roomId",
            RoomCode: "roomCode",
            Policy: "policy",
            Title: "title",
            TimeZone: "timeZone",
            StartedDate: "startedDate",
            FinishedDate: "finishedDate",
            IsLocked: "isLocked",
            IsPublic: "isPublic",
            MaxUsers: "maxUsers",
            PlannedDate: "plannedDate",
            RoomDuration: "roomDuration",
            IsDeleted: "isDeleted",
            ServerSector: "serverSector",
            ServerIndex: "serverIndex",
            Password: "password",
            Agenda: "agenda",
            AdmissionDate: "admissionDate",
            EndDate: "endDate",
            CDate: "cDate",
            MDate: "mDate",
            Creator: "creator",
            AttendeesCount: "attendeesCount",
            ProfileImageURL: "profileImageURL",
            IsManager: "isManager",
            IsSubManager: "isSubManager",
            InstanceIndex: "instanceIndex",
            OptionsInfo: "optionsInfo",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => RoomData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ClassRoomInfo {
    constructor(init = {}) {
        this.isJoinAvailable = false;
        this.siteIndex = "";
        this.siteID = "";
        this.creatorID = "";
        this.isWaitingRoom = false;
        this.roomTitle = "";
        this.roomCode = "";
        this.attendeeType = "";
        this.isTID = false;
        this.userID = "";
        this.attdID = "";
        this.attdName = "";
        this.attdPassword = "";
        this.isAdmin = false;
        this.inviterID = "";
        this.roomInfo = null;
        this.roomOptionList = [];
        this.profileImageURL = "";
        this.expiredDate = "";
        this.classRoomData = null;
        this.isAvailableGhostMode = false;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ClassRoomInfo();
        value.isJoinAvailable = asBoolean(json["IsJoinAvailable"], value.isJoinAvailable);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.siteID = asString(json["SiteID"], value.siteID);
        value.creatorID = asString(json["CreatorID"], value.creatorID);
        value.isWaitingRoom = asBoolean(json["IsWaitingRoom"], value.isWaitingRoom);
        value.roomTitle = asString(json["RoomTitle"], value.roomTitle);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.attendeeType = asString(json["AttendeeType"], value.attendeeType);
        value.isTID = asBoolean(json["IsTID"], value.isTID);
        value.userID = asString(json["UserID"], value.userID);
        value.attdID = asString(json["AttdID"], value.attdID);
        value.attdName = asString(json["AttdName"], value.attdName);
        value.attdPassword = asString(json["AttdPassword"], value.attdPassword);
        value.isAdmin = asBoolean(json["IsAdmin"], value.isAdmin);
        value.inviterID = asString(json["InviterID"], value.inviterID);
        value.roomInfo = json["RoomInfo"] == null ? value.roomInfo : RoomData.fromJson(json["RoomInfo"]);
        value.roomOptionList = OptionInfo.fromJsonList(json["RoomOptionList"]);
        value.profileImageURL = asString(json["ProfileImageURL"], value.profileImageURL);
        value.expiredDate = asString(json["ExpiredDate"], value.expiredDate);
        value.classRoomData = json["ClassRoomData"] == null ? value.classRoomData : asString(json["ClassRoomData"]);
        value.isAvailableGhostMode = asBoolean(json["IsAvailableGhostMode"], value.isAvailableGhostMode);
        return withAliases(value, {
            IsJoinAvailable: "isJoinAvailable",
            SiteIndex: "siteIndex",
            SiteID: "siteID",
            CreatorID: "creatorID",
            IsWaitingRoom: "isWaitingRoom",
            RoomTitle: "roomTitle",
            RoomCode: "roomCode",
            AttendeeType: "attendeeType",
            IsTID: "isTID",
            UserID: "userID",
            AttdID: "attdID",
            AttdName: "attdName",
            AttdPassword: "attdPassword",
            IsAdmin: "isAdmin",
            InviterID: "inviterID",
            RoomInfo: "roomInfo",
            RoomOptionList: "roomOptionList",
            ProfileImageURL: "profileImageURL",
            ExpiredDate: "expiredDate",
            ClassRoomData: "classRoomData",
            IsAvailableGhostMode: "isAvailableGhostMode",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ClassRoomInfo.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class RoomPolicyData {
    constructor(init = {}) {
        this.selectedPolicy = "";
        this.roomPoliciesList = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new RoomPolicyData();
        value.selectedPolicy = asString(json["SelectedPolicy"], value.selectedPolicy);
        value.roomPoliciesList = OptionInfo.fromJsonList(json["RoomPoliciesList"]);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => RoomPolicyData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class CreateRoomData {
    constructor(init = {}) {
        this.roomData = new RoomData();
        this.cDate = "";
        this.mDate = "";
        this.joinRoomURL = "";
        this.roomOption = [];
        this.attendees = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new CreateRoomData();
        value.roomData = RoomData.fromJson(json["RoomData"] ?? {});
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.joinRoomURL = asString(json["JoinRoomURL"], value.joinRoomURL);
        value.roomOption = OptionInfo.fromJsonList(json["RoomOption"]);
        value.attendees = RoomAttendees.fromJsonList(json["Attendees"]);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => CreateRoomData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class HistoryRoomData {
    constructor(init = {}) {
        this.roomDataList = [];
        this.pagesData = new PagesData();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new HistoryRoomData();
        value.roomDataList = RoomData.fromJsonList(json["RoomLogInfo"]);
        value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => HistoryRoomData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ScheduleRoomData {
    constructor(init = {}) {
        this.roomDataList = [];
        this.pagesData = new PagesData();
        this.onlyInvited = false;
        this.onlyPermanent = false;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ScheduleRoomData();
        value.roomDataList = RoomData.fromJsonList(json["RoomInfo"]);
        value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
        value.onlyInvited = asBoolean(json["OnlyInvited"], value.onlyInvited);
        value.onlyPermanent = asBoolean(json["OnlyPermanent"], value.onlyPermanent);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ScheduleRoomData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class RoomAttendeeData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.roomCode = "";
        this.attdID = "";
        this.isManager = false;
        this.isSubManager = false;
        this.userType = "";
        this.userClientOS = "";
        this.userClientType = "";
        this.userClientDetail = "";
        this.email = "";
        this.name = "";
        this.rights = "";
        this.exitedReason = 0;
        this.attendedDuration = 0;
        this.userIndex = "";
        this.userID = "";
        this.inviterID = "";
        this.nickName = "";
        this.serverSector = "";
        this.serverIndex = "";
        this.attendedDate = "";
        this.exitedDate = "";
        this.iPAddr = "";
        this.cDate = "";
        this.mDate = "";
        this.noteIds = [];
        this.pageIds = [];
        this.notesInfo = "";
        this.annotationsInfo = "";
        this.noteList = undefined;
        this.pageInfo = undefined;
        this.pageList = undefined;
        this.pageInfoList = [];
        this.state = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new RoomAttendeeData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.attdID = asString(json["AttdID"], value.attdID);
        value.isManager = asBoolean(json["IsManager"], value.isManager);
        value.isSubManager = asBoolean(json["IsSubManager"], value.isSubManager);
        value.userType = asString(json["UserType"], value.userType);
        value.userClientOS = asString(json["UserClientOS"], value.userClientOS);
        value.userClientType = asString(json["UserClientType"], value.userClientType);
        value.userClientDetail = asString(json["UserClientDetail"], value.userClientDetail);
        value.email = asString(json["Email"], value.email);
        value.name = asString(json["Name"], value.name);
        value.rights = asString(json["Rights"], value.rights);
        value.exitedReason = asNumber(json["ExitedReason"], value.exitedReason);
        value.attendedDuration = asNumber(json["AttendedDuration"], value.attendedDuration);
        value.userIndex = asString(json["UserIndex"], value.userIndex);
        value.userID = asString(json["UserID"], value.userID);
        value.inviterID = asString(json["InviterID"], value.inviterID);
        value.nickName = asString(json["NickName"], value.nickName);
        value.serverSector = asString(json["ServerSector"], value.serverSector);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.attendedDate = asString(json["AttendedDate"], value.attendedDate);
        value.exitedDate = asString(json["ExitedDate"], value.exitedDate);
        value.iPAddr = asString(json["IPAddr"], value.iPAddr);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.noteIds = Array.isArray(json["NoteIds"]) ? json["NoteIds"] : value.noteIds;
        value.pageIds = Array.isArray(json["PageIds"]) ? json["PageIds"] : value.pageIds;
        value.notesInfo = asString(json["NotesInfo"], value.notesInfo);
        value.annotationsInfo = asString(json["AnnotationsInfo"], value.annotationsInfo);
        value.noteList = json["NoteList"] ?? value.noteList;
        value.pageInfo = json["PageInfo"] ?? value.pageInfo;
        value.pageList = json["pageList"] ?? value.pageList;
        value.pageInfoList = Array.isArray(json["pageInfoList"]) ? json["pageInfoList"] : value.pageInfoList;
        value.state = asString(json["State"], value.state);
        return withAliases(value, {
            GroupID: "groupID",
            SiteIndex: "siteIndex",
            RoomCode: "roomCode",
            AttdID: "attdID",
            IsManager: "isManager",
            IsSubManager: "isSubManager",
            UserType: "userType",
            UserClientOS: "userClientOS",
            UserClientType: "userClientType",
            UserClientDetail: "userClientDetail",
            Email: "email",
            Name: "name",
            Rights: "rights",
            ExitedReason: "exitedReason",
            AttendedDuration: "attendedDuration",
            UserIndex: "userIndex",
            UserID: "userID",
            InviterID: "inviterID",
            NickName: "nickName",
            ServerSector: "serverSector",
            ServerIndex: "serverIndex",
            AttendedDate: "attendedDate",
            ExitedDate: "exitedDate",
            IPAddr: "iPAddr",
            CDate: "cDate",
            MDate: "mDate",
            State: "state",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => RoomAttendeeData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class RoomAttendees {
    constructor(init = {}) {
        this.userID = "";
        this.name = "";
        this.engName = "";
        this.email = "";
        this.attendeeURL = "";
        this.userType = "";
        this.userIndex = "";
        this.state = "";
        this.isManager = false;
        this.deptCode = "";
        this.deptName = "";
        this.deptEngName = "";
        this.positionCode = "";
        this.positionName = "";
        this.positionEngName = "";
        this.dutyCode = "";
        this.dutyName = "";
        this.dutyEngName = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = unwrapMain(jsonInput);
        const value = new RoomAttendees();
        value.userID = asString(pick(json, "UserID", "userID", "userId", "user_id", "id"), value.userID);
        value.name = asString(pick(json, "Name", "name"), value.name);
        value.engName = asString(pick(json, "EngName", "engName", "eng_name"), value.engName);
        value.email = asString(pick(json, "Email", "email"), value.email);
        value.attendeeURL = asString(pick(json, "AttendeeURL", "AttendeeUrl", "attendeeURL", "attendeeUrl", "attendee_url"), value.attendeeURL);
        value.userType = asString(pick(json, "UserType", "userType", "user_type"), value.userType);
        value.userIndex = asString(pick(json, "UserIndex", "userIndex", "user_index", "Index", "index"), value.userIndex);
        value.state = asString(pick(json, "State", "state"), value.state);
        value.isManager = asBoolean(pick(json, "IsManager", "isManager", "is_manager"), value.isManager);
        value.deptCode = asString(pick(json, "DeptCode", "deptCode", "dept_code"), value.deptCode);
        value.deptName = asString(pick(json, "DeptName", "deptName", "dept_name"), value.deptName);
        value.deptEngName = asString(pick(json, "DeptEngName", "deptEngName", "dept_eng_name"), value.deptEngName);
        value.positionCode = asString(pick(json, "PositionCode", "positionCode", "position_code"), value.positionCode);
        value.positionName = asString(pick(json, "PositionName", "positionName", "position_name"), value.positionName);
        value.positionEngName = asString(pick(json, "PositionEngName", "positionEngName", "position_eng_name"), value.positionEngName);
        value.dutyCode = asString(pick(json, "DutyCode", "dutyCode", "duty_code"), value.dutyCode);
        value.dutyName = asString(pick(json, "DutyName", "dutyName", "duty_name"), value.dutyName);
        value.dutyEngName = asString(pick(json, "DutyEngName", "dutyEngName", "duty_eng_name"), value.dutyEngName);
        return withAliases(value, {
            UserID: "userID",
            user_id: "userID",
            Name: "name",
            EngName: "engName",
            eng_name: "engName",
            Email: "email",
            AttendeeURL: "attendeeURL",
            AttendeeUrl: "attendeeURL",
            attendee_url: "attendeeURL",
            UserType: "userType",
            user_type: "userType",
            UserIndex: "userIndex",
            user_index: "userIndex",
            State: "state",
            IsManager: "isManager",
            is_manager: "isManager",
            DeptCode: "deptCode",
            dept_code: "deptCode",
            DeptName: "deptName",
            dept_name: "deptName",
            DeptEngName: "deptEngName",
            dept_eng_name: "deptEngName",
            PositionCode: "positionCode",
            position_code: "positionCode",
            PositionName: "positionName",
            position_name: "positionName",
            PositionEngName: "positionEngName",
            position_eng_name: "positionEngName",
            DutyCode: "dutyCode",
            duty_code: "dutyCode",
            DutyName: "dutyName",
            duty_name: "dutyName",
            DutyEngName: "dutyEngName",
            duty_eng_name: "dutyEngName",
        });
    }
    static fromJsonList(jsonList) {
        return pickArray(jsonList, "RoomAttendees", "roomAttendees", "Attendees", "attendees", "AttendeeList", "attendeeList", "List", "list", "Array", "array")
            .map((json) => RoomAttendees.fromJson(json));
    }
    toJson() {
        return { ...this };
    }
}
export class RoomAttendeeLogData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.userIndex = "";
        this.userID = "";
        this.roomCode = "";
        this.attdID = "";
        this.inviterID = "";
        this.isManager = false;
        this.isSubManager = false;
        this.userType = 0;
        this.clientVersion = "";
        this.clientOS = "";
        this.clientType = 0;
        this.clientDetail = "";
        this.email = "";
        this.name = "";
        this.engName = "";
        this.nickName = "";
        this.rights = "";
        this.noteIDs = "";
        this.pageIDs = "";
        this.notesInfo = "";
        this.annotationsInfo = "";
        this.invitedDate = "";
        this.attendedDate = "";
        this.attendedDuration = 0;
        this.exitedDate = "";
        this.exitedReason = 0;
        this.ipAddr = "";
        this.byIPAddr = "";
        this.cDate = "";
        this.mDate = "";
        this.index = "";
        this.serverSector = "";
        this.serverIndex = "";
        this.instanceIndex = "";
        this.lDate = "";
        this.deptCode = "";
        this.deptName = "";
        this.deptEngName = "";
        this.positionCode = "";
        this.positionName = "";
        this.positionEngName = "";
        this.dutyCode = "";
        this.dutyName = "";
        this.dutyEngName = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = unwrapMain(jsonInput);
        const value = new RoomAttendeeLogData();
        value.groupID = asString(pick(json, "GroupID", "groupID", "groupId", "group_id"), value.groupID);
        value.siteIndex = asString(pick(json, "SiteIndex", "siteIndex", "site_index"), value.siteIndex);
        value.userIndex = asString(pick(json, "UserIndex", "userIndex", "user_index"), value.userIndex);
        value.userID = asString(pick(json, "UserID", "userID", "userId", "user_id"), value.userID);
        value.roomCode = asString(pick(json, "RoomCode", "roomCode", "room_code"), value.roomCode);
        value.attdID = asString(pick(json, "AttdID", "attdID", "attdId", "attd_id"), value.attdID);
        value.inviterID = asString(pick(json, "InviterID", "inviterID", "inviterId", "inviter_id"), value.inviterID);
        value.isManager = asBoolean(pick(json, "IsManager", "isManager", "is_manager"), value.isManager);
        value.isSubManager = asBoolean(pick(json, "IsSubManager", "isSubManager", "is_sub_manager"), value.isSubManager);
        value.userType = asNumber(pick(json, "UserType", "userType", "user_type"), value.userType);
        value.clientVersion = asString(pick(json, "ClientVersion", "clientVersion", "client_version"), value.clientVersion);
        value.clientOS = asString(pick(json, "ClientOS", "clientOS", "clientOs", "client_os"), value.clientOS);
        value.clientType = asNumber(pick(json, "ClientType", "clientType", "client_type"), value.clientType);
        value.clientDetail = asString(pick(json, "ClientDetail", "clientDetail", "client_detail"), value.clientDetail);
        value.email = asString(pick(json, "Email", "email"), value.email);
        value.name = asString(pick(json, "Name", "name"), value.name);
        value.engName = asString(pick(json, "EngName", "engName", "eng_name"), value.engName);
        value.nickName = asString(pick(json, "NickName", "nickName", "nickname", "nick_name"), value.nickName);
        value.rights = asString(pick(json, "Rights", "rights"), value.rights);
        value.noteIDs = asString(pick(json, "NoteIDs", "NoteIds", "noteIDs", "noteIds", "note_ids"), value.noteIDs);
        value.pageIDs = asString(pick(json, "PageIDs", "PageIds", "pageIDs", "pageIds", "page_ids"), value.pageIDs);
        value.notesInfo = asString(pick(json, "NotesInfo", "notesInfo", "notes_info"), value.notesInfo);
        value.annotationsInfo = asString(pick(json, "AnnotationsInfo", "annotationsInfo", "annotations_info"), value.annotationsInfo);
        value.invitedDate = asString(pick(json, "InvitedDate", "invitedDate", "invited_date"), value.invitedDate);
        value.attendedDate = asString(pick(json, "AttendedDate", "attendedDate", "attended_date"), value.attendedDate);
        value.attendedDuration = asNumber(pick(json, "AttendedDuration", "attendedDuration", "attended_duration"), value.attendedDuration);
        value.exitedDate = asString(pick(json, "ExitedDate", "exitedDate", "exited_date"), value.exitedDate);
        value.exitedReason = asNumber(pick(json, "ExitedReason", "exitedReason", "exited_reason"), value.exitedReason);
        value.ipAddr = asString(pick(json, "IPAddr", "ipAddr", "ip_addr"), value.ipAddr);
        value.byIPAddr = asString(pick(json, "ByIPAddr", "byIPAddr", "byIpAddr", "by_ip_addr"), value.byIPAddr);
        value.cDate = asString(pick(json, "CDate", "cDate", "c_date"), value.cDate);
        value.mDate = asString(pick(json, "MDate", "mDate", "m_date"), value.mDate);
        value.index = asString(pick(json, "Index", "index"), value.index);
        value.serverSector = asString(pick(json, "ServerSector", "serverSector", "server_sector"), value.serverSector);
        value.serverIndex = asString(pick(json, "ServerIndex", "serverIndex", "server_index"), value.serverIndex);
        value.instanceIndex = asString(pick(json, "InstanceIndex", "instanceIndex", "instance_index"), value.instanceIndex);
        value.lDate = asString(pick(json, "LDate", "lDate", "l_date"), value.lDate);
        value.deptCode = asString(pick(json, "DeptCode", "deptCode", "dept_code"), value.deptCode);
        value.deptName = asString(pick(json, "DeptName", "deptName", "dept_name"), value.deptName);
        value.deptEngName = asString(pick(json, "DeptEngName", "deptEngName", "dept_eng_name"), value.deptEngName);
        value.positionCode = asString(pick(json, "PositionCode", "positionCode", "position_code"), value.positionCode);
        value.positionName = asString(pick(json, "PositionName", "positionName", "position_name"), value.positionName);
        value.positionEngName = asString(pick(json, "PositionEngName", "positionEngName", "position_eng_name"), value.positionEngName);
        value.dutyCode = asString(pick(json, "DutyCode", "dutyCode", "duty_code"), value.dutyCode);
        value.dutyName = asString(pick(json, "DutyName", "dutyName", "duty_name"), value.dutyName);
        value.dutyEngName = asString(pick(json, "DutyEngName", "dutyEngName", "duty_eng_name"), value.dutyEngName);
        return withAliases(value, {
            GroupID: "groupID",
            group_id: "groupID",
            SiteIndex: "siteIndex",
            site_index: "siteIndex",
            UserIndex: "userIndex",
            user_index: "userIndex",
            UserID: "userID",
            user_id: "userID",
            RoomCode: "roomCode",
            room_code: "roomCode",
            AttdID: "attdID",
            attd_id: "attdID",
            InviterID: "inviterID",
            inviter_id: "inviterID",
            IsManager: "isManager",
            is_manager: "isManager",
            IsSubManager: "isSubManager",
            is_sub_manager: "isSubManager",
            UserType: "userType",
            user_type: "userType",
            ClientVersion: "clientVersion",
            client_version: "clientVersion",
            ClientOS: "clientOS",
            client_os: "clientOS",
            ClientType: "clientType",
            client_type: "clientType",
            ClientDetail: "clientDetail",
            client_detail: "clientDetail",
            Email: "email",
            Name: "name",
            EngName: "engName",
            eng_name: "engName",
            NickName: "nickName",
            nick_name: "nickName",
            Rights: "rights",
            NoteIDs: "noteIDs",
            note_ids: "noteIDs",
            PageIDs: "pageIDs",
            page_ids: "pageIDs",
            NotesInfo: "notesInfo",
            notes_info: "notesInfo",
            AnnotationsInfo: "annotationsInfo",
            annotations_info: "annotationsInfo",
            InvitedDate: "invitedDate",
            invited_date: "invitedDate",
            AttendedDate: "attendedDate",
            attended_date: "attendedDate",
            AttendedDuration: "attendedDuration",
            attended_duration: "attendedDuration",
            ExitedDate: "exitedDate",
            exited_date: "exitedDate",
            ExitedReason: "exitedReason",
            exited_reason: "exitedReason",
            IPAddr: "ipAddr",
            ip_addr: "ipAddr",
            ByIPAddr: "byIPAddr",
            by_ip_addr: "byIPAddr",
            CDate: "cDate",
            c_date: "cDate",
            MDate: "mDate",
            m_date: "mDate",
            Index: "index",
            ServerSector: "serverSector",
            server_sector: "serverSector",
            ServerIndex: "serverIndex",
            server_index: "serverIndex",
            InstanceIndex: "instanceIndex",
            instance_index: "instanceIndex",
            LDate: "lDate",
            l_date: "lDate",
            DeptCode: "deptCode",
            dept_code: "deptCode",
            DeptName: "deptName",
            dept_name: "deptName",
            DeptEngName: "deptEngName",
            dept_eng_name: "deptEngName",
            PositionCode: "positionCode",
            position_code: "positionCode",
            PositionName: "positionName",
            position_name: "positionName",
            PositionEngName: "positionEngName",
            position_eng_name: "positionEngName",
            DutyCode: "dutyCode",
            duty_code: "dutyCode",
            DutyName: "dutyName",
            duty_name: "dutyName",
            DutyEngName: "dutyEngName",
            duty_eng_name: "dutyEngName",
        });
    }
    static fromJsonList(jsonList) {
        return pickArray(jsonList, "RoomAttendeeLogs", "roomAttendeeLogs", "AttendeeLogs", "attendeeLogs", "LogList", "logList", "List", "list", "Array", "array")
            .map((json) => RoomAttendeeLogData.fromJson(json));
    }
    toJson() {
        return { ...this };
    }
}
export class RoomChatData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.roomCode = "";
        this.index = "";
        this.filePath = "";
        this.fileSize = 0;
        this.serverIndex = "";
        this.instanceIndex = "";
        this.cDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new RoomChatData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.index = asString(json["Index"], value.index);
        value.filePath = asString(json["FilePath"], value.filePath);
        value.fileSize = asNumber(json["FileSize"], value.fileSize);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.instanceIndex = asString(json["InstanceIndex"], value.instanceIndex);
        value.cDate = asString(json["CDate"], value.cDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => RoomChatData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class RoomFileData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.userIndex = "";
        this.userID = "";
        this.attdID = "";
        this.roomCode = "";
        this.roomGroup = "";
        this.fileIndex = "";
        this.fileKind = "";
        this.fileName = "";
        this.filePath = "";
        this.fileSize = 0;
        this.title = "";
        this.pages = 0;
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new RoomFileData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.userIndex = asString(json["UserIndex"], value.userIndex);
        value.userID = asString(json["UserID"], value.userID);
        value.attdID = asString(json["AttdID"], value.attdID);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.roomGroup = asString(json["RoomGroup"], value.roomGroup);
        value.fileIndex = asString(json["FileIndex"], value.fileIndex);
        value.fileKind = asString(json["FileKind"], value.fileKind);
        value.fileName = asString(json["FileName"], value.fileName);
        value.filePath = asString(json["FilePath"], value.filePath);
        value.fileSize = asNumber(json["FileSize"], value.fileSize);
        value.title = asString(json["Title"], value.title);
        value.pages = asNumber(json["Pages"], value.pages);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => RoomFileData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class RoomLogData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.userIndex = "";
        this.userID = "";
        this.userEmail = "";
        this.userName = "";
        this.userType = 0;
        this.roomID = "";
        this.roomCode = "";
        this.policy = "";
        this.serverSector = "";
        this.serverIndex = "";
        this.password = "";
        this.title = "";
        this.agenda = "";
        this.timeZone = "";
        this.isLocked = false;
        this.isPublic = false;
        this.maxUsers = 0;
        this.admissionDate = "";
        this.plannedDate = "";
        this.endDate = "";
        this.roomDuration = 0;
        this.noteIDs = "";
        this.pageIDs = "";
        this.distNotesInfo = "";
        this.sharedNotesInfo = "";
        this.reactionsInfo = "";
        this.cDate = "";
        this.mDate = "";
        this.index = "";
        this.instanceIndex = "";
        this.startedDate = "";
        this.finishedDate = "";
        this.isAbnormal = false;
        this.hostJoinedDate = "";
        this.hostExitedDate = "";
        this.hostAttendedDuration = 0;
        this.optionsInfo = "";
        this.lDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new RoomLogData();
        value.groupID = asString(json["GroupID"], value.groupID);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.userIndex = asString(json["UserIndex"], value.userIndex);
        value.userID = asString(json["UserID"], value.userID);
        value.userEmail = asString(json["UserEmail"], value.userEmail);
        value.userName = asString(json["UserName"], value.userName);
        value.userType = asNumber(json["UserType"], value.userType);
        value.roomID = asString(json["RoomID"], value.roomID);
        value.roomCode = asString(json["RoomCode"], value.roomCode);
        value.policy = asString(json["Policy"], value.policy);
        value.serverSector = asString(json["ServerSector"], value.serverSector);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.password = asString(json["Password"], value.password);
        value.title = asString(json["Title"], value.title);
        value.agenda = asString(json["Agenda"], value.agenda);
        value.timeZone = asString(json["TimeZone"], value.timeZone);
        value.isLocked = asBoolean(json["IsLocked"], value.isLocked);
        value.isPublic = asBoolean(json["IsPublic"], value.isPublic);
        value.maxUsers = asNumber(json["MaxUsers"], value.maxUsers);
        value.admissionDate = asString(json["AdmissionDate"], value.admissionDate);
        value.plannedDate = asString(json["PlannedDate"], value.plannedDate);
        value.endDate = asString(json["EndDate"], value.endDate);
        value.roomDuration = asNumber(json["RoomDuration"], value.roomDuration);
        value.noteIDs = asString(json["NoteIDs"], value.noteIDs);
        value.pageIDs = asString(json["PageIDs"], value.pageIDs);
        value.distNotesInfo = asString(json["DistNotesInfo"], value.distNotesInfo);
        value.sharedNotesInfo = asString(json["SharedNotesInfo"], value.sharedNotesInfo);
        value.reactionsInfo = asString(json["ReactionsInfo"], value.reactionsInfo);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.index = asString(json["Index"], value.index);
        value.instanceIndex = asString(json["InstanceIndex"], value.instanceIndex);
        value.startedDate = asString(json["StartedDate"], value.startedDate);
        value.finishedDate = asString(json["FinishedDate"], value.finishedDate);
        value.isAbnormal = asBoolean(json["IsAbnormal"], value.isAbnormal);
        value.hostJoinedDate = asString(json["HostJoinedDate"], value.hostJoinedDate);
        value.hostExitedDate = asString(json["HostExitedDate"], value.hostExitedDate);
        value.hostAttendedDuration = asNumber(json["HostAttendedDuration"], value.hostAttendedDuration);
        value.optionsInfo = asString(json["OptionsInfo"], value.optionsInfo);
        value.lDate = asString(json["LDate"], value.lDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => RoomLogData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SectorData {
    constructor(init = {}) {
        this.sectorName = "";
        this.masterAddr = "";
        this.slaveAddr = "";
        this.webServerURL = "";
        this.apiServerURL = "";
        this.rooms = 0;
        this.attendees = 0;
        this.notes = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SectorData();
        value.sectorName = asString(json["SectorName"], value.sectorName);
        value.masterAddr = asString(json["MasterAddr"], value.masterAddr);
        value.slaveAddr = asString(json["SlaveAddr"], value.slaveAddr);
        value.webServerURL = asString(json["WebServerURL"], value.webServerURL);
        value.apiServerURL = asString(json["APIServerURL"], value.apiServerURL);
        value.rooms = asNumber(json["Rooms"], value.rooms);
        value.attendees = asNumber(json["Attendees"], value.attendees);
        value.notes = asString(json["Notes"], value.notes);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.sectorCount = asNumber(json["SectorCount"], value.sectorCount ?? 0);
        return withAliases(value, {
            SectorName: "sectorName",
            MasterAddr: "masterAddr",
            SlaveAddr: "slaveAddr",
            WebServerURL: "webServerURL",
            APIServerURL: "apiServerURL",
            Notes: "notes",
            CDate: "cDate",
            MDate: "mDate",
            SectorCount: "sectorCount",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SectorData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SentMailData {
    constructor(init = {}) {
        this.requestID = "";
        this.count = 0;
        this.contents = "";
        this.cDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SentMailData();
        value.requestID = asString(json["RequestID"], value.requestID);
        value.count = asNumber(json["Count"], value.count);
        value.contents = asString(json["Contents"], value.contents);
        value.cDate = asString(json["CDate"], value.cDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SentMailData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ServerData {
    constructor(init = {}) {
        this.sector = "";
        this.serverIndex = "";
        this.serverTypes = "";
        this.name = "";
        this.isActive = false;
        this.isAllowed = false;
        this.privateIPAddrs = "";
        this.publicIPAddr = "";
        this.publicSubDomain = "";
        this.publicDomains = "";
        this.mainPort = 0;
        this.version = "";
        this.startedDate = "";
        this.stoppedDate = "";
        this.gor = 0;
        this.gorTotal = 0;
        this.cpu = 0;
        this.cpuTotal = 0;
        this.mem = 0;
        this.memFree = 0;
        this.memTotal = 0;
        this.hddFree = 0;
        this.hddTotal = 0;
        this.ses = 0;
        this.rtp = 0;
        this.rtpTotal = 0;
        this.vid = 0;
        this.vidTotal = 0;
        this.maxQueryTime = 0;
        this.maxInvokeTime = 0;
        this.maxHandlerTime = 0;
        this.masterConnTimes = 0;
        this.masterRetryTimes = 0;
        this.dumps = 0;
        this.rooms = 0;
        this.attendees = 0;
        this.notes = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ServerData();
        value.sector = asString(json["Sector"], value.sector);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.serverTypes = asString(json["ServerTypes"], value.serverTypes);
        value.name = asString(json["Name"], value.name);
        value.isActive = asBoolean(json["IsActive"], value.isActive);
        value.isAllowed = asBoolean(json["IsAllowed"], value.isAllowed);
        value.privateIPAddrs = asString(json["PrivateIPAddrs"], value.privateIPAddrs);
        value.publicIPAddr = asString(json["PublicIPAddr"], value.publicIPAddr);
        value.publicSubDomain = asString(json["PublicSubDomain"], value.publicSubDomain);
        value.publicDomains = asString(json["PublicDomains"], value.publicDomains);
        value.mainPort = asNumber(json["MainPort"], value.mainPort);
        value.version = asString(json["Version"], value.version);
        value.startedDate = asString(json["StartedDate"], value.startedDate);
        value.stoppedDate = asString(json["StoppedDate"], value.stoppedDate);
        value.gor = asNumber(json["GOR"], value.gor);
        value.gorTotal = asNumber(json["GORTotal"], value.gorTotal);
        value.cpu = asNumber(json["CPU"], value.cpu);
        value.cpuTotal = asNumber(json["CPUTotal"], value.cpuTotal);
        value.mem = asNumber(json["Mem"], value.mem);
        value.memFree = asNumber(json["MemFree"], value.memFree);
        value.memTotal = asNumber(json["MemTotal"], value.memTotal);
        value.hddFree = asNumber(json["HDDFree"], value.hddFree);
        value.hddTotal = asNumber(json["HDDTotal"], value.hddTotal);
        value.ses = asNumber(json["SES"], value.ses);
        value.rtp = asNumber(json["RTP"], value.rtp);
        value.rtpTotal = asNumber(json["RTPTotal"], value.rtpTotal);
        value.vid = asNumber(json["VID"], value.vid);
        value.vidTotal = asNumber(json["VIDTotal"], value.vidTotal);
        value.maxQueryTime = asNumber(json["MaxQueryTime"], value.maxQueryTime);
        value.maxInvokeTime = asNumber(json["MaxInvokeTime"], value.maxInvokeTime);
        value.maxHandlerTime = asNumber(json["MaxHandlerTime"], value.maxHandlerTime);
        value.masterConnTimes = asNumber(json["MasterConnTimes"], value.masterConnTimes);
        value.masterRetryTimes = asNumber(json["MasterRetryTimes"], value.masterRetryTimes);
        value.dumps = asNumber(json["Dumps"], value.dumps);
        value.rooms = asNumber(json["Rooms"], value.rooms);
        value.attendees = asNumber(json["Attendees"], value.attendees);
        value.notes = asString(json["Notes"], value.notes);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return withAliases(value, {
            Sector: "sector",
            ServerIndex: "serverIndex",
            ServerTypes: "serverTypes",
            Name: "name",
            IsActive: "isActive",
            IsAllowed: "isAllowed",
            PrivateIPAddrs: "privateIPAddrs",
            PublicIPAddr: "publicIPAddr",
            PublicSubDomain: "publicSubDomain",
            PublicDomains: "publicDomains",
            Version: "version",
            StartedDate: "startedDate",
            StoppedDate: "stoppedDate",
            GOR: "gor",
            GORTotal: "gorTotal",
            CPU: "cpu",
            CPUTotal: "cpuTotal",
            Mem: "mem",
            MemFree: "memFree",
            MemTotal: "memTotal",
            HDDFree: "hddFree",
            HDDTotal: "hddTotal",
            SES: "ses",
            RTP: "rtp",
            RTPTotal: "rtpTotal",
            VID: "vid",
            VIDTotal: "vidTotal",
            MaxQueryTime: "maxQueryTime",
            MaxInvokeTime: "maxInvokeTime",
            MasterConnTimes: "masterConnTimes",
            Dumps: "dumps",
            Rooms: "rooms",
            Attendees: "attendees",
            Notes: "notes",
            CDate: "cDate",
            MDate: "mDate",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ServerData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ServerDomainData {
    constructor(init = {}) {
        this.sector = "";
        this.domainName = "";
        this.provisionServerIndex = "";
        this.targetServerIndex = "";
        this.targetPublicIPAddr = "";
        this.targetPrivateIPAddrs = "";
        this.finishedDate = "";
        this.failedReason = "";
        this.cDate = "";
        this.mDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ServerDomainData();
        value.sector = asString(json["Sector"], value.sector);
        value.domainName = asString(json["DomainName"], value.domainName);
        value.provisionServerIndex = asString(json["ProvisionServerIndex"], value.provisionServerIndex);
        value.targetServerIndex = asString(json["TargetServerIndex"], value.targetServerIndex);
        value.targetPublicIPAddr = asString(json["TargetPublicIPAddr"], value.targetPublicIPAddr);
        value.targetPrivateIPAddrs = asString(json["TargetPrivateIPAddrs"], value.targetPrivateIPAddrs);
        value.finishedDate = asString(json["FinishedDate"], value.finishedDate);
        value.failedReason = asString(json["FailedReason"], value.failedReason);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        return withAliases(value, {
            Sector: "sector",
            DomainName: "domainName",
            ProvisionServerIndex: "provisionServerIndex",
            TargetServerIndex: "targetServerIndex",
            TargetPublicIPAddr: "targetPublicIPAddr",
            TargetPrivateIPAddrs: "targetPrivateIPAddrs",
            FinishedDate: "finishedDate",
            FailedReason: "failedReason",
            CDate: "cDate",
            MDate: "mDate",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ServerDomainData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class ServerLogData {
    constructor(init = {}) {
        this.sector = "";
        this.serverIndex = "";
        this.serverTypes = "";
        this.name = "";
        this.isActive = false;
        this.isAllowed = false;
        this.privateIPAddrs = "";
        this.publicIPAddr = "";
        this.publicSubDomain = "";
        this.publicDomains = "";
        this.mainPort = 0;
        this.version = "";
        this.startedDate = "";
        this.stoppedDate = "";
        this.gor = 0;
        this.gorTotal = 0;
        this.cpu = 0;
        this.cpuTotal = 0;
        this.mem = 0;
        this.memFree = 0;
        this.memTotal = 0;
        this.hddFree = 0;
        this.hddTotal = 0;
        this.ses = 0;
        this.rtp = 0;
        this.rtpTotal = 0;
        this.vid = 0;
        this.vidTotal = 0;
        this.maxQueryTime = 0;
        this.maxInvokeTime = 0;
        this.maxHandler_time = 0;
        this.masterConnTimes = 0;
        this.masterRetryTimes = 0;
        this.dumps = 0;
        this.rooms = 0;
        this.attendees = 0;
        this.notes = "";
        this.cDate = "";
        this.mDate = "";
        this.index = "";
        this.instanceIndex = "";
        this.licenseInfo = "";
        this.lDate = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new ServerLogData();
        value.sector = asString(json["Sector"], value.sector);
        value.serverIndex = asString(json["ServerIndex"], value.serverIndex);
        value.serverTypes = asString(json["ServerTypes"], value.serverTypes);
        value.name = asString(json["Name"], value.name);
        value.isActive = asBoolean(json["IsActive"], value.isActive);
        value.isAllowed = asBoolean(json["IsAllowed"], value.isAllowed);
        value.privateIPAddrs = asString(json["PrivateIPAddrs"], value.privateIPAddrs);
        value.publicIPAddr = asString(json["PublicIPAddr"], value.publicIPAddr);
        value.publicSubDomain = asString(json["PublicSubDomain"], value.publicSubDomain);
        value.publicDomains = asString(json["PublicDomains"], value.publicDomains);
        value.mainPort = asNumber(json["MainPort"], value.mainPort);
        value.version = asString(json["Version"], value.version);
        value.startedDate = asString(json["StartedDate"], value.startedDate);
        value.stoppedDate = asString(json["StoppedDate"], value.stoppedDate);
        value.gor = asNumber(json["GOR"], value.gor);
        value.gorTotal = asNumber(json["GORTotal"], value.gorTotal);
        value.cpu = asNumber(json["CPU"], value.cpu);
        value.cpuTotal = asNumber(json["CPUTotal"], value.cpuTotal);
        value.mem = asNumber(json["Mem"], value.mem);
        value.memFree = asNumber(json["MemFree"], value.memFree);
        value.memTotal = asNumber(json["MemTotal"], value.memTotal);
        value.hddFree = asNumber(json["HDDFree"], value.hddFree);
        value.hddTotal = asNumber(json["HDDTotal"], value.hddTotal);
        value.ses = asNumber(json["SES"], value.ses);
        value.rtp = asNumber(json["RTP"], value.rtp);
        value.rtpTotal = asNumber(json["RTPTotal"], value.rtpTotal);
        value.vid = asNumber(json["VID"], value.vid);
        value.vidTotal = asNumber(json["VIDTotal"], value.vidTotal);
        value.maxQueryTime = asNumber(json["MaxQueryTime"], value.maxQueryTime);
        value.maxInvokeTime = asNumber(json["MaxInvokeTime"], value.maxInvokeTime);
        value.maxHandler_time = asNumber(json["MaxHandlerTime"], value.maxHandler_time);
        value.masterConnTimes = asNumber(json["MasterConnTimes"], value.masterConnTimes);
        value.masterRetryTimes = asNumber(json["MasterRetryTimes"], value.masterRetryTimes);
        value.dumps = asNumber(json["Dumps"], value.dumps);
        value.rooms = asNumber(json["Rooms"], value.rooms);
        value.attendees = asNumber(json["Attendees"], value.attendees);
        value.notes = asString(json["Notes"], value.notes);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.index = asString(json["Index"], value.index);
        value.instanceIndex = asString(json["InstanceIndex"], value.instanceIndex);
        value.licenseInfo = asString(json["LicenseInfo"], value.licenseInfo);
        value.lDate = asString(json["LDate"], value.lDate);
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => ServerLogData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SitesList {
    constructor(init = {}) {
        this.siteInfo = [];
        this.pagesData = new PagesData();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SitesList();
        value.siteInfo = SiteData.fromJsonList(json["SiteInfo"]);
        value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
        return withAliases(value, { SiteInfo: "siteInfo", PageInfo: "pagesData" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SitesList.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SiteData {
    constructor(init = {}) {
        this.sector = "";
        this.siteIndex = "";
        this.siteID = "";
        this.siteSecret = "";
        this.useBranding = false;
        this.name = "";
        this.rooms = 0;
        this.attendees = 0;
        this.limitRooms = 0;
        this.limitAttendees = 0;
        this.limitAccounts = 0;
        this.groupID = "";
        this.cDate = "";
        this.mDate = "";
        this.groupName = "";
        this.siteAdmin = new UserData();
        this.billingManagerName = "";
        this.billingManagerEmail = "";
        this.billingManagerPhone = "";
        this.isActive = false;
        this.lastLoginDate = "";
        this.accountCount = 0;
        this.pricingModel = "";
        this.limitMaxAttendees = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SiteData();
        value.sector = asString(json["Sector"], value.sector);
        value.siteIndex = asString(json["SiteIndex"], value.siteIndex);
        value.siteID = asString(json["SiteID"], value.siteID);
        value.siteSecret = asString(json["SiteSecret"], value.siteSecret);
        value.useBranding = asBoolean(json["UseBranding"], value.useBranding);
        value.name = asString(json["Name"], value.name);
        value.rooms = asNumber(json["Rooms"], value.rooms);
        value.attendees = asNumber(json["Attendees"], value.attendees);
        value.limitRooms = asNumber(json["LimitRooms"], value.limitRooms);
        value.limitAttendees = asNumber(json["LimitAttendees"], value.limitAttendees);
        value.limitAccounts = asNumber(json["LimitAccounts"], value.limitAccounts);
        value.groupID = asString(json["GroupID"], value.groupID);
        value.cDate = asString(json["CDate"], value.cDate);
        value.mDate = asString(json["MDate"], value.mDate);
        value.groupName = asString(json["GroupName"], value.groupName);
        value.siteAdmin = UserData.fromJson(json["SiteAdmin"] ?? {});
        value.billingManagerName = asString(json["BillingManagerName"], value.billingManagerName);
        value.billingManagerEmail = asString(json["BillingManagerEmail"], value.billingManagerEmail);
        value.billingManagerPhone = asString(json["BillingManagerPhone"], value.billingManagerPhone);
        value.isActive = asBoolean(json["IsActive"], value.isActive);
        value.lastLoginDate = asString(json["LastLoginDate"], value.lastLoginDate);
        value.accountCount = asNumber(json["AccountCount"], value.accountCount);
        value.pricingModel = asString(json["PricingModel"], value.pricingModel);
        value.limitMaxAttendees = asNumber(json["LimitMaxAttendees"], value.limitMaxAttendees);
        return withAliases(value, {
            Sector: "sector",
            SiteIndex: "siteIndex",
            SiteID: "siteID",
            SiteSecret: "siteSecret",
            UseBranding: "useBranding",
            Name: "name",
            Rooms: "rooms",
            Attendees: "attendees",
            LimitRooms: "limitRooms",
            LimitAttendees: "limitAttendees",
            LimitAccounts: "limitAccounts",
            GroupID: "groupID",
            CDate: "cDate",
            MDate: "mDate",
            GroupName: "groupName",
            SiteAdmin: "siteAdmin",
            BillingManagerName: "billingManagerName",
            BillingManagerEmail: "billingManagerEmail",
            BillingManagerPhone: "billingManagerPhone",
            IsActive: "isActive",
            LastLoginDate: "lastLoginDate",
            AccountCount: "accountCount",
            PricingModel: "pricingModel",
            LimitMaxAttendees: "limitMaxAttendees",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SiteData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SiteCount {
    constructor(init = {}) {
        this.rooms = 0;
        this.users = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SiteCount();
        value.rooms = asNumber(json["RoomCount"] ?? json["Rooms"], value.rooms);
        value.users = asNumber(json["UserCount"] ?? json["Users"], value.users);
        value.attendeeCount = asNumber(json["AttendeeCount"], value.attendeeCount ?? 0);
        value.roomCount = value.rooms;
        value.userCount = value.users;
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SiteCount.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class SiteAvailableData {
    constructor(init = {}) {
        this.userCount = 0;
        this.limitAccounts = 0;
        this.isAvailableCreateUser = false;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new SiteAvailableData();
        value.userCount = asNumber(json["UserCount"] ?? json["used"] ?? json["Used"], value.userCount);
        value.limitAccounts = asNumber(json["LimitAccounts"] ?? json["total"] ?? json["Total"], value.limitAccounts);
        value.isAvailableCreateUser = asBoolean(json["IsAvailableCreateUser"], value.isAvailableCreateUser);
        value.used = asNumber(json["used"] ?? json["Used"], value.userCount);
        value.total = asNumber(json["total"] ?? json["Total"], value.limitAccounts);
        value.available = asNumber(json["available"] ?? json["Available"], Math.max(0, value.limitAccounts - value.userCount));
        return value;
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => SiteAvailableData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class TimeZoneData {
    constructor(init = {}) {
        this.code = 0;
        this.countryCode = "";
        this.timeZone = "";
        this.comments = "";
        this.utcOffset = 0;
        this.utcDstOffset = 0;
        this.useDST = 0;
        this.notes = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new TimeZoneData();
        value.code = asNumber(json["Code"], value.code);
        value.countryCode = asString(json["CountryCode"], value.countryCode);
        value.timeZone = asString(json["TimeZone"], value.timeZone);
        value.comments = asString(json["Comments"], value.comments);
        value.utcOffset = asNumber(json["UTCOffset"], value.utcOffset);
        value.utcDstOffset = asNumber(json["UTCDSTOffset"], value.utcDstOffset);
        value.useDST = asNumber(json["UseDST"], value.useDST);
        value.notes = asString(json["Notes"], value.notes);
        return withAliases(value, { utcDSTOffset: "utcDstOffset" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => TimeZoneData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class UserListData {
    constructor(init = {}) {
        this.userList = [];
        this.pagesData = new PagesData();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = unwrapMain(jsonInput);
        const value = new UserListData();
        value.userList = UserData.fromJsonList(pickArray(jsonInput, "UserList", "userList", "users", "Users", "List", "list", "Array", "array"));
        value.pagesData = PagesData.fromJson(pick(json, "PageInfo", "pageInfo", "pagesData", "pages") ?? {});
        return withAliases(value, { UserList: "userList", PageInfo: "pagesData" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => UserListData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class UserData {
    constructor(init = {}) {
        this.groupID = "";
        this.siteIndex = "";
        this.siteID = "";
        this.siteName = "";
        this.userIndex = "";
        this.userID = "";
        this.password = "";
        this.isPasswordApplied = false;
        this.email = "";
        this.name = "";
        this.engName = "";
        this.nickName = "";
        this.isSNS = false;
        this.userType = "";
        this.state = "";
        this.monitoringColumn = "";
        this.loginServerIndex = "";
        this.lastLoginDate = "";
        this.lastLogoutDate = "";
        this.lastIPAddress = "";
        this.profileImageKey = "";
        this.info = "";
        this.cDate = "";
        this.mDate = "";
        this.profileImageURL = "";
        this.disableLogin = false;
        this.isSiteManager = false;
        this.isSiteHolder = false;
        this.isSystemManager = false;
        this.isSystemHolder = false;
        this.isManager = false;
        this.row = 0;
        this.isEmptyId = false;
        this.isEmptyName = false;
        this.isEmailTypeError = false;
        this.isEmptyEmail = false;
        this.isDuplicateId = false;
        this.isValid = false;
        this.deptCode = "";
        this.deptName = "";
        this.deptEngName = "";
        this.positionCode = "";
        this.positionName = "";
        this.positionEngName = "";
        this.dutyCode = "";
        this.dutyName = "";
        this.dutyEngName = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = unwrapMain(jsonInput);
        const value = new UserData();
        value.groupID = asString(pick(json, "GroupID", "groupID", "groupId", "group_id"), value.groupID);
        value.siteIndex = asString(pick(json, "SiteIndex", "siteIndex", "site_index"), value.siteIndex);
        value.siteID = asString(pick(json, "SiteID", "siteID", "siteId", "site_id"), value.siteID);
        value.siteName = asString(pick(json, "SiteName", "siteName", "site_name"), value.siteName);
        value.userIndex = asString(pick(json, "UserIndex", "userIndex", "user_index", "Index", "index"), value.userIndex);
        value.userID = asString(pick(json, "UserID", "userID", "userId", "user_id", "id"), value.userID);
        value.password = asString(pick(json, "Password", "password"), value.password);
        value.isPasswordApplied = asBoolean(pick(json, "IsPasswordApplied", "isPasswordApplied", "is_password_applied"), value.isPasswordApplied);
        value.email = asString(pick(json, "Email", "email"), value.email);
        value.name = asString(pick(json, "Name", "name"), value.name);
        value.engName = asString(pick(json, "EngName", "engName", "eng_name"), value.engName);
        value.nickName = asString(pick(json, "NickName", "nickName", "nickname", "nick_name"), value.nickName);
        value.isSNS = asBoolean(pick(json, "IsSNS", "isSNS", "isSns", "is_sns"), value.isSNS);
        value.userType = asString(pick(json, "UserType", "userType", "user_type"), value.userType);
        value.state = asString(pick(json, "State", "state"), value.state);
        value.monitoringColumn = asString(pick(json, "MonitoringColumn", "monitoringColumn", "monitoring_column"), value.monitoringColumn);
        value.loginServerIndex = asString(pick(json, "LoginServerIndex", "loginServerIndex", "login_server_index"), value.loginServerIndex);
        value.lastLoginDate = asString(pick(json, "LastLoginDate", "lastLoginDate", "last_login_date"), value.lastLoginDate);
        value.lastLogoutDate = asString(pick(json, "LastLogoutDate", "lastLogoutDate", "last_logout_date"), value.lastLogoutDate);
        value.lastIPAddress = asString(pick(json, "LastIPAddress", "lastIPAddress", "lastIpAddress", "last_ip_address"), value.lastIPAddress);
        value.profileImageKey = asString(pick(json, "ProfileImageKey", "profileImageKey", "profile_image_key"), value.profileImageKey);
        value.info = asString(pick(json, "Info", "info"), value.info);
        value.cDate = asString(pick(json, "CDate", "cDate", "c_date", "createdAt", "created_at"), value.cDate);
        value.mDate = asString(pick(json, "MDate", "MData", "mDate", "m_date", "updatedAt", "updated_at"), value.mDate);
        value.profileImageURL = asString(pick(json, "ProfileImageURL", "profileImageURL", "profileImageUrl", "profile_image_url"), value.profileImageURL);
        value.disableLogin = asBoolean(pick(json, "DisableLogin", "disableLogin", "disable_login"), value.disableLogin);
        value.isSiteManager = asBoolean(pick(json, "IsSiteManager", "isSiteManager", "is_siteManager", "is_site_manager"), value.isSiteManager);
        value.isSiteHolder = asBoolean(pick(json, "IsSiteHolder", "isSiteHolder", "is_siteHolder", "is_site_holder"), value.isSiteHolder);
        value.isSystemManager = asBoolean(pick(json, "IsSystemManager", "isSystemManager", "is_systemManager", "is_system_manager"), value.isSystemManager);
        value.isSystemHolder = asBoolean(pick(json, "IsSystemHolder", "isSystemHolder", "is_systemHolder", "is_system_holder"), value.isSystemHolder);
        value.isManager = asBoolean(pick(json, "IsManager", "isManager", "is_manager"), value.isManager);
        value.row = asNumber(pick(json, "Row", "row"), value.row);
        value.isEmptyId = asBoolean(pick(json, "IsEmptyId", "isEmptyId", "is_empty_id"), value.isEmptyId);
        value.isEmptyName = asBoolean(pick(json, "IsEmptyName", "isEmptyName", "is_empty_name"), value.isEmptyName);
        value.isEmailTypeError = asBoolean(pick(json, "IsEmailTypeError", "isEmailTypeError", "is_email_type_error"), value.isEmailTypeError);
        value.isEmptyEmail = asBoolean(pick(json, "IsEmptyEmail", "isEmptyEmail", "is_empty_email"), value.isEmptyEmail);
        value.isDuplicateId = asBoolean(pick(json, "IsDuplicateId", "isDuplicateId", "is_duplicate_id"), value.isDuplicateId);
        value.isValid = asBoolean(pick(json, "IsValid", "isValid", "is_valid"), value.isValid);
        value.deptCode = asString(pick(json, "DeptCode", "deptCode", "dept_code"), value.deptCode);
        value.deptName = asString(pick(json, "DeptName", "deptName", "dept_name"), value.deptName);
        value.deptEngName = asString(pick(json, "DeptEngName", "deptEngName", "dept_eng_name"), value.deptEngName);
        value.positionCode = asString(pick(json, "PositionCode", "positionCode", "position_code"), value.positionCode);
        value.positionName = asString(pick(json, "PositionName", "positionName", "position_name"), value.positionName);
        value.positionEngName = asString(pick(json, "PositionEngName", "positionEngName", "position_eng_name"), value.positionEngName);
        value.dutyCode = asString(pick(json, "DutyCode", "dutyCode", "duty_code"), value.dutyCode);
        value.dutyName = asString(pick(json, "DutyName", "dutyName", "duty_name"), value.dutyName);
        value.dutyEngName = asString(pick(json, "DutyEngName", "dutyEngName", "duty_eng_name"), value.dutyEngName);
        return withAliases(value, {
            GroupID: "groupID",
            group_id: "groupID",
            SiteIndex: "siteIndex",
            site_index: "siteIndex",
            SiteID: "siteID",
            site_id: "siteID",
            SiteName: "siteName",
            site_name: "siteName",
            UserIndex: "userIndex",
            user_index: "userIndex",
            UserID: "userID",
            user_id: "userID",
            Password: "password",
            IsPasswordApplied: "isPasswordApplied",
            is_password_applied: "isPasswordApplied",
            Email: "email",
            Name: "name",
            EngName: "engName",
            eng_name: "engName",
            NickName: "nickName",
            nick_name: "nickName",
            IsSNS: "isSNS",
            is_sns: "isSNS",
            UserType: "userType",
            user_type: "userType",
            State: "state",
            MonitoringColumn: "monitoringColumn",
            monitoring_column: "monitoringColumn",
            LoginServerIndex: "loginServerIndex",
            login_server_index: "loginServerIndex",
            LastLoginDate: "lastLoginDate",
            last_login_date: "lastLoginDate",
            LastLogoutDate: "lastLogoutDate",
            last_logout_date: "lastLogoutDate",
            LastIPAddress: "lastIPAddress",
            last_ip_address: "lastIPAddress",
            ProfileImageKey: "profileImageKey",
            profile_image_key: "profileImageKey",
            Info: "info",
            CDate: "cDate",
            c_date: "cDate",
            MDate: "mDate",
            m_date: "mDate",
            ProfileImageURL: "profileImageURL",
            profile_image_url: "profileImageURL",
            DisableLogin: "disableLogin",
            disable_login: "disableLogin",
            IsSiteManager: "isSiteManager",
            is_site_manager: "isSiteManager",
            IsSiteHolder: "isSiteHolder",
            is_site_holder: "isSiteHolder",
            IsSystemManager: "isSystemManager",
            is_system_manager: "isSystemManager",
            IsSystemHolder: "isSystemHolder",
            is_system_holder: "isSystemHolder",
            IsManager: "isManager",
            is_manager: "isManager",
            Row: "row",
            IsEmptyId: "isEmptyId",
            IsEmptyName: "isEmptyName",
            IsEmailTypeError: "isEmailTypeError",
            IsEmptyEmail: "isEmptyEmail",
            IsDuplicateId: "isDuplicateId",
            IsValid: "isValid",
            DeptCode: "deptCode",
            dept_code: "deptCode",
            DeptName: "deptName",
            dept_name: "deptName",
            DeptEngName: "deptEngName",
            dept_eng_name: "deptEngName",
            PositionCode: "positionCode",
            position_code: "positionCode",
            PositionName: "positionName",
            position_name: "positionName",
            PositionEngName: "positionEngName",
            position_eng_name: "positionEngName",
            DutyCode: "dutyCode",
            duty_code: "dutyCode",
            DutyName: "dutyName",
            duty_name: "dutyName",
            DutyEngName: "dutyEngName",
            duty_eng_name: "dutyEngName",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => UserData.fromJson(asRecord(json))) : [];
    }
    toJson() {
        return { ...this };
    }
}
export class OrgSyncFailure {
    constructor(init = {}) {
        this.data = null;
        this.reason = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OrgSyncFailure();
        value.data = pick(json, "data", "Data") ?? value.data;
        value.reason = asString(pick(json, "reason", "Reason"), value.reason);
        return withAliases(value, { Data: "data", Reason: "reason" });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncFailure.fromJson(json)) : [];
    }
}
export class OrgSyncEntityResult {
    constructor(init = {}) {
        this.totalCount = 0;
        this.successCount = 0;
        this.failureCount = 0;
        this.failures = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OrgSyncEntityResult();
        value.totalCount = asNumber(pick(json, "total_count", "totalCount", "TotalCount"), value.totalCount);
        value.successCount = asNumber(pick(json, "success_count", "successCount", "SuccessCount"), value.successCount);
        value.failureCount = asNumber(pick(json, "failure_count", "failureCount", "FailureCount"), value.failureCount);
        value.failures = OrgSyncFailure.fromJsonList(pick(json, "failures", "Failures") ?? []);
        return withAliases(value, {
            total_count: "totalCount",
            TotalCount: "totalCount",
            success_count: "successCount",
            SuccessCount: "successCount",
            failure_count: "failureCount",
            FailureCount: "failureCount",
            Failures: "failures",
        });
    }
}
export class OrgSyncResponse {
    constructor(init = {}) {
        this.departments = new OrgSyncEntityResult();
        this.positions = new OrgSyncEntityResult();
        this.duties = new OrgSyncEntityResult();
        this.users = new OrgSyncEntityResult();
        this.departmentUsers = new OrgSyncEntityResult();
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = unwrapMain(jsonInput);
        const value = new OrgSyncResponse();
        value.departments = OrgSyncEntityResult.fromJson(pick(json, "departments", "Departments") ?? {});
        value.positions = OrgSyncEntityResult.fromJson(pick(json, "positions", "Positions") ?? {});
        value.duties = OrgSyncEntityResult.fromJson(pick(json, "duties", "Duties") ?? {});
        value.users = OrgSyncEntityResult.fromJson(pick(json, "users", "Users") ?? {});
        value.departmentUsers = OrgSyncEntityResult.fromJson(pick(json, "department_users", "departmentUsers", "DepartmentUsers") ?? {});
        return withAliases(value, {
            Departments: "departments",
            Positions: "positions",
            Duties: "duties",
            Users: "users",
            department_users: "departmentUsers",
            DepartmentUsers: "departmentUsers",
        });
    }
}
export class OrgSyncDepartmentResponse {
    constructor(init = {}) {
        this.deptCode = "";
        this.parentDeptCode = "";
        this.name = "";
        this.engName = "";
        this.deptOrder = 0;
        this.depth = 0;
        this.path = "";
        this.description = "";
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OrgSyncDepartmentResponse();
        value.deptCode = asString(pick(json, "dept_code", "deptCode", "DeptCode"), value.deptCode);
        value.parentDeptCode = asString(pick(json, "parent_dept_code", "parentDeptCode", "ParentDeptCode"), value.parentDeptCode);
        value.name = asString(pick(json, "name", "Name"), value.name);
        value.engName = asString(pick(json, "eng_name", "engName", "EngName"), value.engName);
        value.deptOrder = asNumber(pick(json, "dept_order", "deptOrder", "DeptOrder"), value.deptOrder);
        value.depth = asNumber(pick(json, "depth", "Depth"), value.depth);
        value.path = asString(pick(json, "path", "Path"), value.path);
        value.description = asString(pick(json, "description", "Description"), value.description);
        return withAliases(value, {
            dept_code: "deptCode",
            DeptCode: "deptCode",
            parent_dept_code: "parentDeptCode",
            ParentDeptCode: "parentDeptCode",
            Name: "name",
            eng_name: "engName",
            EngName: "engName",
            dept_order: "deptOrder",
            DeptOrder: "deptOrder",
            Depth: "depth",
            Path: "path",
            Description: "description",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncDepartmentResponse.fromJson(json)) : [];
    }
}
export class OrgSyncPositionResponse {
    constructor(init = {}) {
        this.positionCode = "";
        this.name = "";
        this.engName = "";
        this.positionOrder = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OrgSyncPositionResponse();
        value.positionCode = asString(pick(json, "position_code", "positionCode", "PositionCode"), value.positionCode);
        value.name = asString(pick(json, "name", "Name"), value.name);
        value.engName = asString(pick(json, "eng_name", "engName", "EngName"), value.engName);
        value.positionOrder = asNumber(pick(json, "position_order", "positionOrder", "PositionOrder"), value.positionOrder);
        return withAliases(value, {
            position_code: "positionCode",
            PositionCode: "positionCode",
            Name: "name",
            eng_name: "engName",
            EngName: "engName",
            position_order: "positionOrder",
            PositionOrder: "positionOrder",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncPositionResponse.fromJson(json)) : [];
    }
}
export class OrgSyncDutyResponse {
    constructor(init = {}) {
        this.dutyCode = "";
        this.name = "";
        this.engName = "";
        this.dutyOrder = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OrgSyncDutyResponse();
        value.dutyCode = asString(pick(json, "duty_code", "dutyCode", "DutyCode"), value.dutyCode);
        value.name = asString(pick(json, "name", "Name"), value.name);
        value.engName = asString(pick(json, "eng_name", "engName", "EngName"), value.engName);
        value.dutyOrder = asNumber(pick(json, "duty_order", "dutyOrder", "DutyOrder"), value.dutyOrder);
        return withAliases(value, {
            duty_code: "dutyCode",
            DutyCode: "dutyCode",
            Name: "name",
            eng_name: "engName",
            EngName: "engName",
            duty_order: "dutyOrder",
            DutyOrder: "dutyOrder",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncDutyResponse.fromJson(json)) : [];
    }
}
export class OrgSyncMemberResponse {
    constructor(init = {}) {
        this.userID = "";
        this.name = "";
        this.engName = "";
        this.email = "";
        this.nickName = "";
        this.deptCode = "";
        this.deptName = "";
        this.positionCode = "";
        this.positionName = "";
        this.dutyCode = "";
        this.dutyName = "";
        this.userOrder = 0;
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OrgSyncMemberResponse();
        value.userID = asString(pick(json, "user_id", "userID", "userId", "UserID"), value.userID);
        value.name = asString(pick(json, "name", "Name"), value.name);
        value.engName = asString(pick(json, "eng_name", "engName", "EngName"), value.engName);
        value.email = asString(pick(json, "email", "Email"), value.email);
        value.nickName = asString(pick(json, "nickname", "nickName", "NickName"), value.nickName);
        value.deptCode = asString(pick(json, "dept_code", "deptCode", "DeptCode"), value.deptCode);
        value.deptName = asString(pick(json, "dept_name", "deptName", "DeptName"), value.deptName);
        value.positionCode = asString(pick(json, "position_code", "positionCode", "PositionCode"), value.positionCode);
        value.positionName = asString(pick(json, "position_name", "positionName", "PositionName"), value.positionName);
        value.dutyCode = asString(pick(json, "duty_code", "dutyCode", "DutyCode"), value.dutyCode);
        value.dutyName = asString(pick(json, "duty_name", "dutyName", "DutyName"), value.dutyName);
        value.userOrder = asNumber(pick(json, "user_order", "userOrder", "UserOrder"), value.userOrder);
        return withAliases(value, {
            user_id: "userID",
            UserID: "userID",
            Name: "name",
            eng_name: "engName",
            EngName: "engName",
            Email: "email",
            NickName: "nickName",
            DeptCode: "deptCode",
            dept_code: "deptCode",
            DeptName: "deptName",
            dept_name: "deptName",
            PositionCode: "positionCode",
            position_code: "positionCode",
            PositionName: "positionName",
            position_name: "positionName",
            DutyCode: "dutyCode",
            duty_code: "dutyCode",
            DutyName: "dutyName",
            duty_name: "dutyName",
            UserOrder: "userOrder",
            user_order: "userOrder",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncMemberResponse.fromJson(json)) : [];
    }
}
export class OrgSyncGetResponse {
    constructor(init = {}) {
        this.departments = [];
        this.positions = [];
        this.duties = [];
        this.members = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = unwrapMain(jsonInput);
        const value = new OrgSyncGetResponse();
        value.departments = OrgSyncDepartmentResponse.fromJsonList(pick(json, "departments", "Departments") ?? []);
        value.positions = OrgSyncPositionResponse.fromJsonList(pick(json, "positions", "Positions") ?? []);
        value.duties = OrgSyncDutyResponse.fromJsonList(pick(json, "duties", "Duties") ?? []);
        value.members = OrgSyncMemberResponse.fromJsonList(pick(json, "members", "Members") ?? []);
        return withAliases(value, {
            Departments: "departments",
            Positions: "positions",
            Duties: "duties",
            Members: "members",
        });
    }
}
export class OrgTreeNode {
    constructor(init = {}) {
        this.deptCode = "";
        this.parentDeptCode = "";
        this.name = "";
        this.engName = "";
        this.deptOrder = 0;
        this.depth = 0;
        this.path = "";
        this.description = "";
        this.members = [];
        this.children = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = asRecord(jsonInput);
        const value = new OrgTreeNode();
        value.deptCode = asString(pick(json, "dept_code", "deptCode", "DeptCode"), value.deptCode);
        value.parentDeptCode = asString(pick(json, "parent_dept_code", "parentDeptCode", "ParentDeptCode"), value.parentDeptCode);
        value.name = asString(pick(json, "name", "Name"), value.name);
        value.engName = asString(pick(json, "eng_name", "engName", "EngName"), value.engName);
        value.deptOrder = asNumber(pick(json, "dept_order", "deptOrder", "DeptOrder"), value.deptOrder);
        value.depth = asNumber(pick(json, "depth", "Depth"), value.depth);
        value.path = asString(pick(json, "path", "Path"), value.path);
        value.description = asString(pick(json, "description", "Description"), value.description);
        value.members = OrgSyncMemberResponse.fromJsonList(pick(json, "members", "Members") ?? []);
        value.children = OrgTreeNode.fromJsonList(pick(json, "children", "Children") ?? []);
        return withAliases(value, {
            dept_code: "deptCode",
            DeptCode: "deptCode",
            parent_dept_code: "parentDeptCode",
            ParentDeptCode: "parentDeptCode",
            Name: "name",
            eng_name: "engName",
            EngName: "engName",
            dept_order: "deptOrder",
            DeptOrder: "deptOrder",
            Depth: "depth",
            Path: "path",
            Description: "description",
            Members: "members",
            Children: "children",
        });
    }
    static fromJsonList(jsonList) {
        return Array.isArray(jsonList) ? jsonList.map((json) => OrgTreeNode.fromJson(json)) : [];
    }
}
export class OrgTreeResponse {
    constructor(init = {}) {
        this.tree = [];
        this.positions = [];
        this.duties = [];
        Object.assign(this, init);
    }
    static fromJson(jsonInput = {}) {
        const json = unwrapMain(jsonInput);
        const value = new OrgTreeResponse();
        value.tree = OrgTreeNode.fromJsonList(pick(json, "tree", "Tree") ?? []);
        value.positions = OrgSyncPositionResponse.fromJsonList(pick(json, "positions", "Positions") ?? []);
        value.duties = OrgSyncDutyResponse.fromJsonList(pick(json, "duties", "Duties") ?? []);
        return withAliases(value, {
            Tree: "tree",
            Positions: "positions",
            Duties: "duties",
        });
    }
}
