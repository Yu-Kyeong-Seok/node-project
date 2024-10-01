import express from "express";
import CommentController from "../controller/comment.controller";
import { CommentsServiceImpl } from "../service/comment.service";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { MongooseCommentRepository } from "../repository/mongooseComment.repository";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

export const commentRouter = express.Router();
const commentController = new CommentController(
    new CommentsServiceImpl(
        new MongooseCommentRepository(), // CommentRepository
        new MongooseUserRepository(),
        new MongoosePostRepository()    // PostRepository
    )
);

const COMMENT_ROUTES = {
    /** 댓글 조회 */
    GET_COMMENTS: `/api/:postId/comments`,
    /** 댓글 수정 */
    EDIT_COMMENT: `/api/:postId/comments/:commentId`,
    /** 댓글 작성 */
    CREATE_COMMENT: `/api/posts/:postId/comments`,
    /** 댓글 삭제 */
    DELETE_COMMENT: `/api/:postId/comments/:commentId`,
    /** 내 댓글 조회 */
    GET_MY_POSTS: '/api/comments/my/:id',
} as const;


commentRouter.get(COMMENT_ROUTES.GET_COMMENTS, commentController.getComments.bind(commentController));
commentRouter.post(COMMENT_ROUTES.CREATE_COMMENT, authUserMiddleware, commentController.createComment.bind(commentController) as any);
commentRouter.put(COMMENT_ROUTES.EDIT_COMMENT, authUserMiddleware,commentController.editComment.bind(commentController) as any);
// commentRouter.post(COMMENT_ROUTES.CREATE_COMMENT),authUserMiddleware,commentController.createComment.bind(commentController);

commentRouter.delete(COMMENT_ROUTES.DELETE_COMMENT,authUserMiddleware, commentController.deleteComment.bind(commentController)as any);
commentRouter.get(COMMENT_ROUTES.GET_MY_POSTS, authUserMiddleware,commentController.getMyComments)

export default commentRouter;