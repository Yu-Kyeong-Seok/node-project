export interface NoticeRepository {
  /** NOTICE 생성 */
  save(notice: Omit<INotice, "id">): Promise<INotice>;
  /** NOTICE 목록 조회 */
  findAll(): Promise<INotice[]>;
  /** ID로 NOTICE 조회 */
  findById(noticeId: string): Promise<INotice | null>;
    /** NOTICE 수정 */
  update(noticeId: string, updateNoticeInfo: Partial<INotice>): Promise<INotice>;
    /** NOTICE 삭제 */
  delete(noticeId: string): Promise<void>;
}