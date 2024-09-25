// [관리자]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail
// FAQ 생성 - createFaq
// FAQ 수정 - updateFaq
// FAQ 삭제 -deleteFaq

import { NextFunction, Request, Response } from "express";
import { FaqsService } from "../service/faq.service.type";

export default class AdminFaqsController {

  // private readonly _faqService: FaqService;
  // constructor(_faqService: FaqService) {
  //   this._faqService = _faqService;

  private readonly _faqsService: FaqsService;
  constructor(_faqsService: FaqsService) {
    this._faqsService = _faqsService;
    this.getFaqs = this.getFaqs.bind(this);
    // this.getFaqDetail = this.getFaqDetail.bind(this);
    this.createFaq = this.createFaq.bind(this);
    this.updateFaq = this.updateFaq.bind(this);
    this.deleteFaq = this.deleteFaq.bind(this);
  }

  async getFaqs(
    req: Request<getFaqsRequest["path"],
    getFaqsRequest["body"],
    getFaqsRequest["params"]>,
  res: Response,next: NextFunction) {
    try {
      const faqs = await this._faqsService.getFaqs();

      res.send(faqs);
    } catch (error){
      console.log(error);
    }
  }
  
  // async getFaqDetail(
  //   req: Request<getFaqsRequest["path"],
  //   getFaqsRequest["body"],
  //   getFaqsRequest["params"]>,
  //   res: Response,
  //   next: NextFunction 
  //   ) {
  //   try {
  //     const faqDetail = await this._faqsService.getFaqDetail(
  //       req.params.faqId);
  //      res.send(faqDetail);
  //   } catch (error){
  //     next(error);
  //   }
  // }
  
  async createFaq(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      const createdFaq = await this._faqsService.createFaq(req.body);

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
      const updatedFaq = await this._faqsService.updateFaq(faqId, req.body);

      res.status(200).json(updatedFaq);
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
      const deletedFaq = await this._faqsService.deleteFaq(faqId);

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