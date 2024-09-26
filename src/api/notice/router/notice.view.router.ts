import express from "express";
import { NoticesServiceImpl } from "../service/notice.service";
import NoticesViewController from "../controller/notice.view.controller";
import { MongooseNoticeRepository } from "../repository/mongooseNotice.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

const noticeViewRouter = express.Router();
const noticesViewController = new NoticesViewController(new NoticesServiceImpl(new MongooseNoticeRepository()));

const BASE_PATH = "/views";

noticeViewRouter.get(`${BASE_PATH}/notice`, (req, res, next) => {
  noticesViewController.getNoticesView(req, res, next); 
});

noticeViewRouter.get(`${BASE_PATH}/notice/:noticeId`, (req, res, next) => {
  noticesViewController.getNoticeDetailView(req, res, next); 
});

export default noticeViewRouter;
