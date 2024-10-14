import { NextFunction,Response,Request } from "express";
import { CommentService } from "../service/comment.service.type";

export default class CommentViewController {
    private readonly _commentService: CommentService;
  
    constructor(_commentService: CommentService) {
      this._commentService = _commentService;
      this.commentListPage = this.commentListPage.bind(this);
    }
  
    async commentListPage(req: Request, res: Response, next: NextFunction) {
      const { postId } = req.params;
      try {
        const comments = await this._commentService.getComments(postId) || { results: [] }; 
        // comments 변수를 템플릿에 전달
        res.render('post/postDetail', { comments }); // 'comment' -> 'comments'로 수정
      } catch (error) {
        next(error);
      }
    }
  }
  