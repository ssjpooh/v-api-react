import { ApiClient, type FoxApiResult, type RequestOptions, buildPath } from "../apiClient";

type V2Query = Record<string, string | number | boolean>;

type V2BaseParams = {
  token: string;
  siteId?: string;
  query?: V2Query;
  cancelId?: string;
};

type V2BodyParams = V2BaseParams & {
  body?: RequestOptions["body"];
};

function authHeader(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}`, From: "web" };
}

function v2Path(siteId: string | undefined, path: string, query?: V2Query): string {
  const prefix = siteId ? `/v2/${encodeURIComponent(siteId)}` : "/v2";
  return buildPath(`${prefix}${path}`, query ?? {});
}

export class V2RoomService {
  constructor(private readonly apiClient: ApiClient) {}

  async listRooms(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/rooms", query), { header: authHeader(token), cancelId });
  }

  async getRoom(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/room", query), { header: authHeader(token), cancelId });
  }

  async createRoom(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/room", query), { header: authHeader(token), body, cancelId });
  }

  async patchRoom(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/room", query), { header: authHeader(token), body, cancelId });
  }

  async deleteRoom(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/room", query), { header: authHeader(token), body, cancelId });
  }

  async listAttendees(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/attendees", query), { header: authHeader(token), cancelId });
  }

  async getAttendee(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/attendee", query), { header: authHeader(token), cancelId });
  }

  async getInvitedAttendee(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/attendee/invited", query), { header: authHeader(token), cancelId });
  }

  async addInvitedAttendees(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.post(v2Path(siteId, "/attendees", query), { header: authHeader(token), body, cancelId });
  }

  async updateInvitedAttendee(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.patch(v2Path(siteId, "/attendees", query), { header: authHeader(token), body, cancelId });
  }

  async deleteInvitedAttendees(params: V2BodyParams): Promise<FoxApiResult> {
    const { token, siteId, query, body, cancelId } = params;
    return this.apiClient.delete(v2Path(siteId, "/attendees", query), { header: authHeader(token), body, cancelId });
  }

  async getAttendance(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/attendance", query), { header: authHeader(token), cancelId });
  }

  async listAttendeeLogs(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/attendee-logs", query), { header: authHeader(token), cancelId });
  }

  async getAttendeeLog(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/attendee-log", query), { header: authHeader(token), cancelId });
  }

  async listRoomLogs(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/roomLogs", query), { header: authHeader(token), cancelId });
  }

  async getRoomLog(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/roomLog", query), { header: authHeader(token), cancelId });
  }
}
