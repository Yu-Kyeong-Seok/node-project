import { PostResponseDTO } from "@/api/post/dto/postResponse.dto";



export interface PostService {
  /** 게시글 생성 */
  createPost(
    userId: string,
    post: Omit<IPost, "id" | "author" | "createdAt">
  ): Promise<PostResponseDTO>;

  /** 게시글 목록 조회 */
  getPosts({ limit, offset }: { limit?: number; offset?: number }): Promise<{
    totalCount: number;
    prev: string | null;
    results: PostResponseDTO[];
    next: string | null;
  }>;

  /** 게시글 조회 */
  getPostDetail(id: string): Promise<PostResponseDTO | null>;

  /** 게시글 수정 */
  updatePost(
    postId: string,
    updatedPost: Omit<IPost, "id" | "author" | "createdAt">
  ): Promise<void>;

  /** 게시글 삭제 */
  deletePost(postId: string): Promise<void>;

  /**좋아요 */
  likePost(postId:string):Promise<number>;

  /** 내 게시글 조회 */
  getMyPost(id:string): Promise<PostResponseDTO[]>;

  getMyPostComment(id: string): Promise<PostResponseDTO[]>;
}
