import { NextFunction, Request, Response } from "express";
import { NoticesService } from '../service/notice.service.type';

export default class NoticesViewController {
  private readonly _noticesService: NoticesService;
  constructor(_noticesService: NoticesService) {
    this._noticesService = _noticesService;
    this.getNoticesView = this.getNoticesView.bind(this);
    this.getNoticeDetailView = this.getNoticeDetailView.bind(this);
  }

  /** NOTICE 목록 페이지 */
  async getNoticesView(req: Request, res: Response, next: NextFunction) {
    try {
    const notices = await this._noticesService.getNotices();
    console.log("Notices 데이터:", notices);
    res.render("notice/notice", { notices });
  } catch (error) {
    console.error("Render 오류:", error);
    next(error);
  }
  }

  /** NOTICE 상세 페이지 */
  async getNoticeDetailView(req: Request, res: Response, next: NextFunction) {
    try {
      const { noticeId } = req.params;
      const notice = await this._noticesService.getNoticeDetail(noticeId);
      res.render("notice/noticeDetail", {
        notice,
      });
    } catch (error: any) {
      console.error(error);
      next(error);  
    }
  }
}