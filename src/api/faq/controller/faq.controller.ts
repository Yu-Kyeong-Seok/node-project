// [유저]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail

import { NextFunction,Request,Response } from "express";
import { FaqService } from "../service/faq.service.type";

export default class FaqController {

  private readonly _faqService: FaqService;
  constructor(_faqService: FaqService) {
    this._faqService = _faqService;
  }

  async getFaqs(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      const faqs = await this._faqService.getFaqs();

      res.send(faqs);
    } catch (error){
      next(error);
    }
  }
  
  async getFaqDetail(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    const { faqId } = req.params;
    try {
      const faq = await this._faqService.getFaqDetail(faqId);

      res.send(faq);
    } catch (error){
      next(error);
    }
  }
}