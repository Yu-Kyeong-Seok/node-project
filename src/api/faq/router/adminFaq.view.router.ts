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
//     FAQ_LIST: "/admin/faq",
//     /** FAQ 상세 */
//     // FAQ_DETAIL: "/admin/faq/detail/:faqId",
//     /** FAQ 작성 */
//     FAQ_WRITE: "/admin/faq/write",
//     /** FAQ 수정 */
//     FAQ_EDIT: "/admin/faq/:faqId/edit",
// } as const;

// const adminFaqsViewController = new AdminFaqsViewController(
//     new FaqsServiceImpl(new MongooseFaqRepository())
//   );


const BASE_PATH = "/views";

adminFaqViewRouter.get(`${BASE_PATH}/admin/faq`, (req, res, next) => {
    adminFaqsViewController.getFaqsView(req, res, next); 
});

adminFaqViewRouter.get(`${BASE_PATH}/admin/faq/write`, (req, res, next) => {
    adminFaqsViewController.createFaqView(req, res, next); 
});

adminFaqViewRouter.get(`${BASE_PATH}/admin/faq/:faqId/edit`, (req, res, next) => {
    adminFaqsViewController.updateFaqView(req, res, next); 
});

// faqViewRouter.get(`${BASE_PATH}/faq/:faqName`, (req, res, next) => {
//     adminFaqsViewController.getFaqDetailView(req, res, next); 
// });
export default adminFaqViewRouter;
