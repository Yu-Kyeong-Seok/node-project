import { authCookieRoleMiddleware } from "@/api/common/middlewares/authCookieRole.middleware";
import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";

const adminUserViewRouter = express.Router();

const ADMIN_USER_VIEW_ROUTES = {
  /** 회원 목록 */
  USER_LIST: "/admin/users",
  /** 회원 상세 / 수정 */
  USER_DETAIL: "/admin/users/:userId",
} as const;

adminUserViewRouter.get(
  extractPath(ADMIN_USER_VIEW_ROUTES.USER_LIST, ROUTES_INDEX.ADMIN_USER_VIEW),
  authCookieRoleMiddleware(["admin"]),
  (req, res, next) => {
    console.log(req.user);
    res.render("admin/users/userList");
  }
);

adminUserViewRouter.get(
  extractPath(ADMIN_USER_VIEW_ROUTES.USER_DETAIL, ROUTES_INDEX.ADMIN_USER_VIEW),
  (req, res, next) => {
    res.render("admin/users/userDetail");
  }
);

export default adminUserViewRouter;
