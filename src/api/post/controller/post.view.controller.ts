import { Request, Response, NextFunction } from "express";
import { PostService } from "@/api/post/service/post.service.type";
import { db } from "@/db/mongoose";
import { CommentService } from "@/api/comment/service/comment.service.type";

export default class PostViewController {
  private readonly _postService: PostService;
  private readonly _commentService: CommentService;
  constructor(_postService: PostService, _commentService: CommentService) {
    this._postService = _postService;
    this._commentService = _commentService;

    this.postListPage = this.postListPage.bind(this);
    this.postDetailPage = this.postDetailPage.bind(this);
    this.postWritePage = this.postWritePage.bind(this);
    this.postEditPage = this.postEditPage.bind(this);
  }

  /**게시글 목록 페이지 부분  보이게 할거 */
  async postListPage(req: Request, res: Response, next: NextFunction) {
    const offset = Number(req.query.offset) || 0;
    const limit = Number(req.query.limit) || 5;
    const post = await this._postService.getPosts({
      offset,
      limit,
    });

    const category = await this._postService.getTopLikesByCategory();

    const cssClass = ['animal','gran','game'];

    for (let i = 0; i < category.length; i++) {
      // const randomIndex = Math.floor(Math.random() * cssClass.length);
      category[i].cssClass = cssClass[i];
    };

    // console.log(category);
    // res.render(`post/index`, { post, category });

    const popularPost=await this._postService.getPopularPosts({
      offset,
      limit,
    })
    res.render(`post/index`, { post ,popularPost, category});

  }
  

  /**게시글 상세 페이지 부분 */
  async postDetailPage(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const post = await this._postService.getPostDetail(id);

    console.log(id);
    const comments = await this._commentService.getComments(id);
    const authorId = post?.author.id;
    res.render("post/postDetail", { post, comments });
  }

  /** 게시글 수정 페이지 */
  async postEditPage(req: Request, res: Response, next: NextFunction) {
    const { postId } = req.params;
    const post = await this._postService.getPostDetail(postId); 
   res.render("post/postEdit", {post})
  }

  /** 게시글 작성 페이지 */
  async postWritePage(req: Request, res: Response, next: NextFunction) {
    // const currentTime = new Date();
    // (await db)
    //   .collection("posts")
    //   .insertOne({ title: req.body.title, content: req.body.content, createAt: currentTime});
    //   res.redirect('/views/post')
    res.render("post/postWrite");
  }
}
