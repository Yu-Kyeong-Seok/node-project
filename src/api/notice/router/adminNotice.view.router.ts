import express from "express";
import { NoticesServiceImpl } from "../service/notice.service";
import NoticesViewController from "../controller/notice.view.controller";
import { MongooseNoticeRepository } from "../repository/mongooseNotice.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import AdminNoticesViewController from "../controller/adminNotice.view.controller";

const adminNoticeViewRouter = express.Router();
const adminNoticesViewController = new AdminNoticesViewController(new NoticesServiceImpl(new MongooseNoticeRepository()));

  const BASE_PATH = "/views";

  adminNoticeViewRouter.get(`${BASE_PATH}/admin/notice`, (req, res, next) => {
    adminNoticesViewController.getNoticesView(req, res, next); 
});

  adminNoticeViewRouter.get(`${BASE_PATH}/admin/notice`, (req, res, next) => {
    adminNoticesViewController.getNoticeDetailView(req, res, next); 
});

adminNoticeViewRouter.get(`${BASE_PATH}/admin/notice/write`, (req, res, next) => {
  adminNoticesViewController.createNoticeView(req, res, next); 
});

adminNoticeViewRouter.get(`${BASE_PATH}/admin/notice/:noticeId/edit`, (req, res, next) => {
  adminNoticesViewController.updateNoticeView(req, res, next); 
});

export default adminNoticeViewRouter;




