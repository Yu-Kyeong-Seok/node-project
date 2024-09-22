// [유저]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail

import { NextFunction,Request,Response } from "express";

export default class FaqController {
  async getFaqs(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      res.send("FAQ 목록 조회(유저)");
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
      res.send("FAQ 상세 조회(유저)");
    } catch (error){
      next(error);
    }
  }
}