export interface PostRepository {
    /** 게시글 생성 */
    save(post: Omit<IPost, "id">): Promise<IPost>;
    /** 페이지네이션 목록 조회 */
    findAllWithPagination({
      limit,
      offset,
    }: {
      offset?: number;
      limit?: number;
    }): Promise<{
      totalCount: number;
      prev: string | null;
      results: IPost[];
      next: string | null;
    }>;
    /** 게시글 목록 조회 */
    findAll(): Promise<IPost[]>;
    /** ID로 게시글 조회 */
    findById(id: string): Promise<IPost | null>;
    /** 게시글 수정 */
    update(postId: string, updatePostInfo: Partial<IPost>): Promise<IPost>;
    /** 게시글 삭제 */
    delete(postId: string): Promise<void>;
    /** 내 게시글 조회 */
    findByAllAuthor(id:string): Promise<IPost[]>;
  }
  