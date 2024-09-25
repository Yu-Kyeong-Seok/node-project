import express from "express";
import { NoticesServiceImpl } from "../service/notice.service";
import NoticesViewController from "../controller/notice.view.controller";
import { MongooseNoticeRepository } from "../repository/mongooseNotice.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

const noticeViewRouter = express.Router();
const noticesViewController = new NoticesViewController(new NoticesServiceImpl(new MongooseNoticeRepository()));

// const NOTICE_VIEW_ROUTES = {
//     /** NOTICE 목록 */
//     NOTICE_LIST: "/notices",
//     /** NOTICE 상세 */
//     NOTICE_DETAIL: "/notices/detail/:noticeId",
// } as const;

// const noticesViewController = new NoticesViewController(
//     new NoticesServiceImpl(new MongooseNoticeRepository())
//   );

// noticeViewRouter.get(
//     extractPath(NOTICE_VIEW_ROUTES.NOTICE_LIST, ROUTES_INDEX.NOTICE_VIEW),
//     noticesViewController.noticeListPage
// );

// noticeViewRouter.get(
//     extractPath(NOTICE_VIEW_ROUTES.NOTICE_DETAIL, ROUTES_INDEX.NOTICE_VIEW),
//     authCookieViewMiddleware(false),
//     noticesViewController.noticeDetailPage
// );

const BASE_PATH = "/views";

noticeViewRouter.get(`${BASE_PATH}/admin/notices`, (req, res, next) => {
  noticesViewController.getNoticesView(req, res, next); 
});

noticeViewRouter.get(`${BASE_PATH}/admin/notices`, (req, res, next) => {
  noticesViewController.getNoticeDetailView(req, res, next); 
});

export default noticeViewRouter;
