import { FaqResponseDTO } from "../dto/faqResponse.dto";
import { FaqsServiceImpl } from './faq.service';

export interface FaqsService {
  /** FAQ 생성 */
  createFaq(params: Omit<IFaq, "id">): Promise<FaqResponseDTO>;
  /** FAQ 목록 조회 */
  getFaqs(): Promise<FaqResponseDTO[]>;
  /** FAQ 상세 조회 */
  // getFaqDetail(faqId: string): Promise<FaqResponseDTO | null>;
  /** FAQ 수정 */
  updateFaq(faqId: string, params: Partial<IFaq>): Promise<void>;
  /** FAQ 삭제 */
  deleteFaq(faqId: string): Promise<void>;
} 