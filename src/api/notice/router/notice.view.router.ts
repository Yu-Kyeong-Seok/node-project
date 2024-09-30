import express from "express";
import { NoticesServiceImpl } from "../service/notice.service";
import NoticesViewController from "../controller/notice.view.controller";
import { MongooseNoticeRepository } from "../repository/mongooseNotice.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

const noticeViewRouter = express.Router();
const noticesViewController = new NoticesViewController(new NoticesServiceImpl(new MongooseNoticeRepository()));

const NOTICE_VIEW_ROUTES={
  GET_NOTICES:`/notice`,
  GET_NOTICEDETAIL:`/notice/:noticeId`
}


noticeViewRouter.get(NOTICE_VIEW_ROUTES.GET_NOTICES, (req, res, next) => {
  noticesViewController.getNoticesView(req, res, next); 
});

noticeViewRouter.get(NOTICE_VIEW_ROUTES.GET_NOTICEDETAIL, (req, res, next) => {
  noticesViewController.getNoticeDetailView(req, res, next); 
});

export default noticeViewRouter;
