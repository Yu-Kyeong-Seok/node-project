import express from "express";
import FaqController from "../controller/faq.controller";
import { FaqsServiceImpl } from '../service/faq.service';
import { MongooseFaqRepository } from '../repository/mongooseFaq.repository';


const faqRouter= express.Router();

const FAQ_ROUTES={
    /*FAQ 목록 조회*/
    GET_FAQS:`/api/faq`,
    /*FAQ 상세 조회*/
    // GET_FAQDETAIL:`/api/faq/:faqId`
}as const;


const faqController = new FaqController (
  new FaqsServiceImpl(new MongooseFaqRepository())
  );

  // faqRouter.get(
  //   extractPath(FAQ_ROUTES.GET_FAQS, ROUTES_INDEX.FAQS_API),
  //   faqController.getFaqs
  // );
  
  // faqRouter.get(
  //   extractPath(FAQ_ROUTES.GET_FAQDETAIL, ROUTES_INDEX.FAQS_API),
  //   faqController.getFaqDetail
  // );

  
faqRouter.get(FAQ_ROUTES.GET_FAQS, faqController.getFaqs);
// faqRouter.get(FAQ_ROUTES.GET_FAQDETAIL, faqController.getFaqDetail);

export default faqRouter;
