import { UserRepository } from "@/api/users/repository/user/user.repository";
import { PostResponseDTO } from "@/api/post/dto/postResponse.dto";
import { PostRepository } from "@/api/post/repository/post.repository";
import { PostService } from "@/api/post/service/post.service.type";
import HttpException from "@/api/common/exceptions/http.exception";
import { CommentRepository } from "@/api/comment/repository/comment.respository";

export class PostsServiceImpl implements PostService {
  private readonly _postRepository: PostRepository;
  private readonly _userRepository: UserRepository;
  private readonly _commentRepository: CommentRepository;
 
  constructor(postRepository: PostRepository, userRepository: UserRepository,commentRepository:CommentRepository) {
    this._postRepository = postRepository;
    this._userRepository = userRepository;
    this._commentRepository= commentRepository;

  }

  async createPost(
    userId: string,
    post: Omit<IPost, "id" | "user">
  ): Promise<PostResponseDTO> {
    // 게시글 생성
    // 1. 작성자를 찾는다.
    // 2. 작성자가 없으면 에러를 던져준다.
    // 3. 작성자가 있으면, 게시글을 생성한다.
    // 3-1. 게시글을 생성할때 author에 찾은 작성자를 넣어준다.

    // 작성자 찾기
    const author = await this._userRepository.findById(userId);

    if (!author) {
      throw new HttpException(404, "작성자를 찾을 수 없어요~.");
    }

    const newPost = await this._postRepository.save({
      ...post,
      author,
    });

    const newPosts = author.posts?.concat(newPost);

    await this._userRepository.update(author.id, {
      posts: newPosts,
    });

    return new PostResponseDTO(newPost,0);
  }
  
  async getPosts({
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: PostResponseDTO[];
    next: string | null;
  }> {
    const posts = await this._postRepository.findAllWithPagination({
      limit,
      offset,
    });
    const sortedPosts = posts.results.sort((a, b) => b.likeCount - a.likeCount);
    console.log('sortedP',sortedPosts)

    //댓글 수 가져오는 배열
    const commentCounts=await Promise.all(posts.results.map(post=>this._commentRepository.countByPostId(post.id)))
    
    //각 post에 댓글 수 추가
    const resultsCommentCount=posts.results.map((post,index)=>
      new PostResponseDTO(post,commentCounts[index])
    )
    
    return {
      totalCount: posts.totalCount,
      prev: posts.prev,
     // results: posts.results.map((post) => new PostResponseDTO(post)),
     results:resultsCommentCount,
      next: posts.next,
    };
  }
  async getPostDetail(postId: string): Promise<PostResponseDTO | null> {
    
    const post = await this._postRepository.findById(postId);

    if (!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }
    const commentCount = await this._commentRepository.countByPostId(postId);
    return new PostResponseDTO(post,commentCount);
  }
  async updatePost(
    postId: string,
    updatedPost: Omit<IPost, "id" | "user">
  ): Promise<void> {
    await this._postRepository.update(postId, updatedPost);

    return;
  }

  async deletePost(postId: string): Promise<void> {
    await this._postRepository.delete(postId);
    console.log(postId)
  }

  async likePost(postId: string): Promise<number> {
    try {
      const post = await this._postRepository.findById(postId);

      if (!post) {
          throw new HttpException(404, "게시글을 찾을 수 없습니다.");
      }

      if (typeof post.likeCount !== 'number') {
          post.likeCount = 0;
      }

      post.likeCount += 1;
      await this._postRepository.update(postId, { likeCount: post.likeCount });

      return post.likeCount;
  } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
      throw new HttpException(500, "좋아요 처리 중 오류가 발생했습니다."); // 적절한 오류 처리
  }

}
  async getMyPost(id: string): Promise<IPost[]> {
    const posts = await this._postRepository.findByAllAuthor(id);

    return posts;
  }

}
