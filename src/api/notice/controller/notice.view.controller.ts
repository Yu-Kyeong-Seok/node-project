import { NextFunction, Request, Response } from "express";
import { NoticesService } from '../service/notice.service.type';

export default class NoticesViewController {
  private readonly _noticesService: NoticesService;
  constructor(_noticesService: NoticesService) {
    this._noticesService = _noticesService;
    this.noticeListPage = this.noticeListPage.bind(this);
    this.noticeDetailPage = this.noticeDetailPage.bind(this);
  }

  /** NOTICE 목록 페이지 */
  async noticeListPage(req: Request, res: Response, next: NextFunction) {
    const notices = await this._noticesService.getNotices();

    res.render("client/notices/noticeList", { notices });
  }

  /** NOTICE 상세 페이지 */
  async noticeDetailPage(req: Request, res: Response, next: NextFunction) {
    try {
      const { noticeId } = req.params;
      const notice = await this._noticesService.getNoticeDetail(noticeId);
      res.render("client/notices/noticeDetail", {
        notice,
      });
    } catch (error: any) {
      res.send(`<script>alert('${error.message}');
          location.href='/client/notices';</script>`);
    }
  }
}