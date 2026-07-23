import { buildPath, toMultipartValue } from "../apiClient";
export class NoticeService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    async getNotices(params) {
        const { token, keyword, page, pageNo, pagePerRow, query, cancelId } = params;
        const path = buildPath("/v1/notice/get/list", { ...(query ?? { keyword, page: page ?? pageNo, pagePerRow }), type: 2 });
        return this.apiClient.get(path, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getNoticeInfo(params) {
        const { token, noticeIndex, cancelId } = params;
        return this.apiClient.get(`/v1/notice/get/info/${noticeIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async getNoticeFileList(params) {
        const { token, noticeIndex, cancelId } = params;
        return this.apiClient.get(`/v1/notice/get/fileList/${noticeIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async addNoticeContents(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.post("/v1/notice/add/contents", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async addNoticeFiles(params) {
        const { token, files, formData, noticeIndex, cancelId } = params;
        const fileList = files ?? [];
        const body = formData ?? {};
        for (let i = 0; i < fileList.length; i++) {
            const fileData = fileList[i];
            body[`file_${i}`] = toMultipartValue(fileData);
        }
        return this.apiClient.multipartPost(`/v1/notice/add/file/${noticeIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async modifyNotice(params) {
        const { token, body, cancelId } = params;
        return this.apiClient.patch("/v1/notice/modify/info", { header: { Authorization: `Bearer ${token}`, From: "web" }, body: body, cancelId: cancelId });
    }
    async removeNotice(params) {
        const { token, noticeIndex, cancelId } = params;
        return this.apiClient.delete(`/v1/notice/delete/${noticeIndex}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
    async removeNoticeFile(params) {
        const { token, key, noticeIndex, cancelId } = params;
        return this.apiClient.delete(`/v1/notice/delete/file/${noticeIndex}/${encodeURIComponent(key)}`, { header: { Authorization: `Bearer ${token}`, From: "web" }, cancelId: cancelId });
    }
}
