import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import { NoticesServiceImpl } from "../service/notice.service";
import NoticesViewController from "../controller/notice.view.controller";
import { MongooseNoticeRepository } from "../repository/mongooseNotice.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

const noticeViewRouter = express.Router();

const NOTICE_VIEW_ROUTES = {
    /** NOTICE 목록 */
    NOTICE_LIST: "/notices",
    /** NOTICE 상세 */
    NOTICE_DETAIL: "/notices/detail/:noticeId",
} as const;

const noticesViewController = new NoticesViewController(
    new NoticesServiceImpl(new MongooseNoticeRepository())
  );

noticeViewRouter.get(
    extractPath(NOTICE_VIEW_ROUTES.NOTICE_LIST, ROUTES_INDEX.NOTICE_VIEW),
    noticesViewController.noticeListPage
);

noticeViewRouter.get(
    extractPath(NOTICE_VIEW_ROUTES.NOTICE_DETAIL, ROUTES_INDEX.NOTICE_VIEW),
    authCookieViewMiddleware(false),
    noticesViewController.noticeDetailPage
);



export default noticeViewRouter;
