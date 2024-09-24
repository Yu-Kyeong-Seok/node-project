import express from "express";
import FaqController from "../controller/faq.controller";
import { FaqsServiceImpl } from '../service/faq.service';
import { MemoryFaqRepository } from '../repository/memoryFaq.repository';

const faqRouter= express.Router();

const FAQ_ROUTES={
    /*FAQ 목록 조회*/
    GET_FAQS:`/api/faqs`,
    /*FAQ 상세 조회*/
    GET_FAQDETAIL:`/api/faqs/:faqId`
}as const;

const faqController = new FaqController (
  new FaqsServiceImpl(new MemoryFaqRepository())
  );

faqRouter.get(FAQ_ROUTES.GET_FAQS, faqController.getFaqs);
faqRouter.get(FAQ_ROUTES.GET_FAQDETAIL, faqController.getFaqDetail);

export default faqRouter;
