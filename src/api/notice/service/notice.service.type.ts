import { NoticeResponseDTO } from "../dto/noticeResponse.dto";
import { NoticeServiceImpl } from "./notice.service";

export interface NoticeService {
  /** NOTICE 생성 */
  createNotice(params: Omit<INotice, "id">): Promise<NoticeResponseDTO>;
  /** NOTICE 목록 조회 */
  getNotices(): Promise<NoticeResponseDTO[]>;
  /** NOTICE 상세 조회 */
  getNoticeDetail(noticeId: string): Promise<NoticeResponseDTO | null>;
  /** NOTICE 수정 */
  updateNotice(noticeId: string, params: Partial<INotice>): Promise<void>;
  /** NOTICE 삭제 */
  deleteNotice(noticeId: string): Promise<void>;
} 