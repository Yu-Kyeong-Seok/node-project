import express from 'express';
import AdminFaqController from '../controller/adminFaq.controller';
import { FaqsServiceImpl } from '../service/faq.service';
import { MongooseFaqRepository } from '../repository/mongooseFaq.repository';
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";

const adminFaqRouter = express.Router();

/*관리자 FAQ 관련 API 객체*/
const ADMIN_FAQ_ROUTES={
    /**FAQ 목록 조회 (관리자) */
    GET_FAQS:`/admin-api/faqs`,
    /**FAQ 상세 조회 (관리자) */
    GET_FAQDETAIL:`/admin-api/faqs/:faqId`,
    /**FAQ 생성 (관리자)  */
    CREATE_FAQ:`/admin-api/faqs`,
    /**FAQ 수정 (관리자) */
    UPDATE_FAQ:`/admin-api/faqs/:faqId`,
    /**FAQ 삭제 (관리자) */
    DELETE_FAQ:`/admin-api/faqs/:faqId`
} as const;


// Memory
const adminFaqController = new AdminFaqController(
  new FaqsServiceImpl(new MongooseFaqRepository())
);

// adminFaqRouter.get(
//   extractPath(ADMIN_FAQ_ROUTES.GET_FAQS, ROUTES_INDEX.ADMIN_FAQS_API),
//   adminFaqController.getFaqs
// );

// adminFaqRouter.get(
//   extractPath(ADMIN_FAQ_ROUTES.GET_FAQDETAIL, ROUTES_INDEX.ADMIN_FAQS_API),
//   adminFaqController.getFaqDetail
// );

// adminFaqRouter.post(
//   extractPath(ADMIN_FAQ_ROUTES.CREATE_FAQ, ROUTES_INDEX.ADMIN_FAQS_API),
//   adminFaqController.createFaq
// );

// adminFaqRouter.put(
//   extractPath(ADMIN_FAQ_ROUTES.UPDATE_FAQ, ROUTES_INDEX.ADMIN_FAQS_API),
//   adminFaqController.updateFaq
// );

// adminFaqRouter.delete(
//   extractPath(ADMIN_FAQ_ROUTES.DELETE_FAQ, ROUTES_INDEX.ADMIN_FAQS_API),
//   adminFaqController.deleteFaq
// );


adminFaqRouter.get(ADMIN_FAQ_ROUTES.GET_FAQS, adminFaqController.getFaqs);
adminFaqRouter.get(ADMIN_FAQ_ROUTES.GET_FAQDETAIL, adminFaqController.getFaqDetail);
adminFaqRouter.post(ADMIN_FAQ_ROUTES.CREATE_FAQ, adminFaqController.createFaq);
adminFaqRouter.put(ADMIN_FAQ_ROUTES.UPDATE_FAQ, adminFaqController.updateFaq);
adminFaqRouter.delete(ADMIN_FAQ_ROUTES.DELETE_FAQ, adminFaqController.deleteFaq);


export default adminFaqRouter;
