import { ROUTES_INDEX } from "@/routers/index"
import { extractPath } from "@/utils/path.util";
import express from "express";
import UsersViewController from "../controller/users.view.controller";
import { UsersServiceImpl } from "../service/users.service";
import { MongooseUserRepository } from "../repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "../repository/profile/mongooseProfile.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware"

const userViewRouter = express.Router();

const USER_VIEW_ROUTES = {
  /** 마이페이지 */
  MY_PAGE: "/users/me",
  /** 회원 상세 */
  USER_DETAIL: "/users/:userId",
  /** 회원 탈퇴 */
  USER_DELETE: "/users/withdrawal",
} as const;

const usersViewController = new UsersViewController(
  new UsersServiceImpl(
    new MongooseUserRepository(),
    new MongooseProfileRepository()
  )
);

userViewRouter.get(
  extractPath(USER_VIEW_ROUTES.MY_PAGE, ROUTES_INDEX.USER_VIEW),
  authCookieViewMiddleware(true),
  usersViewController.myPage
);

userViewRouter.get(
  extractPath(USER_VIEW_ROUTES.USER_DELETE, ROUTES_INDEX.USER_VIEW),
  usersViewController.withDrawPage
);

userViewRouter.get(
  extractPath(USER_VIEW_ROUTES.USER_DETAIL, ROUTES_INDEX.USER_VIEW),
  usersViewController.userDetailPage
);

export default userViewRouter;
