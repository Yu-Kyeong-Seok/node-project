// [관리자]
// NOTICE 목록 조회 - getNotices
// NOTICE 상세 조회 - getNoticeDetail
// NOTICE 생성 - createNotice
// NOTICE 수정 - updateNotice
// NOTICE 삭제 -deleteNotice

import { NextFunction, Request, Response } from "express";
import { NoticesService } from "../service/notice.service.type";

export default class AdminNoticesController {
  private readonly _noticesService: NoticesService;
  constructor(_noticesService: NoticesService) {
    this._noticesService = _noticesService;
    this.getNotices = this.getNotices.bind(this);
    this.getNoticeDetail = this.getNoticeDetail.bind(this);
    this.createNotice = this.createNotice.bind(this);
    this.updateNotice = this.updateNotice.bind(this);
    this.deleteNotice = this.deleteNotice.bind(this);
  }

  async getNotices(
    req: Request<
      getNoticesRequest["path"],
      getNoticesRequest["body"],
      getNoticesRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const notices = await this._noticesService.getNotices();

      res.json(notices);
    } catch (error) {
      console.log(error);
    }
  }

  async getNoticeDetail(
    req: Request<
      getNoticesRequest["path"],
      getNoticesRequest["body"],
      getNoticesRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const noticeDetail = await this._noticesService.getNoticeDetail(
        req.params.noticeId
      );
      res.json(noticeDetail);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async createNotice(req: Request, res: Response, next: NextFunction) {
    try {
      const createdNotice = await this._noticesService.createNotice(req.body);

      res.json(createdNotice);
    } catch (error) {
      next(error);
    }
  }

  async updateNotice(req: Request, res: Response, next: NextFunction) {
    const { noticeId } = req.params;
    try {
      const updatedNotice = await this._noticesService.updateNotice(
        noticeId,
        req.body
      );

      res.status(200).json(noticeId);
    } catch (error) {
      next(error);
    }
  }

  async deleteNotice(req: Request, res: Response, next: NextFunction) {
    try {
      await this._noticesService.deleteNotice(req.params.noticeId);

      res.status(204).json();
    } catch (error) {
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
