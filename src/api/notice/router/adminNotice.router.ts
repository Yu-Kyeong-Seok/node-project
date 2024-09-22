import express from 'express';
import AdminNoticeController from '../controller/adminNotice.controller';

const adminNoticeRouter = express.Router();

/*관리자 NOTICE 관련 API 객체*/
const ADMIN_NOTICE_ROUTES={
    /**NOTICE 목록 조회 (관리자) */
    GET_NOTICES:`/admin-api/notices`,
    /**NOTICE 상세 조회 (관리자) */
    GET_NOTICE:`/admin-api/notices/:noticeId`,
    /**NOTICE 생성 (관리자)  */
    CREATE_NOTICE:`/admin-api/notices`,
    /**NOTICE 수정 (관리자) */
    UPDATE_NOTICE:`/admin-api/notices/:noticeId`,
    /**NOTICE 삭제 (관리자) */
    DELETE_NOTICE:`/admin-api/notices/:noticeId`
} as const;

const adminNoticeController = new AdminNoticeController () 

adminNoticeRouter.get(ADMIN_NOTICE_ROUTES.GET_NOTICES, adminNoticeController.getNotices);
adminNoticeRouter.get(ADMIN_NOTICE_ROUTES.GET_NOTICE, adminNoticeController.getNoticeDetail);
adminNoticeRouter.post(ADMIN_NOTICE_ROUTES.CREATE_NOTICE, adminNoticeController.createNotice);
adminNoticeRouter.put(ADMIN_NOTICE_ROUTES.UPDATE_NOTICE, adminNoticeController.updateNotice);
adminNoticeRouter.delete(ADMIN_NOTICE_ROUTES.DELETE_NOTICE, adminNoticeController.deleteNotice);


export default adminNoticeRouter;
