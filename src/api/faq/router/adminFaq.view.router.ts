import express from "express";
import { FaqsServiceImpl } from "../service/faq.service";
import FaqsViewController from "../controller/faq.view.controller";
import { MongooseFaqRepository } from "../repository/mongooseFaq.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import AdminFaqsViewController from "../controller/adminFaq.view.controller";

const adminFaqViewRouter = express.Router();
const adminFaqsViewController = new AdminFaqsViewController(new FaqsServiceImpl(new MongooseFaqRepository()));


// const ADMIN_FAQ_VIEW_ROUTES = {
//     /** FAQ 목록 */
//     FAQ_LIST: "/admin/faqs",
//     /** FAQ 상세 */
//     // FAQ_DETAIL: "/admin/faqs/detail/:faqId",
//     /** FAQ 작성 */
//     FAQ_WRITE: "/admin/faqs/write",
//     /** FAQ 수정 */
//     FAQ_EDIT: "/admin/faqs/:faqId/edit",
// } as const;

// const adminFaqsViewController = new AdminFaqsViewController(
//     new FaqsServiceImpl(new MongooseFaqRepository())
//   );


const BASE_PATH = "/views";

adminFaqViewRouter.get(`${BASE_PATH}/admin/faqs`, (req, res, next) => {
    adminFaqsViewController.getFaqsView(req, res, next); 
});

adminFaqViewRouter.get(`${BASE_PATH}/admin/faqs/write`, (req, res, next) => {
    adminFaqsViewController.createFaqView(req, res, next); 
});

adminFaqViewRouter.get(`${BASE_PATH}/admin/faqs/:faqId/edit`, (req, res, next) => {
    adminFaqsViewController.updateFaqView(req, res, next); 
});

// faqViewRouter.get(`${BASE_PATH}/faq/:faqName`, (req, res, next) => {
//     adminFaqsViewController.getFaqDetailView(req, res, next); 
// });
export default adminFaqViewRouter;
