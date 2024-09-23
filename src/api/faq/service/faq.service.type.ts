import { FaqResponseDTO } from "../dto/faqResponse.dto";

export interface FaqService {
  /** FAQ 생성 */
  createFaq(): Promise<FaqResponseDTO>;
  /** FAQ 목록 조회 */
  getFaqs(): Promise<FaqResponseDTO[]>;
  /** FAQ 조회 */
  getFaqDetail(): Promise<FaqResponseDTO>;
  /** FAQ 수정 */
  updateFaq(): Promise<void>;
  /** FAQ 삭제 */
  deleteFaq(): Promise<void>;
} 