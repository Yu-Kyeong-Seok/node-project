// [유저]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail

import { NextFunction,Request,Response } from "express";
import { FaqsService } from "../service/faq.service.type";

export default class FaqController {

  private readonly _faqsService: FaqsService;
  constructor(_faqsService: FaqsService) {
    this._faqsService = _faqsService;
    this.getFaqs = this.getFaqs.bind(this);
    this.getFaqDetail = this.getFaqDetail.bind(this);
  }

  async getFaqs(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      const faqs = await this._faqsService.getFaqs();

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
      const faq = await this._faqsService.getFaqDetail(faqId);

      res.send(faq);
    } catch (error){
      next(error);
    }
  }
}