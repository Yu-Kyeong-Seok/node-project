import express from "express";
import PostController from "@/api/post/controller/post.controller";
import { PostsServiceImpl } from "@/api/post/service/post.service";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import PostViewController from "../controller/post.view.controller";

const postViewRotuer = express.Router();
const BASE_PATH = "/views";

const  POST_VIEW_ROUTER = {
  /**글 목록 조회 */
  GET_POSTS: `/api/post`,

  /**글 상세 조회  */
  GET_POST: `/api/posts/:postId`,

  /**글 생성  */
  CREATE_POST: `/api/post`,

  /**글 수정 */
  UPDATE_POST: `/api/posts/:postId`,

  /**글 삭제  */
  DELETE_POST: `/api/posts/:postId`,
} as const;

const postViewController = new PostViewController(
  new PostsServiceImpl(
    new MongoosePostRepository(),
    new MongooseUserRepository()
  )
);


postViewRotuer.get(`${BASE_PATH}/post`, (req, res, next) => {
  postViewController.postListPage(req, res, next)
  res.render(`post/index`);
});

postViewRotuer.get(`${BASE_PATH}/post/detail`, (req, res, next) => {
  postViewController.postDetailPage(req, res, next)
  });

export default postViewRotuer;



