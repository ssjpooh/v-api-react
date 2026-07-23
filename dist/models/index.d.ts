export type AnyRecord = Record<string, any>;
export declare class ConcurrentInfo {
    rooms: number;
    attendees: number;
    constructor(init?: Partial<ConcurrentInfo>);
    static fromJson(jsonInput?: unknown): ConcurrentInfo;
    static fromJsonList(jsonList: unknown): ConcurrentInfo[];
    toJson(): AnyRecord;
}
export declare class ClientTokenData {
    groupID: string;
    siteIndex: string;
    tokenID: string;
    token: string;
    serverIndex: string;
    ipAddr: string;
    expiryDate: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<ClientTokenData>);
    static fromJson(jsonInput?: unknown): ClientTokenData;
    static fromJsonList(jsonList: unknown): ClientTokenData[];
    toJson(): AnyRecord;
}
export declare class LoginResult {
    tokenID: string;
    accessToken: string;
    expiryDate: number;
    tokenType: string;
    isSiteManager: boolean;
    isSiteHolder: boolean;
    isSystemHolder: boolean;
    isSystemManager: boolean;
    supportFileFormats: string[];
    siteID: string;
    domainURL: string;
    constructor(init?: Partial<LoginResult>);
    static fromJson(jsonInput?: unknown): LoginResult;
    static fromJsonList(jsonList: unknown): LoginResult[];
    toJson(): AnyRecord;
}
export declare class TwoFactorRequiredResult {
    requires2FA: true;
    twoFactorToken: string;
    emailMasked: string;
    expiresIn: number;
    resendAfter: number;
    constructor(init?: Partial<TwoFactorRequiredResult>);
    static fromJson(jsonInput?: unknown): TwoFactorRequiredResult;
    toJson(): AnyRecord;
}
export declare class TwoFactorCodeMismatchResult {
    codeMismatch: true;
    attemptsLeft: number;
    constructor(init?: Partial<TwoFactorCodeMismatchResult>);
    static fromJson(jsonInput?: unknown): TwoFactorCodeMismatchResult;
    toJson(): AnyRecord;
}
export declare class TwoFactorExpiredResult {
    expired: true;
    constructor(init?: Partial<TwoFactorExpiredResult>);
    static fromJson(): TwoFactorExpiredResult;
    toJson(): AnyRecord;
}
export declare class TwoFactorResendResult {
    expiresIn: number;
    resendAfter: number;
    constructor(init?: Partial<TwoFactorResendResult>);
    static fromJson(jsonInput?: unknown): TwoFactorResendResult;
    toJson(): AnyRecord;
}
export declare class ContractData {
    groupID: string;
    siteIndex: string;
    contractNo: number;
    hosts: number;
    limitRooms: number;
    limitAttendees: number;
    limitAccounts: number;
    state: string;
    duration: number;
    contractor: string;
    contractInfo: string;
    currency: string;
    paymentAmount: number;
    isDisplay: boolean;
    startDate: string;
    endDate: string;
    pausedDate: string;
    resumeDate: string;
    cDate: string;
    mDate: string;
    newHosts: number;
    newLimitRooms: number;
    newLimitAttendees: number;
    newLimitAccounts: number;
    newState: string;
    newDuration: number;
    newContractor: string;
    newContractInfo: string;
    newCurrency: string;
    newPaymentAmount: number;
    newIsDisplay: boolean;
    newStartDate: string;
    newEndDate: string;
    newPausedDate: string;
    newResumeDate: string;
    index: string;
    lDate: string;
    changeNotes: string;
    userID: string;
    userName: string;
    userIndex: string;
    limitMaxAttendees: number;
    addedRooms: number;
    addedAttendees: number;
    addedMaxAttendees: number;
    addedAccounts: number;
    newAddedRooms: number;
    newAddedAttendees: number;
    newAddedMaxAttendees: number;
    newAddedAccounts: number;
    constructor(init?: Partial<ContractData>);
    static fromJson(jsonInput?: unknown): ContractData;
    static fromJsonList(jsonList: unknown): ContractData[];
    toJson(): AnyRecord;
}
export declare class ContractListData {
    contractList: ContractData[];
    constructor(init?: Partial<ContractListData>);
    static fromJson(jsonInput?: unknown): ContractListData;
    static fromJsonList(jsonList: unknown): ContractListData[];
    toJson(): AnyRecord;
}
export declare class ContractLogData {
    groupID: string;
    siteIndex: string;
    contractNo: string;
    hosts: number;
    limitRooms: number;
    limitAttendees: number;
    limitMaxAttendees: number;
    limitAccounts: number;
    addedRooms: number;
    addedAttendees: number;
    addedMaxAttendees: number;
    addedAccounts: number;
    state: number;
    duration: number;
    startDate: string;
    endDate: string;
    pausedDate: string;
    resumeDate: string;
    contractor: string;
    contractInfo: string;
    currency: string;
    paymentAmount: number;
    isDisplay: boolean;
    newHosts: number;
    newLimitRooms: number;
    newLimitAttendees: number;
    newLimitMaxAttendees: number;
    newLimitAccounts: number;
    newAddedRooms: number;
    newAddedAttendees: number;
    newAddedMaxAttendees: number;
    newAddedAccounts: number;
    newState: number;
    newDuration: number;
    newStartDate: string;
    newEndDate: string;
    newPausedDate: string;
    newResumeDate: string;
    newContractor: string;
    newContractInfo: string;
    newCurrency: string;
    newPaymentAmount: number;
    newIsDisplay: boolean;
    index: string;
    userID: string;
    userIndex: string;
    userName: string;
    lDate: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<ContractLogData>);
    static fromJson(jsonInput?: unknown): ContractLogData;
    static fromJsonList(jsonList: unknown): ContractLogData[];
    toJson(): AnyRecord;
}
export declare class GroupData {
    groupID: string;
    name: string;
    rooms: number;
    attendees: number;
    notes: string;
    cDate: string;
    mDate: string;
    mapNameByLang: Record<string, any>;
    constructor(init?: Partial<GroupData>);
    static fromJson(jsonInput?: unknown): GroupData;
    static fromJsonList(jsonList: unknown): GroupData[];
    toJson(): AnyRecord;
}
export declare class NoteData {
    groupID: string;
    siteIndex: string;
    userID: string;
    roomCode: string;
    distType: number;
    targetGroup: number;
    targetIDs: string;
    noteID: string;
    orgNoteID: string;
    srcNoteID: string;
    title: string;
    firstPageNo: number;
    pageNum: number;
    pageIDs: string;
    pagesInfo: string;
    annotationInfo: string;
    fileSize: number;
    fileHash: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<NoteData>);
    static fromJson(jsonInput?: unknown): NoteData;
    static fromJsonList(jsonList: unknown): NoteData[];
    toJson(): AnyRecord;
}
export declare class AttachNoteInfo {
    title: string;
    noteID: string;
    userID: string;
    pageInfo: Record<string, any>;
    constructor(init?: Partial<AttachNoteInfo>);
    static fromJson(jsonInput?: unknown): AttachNoteInfo;
    static fromJsonList(jsonList: unknown): AttachNoteInfo[];
    toJson(): AnyRecord;
}
export declare class AddFile {
    attachFile: string[];
    constructor(init?: Partial<AddFile>);
    static fromJson(jsonInput?: unknown): AddFile;
    static fromJsonList(jsonList: unknown): AddFile[];
    toJson(): AnyRecord;
}
export declare class RemoveFile {
    removeFile: string[];
    constructor(init?: Partial<RemoveFile>);
    static fromJson(jsonInput?: unknown): RemoveFile;
    static fromJsonList(jsonList: unknown): RemoveFile[];
    toJson(): AnyRecord;
}
export declare class NoticeData {
    groupID: string;
    siteIndex: string;
    userID: string;
    userIndex: string;
    userName: string;
    category: number;
    title: string;
    noticeIndex: string;
    startDate: string;
    endDate: string;
    target: string;
    contents: any;
    mDate: string;
    cDate: string;
    isPinned: boolean;
    isBanner: boolean;
    isStopped: boolean;
    fileList: Record<string, string>[];
    viewNum: number;
    existFile: boolean;
    constructor(init?: Partial<NoticeData>);
    static fromJson(jsonInput?: unknown): NoticeData;
    static fromJsonList(jsonList: unknown): NoticeData[];
    toJson(): AnyRecord;
}
export declare class NoticeList {
    noticeList: NoticeData[];
    pagesData: PagesData;
    constructor(init?: Partial<NoticeList>);
    static fromJson(jsonInput?: unknown): NoticeList;
    static fromJsonList(jsonList: unknown): NoticeList[];
    toJson(): AnyRecord;
}
export declare class NoticeFileData {
    noticeIndex: string;
    fileIndex: string;
    fileKey: string;
    fileUrl: string;
    fileName: string;
    files: FileData[];
    fileSize: number;
    constructor(init?: Partial<NoticeFileData>);
    static fromJson(jsonInput?: unknown): NoticeFileData;
    static fromJsonList(jsonList: unknown): NoticeFileData[];
    toJson(): AnyRecord;
}
export declare class FileData {
    fileName: string;
    fileBytes: BlobPart;
    contentType: string;
    fileSize: number;
    constructor(init?: Partial<FileData>);
    static fromJson(jsonInput?: unknown): FileData;
    static fromJsonList(jsonList: unknown): FileData[];
    toJson(): AnyRecord;
}
export declare class CommonOption {
    name: string;
    item: string;
    scope: number;
    valueType: number;
    value: string;
    defaultValue: string;
    dispName: string;
    itemOrder: number;
    bytesValue: BlobPart;
    notes: string;
    cDate: string;
    mDate: string;
    mapDispNameByLang: any;
    mapValueByLang: any;
    constructor(init?: Partial<CommonOption>);
    static fromJson(jsonInput?: unknown): CommonOption;
    static fromJsonList(jsonList: unknown): CommonOption[];
    toJson(): AnyRecord;
}
export declare class OptionInfo {
    commonOption: CommonOption;
    classOption: number;
    sectors: string;
    groupID: string;
    policy: string;
    siteIndex: string;
    roomCode: string;
    inherit: string;
    selected: string;
    constructor(init?: Partial<OptionInfo>);
    static fromJson(jsonInput?: unknown): OptionInfo;
    static fromJsonList(jsonList: unknown): OptionInfo[];
    toJson(): AnyRecord;
}
export declare class DB {
    version: string;
    keepingPeriod: any;
    constructor(init?: Partial<DB>);
    static fromJson(jsonInput?: unknown): DB;
    static fromJsonList(jsonList: unknown): DB[];
    toJson(): AnyRecord;
}
export declare class Room {
    stat: any;
    option: any;
    constructor(init?: Partial<Room>);
    static fromJson(jsonInput?: unknown): Room;
    static fromJsonList(jsonList: unknown): Room[];
    toJson(): AnyRecord;
}
export declare class User {
    types: OptionItems;
    state: OptionItems;
    passwordComplexity: OptionItems;
    constructor(init?: Partial<User>);
    static fromJson(jsonInput?: unknown): User;
    static fromJsonList(jsonList: unknown): User[];
    toJson(): AnyRecord;
}
export declare class MailConfig {
    type: string;
    sender: string;
    senderName: string;
    constructor(init?: Partial<MailConfig>);
    static fromJson(jsonInput?: unknown): MailConfig;
    static fromJsonList(jsonList: unknown): MailConfig[];
    toJson(): AnyRecord;
}
export declare class SendMail {
    contents: OptionItems;
    title: OptionItems;
    config: MailConfig;
    constructor(init?: Partial<SendMail>);
    static fromJson(jsonInput?: unknown): SendMail;
    static fromJsonList(jsonList: unknown): SendMail[];
    toJson(): AnyRecord;
}
export declare class OptionItems {
    main: OptionInfo;
    array: OptionInfo[];
    map: Record<string, any>;
    constructor(init?: Partial<OptionItems>);
    static fromJson(jsonInput?: unknown): OptionItems;
    static fromJsonList(jsonList: unknown): OptionItems[];
    toJson(): AnyRecord;
}
export declare class BaseOptionEnvData {
    mapBaseOption: Record<string, any>;
    constructor(init?: Partial<BaseOptionEnvData>);
    static fromJson(jsonInput?: unknown): BaseOptionEnvData;
    static fromJsonList(jsonList: unknown): BaseOptionEnvData[];
    toJson(): AnyRecord;
}
export declare class GroupOptionEnvData {
    mapGroupOption: Record<string, any>;
    constructor(init?: Partial<GroupOptionEnvData>);
    static fromJson(jsonInput?: unknown): GroupOptionEnvData;
    static fromJsonList(jsonList: unknown): GroupOptionEnvData[];
    toJson(): AnyRecord;
}
export declare class PolicyOptionEnvData {
    mapPolicyOption: Record<string, any>;
    constructor(init?: Partial<PolicyOptionEnvData>);
    static fromJson(jsonInput?: unknown): PolicyOptionEnvData;
    static fromJsonList(jsonList: unknown): PolicyOptionEnvData[];
    toJson(): AnyRecord;
}
export declare class SiteOptionInfoMap {
    optionInfo: Record<string, any>;
    constructor(init?: Partial<SiteOptionInfoMap>);
    static fromJson(jsonInput?: unknown): SiteOptionInfoMap;
    static fromJsonList(jsonList: unknown): SiteOptionInfoMap[];
    toJson(): AnyRecord;
}
export declare class BlockListData {
    globals: OptionInfo;
    customs: OptionInfo;
    exceptions: OptionInfo;
    maskText: OptionInfo;
    scope: Scope;
    constructor(init?: Partial<BlockListData>);
    static fromJson(jsonInput?: unknown): BlockListData;
    static fromJsonList(jsonList: unknown): BlockListData[];
    toJson(): AnyRecord;
}
export declare class Scope {
    chat: OptionInfo;
    nickname: OptionInfo;
    titleAgenda: OptionInfo;
    fileName: OptionInfo;
    constructor(init?: Partial<Scope>);
    static fromJson(jsonInput?: unknown): Scope;
    static fromJsonList(jsonList: unknown): Scope[];
    toJson(): AnyRecord;
}
export declare class PageLists {
    PageList: any;
    constructor(init?: Partial<PageLists>);
    static fromJson(jsonInput?: unknown): PageLists;
    static fromJsonList(jsonList: unknown): PageLists[];
    toJson(): AnyRecord;
}
export declare class PageData {
    groupID: string;
    siteIndex: string;
    userID: string;
    roomCode: string;
    pageID: string;
    orgNoteID: string;
    srcPageID: string;
    type: number;
    title: string;
    width: number;
    height: number;
    imageFormat: string;
    thumbData: BlobPart;
    imageData: BlobPart;
    imageHash: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<PageData>);
    static fromJson(jsonInput?: unknown): PageData;
    static fromJsonList(jsonList: unknown): PageData[];
    toJson(): AnyRecord;
}
export declare class PagesData {
    currentPageNo: number;
    totalPageNo: number;
    totalRowCount: number;
    pagePerRow: number;
    constructor(init?: Partial<PagesData>);
    static fromJson(jsonInput?: unknown): PagesData;
    static fromJsonList(jsonList: unknown): PagesData[];
    toJson(): AnyRecord;
}
export declare class PagesLists {
    PagesList: any;
    constructor(init?: Partial<PagesLists>);
    static fromJson(jsonInput?: unknown): PagesLists;
    static fromJsonList(jsonList: unknown): PagesLists[];
    toJson(): AnyRecord;
}
export declare class ProvisionServerData {
    provisionServerIndex: string;
    sector: string;
    serverIndex: string;
    serverTypes: string;
    privateIPAddrs: string;
    publicIPAddr: string;
    publicDomain: string;
    version: string;
    state: number;
    failedReason: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<ProvisionServerData>);
    static fromJson(jsonInput?: unknown): ProvisionServerData;
    static fromJsonList(jsonList: unknown): ProvisionServerData[];
    toJson(): AnyRecord;
}
export declare class RoomData {
    groupId: string;
    siteIndex: string;
    userIndex: string;
    userId: string;
    roomId: string;
    roomCode: string;
    policy: string;
    title: string;
    timeZone: string;
    startedDate: string;
    finishedDate: string;
    isLocked: boolean;
    isPublic: boolean;
    maxUsers: number;
    plannedDate: string;
    roomDuration: number;
    isRefsDone: number;
    isDeleted: boolean;
    serverSector: string;
    serverIndex: string;
    password: string;
    agenda: string;
    admissionDate: string;
    endDate: string;
    noteIds: string[];
    pageIds: string[];
    cDate: string;
    mDate: string;
    creator: string;
    attendeesCount: number;
    profileImageURL: string;
    joinedAttendees: RoomAttendeeData[];
    isManager: boolean;
    isSubManager: boolean;
    offset: number;
    sharedNoteInfo: any;
    distNoteInfo: any;
    personalNoteInfo: any;
    webUploadNoteInfo: any[];
    pageInfo: any;
    pageList: any;
    reactionList: any;
    pageInfoList: any[];
    instanceIndex: string;
    optionsInfo: string;
    constructor(init?: Partial<RoomData>);
    static fromJson(jsonInput?: unknown): RoomData;
    static fromJsonList(jsonList: unknown): RoomData[];
    toJson(): AnyRecord;
}
export declare class ClassRoomInfo {
    isJoinAvailable: boolean;
    siteIndex: string;
    siteID: string;
    creatorID: string;
    isWaitingRoom: boolean;
    roomTitle: string;
    roomCode: string;
    attendeeType: string;
    isTID: boolean;
    userID: string;
    attdID: string;
    attdName: string;
    attdPassword: string;
    isAdmin: boolean;
    inviterID: string;
    roomInfo: RoomData | null;
    roomOptionList: OptionInfo[];
    profileImageURL: string;
    expiredDate: string;
    classRoomData: string | null;
    isAvailableGhostMode: boolean;
    constructor(init?: Partial<ClassRoomInfo>);
    static fromJson(jsonInput?: unknown): ClassRoomInfo;
    static fromJsonList(jsonList: unknown): ClassRoomInfo[];
    toJson(): AnyRecord;
}
export declare class RoomPolicyData {
    selectedPolicy: string;
    roomPoliciesList: OptionInfo[];
    constructor(init?: Partial<RoomPolicyData>);
    static fromJson(jsonInput?: unknown): RoomPolicyData;
    static fromJsonList(jsonList: unknown): RoomPolicyData[];
    toJson(): AnyRecord;
}
export declare class CreateRoomData {
    roomData: RoomData;
    cDate: string;
    mDate: string;
    joinRoomURL: string;
    roomOption: OptionInfo[];
    attendees: RoomAttendees[];
    constructor(init?: Partial<CreateRoomData>);
    static fromJson(jsonInput?: unknown): CreateRoomData;
    static fromJsonList(jsonList: unknown): CreateRoomData[];
    toJson(): AnyRecord;
}
export declare class HistoryRoomData {
    roomDataList: RoomData[];
    pagesData: PagesData;
    constructor(init?: Partial<HistoryRoomData>);
    static fromJson(jsonInput?: unknown): HistoryRoomData;
    static fromJsonList(jsonList: unknown): HistoryRoomData[];
    toJson(): AnyRecord;
}
export declare class ScheduleRoomData {
    roomDataList: RoomData[];
    pagesData: PagesData;
    onlyInvited: boolean;
    onlyPermanent: boolean;
    constructor(init?: Partial<ScheduleRoomData>);
    static fromJson(jsonInput?: unknown): ScheduleRoomData;
    static fromJsonList(jsonList: unknown): ScheduleRoomData[];
    toJson(): AnyRecord;
}
export declare class RoomAttendeeData {
    groupID: string;
    siteIndex: string;
    roomCode: string;
    attdID: string;
    isManager: boolean;
    isSubManager: boolean;
    userType: string;
    userClientOS: string;
    userClientType: string;
    userClientDetail: string;
    email: string;
    name: string;
    rights: string;
    exitedReason: number;
    attendedDuration: number;
    userIndex: string;
    userID: string;
    inviterID: string;
    nickName: string;
    serverSector: string;
    serverIndex: string;
    attendedDate: string;
    exitedDate: string;
    iPAddr: string;
    cDate: string;
    mDate: string;
    noteIds: string[];
    pageIds: string[];
    notesInfo: string;
    annotationsInfo: string;
    noteList: any;
    pageInfo: any;
    pageList: any;
    pageInfoList: any[];
    state: string;
    constructor(init?: Partial<RoomAttendeeData>);
    static fromJson(jsonInput?: unknown): RoomAttendeeData;
    static fromJsonList(jsonList: unknown): RoomAttendeeData[];
    toJson(): AnyRecord;
}
export declare class RoomAttendees {
    userID: string;
    name: string;
    engName: string;
    email: string;
    attendeeURL: string;
    userType: string;
    userIndex: string;
    state: string;
    isManager: boolean;
    deptCode: string;
    deptName: string;
    deptEngName: string;
    positionCode: string;
    positionName: string;
    positionEngName: string;
    dutyCode: string;
    dutyName: string;
    dutyEngName: string;
    constructor(init?: Partial<RoomAttendees>);
    static fromJson(jsonInput?: unknown): RoomAttendees;
    static fromJsonList(jsonList: unknown): RoomAttendees[];
    toJson(): AnyRecord;
}
export declare class RoomAttendeeLogData {
    groupID: string;
    siteIndex: string;
    userIndex: string;
    userID: string;
    roomCode: string;
    attdID: string;
    inviterID: string;
    isManager: boolean;
    isSubManager: boolean;
    userType: number;
    clientVersion: string;
    clientOS: string;
    clientType: number;
    clientDetail: string;
    email: string;
    name: string;
    engName: string;
    nickName: string;
    rights: string;
    noteIDs: string;
    pageIDs: string;
    notesInfo: string;
    annotationsInfo: string;
    invitedDate: string;
    attendedDate: string;
    attendedDuration: number;
    exitedDate: string;
    exitedReason: number;
    ipAddr: string;
    byIPAddr: string;
    cDate: string;
    mDate: string;
    index: string;
    serverSector: string;
    serverIndex: string;
    instanceIndex: string;
    lDate: string;
    deptCode: string;
    deptName: string;
    deptEngName: string;
    positionCode: string;
    positionName: string;
    positionEngName: string;
    dutyCode: string;
    dutyName: string;
    dutyEngName: string;
    constructor(init?: Partial<RoomAttendeeLogData>);
    static fromJson(jsonInput?: unknown): RoomAttendeeLogData;
    static fromJsonList(jsonList: unknown): RoomAttendeeLogData[];
    toJson(): AnyRecord;
}
export declare class RoomChatData {
    groupID: string;
    siteIndex: string;
    roomCode: string;
    index: string;
    filePath: string;
    fileSize: number;
    serverIndex: string;
    instanceIndex: string;
    cDate: string;
    constructor(init?: Partial<RoomChatData>);
    static fromJson(jsonInput?: unknown): RoomChatData;
    static fromJsonList(jsonList: unknown): RoomChatData[];
    toJson(): AnyRecord;
}
export declare class RoomFileData {
    groupID: string;
    siteIndex: string;
    userIndex: string;
    userID: string;
    attdID: string;
    roomCode: string;
    roomGroup: string;
    fileIndex: string;
    fileKind: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    title: string;
    pages: number;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<RoomFileData>);
    static fromJson(jsonInput?: unknown): RoomFileData;
    static fromJsonList(jsonList: unknown): RoomFileData[];
    toJson(): AnyRecord;
}
export declare class RoomLogData {
    groupID: string;
    siteIndex: string;
    userIndex: string;
    userID: string;
    userEmail: string;
    userName: string;
    userType: number;
    roomID: string;
    roomCode: string;
    policy: string;
    serverSector: string;
    serverIndex: string;
    password: string;
    title: string;
    agenda: string;
    timeZone: string;
    isLocked: boolean;
    isPublic: boolean;
    maxUsers: number;
    admissionDate: string;
    plannedDate: string;
    endDate: string;
    roomDuration: number;
    noteIDs: string;
    pageIDs: string;
    distNotesInfo: string;
    sharedNotesInfo: string;
    reactionsInfo: string;
    cDate: string;
    mDate: string;
    index: string;
    instanceIndex: string;
    startedDate: string;
    finishedDate: string;
    isAbnormal: boolean;
    hostJoinedDate: string;
    hostExitedDate: string;
    hostAttendedDuration: number;
    optionsInfo: string;
    lDate: string;
    constructor(init?: Partial<RoomLogData>);
    static fromJson(jsonInput?: unknown): RoomLogData;
    static fromJsonList(jsonList: unknown): RoomLogData[];
    toJson(): AnyRecord;
}
export declare class SectorData {
    sectorName: string;
    masterAddr: string;
    slaveAddr: string;
    webServerURL: string;
    apiServerURL: string;
    rooms: number;
    attendees: number;
    notes: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<SectorData>);
    static fromJson(jsonInput?: unknown): SectorData;
    static fromJsonList(jsonList: unknown): SectorData[];
    toJson(): AnyRecord;
}
export declare class SentMailData {
    requestID: string;
    count: number;
    contents: string;
    cDate: string;
    constructor(init?: Partial<SentMailData>);
    static fromJson(jsonInput?: unknown): SentMailData;
    static fromJsonList(jsonList: unknown): SentMailData[];
    toJson(): AnyRecord;
}
export declare class ServerData {
    sector: string;
    serverIndex: string;
    serverTypes: string;
    name: string;
    isActive: boolean;
    isAllowed: boolean;
    privateIPAddrs: string;
    publicIPAddr: string;
    publicSubDomain: string;
    publicDomains: string;
    mainPort: number;
    version: string;
    startedDate: string;
    stoppedDate: string;
    gor: number;
    gorTotal: number;
    cpu: number;
    cpuTotal: number;
    mem: number;
    memFree: number;
    memTotal: number;
    hddFree: number;
    hddTotal: number;
    ses: number;
    rtp: number;
    rtpTotal: number;
    vid: number;
    vidTotal: number;
    maxQueryTime: number;
    maxInvokeTime: number;
    maxHandlerTime: number;
    masterConnTimes: number;
    masterRetryTimes: number;
    dumps: number;
    rooms: number;
    attendees: number;
    notes: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<ServerData>);
    static fromJson(jsonInput?: unknown): ServerData;
    static fromJsonList(jsonList: unknown): ServerData[];
    toJson(): AnyRecord;
}
export declare class ServerDomainData {
    sector: string;
    domainName: string;
    provisionServerIndex: string;
    targetServerIndex: string;
    targetPublicIPAddr: string;
    targetPrivateIPAddrs: string;
    finishedDate: string;
    failedReason: string;
    cDate: string;
    mDate: string;
    constructor(init?: Partial<ServerDomainData>);
    static fromJson(jsonInput?: unknown): ServerDomainData;
    static fromJsonList(jsonList: unknown): ServerDomainData[];
    toJson(): AnyRecord;
}
export declare class ServerLogData {
    sector: string;
    serverIndex: string;
    serverTypes: string;
    name: string;
    isActive: boolean;
    isAllowed: boolean;
    privateIPAddrs: string;
    publicIPAddr: string;
    publicSubDomain: string;
    publicDomains: string;
    mainPort: number;
    version: string;
    startedDate: string;
    stoppedDate: string;
    gor: number;
    gorTotal: number;
    cpu: number;
    cpuTotal: number;
    mem: number;
    memFree: number;
    memTotal: number;
    hddFree: number;
    hddTotal: number;
    ses: number;
    rtp: number;
    rtpTotal: number;
    vid: number;
    vidTotal: number;
    maxQueryTime: number;
    maxInvokeTime: number;
    maxHandler_time: number;
    masterConnTimes: number;
    masterRetryTimes: number;
    dumps: number;
    rooms: number;
    attendees: number;
    notes: string;
    cDate: string;
    mDate: string;
    index: string;
    instanceIndex: string;
    licenseInfo: string;
    lDate: string;
    constructor(init?: Partial<ServerLogData>);
    static fromJson(jsonInput?: unknown): ServerLogData;
    static fromJsonList(jsonList: unknown): ServerLogData[];
    toJson(): AnyRecord;
}
export declare class SitesList {
    siteInfo: SiteData[];
    pagesData: PagesData;
    constructor(init?: Partial<SitesList>);
    static fromJson(jsonInput?: unknown): SitesList;
    static fromJsonList(jsonList: unknown): SitesList[];
    toJson(): AnyRecord;
}
export declare class SiteData {
    sector: string;
    siteIndex: string;
    siteID: string;
    siteSecret: string;
    useBranding: boolean;
    name: string;
    rooms: number;
    attendees: number;
    limitRooms: number;
    limitAttendees: number;
    limitAccounts: number;
    groupID: string;
    cDate: string;
    mDate: string;
    groupName: string;
    siteAdmin: UserData;
    billingManagerName: string;
    billingManagerEmail: string;
    billingManagerPhone: string;
    isActive: boolean;
    lastLoginDate: string;
    accountCount: number;
    pricingModel: string;
    limitMaxAttendees: number;
    constructor(init?: Partial<SiteData>);
    static fromJson(jsonInput?: unknown): SiteData;
    static fromJsonList(jsonList: unknown): SiteData[];
    toJson(): AnyRecord;
}
export declare class SiteCount {
    rooms: number;
    users: number;
    constructor(init?: Partial<SiteCount>);
    static fromJson(jsonInput?: unknown): SiteCount;
    static fromJsonList(jsonList: unknown): SiteCount[];
    toJson(): AnyRecord;
}
export declare class SiteAvailableData {
    userCount: number;
    limitAccounts: number;
    isAvailableCreateUser: boolean;
    constructor(init?: Partial<SiteAvailableData>);
    static fromJson(jsonInput?: unknown): SiteAvailableData;
    static fromJsonList(jsonList: unknown): SiteAvailableData[];
    toJson(): AnyRecord;
}
export declare class TimeZoneData {
    code: number;
    countryCode: string;
    timeZone: string;
    comments: string;
    utcOffset: number;
    utcDstOffset: number;
    useDST: number;
    notes: string;
    constructor(init?: Partial<TimeZoneData>);
    static fromJson(jsonInput?: unknown): TimeZoneData;
    static fromJsonList(jsonList: unknown): TimeZoneData[];
    toJson(): AnyRecord;
}
export declare class UserListData {
    userList: UserData[];
    pagesData: PagesData;
    constructor(init?: Partial<UserListData>);
    static fromJson(jsonInput?: unknown): UserListData;
    static fromJsonList(jsonList: unknown): UserListData[];
    toJson(): AnyRecord;
}
export declare class UserData {
    groupID: string;
    siteIndex: string;
    siteID: string;
    siteName: string;
    userIndex: string;
    userID: string;
    password: string;
    isPasswordApplied: boolean;
    email: string;
    name: string;
    engName: string;
    nickName: string;
    isSNS: boolean;
    userType: string;
    state: string;
    monitoringColumn: string;
    loginServerIndex: string;
    lastLoginDate: string;
    lastLogoutDate: string;
    lastIPAddress: string;
    profileImageKey: string;
    info: string;
    cDate: string;
    mDate: string;
    profileImageURL: string;
    disableLogin: boolean;
    isSiteManager: boolean;
    isSiteHolder: boolean;
    isSystemManager: boolean;
    isSystemHolder: boolean;
    isManager: boolean;
    row: number;
    isEmptyId: boolean;
    isEmptyName: boolean;
    isEmailTypeError: boolean;
    isEmptyEmail: boolean;
    isDuplicateId: boolean;
    isValid: boolean;
    deptCode: string;
    deptName: string;
    deptEngName: string;
    positionCode: string;
    positionName: string;
    positionEngName: string;
    dutyCode: string;
    dutyName: string;
    dutyEngName: string;
    constructor(init?: Partial<UserData>);
    static fromJson(jsonInput?: unknown): UserData;
    static fromJsonList(jsonList: unknown): UserData[];
    toJson(): AnyRecord;
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
export declare class OrgSyncFailure {
    data: unknown;
    reason: string;
    constructor(init?: Partial<OrgSyncFailure>);
    static fromJson(jsonInput?: unknown): OrgSyncFailure;
    static fromJsonList(jsonList: unknown): OrgSyncFailure[];
}
export declare class OrgSyncEntityResult {
    totalCount: number;
    successCount: number;
    failureCount: number;
    failures: OrgSyncFailure[];
    constructor(init?: Partial<OrgSyncEntityResult>);
    static fromJson(jsonInput?: unknown): OrgSyncEntityResult;
}
export declare class OrgSyncResponse {
    departments: OrgSyncEntityResult;
    positions: OrgSyncEntityResult;
    duties: OrgSyncEntityResult;
    users: OrgSyncEntityResult;
    departmentUsers: OrgSyncEntityResult;
    constructor(init?: Partial<OrgSyncResponse>);
    static fromJson(jsonInput?: unknown): OrgSyncResponse;
}
export declare class OrgSyncDepartmentResponse {
    deptCode: string;
    parentDeptCode: string;
    name: string;
    engName: string;
    deptOrder: number;
    depth: number;
    path: string;
    description: string;
    constructor(init?: Partial<OrgSyncDepartmentResponse>);
    static fromJson(jsonInput?: unknown): OrgSyncDepartmentResponse;
    static fromJsonList(jsonList: unknown): OrgSyncDepartmentResponse[];
}
export declare class OrgSyncPositionResponse {
    positionCode: string;
    name: string;
    engName: string;
    positionOrder: number;
    constructor(init?: Partial<OrgSyncPositionResponse>);
    static fromJson(jsonInput?: unknown): OrgSyncPositionResponse;
    static fromJsonList(jsonList: unknown): OrgSyncPositionResponse[];
}
export declare class OrgSyncDutyResponse {
    dutyCode: string;
    name: string;
    engName: string;
    dutyOrder: number;
    constructor(init?: Partial<OrgSyncDutyResponse>);
    static fromJson(jsonInput?: unknown): OrgSyncDutyResponse;
    static fromJsonList(jsonList: unknown): OrgSyncDutyResponse[];
}
export declare class OrgSyncMemberResponse {
    userID: string;
    name: string;
    engName: string;
    email: string;
    nickName: string;
    deptCode: string;
    deptName: string;
    positionCode: string;
    positionName: string;
    dutyCode: string;
    dutyName: string;
    userOrder: number;
    constructor(init?: Partial<OrgSyncMemberResponse>);
    static fromJson(jsonInput?: unknown): OrgSyncMemberResponse;
    static fromJsonList(jsonList: unknown): OrgSyncMemberResponse[];
}
export declare class OrgSyncGetResponse {
    departments: OrgSyncDepartmentResponse[];
    positions: OrgSyncPositionResponse[];
    duties: OrgSyncDutyResponse[];
    members: OrgSyncMemberResponse[];
    constructor(init?: Partial<OrgSyncGetResponse>);
    static fromJson(jsonInput?: unknown): OrgSyncGetResponse;
}
export declare class OrgTreeNode {
    deptCode: string;
    parentDeptCode: string;
    name: string;
    engName: string;
    deptOrder: number;
    depth: number;
    path: string;
    description: string;
    members: OrgSyncMemberResponse[];
    children: OrgTreeNode[];
    constructor(init?: Partial<OrgTreeNode>);
    static fromJson(jsonInput?: unknown): OrgTreeNode;
    static fromJsonList(jsonList: unknown): OrgTreeNode[];
}
export declare class OrgTreeResponse {
    tree: OrgTreeNode[];
    positions: OrgSyncPositionResponse[];
    duties: OrgSyncDutyResponse[];
    constructor(init?: Partial<OrgTreeResponse>);
    static fromJson(jsonInput?: unknown): OrgTreeResponse;
}
