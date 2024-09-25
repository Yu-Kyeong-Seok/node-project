import { NextFunction, Request, Response } from "express";
import { NoticesService } from "../service/notice.service.type";

export default class AdminNoticesViewController {
  private readonly _noticesService: NoticesService;
  constructor(_noticesService: NoticesService) {
    this._noticesService = _noticesService;
    this.getNoticesView = this.getNoticesView.bind(this);
    this.getNoticeDetailView = this.getNoticeDetailView.bind(this);
    this.createNoticeView = this.createNoticeView.bind(this);
    this.updateNoticeView = this.updateNoticeView.bind(this);
  }

  /** NOTICE 목록 페이지 */
async getNoticesView(req: Request, res: Response, next: NextFunction) {
    const notices = await this._noticesService.getNotices();
    res.render("admin/notices", {
      notices,
    });
  }

  /** NOTICE 상세 페이지 */
async getNoticeDetailView(req: Request, res: Response, next: NextFunction) {
    try {
      const { noticeId } = req.params;
      const notice = await this._noticesService.getNoticeDetail(noticeId);
      res.render("client/notices/noticeDetail", {
        notice,
      });
    } catch (error: any) {
      next(error);
    }
  }

   /** NOTICE 작성 페이지 */
async createNoticeView(req: Request, res: Response, next: NextFunction) {
    res.render("admin/notices/write");
  }

  /** NOTICE 수정 페이지 */
  async updateNoticeView(req: Request, res: Response, next: NextFunction) {
    try {
      const { noticeId } = req.params;
      const notice = await this._noticesService.updateNotice(noticeId, req.body);
      res.render("admin/notices/edit", { notice });
    } catch (error: any) {  
      next(error);  
    }
  }
}  