import { NoticeResponseDTO } from "../dto/noticeResponse.dto";

export interface NoticeService {
  /** FAQ 생성 */
  createNotice(): Promise<NoticeResponseDTO>;
  /** FAQ 목록 조회 */
  getNotices(): Promise<NoticeResponseDTO[]>;
  /** FAQ 조회 */
  getNoticeDetail(): Promise<NoticeResponseDTO>;
  /** FAQ 수정 */
  updateNotice(): Promise<void>;
  /** FAQ 삭제 */
  deleteNotice(): Promise<void>;
} 