import { NoticeResponseDTO } from "../dto/noticeResponse.dto";

export interface NoticeService {
  /** NOTICE 생성 */
  createNotice(params: Omit<IFaq, "id">): Promise<NoticeResponseDTO>;
  /** NOTICE 목록 조회 */
  getNotices(): Promise<NoticeResponseDTO[]>;
  /** NOTICE 조회 */
  getNoticeDetail(faqId: string): Promise<NoticeResponseDTO>;
  /** NOTICE 수정 */
  updateNotice(faqId: string): Promise<void>;
  /** NOTICE 삭제 */
  deleteNotice(faqId: string): Promise<void>;
} 