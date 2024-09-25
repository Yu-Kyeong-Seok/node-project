import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import { NoticesServiceImpl } from "../service/notice.service";
import NoticesViewController from "../controller/notice.view.controller";
import { MongooseNoticeRepository } from "../repository/mongooseNotice.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import AdminNoticesViewController from "../controller/adminNotice.view.controller";

const adminNoticeViewRouter = express.Router();
const adminNoticesViewsController = new AdminNoticesViewController(new NoticesServiceImpl(new MongooseNoticeRepository()));


const ADMIN_NOTICE_VIEW_ROUTES = {
    /** NOTICE 목록 */
    NOTICE_LIST: "/admin/notices",
    /** NOTICE 상세 */
    NOTICE_DETAIL: "/admin/notices/detail/:noticeId",
    /** NOTICE 작성 */
    NOTICE_WRITE: "/admin/notices/write",
    /** NOTICE 수정 */
    NOTICE_EDIT: "/admin/notices/:noticeId/edit",
} as const;

const adminNoticesViewController = new AdminNoticesViewController(
    new NoticesServiceImpl(new MongooseNoticeRepository())
  );

adminNoticeViewRouter.get(
    extractPath(ADMIN_NOTICE_VIEW_ROUTES.NOTICE_LIST, ROUTES_INDEX.ADMIN_NOTICE_VIEW),
    adminNoticesViewController.noticeListPage
);

adminNoticeViewRouter.get(
    extractPath(ADMIN_NOTICE_VIEW_ROUTES.NOTICE_DETAIL, ROUTES_INDEX.ADMIN_NOTICE_VIEW),
    authCookieViewMiddleware(false),
    adminNoticesViewController.noticeDetailPage
);

adminNoticeViewRouter.get(
    extractPath(ADMIN_NOTICE_VIEW_ROUTES.NOTICE_WRITE, ROUTES_INDEX.ADMIN_NOTICE_VIEW),
    authCookieViewMiddleware(false),
    adminNoticesViewController.noticeWritePage
);
adminNoticeViewRouter.get(
    extractPath(ADMIN_NOTICE_VIEW_ROUTES.NOTICE_EDIT, ROUTES_INDEX.ADMIN_NOTICE_VIEW),
    authCookieViewMiddleware(false),
    adminNoticesViewController.noticeEditPage
);



export default adminNoticeViewRouter;
