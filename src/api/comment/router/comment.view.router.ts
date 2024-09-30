// import express from "express";
// import CommentViewController from "../controller/comment.view.controller";
// import { CommentsServiceImpl } from "../service/comment.service";
// import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
// import { MongooseCommentRepository } from "../repository/mongooseComment.repository";
// import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";

// const commentViewController=new CommentViewController(
//     new CommentsServiceImpl(
//         new MongooseCommentRepository(),
//         new MongooseUserRepository (), 

//         new MongoosePostRepository(),   
  
//     )
// )

// export const commentViewRouter=express.Router();
// const COMMENT_VIEW_ROUTER={
//     /**댓긂 목록 조회 */
//     COMMENT_LIST:`/post/detail/:postId/:commentId`
   
// }

// commentViewRouter.get(COMMENT_VIEW_ROUTER.COMMENT_LIST,(req,res,next)=>{


//     commentViewController.commentListPage(req,res,next)});