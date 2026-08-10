import { ApiClient, type FoxApiResult, type V2BaseParams, authHeader, v2Path } from "./shared";

/**
 * v2 room_notes — 서버 apiHandler_room_notes.go (컨트롤러 apiController_room_notes.go) 대응.
 * 자동 생성: tools/gen-v2-services.mjs
 */
export class RoomNotesService {
  constructor(private readonly apiClient: ApiClient) {}

  /** GET /roomNotes */
  async getRoomNotes(params: V2BaseParams): Promise<FoxApiResult> {
    const { token, siteId, query, cancelId } = params;
    return this.apiClient.get(v2Path(siteId, "/roomNotes", query), { header: authHeader(token), cancelId });
  }
}
