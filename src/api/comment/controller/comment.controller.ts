import { NextFunction,Request,Response } from "express";
import { CommentService } from "../service/comment.service.type";

export default class CommentController{
    private readonly _commentService:CommentService;
    constructor(_commentService: CommentService){
        this._commentService = _commentService;

        this.editComment=this.editComment.bind(this);
        this.deleteComment=this.deleteComment.bind(this);
        this.createComment=this.createComment.bind(this);
        this.getComments=this.getComments.bind(this);
    }
    async getComments(
        req:Request<
        getCommentsRequest["path"],
        getCommentsRequest["params"],
        getCommentsRequest["body"],
        getCommentsResponse>,
        res:Response,
        next:NextFunction){
            try{
              //  console.log('postId:', req.params.postId);
                const comments=await this._commentService.getComments(req.params.postId);
              //  console.log('commentssss',comments)
                // return comments.map(comment => ({
                //     id: comment.postId.id,
                //     content: comment.content,
                //     image: comment.image,
                //     updatedAt: comment.updatedAt,
                //     postId: comment.postId._id, // postId의 _id만 반환
              //  }));
                res.send(comments)
            }catch(error){
                next(error)
            }
        }
        async createComment(
            req:Request<
            createCommentRequest["path"],
            createCommentRequest["params"],
            createCommentRequest["body"],
            createCommentResponse>,
            res:Response,
            next:NextFunction){
                const postId=req.params.postId;
                const { content,image } = req.body;
                // const body = {
                //     ...req.body,
                //     userId: req.user.userId,
                //   };
                // const {content,image}=req.body;
               
    
                // if(!postId){
                //     return res.status(400).send('postId is required');
                // }
               
                try{
                    const newComment=await this._commentService.createComment(req.user.userId,{
                        postId,
                        content,
                        image,
                    })
                    if (!newComment) {
                        return res.status(400).json({ message: "댓글 생성 실패" });
                    }
                res.send(newComment)
                }catch(error){
                    next(error)
                }
            }
    async editComment(
        req:Request<
        updateCommentRequest["path"],
        updateCommentRequest["params"],
        updateCommentRequest["body"],
        updateCommentResponse>,
        res:Response,
        next:NextFunction){
           const {commentId}=req.params;
           const {content,image}=req.body;
           if (!commentId) {
            return res.status(400).send('commentId is required');
        }

           try{
            // 댓글 수정 로직 작성
            const updatedComment = await this._commentService.editComment(commentId, {content,image});
            // if (!updatedComment) {
            //     return res.status(404).json({ message: "댓글 수정 실패" });
            // }
            res.send(updatedComment)
           }catch(error){
            next(error);
           }
    }
  
    async deleteComment(
        req:Request<
        deleteCommentRequest["path"],
        deleteCommentRequest["params"],
        deleteCommentRequest["body"],
        deleteCommentResponse>,
        res:Response,
        next:NextFunction){
            const{commentId}=req.params;
            try{
                await this._commentService.deleteComment(commentId);
                res.send('댓글 삭제 성공')
            }catch(error){
                next(error)
            }
    
    }
    
}