import express from "express";
import PostController from "@/api/post/controller/post.controller";
import { PostsServiceImpl } from "@/api/post/service/post.service";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";


const postRouter = express.Router();

const  POST_ROUTER = {
    /**글 목록 조회 */
    GET_POSTS: `/api/post`,

    /**글 상세 조회  */
    GET_POST: `/api/posts/:postId`,

    /**글 생성  */
    CREATE_POST: `/api/post`,

    /**글 수정 */
    UPDATE_POST: `/api/post/:postId`,

    /**글 삭제  */
    DELETE_POST: `/api/posts/:postId`,

    /**글 좋아요 */
    LIKE_POST: `/api/posts/:postId/like`,

    /** 내 글 목록 조회 */
    GET_MY_POSTS: '/api/post/my/:id',
    /** 내 답변 글 목록 조회 */
    GET_MY_POSTS_COMMENT: '/api/post/comment/my/:id',
  } as const;

  const postController = new PostController(
    new PostsServiceImpl(
      new MongoosePostRepository(),
      new MongooseUserRepository(),
      new MongooseCommentRepository()
    )
  );

postRouter.get(
    (POST_ROUTER.GET_POSTS),
    authUserMiddleware,
    postController.getPost
  );

  postRouter.get(
    (POST_ROUTER.GET_POST),
    authUserMiddleware,
    postController.getPostDetail
  );

  postRouter.post(
    (POST_ROUTER.CREATE_POST),
    authUserMiddleware,
    postController.createPost
  );

  postRouter.put(
    (POST_ROUTER.UPDATE_POST),
    authUserMiddleware,
    postController.updatePost
  );

  postRouter.delete(
    (POST_ROUTER.DELETE_POST),
    authUserMiddleware,
    postController.deletePost
  );

  postRouter.post(
    (POST_ROUTER.LIKE_POST),
    authUserMiddleware,
    postController.likePost
  );

  postRouter.get(
    POST_ROUTER.GET_MY_POSTS,
    authUserMiddleware,
    postController.getMyPost
  );

  postRouter.get(
    POST_ROUTER.GET_MY_POSTS_COMMENT,
    authUserMiddleware,
    postController.getMyPostComment
  );

export default postRouter