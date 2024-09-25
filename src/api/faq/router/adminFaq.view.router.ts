import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import { FaqsServiceImpl } from "../service/faq.service";
import FaqsViewController from "../controller/faq.view.controller";
import { MongooseFaqRepository } from "../repository/mongooseFaq.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import AdminFaqsViewController from "../controller/adminFaq.view.controller";

const adminFaqViewRouter = express.Router();
const adminFaqsViewsController = new AdminFaqsViewController(new FaqsServiceImpl(new MongooseFaqRepository()));


const ADMIN_FAQ_VIEW_ROUTES = {
    /** FAQ 목록 */
    FAQ_LIST: "/admin/faqs",
    /** FAQ 상세 */
    FAQ_DETAIL: "/admin/faqs/detail/:faqId",
    /** FAQ 작성 */
    FAQ_WRITE: "/admin/faqs/write",
    /** FAQ 수정 */
    FAQ_EDIT: "/admin/faqs/:faqId/edit",
} as const;

const adminFaqsViewController = new AdminFaqsViewController(
    new FaqsServiceImpl(new MongooseFaqRepository())
  );

adminFaqViewRouter.get(
    extractPath(ADMIN_FAQ_VIEW_ROUTES.FAQ_LIST, ROUTES_INDEX.ADMIN_FAQ_VIEW),
    adminFaqsViewController.faqListPage
);

adminFaqViewRouter.get(
    extractPath(ADMIN_FAQ_VIEW_ROUTES.FAQ_DETAIL, ROUTES_INDEX.ADMIN_FAQ_VIEW),
    authCookieViewMiddleware(false),
    adminFaqsViewController.faqDetailPage
);

adminFaqViewRouter.get(
    extractPath(ADMIN_FAQ_VIEW_ROUTES.FAQ_WRITE, ROUTES_INDEX.ADMIN_FAQ_VIEW),
    authCookieViewMiddleware(false),
    adminFaqsViewController.faqWritePage
);
adminFaqViewRouter.get(
    extractPath(ADMIN_FAQ_VIEW_ROUTES.FAQ_EDIT, ROUTES_INDEX.ADMIN_FAQ_VIEW),
    authCookieViewMiddleware(false),
    adminFaqsViewController.faqEditPage
);



export default adminFaqViewRouter;
