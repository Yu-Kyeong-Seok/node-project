// [관리자]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail
// FAQ 생성 - createFaq
// FAQ 수정 - updateFaq
// FAQ 삭제 -deleteFaq

import { NextFunction, Request, Response } from "express";

export default class AdminFaqController {
  async getFaqs(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      res.send("FAQ 목록 조회(관리자)");
    } catch (error){
      next(error);
    }
  }
  
  async getFaqDetail(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      res.send("FAQ 상세 조회(관리자)");
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
      res.send("FAQ 생성(관리자)");
    } catch (error){
      next(error);
    }
  }
  
  async updateFaq(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      res.send("FAQ 수정(관리자)");
    } catch (error){
      next(error);
    }
  }
  
  async deleteFaq(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      res.send("FAQ 삭제(관리자)");
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