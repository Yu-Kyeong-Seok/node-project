// [유저]
// NOTICE 목록 조회 - getNotices
// NOTICE 상세 조회 - getNoticeDetail

import { NextFunction,Request,Response } from "express";
import { NoticeService } from "../service/notice.service.type";

export default class NoticeController {

  private readonly _noticeService: NoticeService;
  constructor(_noticeService:NoticeService) {
    this._noticeService = _noticeService;
  }

  async getNotices(
    req: Request,
    res: Response,
    next: NextFunction 
    ) {
    try {
      const notices = await this._noticeService.getNotices();

      res.send(notices);
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
      const notice = await this._noticeService.getNoticeDetail();

      res.send(notice);
    } catch (error){
      next(error);
    }
  }
}