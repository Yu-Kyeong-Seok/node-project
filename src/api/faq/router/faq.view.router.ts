import express from "express";
import { FaqsServiceImpl } from '../service/faq.service';
import FaqsViewController from "../controller/faq.view.controller";
import { MongooseFaqRepository } from "../repository/mongooseFaq.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";

const faqViewRouter = express.Router();
const faqsViewController = new FaqsViewController(new FaqsServiceImpl(new MongooseFaqRepository()));


const FAQ_VIEW_ROUTES = {
    /** FAQ 목록 */
    FAQ_LIST: "/faq",
    /** FAQ 상세 */
    // FAQ_DETAIL: "/faq/detail/:faqId",
} as const;

// const faqsViewController = new FaqsViewController(
//     new FaqsServiceImpl(new MongooseFaqRepository())
//   );


faqViewRouter.get(
     FAQ_VIEW_ROUTES.FAQ_LIST, (req, res, next)=>{
    faqsViewController.getFaqsView(req, res, next)}
);

// faqViewRouter.get(
//     extractPath(FAQ_VIEW_ROUTES.FAQ_DETAIL, ROUTES_INDEX.FAQ_VIEW),
//     authCookieViewMiddleware(false),
//     faqsViewController.faqDetailPage
// );

// const BASE_PATH = "/views";

// faqViewRouter.get(`${BASE_PATH}/faq`, (req, res, next) => {
//     faqsViewController.getFaqsView(req, res, next); 
// });

export default faqViewRouter;
