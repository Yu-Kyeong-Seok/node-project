export interface FaqRepository {
  /** FAQ 생성 */
  save(faq: Omit<IFaq, "id">): Promise<IFaq>;
  /** FAQ 목록 조회 */
  findAll(): Promise<IFaq[]>;
  /** ID로 FAQ 조회 */
  findById(faqId: string): Promise<IFaq | null>;
    /** FAQ 수정 */
  update(faqId: string, updateFaqInfo: Partial<IFaq>): Promise<IFaq>;
    /** FAQ 삭제 */
  delete(faqId: string): Promise<void>;
}