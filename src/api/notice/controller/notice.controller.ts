// [유저]
// NOTICE 목록 조회 - getNotices
// NOTICE 상세 조회 - getNoticeDetail

import { NextFunction,Request,Response } from "express";

export default class NoticeController {
  async getNotices(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      res.send("NOTICE 목록 조회(유저)");
    } catch (error){
      next(error);
    }
  }
  
  async getNoticeDetail(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      res.send("NOTICE 상세 조회(유저)");
    } catch (error){
      next(error);
    }
  }
}