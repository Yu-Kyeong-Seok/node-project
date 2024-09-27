import express from "express";
import PostController from "@/api/post/controller/post.controller";
import { PostsServiceImpl } from "@/api/post/service/post.service";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import PostViewController from "../controller/post.view.controller";
import { db } from "@/db/mongoose";
import { date } from "yup";
const { ObjectId } = require("mongodb");
const { MongoClient } = require("mongodb");

const postViewRouter = express.Router();
const BASE_PATH = "/views";

const POST_VIEW_ROUTER = {
  /**글 목록 조회 */
  POST_LIST: `/post`,

  /**글 상세 조회  */
  POST_DETAIL: `/posts/:postId`,

  /**글 작성  */
  POST_WRITE: `/post/wirte`,

  /**글 수정 */
  POST_EDIT: `/posts/:postId`,
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
 postViewController.postWritePage(req, res, next);
});
postViewRouter.post("/post/write", async (req, res) => {
  const currentTime = new Date();
  (await db)
    .collection("posts")
    .insertOne({ title: req.body.title, content: req.body.content, createAt: currentTime});
    res.redirect('/views/post')


});

/**수정 */
postViewRouter.get(`${BASE_PATH}/post/edit`, (req, res, next) => {
  postViewController.postEditPage(req, res, next);
});

export default postViewRouter;
