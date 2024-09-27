// [유저]
// NOTICE 목록 조회 - getNotices
// NOTICE 상세 조회 - getNoticeDetail

import { NextFunction,Request,Response } from "express";
import { NoticesService } from "../service/notice.service.type";

export default class NoticeController {

  private readonly _noticeService: NoticesService;
  constructor(_noticeService:NoticesService) {
    this._noticeService = _noticeService;
    this.getNotices = this.getNotices.bind(this);
    this.getNoticeDetail = this.getNoticeDetail.bind(this); 
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
    const { noticeId } = req.params; 
    try {
      const notice = await this._noticeService.getNoticeDetail(noticeId);

      res.send(notice);
    } catch (error){
      next(error);
    }
  }
}