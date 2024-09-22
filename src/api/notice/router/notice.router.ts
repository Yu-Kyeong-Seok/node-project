import express from "express";
import NoticeController from '../controller/notice.controller';
const noticeRouter= express.Router();

const Notice_ROUTES={
    /*Notice 목록 조회*/
    GET_NOTICES:`/api/notices`,
    /*Notice 상세 조회*/
    GET_NOTICE:`/api/notices/:noticeId`
}as const;

const noticeController = new NoticeController () 

noticeRouter.get(Notice_ROUTES.GET_NOTICES, noticeController.getNotices);
noticeRouter.get(Notice_ROUTES.GET_NOTICE, noticeController.getNoticeDetail);

export default noticeRouter;
