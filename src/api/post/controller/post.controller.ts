import { NextFunction, Request, Response } from "express";
import { PostService } from "@/api/post/service/post.service.type";

export default class PostController {
    private readonly _postService: PostService;
    constructor(_postService: PostService) {
      this._postService = _postService;
  
      this.getPost = this.getPost.bind(this);
      this.getPostDetail = this.getPostDetail.bind(this);
      this.createPost = this.createPost.bind(this);
      this.updatePost = this.updatePost.bind(this);
      this.deletePost = this.deletePost.bind(this);
    }

    /** 게시글 목록 조회 */
  async getPost(
    req: Request<
      getPostsRequest["path"],
      getPostsResponse,
      getPostsRequest["body"],
      getPostsRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { limit, offset } = req.query;

    try {
      const posts = await this._postService.getPosts({
        limit,
        offset,
      });

      res.send(posts);
    } catch (error) {
      next(error);
    }
  }

  /** 게시글 상세 조회 */
  async getPostDetail(
    req: Request<
      getPostDetailRequest["path"],
      getPostDetailResponse,
      getPostDetailRequest["body"],
      getPostDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { postId } = req.params;
    try {
      const post = await this._postService.getPostDetail(postId);

      res.send(post);
    } catch (error) {
      next(error);
    }
  }

  /** 게시글 작성 */
  async createPost(
    req: Request<
      createPostRequest["path"],
      createPostResponse,
      createPostRequest["body"],
      createPostRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { title, content } = req.body;
    try {
      const post = await this._postService.createPost(req.user.userId, {
        title,
        content,
        category,
        image,
      });

      res.send(post);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  /** 게시글 수정 */
  async updatePost(
    req: Request<
      updatePostRequest["path"],
      updatePostResponse,
      updatePostRequest["body"],
      updatePostRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { postId } = req.params;
    const { title, content } = req.body;
    try {
      const post = await this._postService.updatePost(postId, {
        title,
        content,
        category,
        image
      });

      res.send(post);
    } catch (error) {
      next(error);
    }
  }

  /** 게시글 삭제 */
  async deletePost(
    req: Request<
      deletePostRequest["path"],
      deletePostResponse,
      deletePostRequest["body"],
      deletePostRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { postId } = req.params;

    try {
      await this._postService.deletePost(postId);

      res.send("삭제 성공");
    } catch (error) {
      next(error);
    }
  }
}
