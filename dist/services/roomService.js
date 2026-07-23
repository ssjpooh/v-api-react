import { handleResult } from "../resultUtils";
import { ClassRoomInfo, RoomAttendeeLogData, RoomAttendees } from "../models";
export class RoomService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async classRoomInfo(params) {
        const { roomCode, attdID, token, cancelId } = params;
        const result = await this.apiClient.get(`/v1/classRoomInfo?roomCode=${roomCode}&attdID=${attdID}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => ClassRoomInfo.fromJson(json));
    }
    async getRoomScheduledLists(params) {
        const { userID, token, pageNo, keyword, startDate, endDate, orderType, state, pagePerRow, cancelId, onlyInvited, onlyPermanent } = params;
        return this.apiClient.get(`/v1/room/${userID}/ongoing?keyword=${keyword ?? ''}&orderType=${orderType ?? 0}&state=${state ?? '0'}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}&pageNo=${pageNo ?? 0}&pagePerRow=${pagePerRow ?? 10}&onlyInvited=${onlyInvited ?? false}&onlyPermanent=${onlyPermanent ?? false}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getAdminRoomScheduledLists(params) {
        const { userID, token, siteIndex, pageNo, keyword, startDate, endDate, orderType, state, pagePerRow, cancelId, onlyInvited, onlyPermanent } = params;
        return this.apiClient.get(`/v1/room/admin/get/roomList?siteIndex=${siteIndex ?? ''}&keyword=${keyword ?? ''}&orderType=${orderType ?? 0}&state=${state ?? '0'}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}&pageNo=${pageNo ?? 0}&pagePerRow=${pagePerRow ?? 10}&onlyInvited=${onlyInvited ?? false}&onlyPermanent=${onlyPermanent ?? false}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getRoomHistoryLists(params) {
        const { userID, token, siteIndex, pagePerRow, keyword, startDate, endDate, pageNo, cancelId } = params;
        return this.apiClient.get(`/v1/room/finished/${userID}?pagePerRow=${pagePerRow ?? 10}&pageNo=${pageNo ?? 0}&keyword=${keyword ?? ''}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}&siteIndex=${siteIndex ?? ''}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getAdminRoomHistoryLists(params) {
        const { userID, token, siteIndex, pagePerRow, keyword, startDate, endDate, pageNo, cancelId } = params;
        return this.apiClient.get(`/v1/room/admin/get/finishedList?siteIndex=${siteIndex ?? ''}&pagePerRow=${pagePerRow ?? 10}&pageNo=${pageNo ?? 0}&keyword=${keyword ?? ''}&startDate=${startDate ?? ''}&endDate=${endDate ?? ''}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async postRoom(params) {
        const { userID, token, site, body, cancelId } = params;
        return this.apiClient.post(`/v1/room/${userID}?site=${site}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifyRoom(params) {
        const { userID, roomCode, token, body, cancelId } = params;
        return this.apiClient.patch(`/v1/room/${userID}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async isPossibleToRemoveRoom(params) {
        const { roomCode, token, cancelId } = params;
        return this.apiClient.get(`/v1/IsPossibleToRemoveRoom/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async removeRoomByRoomCode(params) {
        const { userID, roomCode, token, cancelId } = params;
        return this.apiClient.delete(`/v1/room/${userID}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getRoomInfo(params) {
        const { roomCode, userId, token, cancelId } = params;
        return this.apiClient.get(`/v1/room/${userId}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getRoomOption(params) {
        const { userId, roomCode, token, cancelId } = params;
        return this.apiClient.get(`/v1/getRoomOption/${userId}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getRoomOptionByInstanceIndex(params) {
        const { userId, instanceIndex, token, cancelId } = params;
        return this.apiClient.get(`/v1/getRoomOption/${userId}/instanceIndex/${instanceIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getInvitedList(params) {
        const { userID, roomCode, token, cancelId } = params;
        const result = await this.apiClient.get(`/v1/attendee/${userID}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => RoomAttendees.fromJsonList(json));
    }
    async getAttendeeLog(params) {
        const { instanceIndex, token, cancelId } = params;
        const result = await this.apiClient.get(`/v1/attendeeLog/${instanceIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => RoomAttendeeLogData.fromJsonList(json));
    }
    async getAttendeeLogInfo(params) {
        const { instanceIndex, token, attendeeID, cancelId } = params;
        const result = await this.apiClient.get(`/v1/attendeeLog/${instanceIndex}/${attendeeID}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
        return handleResult(result, (json) => RoomAttendeeLogData.fromJson(json));
    }
    async getRoomLogs(params) {
        const { startDate, endDate, token, cancelId } = params;
        return this.apiClient.get(`/v1/roomLog?startDate=${startDate}&endDate=${endDate}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getRoomHistoryInfo(params) {
        const { instanceIndex, token, cancelId } = params;
        return this.apiClient.get(`/v1/roomLog/${instanceIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async joinRoomInfo(params) {
        const { finfo, siteID, cancelId } = params;
        return this.apiClient.get(`/v1/joinRoomInfo?siteID=${siteID}&finfo=${finfo}`, { cancelId: cancelId });
    }
    async getInstanceIdxFromRoomCode(params) {
        const { roomCode, cancelId } = params;
        return this.apiClient.get(`/v1/room/instanceIdx/${roomCode}`, { cancelId: cancelId });
    }
    async getAttendanceList(params) {
        const { instanceIndex, token, type, status, range, cancelId } = params;
        return this.apiClient.get(`/v1/attendanceList/${instanceIndex}?type=${type}&stats=${status}&range=${range}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getRoomPolicyInfo(params) {
        const { token, groupId, cancelId } = params;
        return this.apiClient.get(`/v1/room/policyInfo?groupID=${groupId ?? ''}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async roomFileAttach(params) {
        const { token, name, bytes, userID, cancelId } = params;
        return this.apiClient.multipartPost(`/v1/file/attachFile/${userID}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: { "file": new File([bytes], name) }, cancelId: cancelId });
    }
    async addFiles(params) {
        const { body, token, userID, roomCode, cancelId } = params;
        return this.apiClient.post(`/v1/file/addFile/${userID}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeFiles(params) {
        const { body, userID, roomCode, token, cancelId } = params;
        return this.apiClient.delete(`/v1/file/removeFile/${userID}/${roomCode}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async getNotePages(params) {
        const { roomCode, userID, noteId, token, cancelId } = params;
        let path = noteId == undefined || noteId.length === 0
            ? `/v1/room/notes/${userID}/${roomCode}`
            : `/v1/room/notes/${userID}/${roomCode}/${noteId}`;
        return this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
}
