import { PostResponseDTO } from "@/api/post/dto/postResponse.dto";



export interface PostService {
  /** 게시글 생성 */
  createPost(
    userId: string,
    post: Omit<IPost, "id" | "author" | "createdAt">
  ): Promise<PostResponseDTO>;

  /** 게시글 목록 조회 */
  getPosts({ limit, offset,category }: { limit?: number; offset?: number,category?:string }): Promise<{
    totalCount: number;
    prev: string | null;
    results: PostResponseDTO[];
    next: string | null;
  }>;

  getPopularPosts({limit, offset }: { limit?: number; offset?: number }): Promise<{
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


  getPostsByCategory({
    category,
    limit,
    offset,
}: {
    category: string; // 필수 카테고리
    limit?: number; 
    offset?: number; 
}): Promise<{
    totalCount: number; 
    results: PostResponseDTO[]; 
}> 

  getMyPost(id:string): Promise<PostResponseDTO[]>;
  /** 내 댓글의 게시글 조회 */
  getMyPostComment(id: string): Promise<PostResponseDTO[]>;

  /** 좋아요 TOP 3 가져오기 */
  getTopLikesByCategory(): 
  Promise<{
  category: string;
  totalCount: number;
  cssClass: string;
  }[]>;

}
