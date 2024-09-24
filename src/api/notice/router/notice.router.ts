import express from "express";
import NoticeController from '../controller/notice.controller';
import { NoticesServiceImpl } from "../service/notice.service";
import { MemoryNoticeRepository } from '../repository/memoryNotice.repository';

const noticeRouter= express.Router();

const Notice_ROUTES={
    /*Notice 목록 조회*/
    GET_NOTICES:`/api/notices`,
    /*Notice 상세 조회*/
    GET_NOTICE:`/api/notices/:noticeId`
}as const;

const noticeController = new NoticeController(
  new NoticesServiceImpl(new MemoryNoticeRepository())
); 

noticeRouter.get(Notice_ROUTES.GET_NOTICES, noticeController.getNotices);
noticeRouter.get(Notice_ROUTES.GET_NOTICE, noticeController.getNoticeDetail);

export default noticeRouter;
