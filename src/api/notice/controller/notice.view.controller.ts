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
    const notices = await this._noticesService.getNotices();

    res.render("notices/notices", { notices });
  }

  /** NOTICE 상세 페이지 */
  async getNoticeDetailView(req: Request, res: Response, next: NextFunction) {
    try {
      const { noticeId } = req.params;
      const notice = await this._noticesService.getNoticeDetail(noticeId);
      res.render("notices/noticeDetail", {
        notice,
      });
    } catch (error: any) {  
      next(error);  
    }
  }
}