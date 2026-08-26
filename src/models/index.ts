export type AnyRecord = Record<string, any>;

function asRecord(value: unknown): AnyRecord {
  return value && typeof value === "object" ? (value as AnyRecord) : {};
}

function asString(value: unknown, fallback = ""): string {
  return value == null ? fallback : String(value);
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : Number(value ?? fallback) || fallback;
}

function asBoolean(value: unknown, fallback = false): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function asStringArray(value: unknown, fallback: string[] = []): string[] {
  return Array.isArray(value) ? value.map((item) => asString(item)) : fallback;
}

function asNumberOrNull(value: unknown, fallback: number | null = null): number | null {
  if (value == null) return fallback;
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function withAliases<T extends object>(value: T, aliases: Record<string, string>): T {
  const record = value as AnyRecord;
  Object.entries(aliases).forEach(([alias, source]) => {
    record[alias] = record[source];
  });
  return value;
}

function unwrapMain(value: unknown): AnyRecord {
  const record = asRecord(value);
  return asRecord(record["Main"] ?? value);
}

function pick(json: AnyRecord, ...keys: string[]): unknown {
  for (const key of keys) {
    if (json[key] !== undefined) return json[key];
  }
  return undefined;
}

function pickArray(jsonInput: unknown, ...keys: string[]): unknown[] {
  if (Array.isArray(jsonInput)) return jsonInput;
  const record = asRecord(jsonInput);
  const source = record["Main"] ?? jsonInput;
  if (Array.isArray(source)) return source;
  const json = asRecord(source);
  const value = pick(json, ...keys);
  return Array.isArray(value) ? value : [];
}


export class ConcurrentInfo {
  rooms: number = 0;
  attendees: number = 0;

  constructor(init: Partial<ConcurrentInfo> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ConcurrentInfo {
    const json = asRecord(jsonInput);
    const value = new ConcurrentInfo();
    value.rooms = asNumber(json["Rooms"], value.rooms);
    value.attendees = asNumber(json["Attendees"], value.attendees);
    return withAliases(value, { Rooms: "rooms", Attendees: "attendees" });
  }

  static fromJsonList(jsonList: unknown): ConcurrentInfo[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ConcurrentInfo.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ClientTokenData {
  groupID: string = "";
  siteIndex: string = "";
  tokenID: string = "";
  token: string = "";
  serverIndex: string = "";
  ipAddr: string = "";
  expiryDate: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<ClientTokenData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ClientTokenData {
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

  static fromJsonList(jsonList: unknown): ClientTokenData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ClientTokenData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class LoginResult {
  tokenID: string = "";
  accessToken: string = "";
  expiryDate: number = 0;
  tokenType: string = "";
  isSiteManager: boolean = false;
  isSiteHolder: boolean = false;
  isSystemHolder: boolean = false;
  isSystemManager: boolean = false;
  supportFileFormats: string[] = [];
  siteID: string = "";
  domainURL: string = "";

  constructor(init: Partial<LoginResult> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): LoginResult {
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

  static fromJsonList(jsonList: unknown): LoginResult[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => LoginResult.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}

export class TwoFactorRequiredResult {
  requires2FA: true = true;
  twoFactorToken: string = "";
  emailMasked: string = "";
  expiresIn: number = 0;
  resendAfter: number = 0;

  constructor(init: Partial<TwoFactorRequiredResult> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): TwoFactorRequiredResult {
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

  toJson(): AnyRecord {
    return { ...this };
  }
}

export class TwoFactorCodeMismatchResult {
  codeMismatch: true = true;
  attemptsLeft: number = 0;

  constructor(init: Partial<TwoFactorCodeMismatchResult> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): TwoFactorCodeMismatchResult {
    const json = asRecord(jsonInput);
    const value = new TwoFactorCodeMismatchResult();
    value.attemptsLeft = asNumber(json["attempts_left"] ?? json["attemptsLeft"] ?? json["AttemptsLeft"], value.attemptsLeft);
    return withAliases(value, {
      attempts_left: "attemptsLeft",
      AttemptsLeft: "attemptsLeft",
    });
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}

export class TwoFactorExpiredResult {
  expired: true = true;

  constructor(init: Partial<TwoFactorExpiredResult> = {}) {
    Object.assign(this, init);
  }

  static fromJson(): TwoFactorExpiredResult {
    return new TwoFactorExpiredResult();
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}

export class TwoFactorResendResult {
  expiresIn: number = 0;
  resendAfter: number = 0;

  constructor(init: Partial<TwoFactorResendResult> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): TwoFactorResendResult {
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

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ContractData {
  groupID: string = "";
  siteIndex: string = "";
  contractNo: number = 0;
  hosts: number = 0;
  limitRooms: number = 0;
  limitAttendees: number = 0;
  limitAccounts: number = 0;
  state: string = "";
  duration: number = 0;
  contractor: string = "";
  contractInfo: string = "";
  currency: string = "";
  paymentAmount: number = 0;
  isDisplay: boolean = false;
  startDate: string = "";
  endDate: string = "";
  pausedDate: string = "";
  resumeDate: string = "";
  cDate: string = "";
  mDate: string = "";
  newHosts: number = 0;
  newLimitRooms: number = 0;
  newLimitAttendees: number = 0;
  newLimitAccounts: number = 0;
  newState: string = "";
  newDuration: number = 0;
  newContractor: string = "";
  newContractInfo: string = "";
  newCurrency: string = "";
  newPaymentAmount: number = 0;
  newIsDisplay: boolean = false;
  newStartDate: string = "";
  newEndDate: string = "";
  newPausedDate: string = "";
  newResumeDate: string = "";
  index: string = "";
  lDate: string = "";
  changeNotes: string = "";
  userID: string = "";
  userName: string = "";
  userIndex: string = "";
  limitMaxAttendees: number = 0;
  addedRooms: number = 0;
  addedAttendees: number = 0;
  addedMaxAttendees: number = 0;
  addedAccounts: number = 0;
  newAddedRooms: number = 0;
  newAddedAttendees: number = 0;
  newAddedMaxAttendees: number = 0;
  newAddedAccounts: number = 0;

  constructor(init: Partial<ContractData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ContractData {
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

  static fromJsonList(jsonList: unknown): ContractData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ContractData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ContractListData {
  contractList: ContractData[] = [];

  constructor(init: Partial<ContractListData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ContractListData {
    const json = asRecord(jsonInput);
    const value = new ContractListData();
    value.contractList = ContractData.fromJsonList(json["ContractList"]);
    return value;
  }

  static fromJsonList(jsonList: unknown): ContractListData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ContractListData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ContractLogData {
  groupID: string = "";
  siteIndex: string = "";
  contractNo: string = "";
  hosts: number = 0;
  limitRooms: number = 0;
  limitAttendees: number = 0;
  limitMaxAttendees: number = 0;
  limitAccounts: number = 0;
  addedRooms: number = 0;
  addedAttendees: number = 0;
  addedMaxAttendees: number = 0;
  addedAccounts: number = 0;
  state: number = 0;
  duration: number = 0;
  startDate: string = "";
  endDate: string = "";
  pausedDate: string = "";
  resumeDate: string = "";
  contractor: string = "";
  contractInfo: string = "";
  currency: string = "";
  paymentAmount: number = 0;
  isDisplay: boolean = false;
  newHosts: number = 0;
  newLimitRooms: number = 0;
  newLimitAttendees: number = 0;
  newLimitMaxAttendees: number = 0;
  newLimitAccounts: number = 0;
  newAddedRooms: number = 0;
  newAddedAttendees: number = 0;
  newAddedMaxAttendees: number = 0;
  newAddedAccounts: number = 0;
  newState: number = 0;
  newDuration: number = 0;
  newStartDate: string = "";
  newEndDate: string = "";
  newPausedDate: string = "";
  newResumeDate: string = "";
  newContractor: string = "";
  newContractInfo: string = "";
  newCurrency: string = "";
  newPaymentAmount: number = 0;
  newIsDisplay: boolean = false;
  index: string = "";
  userID: string = "";
  userIndex: string = "";
  userName: string = "";
  lDate: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<ContractLogData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ContractLogData {
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

  static fromJsonList(jsonList: unknown): ContractLogData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ContractLogData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class GroupData {
  groupID: string = "";
  name: string = "";
  rooms: number = 0;
  attendees: number = 0;
  notes: string = "";
  cDate: string = "";
  mDate: string = "";
  mapNameByLang: Record<string, any> = {};

  constructor(init: Partial<GroupData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): GroupData {
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

  static fromJsonList(jsonList: unknown): GroupData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => GroupData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class NoteData {
  groupID: string = "";
  siteIndex: string = "";
  userID: string = "";
  roomCode: string = "";
  distType: number = 0;
  targetGroup: number = 0;
  targetIDs: string = "";
  noteID: string = "";
  orgNoteID: string = "";
  srcNoteID: string = "";
  title: string = "";
  firstPageNo: number = 0;
  pageNum: number = 0;
  pageIDs: string = "";
  pagesInfo: string = "";
  annotationInfo: string = "";
  fileSize: number = 0;
  fileHash: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<NoteData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): NoteData {
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

  static fromJsonList(jsonList: unknown): NoteData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => NoteData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class AttachNoteInfo {
  title: string = "";
  noteID: string = "";
  userID: string = "";
  pageInfo: Record<string, any> = {};

  constructor(init: Partial<AttachNoteInfo> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): AttachNoteInfo {
    const json = asRecord(jsonInput);
    const value = new AttachNoteInfo();
    value.title = asString(json["Title"], value.title);
    value.noteID = asString(json["NoteID"], value.noteID);
    value.userID = asString(json["UserID"], value.userID);
    value.pageInfo = json["PageInfo"] ?? value.pageInfo;
    return value;
  }

  static fromJsonList(jsonList: unknown): AttachNoteInfo[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => AttachNoteInfo.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class AddFile {
  attachFile: string[] = [];

  constructor(init: Partial<AddFile> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): AddFile {
    const json = asRecord(jsonInput);
    const value = new AddFile();
    value.attachFile = Array.isArray(json["AttachFile"]) ? json["AttachFile"] : value.attachFile;
    return value;
  }

  static fromJsonList(jsonList: unknown): AddFile[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => AddFile.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RemoveFile {
  removeFile: string[] = [];

  constructor(init: Partial<RemoveFile> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RemoveFile {
    const json = asRecord(jsonInput);
    const value = new RemoveFile();
    value.removeFile = Array.isArray(json["RemoveFile"]) ? json["RemoveFile"] : value.removeFile;
    return value;
  }

  static fromJsonList(jsonList: unknown): RemoveFile[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => RemoveFile.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class NoticeData {
  groupID: string = "";
  siteIndex: string = "";
  userID: string = "";
  userIndex: string = "";
  userName: string = "";
  category: number = 0;
  title: string = "";
  noticeIndex: string = "";
  startDate: string = "";
  endDate: string = "";
  target: string = "";
  contents: any = undefined;
  mDate: string = "";
  cDate: string = "";
  isPinned: boolean = false;
  isBanner: boolean = false;
  isStopped: boolean = false;
  fileList: Record<string, string>[] = [];
  viewNum: number = 0;
  existFile: boolean = false;

  constructor(init: Partial<NoticeData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): NoticeData {
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

  static fromJsonList(jsonList: unknown): NoticeData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => NoticeData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class NoticeList {
  noticeList: NoticeData[] = [];
  pagesData: PagesData = new PagesData();

  constructor(init: Partial<NoticeList> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): NoticeList {
    const json = asRecord(jsonInput);
    const value = new NoticeList();
    value.noticeList = NoticeData.fromJsonList(json["NoticeList"]);
    value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
    return withAliases(value, { NoticeList: "noticeList", PageInfo: "pagesData" });
  }

  static fromJsonList(jsonList: unknown): NoticeList[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => NoticeList.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class NoticeFileData {
  noticeIndex: string = "";
  fileIndex: string = "";
  fileKey: string = "";
  fileUrl: string = "";
  fileName: string = "";
  files: FileData[] = [];
  fileSize: number = 0;

  constructor(init: Partial<NoticeFileData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): NoticeFileData {
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

  static fromJsonList(jsonList: unknown): NoticeFileData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => NoticeFileData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class FileData {
  fileName: string = "";
  fileBytes: BlobPart = new Blob([]);
  contentType: string = "";
  fileSize: number = 0;

  constructor(init: Partial<FileData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): FileData {
    const json = asRecord(jsonInput);
    const value = new FileData();
    value.fileName = asString(json["FileName"], value.fileName);
    value.fileBytes = json["FileBytes"] instanceof Blob ? json["FileBytes"] : value.fileBytes;
    value.contentType = asString(json["ContentType"], value.contentType);
    value.fileSize = asNumber(json["FileSize"], value.fileSize);
    return value;
  }

  static fromJsonList(jsonList: unknown): FileData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => FileData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class CommonOption {
  name: string = "";
  item: string = "";
  scope: number = 0;
  valueType: number = 0;
  value: string = "";
  defaultValue: string = "";
  dispName: string = "";
  itemOrder: number = 0;
  bytesValue: BlobPart = new Blob([]);
  notes: string = "";
  cDate: string = "";
  mDate: string = "";
  mapDispNameByLang: any = undefined;
  mapValueByLang: any = undefined;

  constructor(init: Partial<CommonOption> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): CommonOption {
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

  static fromJsonList(jsonList: unknown): CommonOption[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => CommonOption.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class OptionInfo {
  commonOption: CommonOption = new CommonOption();
  classOption: number = 0;
  sectors: string = "";
  groupID: string = "";
  policy: string = "";
  siteIndex: string = "";
  roomCode: string = "";
  inherit: string = "";
  selected: string = "";

  constructor(init: Partial<OptionInfo> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OptionInfo {
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
    const record = value as AnyRecord;
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

  static fromJsonList(jsonList: unknown): OptionInfo[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OptionInfo.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class DB {
  version: string = "";
  keepingPeriod: any = undefined;

  constructor(init: Partial<DB> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): DB {
    const json = asRecord(jsonInput);
    const value = new DB();
    value.version = asString(json["Version"], value.version);
    value.keepingPeriod = json["KeepingPeriod"] ?? value.keepingPeriod;
    return value;
  }

  static fromJsonList(jsonList: unknown): DB[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => DB.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class Room {
  stat: any = undefined;
  option: any = undefined;

  constructor(init: Partial<Room> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): Room {
    const json = asRecord(jsonInput);
    const value = new Room();
    value.stat = json["Stat"] ?? value.stat;
    value.option = json["Option"] ?? value.option;
    return value;
  }

  static fromJsonList(jsonList: unknown): Room[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => Room.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class User {
  types: OptionItems = new OptionItems();
  state: OptionItems = new OptionItems();
  passwordComplexity: OptionItems = new OptionItems();

  constructor(init: Partial<User> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): User {
    const json = asRecord(jsonInput);
    const value = new User();
    value.types = OptionItems.fromJson(json["Types"] ?? {});
    value.state = OptionItems.fromJson(json["State"] ?? {});
    value.passwordComplexity = OptionItems.fromJson(json["PasswordComplexity"] ?? {});
    return value;
  }

  static fromJsonList(jsonList: unknown): User[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => User.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class MailConfig {
  type: string = "";
  sender: string = "";
  senderName: string = "";

  constructor(init: Partial<MailConfig> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): MailConfig {
    const json = asRecord(jsonInput);
    const value = new MailConfig();
    value.type = asString(json["Type"], value.type);
    value.sender = asString(json["Sender"], value.sender);
    value.senderName = asString(json["SenderName"], value.senderName);
    return withAliases(value, { Type: "type", Sender: "sender", SenderName: "senderName" });
  }

  static fromJsonList(jsonList: unknown): MailConfig[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => MailConfig.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SendMail {
  contents: OptionItems = new OptionItems();
  title: OptionItems = new OptionItems();
  config: MailConfig = new MailConfig();

  constructor(init: Partial<SendMail> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SendMail {
    const json = asRecord(jsonInput);
    const value = new SendMail();
    value.contents = OptionItems.fromJson(json["Contents"] ?? {});
    value.title = OptionItems.fromJson(json["Title"] ?? {});
    value.config = MailConfig.fromJson(json["Config"] ?? {});
    return value;
  }

  static fromJsonList(jsonList: unknown): SendMail[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SendMail.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class OptionItems {
  main: OptionInfo = new OptionInfo();
  array: OptionInfo[] = [];
  map: Record<string, any> = {};

  constructor(init: Partial<OptionItems> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OptionItems {
    const json = asRecord(jsonInput);
    const value = new OptionItems();
    value.main = OptionInfo.fromJson(json["Main"] ?? {});
    value.array = OptionInfo.fromJsonList(json["Array"]);
    value.map = json["Map"] ?? value.map;
    return withAliases(value, { Main: "main", Array: "array", Map: "map" });
  }

  static fromJsonList(jsonList: unknown): OptionItems[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OptionItems.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class BaseOptionEnvData {
  mapBaseOption: Record<string, any> = {};

  constructor(init: Partial<BaseOptionEnvData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): BaseOptionEnvData {
    const json = asRecord(jsonInput);
    const value = new BaseOptionEnvData();
    value.mapBaseOption = json["data"] ?? value.mapBaseOption;
    return value;
  }

  static fromJsonList(jsonList: unknown): BaseOptionEnvData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => BaseOptionEnvData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class GroupOptionEnvData {
  mapGroupOption: Record<string, any> = {};

  constructor(init: Partial<GroupOptionEnvData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): GroupOptionEnvData {
    const json = asRecord(jsonInput);
    const value = new GroupOptionEnvData();
    value.mapGroupOption = json["data"] ?? value.mapGroupOption;
    return value;
  }

  static fromJsonList(jsonList: unknown): GroupOptionEnvData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => GroupOptionEnvData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class PolicyOptionEnvData {
  mapPolicyOption: Record<string, any> = {};

  constructor(init: Partial<PolicyOptionEnvData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): PolicyOptionEnvData {
    const json = asRecord(jsonInput);
    const value = new PolicyOptionEnvData();
    value.mapPolicyOption = json["data"] ?? value.mapPolicyOption;
    return value;
  }

  static fromJsonList(jsonList: unknown): PolicyOptionEnvData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => PolicyOptionEnvData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SiteOptionInfoMap {
  optionInfo: Record<string, any> = {};

  constructor(init: Partial<SiteOptionInfoMap> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SiteOptionInfoMap {
    const json = asRecord(jsonInput);
    const value = new SiteOptionInfoMap();
    value.optionInfo = json["OptionInfo"] ?? value.optionInfo;
    return value;
  }

  static fromJsonList(jsonList: unknown): SiteOptionInfoMap[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SiteOptionInfoMap.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class BlockListData {
  globals: OptionInfo = new OptionInfo();
  customs: OptionInfo = new OptionInfo();
  exceptions: OptionInfo = new OptionInfo();
  maskText: OptionInfo = new OptionInfo();
  scope: Scope = new Scope();

  constructor(init: Partial<BlockListData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): BlockListData {
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

  static fromJsonList(jsonList: unknown): BlockListData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => BlockListData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class Scope {
  chat: OptionInfo = new OptionInfo();
  nickname: OptionInfo = new OptionInfo();
  titleAgenda: OptionInfo = new OptionInfo();
  fileName: OptionInfo = new OptionInfo();

  constructor(init: Partial<Scope> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): Scope {
    const json = asRecord(jsonInput);
    const value = new Scope();
    value.chat = OptionInfo.fromJson(unwrapMain(json["Chat"]));
    value.nickname = OptionInfo.fromJson(unwrapMain(json["Nickname"]));
    value.titleAgenda = OptionInfo.fromJson(unwrapMain(json["TitleAgenda"]));
    value.fileName = OptionInfo.fromJson(unwrapMain(json["FileName"]));
    return value;
  }

  static fromJsonList(jsonList: unknown): Scope[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => Scope.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class PageLists {
  PageList: any = undefined;

  constructor(init: Partial<PageLists> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): PageLists {
    const json = asRecord(jsonInput);
    const value = new PageLists();
    value.PageList = json["PageList"] ?? value.PageList;
    return value;
  }

  static fromJsonList(jsonList: unknown): PageLists[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => PageLists.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class PageData {
  groupID: string = "";
  siteIndex: string = "";
  userID: string = "";
  roomCode: string = "";
  pageID: string = "";
  orgNoteID: string = "";
  srcPageID: string = "";
  type: number = 0;
  title: string = "";
  width: number = 0;
  height: number = 0;
  imageFormat: string = "";
  thumbData: BlobPart = new Blob([]);
  imageData: BlobPart = new Blob([]);
  imageHash: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<PageData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): PageData {
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

  static fromJsonList(jsonList: unknown): PageData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => PageData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class PagesData {
  currentPageNo: number = 0;
  totalPageNo: number = 0;
  totalRowCount: number = 0;
  pagePerRow: number = 0;

  constructor(init: Partial<PagesData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): PagesData {
    const json = asRecord(jsonInput);
    const value = new PagesData();
    value.currentPageNo = asNumber(json["currentPageNo"], value.currentPageNo);
    value.totalPageNo = asNumber(json["totalPageNo"], value.totalPageNo);
    value.totalRowCount = asNumber(json["totalRowCount"], value.totalRowCount);
    value.pagePerRow = asNumber(json["pagePerRow"], value.pagePerRow);
    return value;
  }

  static fromJsonList(jsonList: unknown): PagesData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => PagesData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class PagesLists {
  PagesList: any = undefined;

  constructor(init: Partial<PagesLists> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): PagesLists {
    const json = asRecord(jsonInput);
    const value = new PagesLists();
    value.PagesList = json["PageList"] ?? value.PagesList;
    return value;
  }

  static fromJsonList(jsonList: unknown): PagesLists[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => PagesLists.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ProvisionServerData {
  provisionServerIndex: string = "";
  sector: string = "";
  serverIndex: string = "";
  serverTypes: string = "";
  privateIPAddrs: string = "";
  publicIPAddr: string = "";
  publicDomain: string = "";
  version: string = "";
  state: number = 0;
  failedReason: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<ProvisionServerData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ProvisionServerData {
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

  static fromJsonList(jsonList: unknown): ProvisionServerData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ProvisionServerData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomData {
  groupId: string = "";
  siteIndex: string = "";
  userIndex: string = "";
  userId: string = "";
  roomId: string = "";
  roomCode: string = "";
  policy: string = "";
  title: string = "";
  timeZone: string = "";
  startedDate: string = "";
  finishedDate: string = "";
  isLocked: boolean = false;
  isPublic: boolean = false;
  maxUsers: number = 0;
  plannedDate: string = "";
  roomDuration: number = 0;
  isRefsDone: number = 0;
  isDeleted: boolean = false;
  serverSector: string = "";
  serverIndex: string = "";
  password: string = "";
  agenda: string = "";
  admissionDate: string = "";
  endDate: string = "";
  noteIds: string[] = [];
  pageIds: string[] = [];
  cDate: string = "";
  mDate: string = "";
  creator: string = "";
  attendeesCount: number = 0;
  profileImageURL: string = "";
  joinedAttendees: RoomAttendeeData[] = [];
  isManager: boolean = false;
  isSubManager: boolean = false;
  offset: number = 0;
  sharedNoteInfo: any = undefined;
  distNoteInfo: any = undefined;
  personalNoteInfo: any = undefined;
  webUploadNoteInfo: any[] = [];
  pageInfo: any = undefined;
  pageList: any = undefined;
  reactionList: any = undefined;
  pageInfoList: any[] = [];
  instanceIndex: string = "";
  optionsInfo: string = "";

  constructor(init: Partial<RoomData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomData {
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

  static fromJsonList(jsonList: unknown): RoomData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => RoomData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ClassRoomInfo {
  isJoinAvailable: boolean = false;
  siteIndex: string = "";
  siteID: string = "";
  creatorID: string = "";
  isWaitingRoom: boolean = false;
  roomTitle: string = "";
  roomCode: string = "";
  attendeeType: string = "";
  isTID: boolean = false;
  userID: string = "";
  attdID: string = "";
  attdName: string = "";
  attdPassword: string = "";
  isAdmin: boolean = false;
  inviterID: string = "";
  roomInfo: RoomData | null = null;
  roomOptionList: OptionInfo[] = [];
  profileImageURL: string = "";
  expiredDate: string = "";
  classRoomData: string | null = null;
  isAvailableGhostMode: boolean = false;

  constructor(init: Partial<ClassRoomInfo> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ClassRoomInfo {
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

  static fromJsonList(jsonList: unknown): ClassRoomInfo[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ClassRoomInfo.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomPolicyData {
  selectedPolicy: string = "";
  roomPoliciesList: OptionInfo[] = [];

  constructor(init: Partial<RoomPolicyData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomPolicyData {
    const json = asRecord(jsonInput);
    const value = new RoomPolicyData();
    value.selectedPolicy = asString(json["SelectedPolicy"], value.selectedPolicy);
    value.roomPoliciesList = OptionInfo.fromJsonList(json["RoomPoliciesList"]);
    return value;
  }

  static fromJsonList(jsonList: unknown): RoomPolicyData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => RoomPolicyData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class CreateRoomData {
  roomData: RoomData = new RoomData();
  cDate: string = "";
  mDate: string = "";
  joinRoomURL: string = "";
  roomOption: OptionInfo[] = [];
  attendees: RoomAttendees[] = [];

  constructor(init: Partial<CreateRoomData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): CreateRoomData {
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

  static fromJsonList(jsonList: unknown): CreateRoomData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => CreateRoomData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class HistoryRoomData {
  roomDataList: RoomData[] = [];
  pagesData: PagesData = new PagesData();

  constructor(init: Partial<HistoryRoomData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): HistoryRoomData {
    const json = asRecord(jsonInput);
    const value = new HistoryRoomData();
    value.roomDataList = RoomData.fromJsonList(json["RoomLogInfo"]);
    value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
    return value;
  }

  static fromJsonList(jsonList: unknown): HistoryRoomData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => HistoryRoomData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ScheduleRoomData {
  roomDataList: RoomData[] = [];
  pagesData: PagesData = new PagesData();
  onlyInvited: boolean = false;
  onlyPermanent: boolean = false;

  constructor(init: Partial<ScheduleRoomData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ScheduleRoomData {
    const json = asRecord(jsonInput);
    const value = new ScheduleRoomData();
    value.roomDataList = RoomData.fromJsonList(json["RoomInfo"]);
    value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
    value.onlyInvited = asBoolean(json["OnlyInvited"], value.onlyInvited);
    value.onlyPermanent = asBoolean(json["OnlyPermanent"], value.onlyPermanent);
    return value;
  }

  static fromJsonList(jsonList: unknown): ScheduleRoomData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ScheduleRoomData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomAttendeeData {
  groupID: string = "";
  siteIndex: string = "";
  roomCode: string = "";
  attdID: string = "";
  isManager: boolean = false;
  isSubManager: boolean = false;
  userType: string = "";
  userClientOS: string = "";
  userClientType: string = "";
  userClientDetail: string = "";
  email: string = "";
  name: string = "";
  rights: string = "";
  exitedReason: number = 0;
  attendedDuration: number = 0;
  userIndex: string = "";
  userID: string = "";
  inviterID: string = "";
  nickName: string = "";
  serverSector: string = "";
  serverIndex: string = "";
  attendedDate: string = "";
  exitedDate: string = "";
  iPAddr: string = "";
  cDate: string = "";
  mDate: string = "";
  noteIds: string[] = [];
  pageIds: string[] = [];
  notesInfo: string = "";
  annotationsInfo: string = "";
  noteList: any = undefined;
  pageInfo: any = undefined;
  pageList: any = undefined;
  pageInfoList: any[] = [];
  state: string = "";

  constructor(init: Partial<RoomAttendeeData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomAttendeeData {
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

  static fromJsonList(jsonList: unknown): RoomAttendeeData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => RoomAttendeeData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomAttendees {
  userID: string = "";
  name: string = "";
  engName: string = "";
  email: string = "";
  attendeeURL: string = "";
  userType: string = "";
  userIndex: string = "";
  state: string = "";
  isManager: boolean = false;
  deptCode: string = "";
  deptName: string = "";
  deptEngName: string = "";
  positionCode: string = "";
  positionName: string = "";
  positionEngName: string = "";
  dutyCode: string = "";
  dutyName: string = "";
  dutyEngName: string = "";

  constructor(init: Partial<RoomAttendees> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomAttendees {
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

  static fromJsonList(jsonList: unknown): RoomAttendees[] {
    return pickArray(jsonList, "RoomAttendees", "roomAttendees", "Attendees", "attendees", "AttendeeList", "attendeeList", "List", "list", "Array", "array")
      .map((json) => RoomAttendees.fromJson(json));
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomAttendeeLogData {
  groupID: string = "";
  siteIndex: string = "";
  userIndex: string = "";
  userID: string = "";
  roomCode: string = "";
  attdID: string = "";
  inviterID: string = "";
  isManager: boolean = false;
  isSubManager: boolean = false;
  userType: number = 0;
  clientVersion: string = "";
  clientOS: string = "";
  clientType: number = 0;
  clientDetail: string = "";
  email: string = "";
  name: string = "";
  engName: string = "";
  nickName: string = "";
  rights: string = "";
  noteIDs: string = "";
  pageIDs: string = "";
  notesInfo: string = "";
  annotationsInfo: string = "";
  invitedDate: string = "";
  attendedDate: string = "";
  attendedDuration: number = 0;
  exitedDate: string = "";
  exitedReason: number = 0;
  ipAddr: string = "";
  byIPAddr: string = "";
  cDate: string = "";
  mDate: string = "";
  index: string = "";
  serverSector: string = "";
  serverIndex: string = "";
  instanceIndex: string = "";
  lDate: string = "";
  deptCode: string = "";
  deptName: string = "";
  deptEngName: string = "";
  positionCode: string = "";
  positionName: string = "";
  positionEngName: string = "";
  dutyCode: string = "";
  dutyName: string = "";
  dutyEngName: string = "";

  constructor(init: Partial<RoomAttendeeLogData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomAttendeeLogData {
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

  static fromJsonList(jsonList: unknown): RoomAttendeeLogData[] {
    return pickArray(jsonList, "RoomAttendeeLogs", "roomAttendeeLogs", "AttendeeLogs", "attendeeLogs", "LogList", "logList", "List", "list", "Array", "array")
      .map((json) => RoomAttendeeLogData.fromJson(json));
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomChatData {
  groupID: string = "";
  siteIndex: string = "";
  roomCode: string = "";
  index: string = "";
  filePath: string = "";
  fileSize: number = 0;
  serverIndex: string = "";
  instanceIndex: string = "";
  cDate: string = "";

  constructor(init: Partial<RoomChatData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomChatData {
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

  static fromJsonList(jsonList: unknown): RoomChatData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => RoomChatData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomFileData {
  groupID: string = "";
  siteIndex: string = "";
  userIndex: string = "";
  userID: string = "";
  attdID: string = "";
  roomCode: string = "";
  roomGroup: string = "";
  fileIndex: string = "";
  fileKind: string = "";
  fileName: string = "";
  filePath: string = "";
  fileSize: number = 0;
  title: string = "";
  pages: number = 0;
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<RoomFileData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomFileData {
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

  static fromJsonList(jsonList: unknown): RoomFileData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => RoomFileData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class RoomLogData {
  groupID: string = "";
  siteIndex: string = "";
  userIndex: string = "";
  userID: string = "";
  userEmail: string = "";
  userName: string = "";
  userType: number = 0;
  roomID: string = "";
  roomCode: string = "";
  policy: string = "";
  serverSector: string = "";
  serverIndex: string = "";
  password: string = "";
  title: string = "";
  agenda: string = "";
  timeZone: string = "";
  isLocked: boolean = false;
  isPublic: boolean = false;
  maxUsers: number = 0;
  admissionDate: string = "";
  plannedDate: string = "";
  endDate: string = "";
  roomDuration: number = 0;
  noteIDs: string = "";
  pageIDs: string = "";
  distNotesInfo: string = "";
  sharedNotesInfo: string = "";
  reactionsInfo: string = "";
  cDate: string = "";
  mDate: string = "";
  index: string = "";
  instanceIndex: string = "";
  startedDate: string = "";
  finishedDate: string = "";
  isAbnormal: boolean = false;
  hostJoinedDate: string = "";
  hostExitedDate: string = "";
  hostAttendedDuration: number = 0;
  optionsInfo: string = "";
  lDate: string = "";

  constructor(init: Partial<RoomLogData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): RoomLogData {
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

  static fromJsonList(jsonList: unknown): RoomLogData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => RoomLogData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SectorData {
  sectorName: string = "";
  masterAddr: string = "";
  slaveAddr: string = "";
  webServerURL: string = "";
  apiServerURL: string = "";
  rooms: number = 0;
  attendees: number = 0;
  notes: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<SectorData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SectorData {
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
    (value as AnyRecord).sectorCount = asNumber(json["SectorCount"], (value as AnyRecord).sectorCount ?? 0);
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

  static fromJsonList(jsonList: unknown): SectorData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SectorData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SentMailData {
  requestID: string = "";
  count: number = 0;
  contents: string = "";
  cDate: string = "";

  constructor(init: Partial<SentMailData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SentMailData {
    const json = asRecord(jsonInput);
    const value = new SentMailData();
    value.requestID = asString(json["RequestID"], value.requestID);
    value.count = asNumber(json["Count"], value.count);
    value.contents = asString(json["Contents"], value.contents);
    value.cDate = asString(json["CDate"], value.cDate);
    return value;
  }

  static fromJsonList(jsonList: unknown): SentMailData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SentMailData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ServerData {
  sector: string = "";
  serverIndex: string = "";
  serverTypes: string = "";
  name: string = "";
  isActive: boolean = false;
  isAllowed: boolean = false;
  privateIPAddrs: string = "";
  publicIPAddr: string = "";
  publicSubDomain: string = "";
  publicDomains: string = "";
  mainPort: number = 0;
  version: string = "";
  startedDate: string = "";
  stoppedDate: string = "";
  gor: number = 0;
  gorTotal: number = 0;
  cpu: number = 0;
  cpuTotal: number = 0;
  mem: number = 0;
  memFree: number = 0;
  memTotal: number = 0;
  hddFree: number = 0;
  hddTotal: number = 0;
  ses: number = 0;
  rtp: number = 0;
  rtpTotal: number = 0;
  vid: number = 0;
  vidTotal: number = 0;
  maxQueryTime: number = 0;
  maxInvokeTime: number = 0;
  maxHandlerTime: number = 0;
  masterConnTimes: number = 0;
  masterRetryTimes: number = 0;
  dumps: number = 0;
  rooms: number = 0;
  attendees: number = 0;
  notes: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<ServerData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ServerData {
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

  static fromJsonList(jsonList: unknown): ServerData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ServerData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ServerDomainData {
  sector: string = "";
  domainName: string = "";
  provisionServerIndex: string = "";
  targetServerIndex: string = "";
  targetPublicIPAddr: string = "";
  targetPrivateIPAddrs: string = "";
  finishedDate: string = "";
  failedReason: string = "";
  cDate: string = "";
  mDate: string = "";

  constructor(init: Partial<ServerDomainData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ServerDomainData {
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

  static fromJsonList(jsonList: unknown): ServerDomainData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ServerDomainData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class ServerLogData {
  sector: string = "";
  serverIndex: string = "";
  serverTypes: string = "";
  name: string = "";
  isActive: boolean = false;
  isAllowed: boolean = false;
  privateIPAddrs: string = "";
  publicIPAddr: string = "";
  publicSubDomain: string = "";
  publicDomains: string = "";
  mainPort: number = 0;
  version: string = "";
  startedDate: string = "";
  stoppedDate: string = "";
  gor: number = 0;
  gorTotal: number = 0;
  cpu: number = 0;
  cpuTotal: number = 0;
  mem: number = 0;
  memFree: number = 0;
  memTotal: number = 0;
  hddFree: number = 0;
  hddTotal: number = 0;
  ses: number = 0;
  rtp: number = 0;
  rtpTotal: number = 0;
  vid: number = 0;
  vidTotal: number = 0;
  maxQueryTime: number = 0;
  maxInvokeTime: number = 0;
  maxHandler_time: number = 0;
  masterConnTimes: number = 0;
  masterRetryTimes: number = 0;
  dumps: number = 0;
  rooms: number = 0;
  attendees: number = 0;
  notes: string = "";
  cDate: string = "";
  mDate: string = "";
  index: string = "";
  instanceIndex: string = "";
  licenseInfo: string = "";
  lDate: string = "";

  constructor(init: Partial<ServerLogData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): ServerLogData {
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

  static fromJsonList(jsonList: unknown): ServerLogData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => ServerLogData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SitesList {
  siteInfo: SiteData[] = [];
  pagesData: PagesData = new PagesData();

  constructor(init: Partial<SitesList> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SitesList {
    const json = asRecord(jsonInput);
    const value = new SitesList();
    value.siteInfo = SiteData.fromJsonList(json["SiteInfo"]);
    value.pagesData = PagesData.fromJson(json["PageInfo"] ?? {});
    return withAliases(value, { SiteInfo: "siteInfo", PageInfo: "pagesData" });
  }

  static fromJsonList(jsonList: unknown): SitesList[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SitesList.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SiteData {
  sector: string = "";
  siteIndex: string = "";
  siteID: string = "";
  siteSecret: string = "";
  useBranding: boolean = false;
  name: string = "";
  rooms: number = 0;
  attendees: number = 0;
  limitRooms: number = 0;
  limitAttendees: number = 0;
  limitAccounts: number = 0;
  groupID: string = "";
  cDate: string = "";
  mDate: string = "";
  groupName: string = "";
  siteAdmin: UserData = new UserData();
  billingManagerName: string = "";
  billingManagerEmail: string = "";
  billingManagerPhone: string = "";
  isActive: boolean = false;
  lastLoginDate: string = "";
  accountCount: number = 0;
  pricingModel: string = "";
  limitMaxAttendees: number = 0;

  constructor(init: Partial<SiteData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SiteData {
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

  static fromJsonList(jsonList: unknown): SiteData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SiteData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SiteCount {
  rooms: number = 0;
  users: number = 0;

  constructor(init: Partial<SiteCount> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SiteCount {
    const json = asRecord(jsonInput);
    const value = new SiteCount();
    value.rooms = asNumber(json["RoomCount"] ?? json["Rooms"], value.rooms);
    value.users = asNumber(json["UserCount"] ?? json["Users"], value.users);
    (value as AnyRecord).attendeeCount = asNumber(json["AttendeeCount"], (value as AnyRecord).attendeeCount ?? 0);
    (value as AnyRecord).roomCount = value.rooms;
    (value as AnyRecord).userCount = value.users;
    return value;
  }

  static fromJsonList(jsonList: unknown): SiteCount[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SiteCount.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class SiteAvailableData {
  userCount: number = 0;
  limitAccounts: number = 0;
  isAvailableCreateUser: boolean = false;

  constructor(init: Partial<SiteAvailableData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): SiteAvailableData {
    const json = asRecord(jsonInput);
    const value = new SiteAvailableData();
    value.userCount = asNumber(json["UserCount"] ?? json["used"] ?? json["Used"], value.userCount);
    value.limitAccounts = asNumber(json["LimitAccounts"] ?? json["total"] ?? json["Total"], value.limitAccounts);
    value.isAvailableCreateUser = asBoolean(json["IsAvailableCreateUser"], value.isAvailableCreateUser);
    (value as AnyRecord).used = asNumber(json["used"] ?? json["Used"], value.userCount);
    (value as AnyRecord).total = asNumber(json["total"] ?? json["Total"], value.limitAccounts);
    (value as AnyRecord).available = asNumber(json["available"] ?? json["Available"], Math.max(0, value.limitAccounts - value.userCount));
    return value;
  }

  static fromJsonList(jsonList: unknown): SiteAvailableData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => SiteAvailableData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class TimeZoneData {
  code: number = 0;
  countryCode: string = "";
  timeZone: string = "";
  comments: string = "";
  utcOffset: number = 0;
  utcDstOffset: number = 0;
  useDST: number = 0;
  notes: string = "";

  constructor(init: Partial<TimeZoneData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): TimeZoneData {
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

  static fromJsonList(jsonList: unknown): TimeZoneData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => TimeZoneData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class UserListData {
  userList: UserData[] = [];
  pagesData: PagesData = new PagesData();

  constructor(init: Partial<UserListData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): UserListData {
    const json = unwrapMain(jsonInput);
    const value = new UserListData();
    value.userList = UserData.fromJsonList(pickArray(jsonInput, "UserList", "userList", "users", "Users", "List", "list", "Array", "array"));
    value.pagesData = PagesData.fromJson(pick(json, "PageInfo", "pageInfo", "pagesData", "pages") ?? {});
    return withAliases(value, { UserList: "userList", PageInfo: "pagesData" });
  }

  static fromJsonList(jsonList: unknown): UserListData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => UserListData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}


export class UserData {
  groupID: string = "";
  siteIndex: string = "";
  siteID: string = "";
  siteName: string = "";
  userIndex: string = "";
  userID: string = "";
  password: string = "";
  isPasswordApplied: boolean = false;
  email: string = "";
  name: string = "";
  engName: string = "";
  nickName: string = "";
  isSNS: boolean = false;
  userType: string = "";
  state: string = "";
  monitoringColumn: string = "";
  loginServerIndex: string = "";
  lastLoginDate: string = "";
  lastLogoutDate: string = "";
  lastIPAddress: string = "";
  profileImageKey: string = "";
  info: string = "";
  hireDate: string = "";
  retireDate: string = "";
  cDate: string = "";
  mDate: string = "";
  profileImageURL: string = "";
  disableLogin: boolean = false;
  isSiteManager: boolean = false;
  isSiteHolder: boolean = false;
  isSystemManager: boolean = false;
  isSystemHolder: boolean = false;
  isManager: boolean = false;
  row: number = 0;
  isEmptyId: boolean = false;
  isEmptyName: boolean = false;
  isEmailTypeError: boolean = false;
  isEmptyEmail: boolean = false;
  isDuplicateId: boolean = false;
  isValid: boolean = false;
  deptCode: string = "";
  deptName: string = "";
  deptEngName: string = "";
  positionCode: string = "";
  positionName: string = "";
  positionEngName: string = "";
  dutyCode: string = "";
  dutyName: string = "";
  dutyEngName: string = "";
  accountType: string = "";

  constructor(init: Partial<UserData> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): UserData {
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
    value.hireDate = asString(pick(json, "HireDate", "hireDate", "hire_date"), value.hireDate);
    value.retireDate = asString(pick(json, "RetireDate", "retireDate", "retire_date"), value.retireDate);
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
    value.accountType = asString(pick(json, "AccountType", "accountType", "account_type"), value.accountType);
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
      HireDate: "hireDate",
      hire_date: "hireDate",
      RetireDate: "retireDate",
      retire_date: "retireDate",
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
      AccountType: "accountType",
      account_type: "accountType",
    });
  }

  static fromJsonList(jsonList: unknown): UserData[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => UserData.fromJson(asRecord(json))) : [];
  }

  toJson(): AnyRecord {
    return { ...this };
  }
}

export interface ConcurrentInfo {
  Rooms: number;
  Attendees: number;
}

export interface CommonOption {
  Name: string;
  Item: string;
  Scope: number;
  ValueType: number;
  Value: string;
  DefaultValue: string;
  DispName: string;
  ItemOrder: number;
  Notes: string;
  CDate: string;
  MDate: string;
}

export interface OptionInfo extends CommonOption {
  Class: number;
  Sectors: string;
  GroupID: string;
  Policy: string;
  SiteIndex: string;
  RoomCode: string;
  Inherit: string;
  Selected: string;
}

export interface OptionItems {
  Main: OptionInfo;
  Array: OptionInfo[];
  Map: Record<string, any>;
}

export interface MailConfig {
  Type: string;
  Sender: string;
  SenderName: string;
}

export interface BlockListData {
  globalBlocks: OptionInfo;
  customBlocks: OptionInfo;
  globalAllows: OptionInfo;
}

export interface NoticeData {
  GroupID: string;
  SiteIndex: string;
  UserID: string;
  UserIndex: string;
  UserName: string;
  Category: number;
  Title: string;
  NoticeIndex: string;
  StartDate: string;
  EndDate: string;
  Targets: string;
  Contents: any;
  MDate: string;
  CDate: string;
  IsPinned: boolean;
  IsBanner: boolean;
  IsStopped: boolean;
  FileList: Record<string, string>[];
  ViewNum: number;
  ExistFile: boolean;
}

export interface NoticeList {
  NoticeList: NoticeData[];
  PageInfo: PagesData;
}

export interface NoticeFileData {
  NoticeIndex: string;
  FileIndex: string;
  FileKey: string;
  FileURL: string;
  FileName: string;
  FileSize: number;
}

export interface RoomData {
  GroupID: string;
  SiteIndex: string;
  UserIndex: string;
  UserID: string;
  RoomID: string;
  RoomCode: string;
  Policy: string;
  Title: string;
  TimeZone: string;
  StartedDate: string;
  FinishedDate: string;
  IsLocked: boolean;
  IsPublic: boolean;
  MaxUsers: number;
  PlannedDate: string;
  RoomDuration: number;
  IsDeleted: boolean;
  ServerSector: string;
  ServerIndex: string;
  Password: string;
  Agenda: string;
  AdmissionDate: string;
  EndDate: string;
  CDate: string;
  MDate: string;
  Creator: string;
  AttendeesCount: number;
  ProfileImageURL: string;
  IsManager: boolean;
  IsSubManager: boolean;
  InstanceIndex: string;
  OptionsInfo: string;
}

export interface ClassRoomInfo {
  IsJoinAvailable: boolean;
  SiteIndex: string;
  SiteID: string;
  CreatorID: string;
  IsWaitingRoom: boolean;
  RoomTitle: string;
  RoomCode: string;
  AttendeeType: string;
  IsTID: boolean;
  UserID: string;
  AttdID: string;
  AttdName: string;
  AttdPassword: string;
  IsAdmin: boolean;
  InviterID: string;
  RoomInfo: RoomData | null;
  RoomOptionList: OptionInfo[];
  ProfileImageURL: string;
  ExpiredDate: string;
  ClassRoomData: string | null;
  IsAvailableGhostMode: boolean;
}

export interface RoomAttendeeData {
  GroupID: string;
  SiteIndex: string;
  RoomCode: string;
  AttdID: string;
  IsManager: boolean;
  IsSubManager: boolean;
  UserType: string;
  UserClientOS: string;
  UserClientType: string;
  UserClientDetail: string;
  Email: string;
  Name: string;
  Rights: string;
  ExitedReason: number;
  AttendedDuration: number;
  UserIndex: string;
  UserID: string;
  InviterID: string;
  NickName: string;
  ServerSector: string;
  ServerIndex: string;
  AttendedDate: string;
  ExitedDate: string;
  IPAddr: string;
  CDate: string;
  MDate: string;
  State: string;
}

export interface SectorData {
  SectorName: string;
  MasterAddr: string;
  SlaveAddr: string;
  WebServerURL: string;
  APIServerURL: string;
  Notes: string;
  CDate: string;
  MDate: string;
  SectorCount: number;
}

export interface ServerData {
  IsAllowed: boolean;
  Sector: string;
  ServerIndex: string;
  ServerTypes: string;
  Name: string;
  IsActive: boolean;
  PrivateIPAddrs: string;
  PublicIPAddr: string;
  PublicDomains: string;
  PublicSubDomain: string;
  Version: string;
  StartedDate: string;
  StoppedDate: string;
  GOR: number;
  GORTotal: number;
  CPU: number;
  CPUTotal: number;
  Mem: number;
  MemFree: number;
  MemTotal: number;
  HDDFree: number;
  HDDTotal: number;
  SES: number;
  RTP: number;
  RTPTotal: number;
  VID: number;
  VIDTotal: number;
  Dumps: number;
  Rooms: number;
  Attendees: number;
  MaxQueryTime: number;
  MaxInvokeTime: number;
  MasterConnTimes: number;
  CDate: string;
  MDate: string;
  Notes: string;
}

export interface ServerDomainData {
  Sector: string;
  DomainName: string;
  ProvisionServerIndex: string;
  TargetServerIndex: string;
  TargetPrivateIPAddrs: string;
  TargetPublicIPAddr: string;
  FailedReason: string;
  FinishedDate: string;
  CDate: string;
  MDate: string;
}

export interface SitesList {
  SiteInfo: SiteData[];
  PageInfo: PagesData;
}

export interface SiteData {
  Sector: string;
  SiteIndex: string;
  SiteID: string;
  SiteSecret: string;
  UseBranding: boolean;
  Name: string;
  Rooms: number;
  Attendees: number;
  LimitRooms: number;
  LimitAttendees: number;
  LimitAccounts: number;
  LimitMaxAttendees: number;
  GroupID: string;
  CDate: string;
  MDate: string;
  GroupName: string;
  SiteAdmin: UserData;
  BillingManagerName: string;
  BillingManagerEmail: string;
  BillingManagerPhone: string;
  IsActive: boolean;
  LastLoginDate: string;
  AccountCount: number;
  PricingModel: string;
}

export interface SiteCount {
  userCount: number;
  roomCount: number;
  attendeeCount: number;
}

export interface SiteAvailableData {
  available: number;
  total: number;
  used: number;
}

export interface TimeZoneData {
  utcDSTOffset: number;
}

export interface UserListData {
  UserList: UserData[];
  PageInfo: PagesData;
}

export interface UserData {
  GroupID: string;
  SiteIndex: string;
  UserIndex: string;
  UserID: string;
  Password: string;
  IsPasswordApplied: boolean;
  Email: string;
  Name: string;
  EngName: string;
  NickName: string;
  IsSNS: boolean;
  UserType: string;
  State: string;
  MonitoringColumn: string;
  LoginServerIndex: string;
  LastLoginDate: string;
  LastLogoutDate: string;
  LastIPAddress: string;
  ProfileImageKey: string;
  Info: string;
  HireDate: string;
  RetireDate: string;
  CDate: string;
  MDate: string;
  ProfileImageURL: string;
  DisableLogin: boolean;
  IsSiteManager: boolean;
  IsSiteHolder: boolean;
  IsSystemManager: boolean;
  IsSystemHolder: boolean;
  IsManager: boolean;
  Row: number;
  DeptCode: string;
  DeptName: string;
  DeptEngName: string;
  PositionCode: string;
  PositionName: string;
  PositionEngName: string;
  DutyCode: string;
  DutyName: string;
  DutyEngName: string;
  AccountType: string;
}

export type OrgSyncRequest = {
  departments?: OrgSyncDepartmentItem[];
  positions?: OrgSyncPositionItem[];
  duties?: OrgSyncDutyItem[];
  members?: OrgSyncMemberItem[];
};

export type OrgSyncDepartmentItem = {
  dept_code: string;
  parent_dept_code?: string;
  name: string;
  eng_name?: string;
  dept_order?: number;
  description?: string;
};

export type OrgSyncPositionItem = {
  position_code: string;
  name: string;
  eng_name?: string;
  position_order?: number;
};

export type OrgSyncDutyItem = {
  duty_code: string;
  name: string;
  eng_name?: string;
  duty_order?: number;
};

export type OrgSyncMemberItem = {
  user_id: string;
  name: string;
  eng_name?: string;
  email?: string;
  nickname?: string;
  dept_code?: string;
  position_code?: string;
  position_name?: string;
  duty_code?: string;
  duty_name?: string;
  user_order?: number;
};

export class OrgSyncFailure {
  data: unknown = null;
  reason: string = "";

  constructor(init: Partial<OrgSyncFailure> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncFailure {
    const json = asRecord(jsonInput);
    const value = new OrgSyncFailure();
    value.data = pick(json, "data", "Data") ?? value.data;
    value.reason = asString(pick(json, "reason", "Reason"), value.reason);
    return withAliases(value, { Data: "data", Reason: "reason" });
  }

  static fromJsonList(jsonList: unknown): OrgSyncFailure[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncFailure.fromJson(json)) : [];
  }
}

export class OrgSyncEntityResult {
  totalCount: number = 0;
  successCount: number = 0;
  failureCount: number = 0;
  failures: OrgSyncFailure[] = [];

  constructor(init: Partial<OrgSyncEntityResult> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncEntityResult {
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
  departments: OrgSyncEntityResult = new OrgSyncEntityResult();
  positions: OrgSyncEntityResult = new OrgSyncEntityResult();
  duties: OrgSyncEntityResult = new OrgSyncEntityResult();
  users: OrgSyncEntityResult = new OrgSyncEntityResult();
  departmentUsers: OrgSyncEntityResult = new OrgSyncEntityResult();

  constructor(init: Partial<OrgSyncResponse> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncResponse {
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
  deptCode: string = "";
  parentDeptCode: string = "";
  name: string = "";
  engName: string = "";
  deptOrder: number = 0;
  depth: number = 0;
  path: string = "";
  description: string = "";

  constructor(init: Partial<OrgSyncDepartmentResponse> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncDepartmentResponse {
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

  static fromJsonList(jsonList: unknown): OrgSyncDepartmentResponse[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncDepartmentResponse.fromJson(json)) : [];
  }
}

export class OrgSyncPositionResponse {
  positionCode: string = "";
  name: string = "";
  engName: string = "";
  positionOrder: number = 0;

  constructor(init: Partial<OrgSyncPositionResponse> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncPositionResponse {
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

  static fromJsonList(jsonList: unknown): OrgSyncPositionResponse[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncPositionResponse.fromJson(json)) : [];
  }
}

export class OrgSyncDutyResponse {
  dutyCode: string = "";
  name: string = "";
  engName: string = "";
  dutyOrder: number = 0;

  constructor(init: Partial<OrgSyncDutyResponse> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncDutyResponse {
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

  static fromJsonList(jsonList: unknown): OrgSyncDutyResponse[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncDutyResponse.fromJson(json)) : [];
  }
}

export class OrgSyncMemberResponse {
  userID: string = "";
  name: string = "";
  engName: string = "";
  email: string = "";
  nickName: string = "";
  deptCode: string = "";
  deptName: string = "";
  positionCode: string = "";
  positionName: string = "";
  dutyCode: string = "";
  dutyName: string = "";
  userOrder: number = 0;

  constructor(init: Partial<OrgSyncMemberResponse> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncMemberResponse {
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

  static fromJsonList(jsonList: unknown): OrgSyncMemberResponse[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OrgSyncMemberResponse.fromJson(json)) : [];
  }
}

export class OrgSyncGetResponse {
  departments: OrgSyncDepartmentResponse[] = [];
  positions: OrgSyncPositionResponse[] = [];
  duties: OrgSyncDutyResponse[] = [];
  members: OrgSyncMemberResponse[] = [];

  constructor(init: Partial<OrgSyncGetResponse> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgSyncGetResponse {
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
  deptCode: string = "";
  parentDeptCode: string = "";
  name: string = "";
  engName: string = "";
  deptOrder: number = 0;
  depth: number = 0;
  path: string = "";
  description: string = "";
  members: OrgSyncMemberResponse[] = [];
  children: OrgTreeNode[] = [];

  constructor(init: Partial<OrgTreeNode> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgTreeNode {
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

  static fromJsonList(jsonList: unknown): OrgTreeNode[] {
    return Array.isArray(jsonList) ? jsonList.map((json) => OrgTreeNode.fromJson(json)) : [];
  }
}

export class OrgTreeResponse {
  tree: OrgTreeNode[] = [];
  positions: OrgSyncPositionResponse[] = [];
  duties: OrgSyncDutyResponse[] = [];

  constructor(init: Partial<OrgTreeResponse> = {}) {
    Object.assign(this, init);
  }

  static fromJson(jsonInput: unknown = {}): OrgTreeResponse {
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
