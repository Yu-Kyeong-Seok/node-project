import express from "express";
import PostController from "@/api/post/controller/post.controller";
import { PostsServiceImpl } from "@/api/post/service/post.service";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import PostViewController from "../controller/post.view.controller";
import { db } from "@/db/mongoose";
const { ObjectId } = require("mongodb");
const { MongoClient } = require("mongodb");

const postViewRouter = express.Router();
const BASE_PATH = "/views";

const POST_VIEW_ROUTER = {
  /**글 목록 조회 */
  GET_POSTS: `/post`,

  /**글 상세 조회  */
  GET_POST: `/posts/:postId`,

  /**글 작성  */
  CREATE_POST: `/post`,

  /**글 수정 */
  UPDATE_POST: `/posts/:postId`,

  /**글 삭제  */
  DELETE_POST: `/posts/:postId`,
} as const;

const postViewController = new PostViewController(
  new PostsServiceImpl(
    new MongoosePostRepository(),
    new MongooseUserRepository()
  )
);
/**목록조회 */
postViewRouter.get(`${BASE_PATH}/post`, (req, res, next) => {
  postViewController.postListPage(req, res, next);
});
/**상세조회 */
postViewRouter.get(`${BASE_PATH}/post/detail/:id`,  (req, res, next) => {
  postViewController.postDetailPage(req, res, next);
});



/**작성 */
postViewRouter.get(`${BASE_PATH}/post/write`, (req, res, next) => {
  res.render("post/postWrite");
});

postViewRouter.post("/add", async (req, res) => {
  (await db)
    .collection("POST")
    .insertOne({ title: req.body.title, content: req.body.content });
});

/**수정 */
postViewRouter.get(`${BASE_PATH}/post/edit`, (req, res, next) => {
  res.render("post/postEdit");
});
/**삭제  */

export default postViewRouter;
