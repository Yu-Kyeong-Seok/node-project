import express from "express";
import NoticeController from '../controller/notice.controller';
import { NoticesServiceImpl } from "../service/notice.service";
import { MongooseNoticeRepository } from '../repository/mongooseNotice.repository';

const noticeRouter= express.Router();

const NOTICE_ROUTES={
    /*Notice 목록 조회*/
    GET_NOTICES:`/api/notices`,
    /*Notice 상세 조회*/
    GET_NOTICEDETAIL:`/api/notices/:noticeId`
}as const;

const noticeController = new NoticeController(
  new NoticesServiceImpl(new MongooseNoticeRepository())
); 


noticeRouter.get(NOTICE_ROUTES.GET_NOTICES,noticeController.getNotices.bind(noticeController))
noticeRouter.get(NOTICE_ROUTES.GET_NOTICEDETAIL,noticeController.getNoticeDetail.bind(noticeController))


export default noticeRouter;
