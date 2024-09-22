// [관리자]
// NOTICE 목록 조회 - getNotices
// NOTICE 상세 조회 - getNoticeDetail
// NOTICE 생성 - createNotice
// NOTICE 수정 - updateNotice
// NOTICE 삭제 -deleteNotice

import { NextFunction, Request, Response } from "express";
import { NoticeService } from "../service/notice.service.type";

export default class AdminNoticeController {

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

async createNotice(
  req: Request,
  res: Response,
  next: NextFunction 
  ) {
  try {
    const createdNotice = await this._noticeService.createNotice();

    res.send(createdNotice);
  } catch (error){
    next(error);
  }
}

async updateNotice(
  req: Request,
  res: Response,
  next: NextFunction 
  ) {
  try {
    const updatedNotice = await this._noticeService.updateNotice();

    res.status(204).json();
  } catch (error){
    next(error);
  }
}

async deleteNotice(
  req: Request,
  res: Response,
  next: NextFunction 
  ) {
  try {
    const deletedNotice = await this._noticeService.deleteNotice();

    res.status(204).json();
  } catch (error){
    next(error);
  }
}
}


// NOTICE 목록 조회 - getNotices

// export const getNotices = (req:Request,res: Response,  next: NextFunction)=>{
//     res.send("NOTICE 목록 조회(관리자)")
// }
// export const getNoticeDetail = (req:Request,res: Response,next:NextFunction)=>{
//     res.send("NOTICE 상세 조회(관리자)")
// }
// export const createNotice= (req:Request,res: Response,next:NextFunction)=>{
//     res.send("NOTICE 생성(관리자)")
// }
// export const updateNotice = (req:Request,res: Response,next:NextFunction)=>{
//     res.send("NOTICE 수정(관리자)")
// }
// export const deleteNotice = (req:Request,res: Response,next:NextFunction)=>{
//     res.send("NOTICE 삭제(관리자)")
// }

