import express from "express";
import FaqController from "../controller/faq.controller";
import { FaqServiceImpl } from '../service/faq.service';
import { MemoryFaqRepository } from '../repository/memoryFaq.repository';

const faqRouter= express.Router();

const FAQ_ROUTES={
    /*FAQ 목록 조회*/
    GET_FAQS:`/api/faqs`,
    /*FAQ 상세 조회*/
    GET_FAQ:`/api/faqs/:faqId`
}as const;

const faqController = new FaqController (
  new FaqServiceImpl(new MemoryFaqRepository())
  );

faqRouter.get(FAQ_ROUTES.GET_FAQS, faqController.getFaqs);
faqRouter.get(FAQ_ROUTES.GET_FAQ, faqController.getFaqDetail);

export default faqRouter;
