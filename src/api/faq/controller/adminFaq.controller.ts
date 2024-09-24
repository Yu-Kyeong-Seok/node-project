// [관리자]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail
// FAQ 생성 - createFaq
// FAQ 수정 - updateFaq
// FAQ 삭제 -deleteFaq

import { NextFunction, Request, Response } from "express";
import { FaqService } from "../service/faq.service.type";

export default class AdminFaqController {
  // 컨트롤러에 DI 구조 잡아주는 것

  // 정석 방식
  private readonly _faqService: FaqService;
  constructor(_faqService: FaqService) {
    this._faqService = _faqService;
  }

  // 편리한 방식(위에랑 동일하게 작동)
  // constructor(private readonly _faqService: faqService) {

  // }

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
      const faq = await this._faqService.getFaqDetail(
        req.params.faqId
        );

      res.send(faq);
    } catch (error){
      next(error);
    }
  }
  
  async createFaq(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      const createdFaq = await this._faqService.createFaq(req.body);

      res.send(createdFaq);
    } catch (error){
      next(error);
    }
  }
  
  async updateFaq(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    const { faqId } = req.params;  
    try {
      const updatedFaq = await this._faqService.updateFaq(faqId, req.body);

      res.status(204).json();
    } catch (error){
      next(error);
    }
  }
  
  async deleteFaq(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    const { faqId } = req.params;
    try {
      const deletedFaq = await this._faqService.deleteFaq(req.body);

     res.status(204).json();
    } catch (error){
      next(error);
    }
  }
  }
  



// FAQ 목록 조회 - getFaqs


// export const getFaqs = (req:Request,res: Response,  next: NextFunction)=>{
//     res.send("FAQ 목록 조회(관리자)")
// }
// export const getFaqDetail = (req:Request,res: Response,next:NextFunction)=>{
//     res.send("FAQ 상세 조회(관리자)")
// }
// export const createFaq= (req:Request,res: Response,next:NextFunction)=>{
//     res.send("FAQ 생성(관리자)")
// }
// export const updateFaq = (req:Request,res: Response,next:NextFunction)=>{
//     res.send("FAQ 수정(관리자)")
// }
// export const deleteFaq = (req:Request,res: Response,next:NextFunction)=>{
//     res.send("FAQ 삭제(관리자)")
// }