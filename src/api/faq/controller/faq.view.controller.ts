import { NextFunction, Request, Response } from "express";
import { FaqsService } from '../service/faq.service.type';

export default class FaqsViewController {
  private readonly _faqsService: FaqsService;
  constructor(_faqsService: FaqsService) {
    this._faqsService = _faqsService;
    this.faqListPage = this.faqListPage.bind(this);
    this.faqDetailPage = this.faqDetailPage.bind(this);
  }

  /** FAQ 목록 페이지 */
  async faqListPage(req: Request, res: Response, next: NextFunction) {
    const faqs = await this._faqsService.getFaqs();

    res.render("client/faqs/faqList", { faqs });
  }

  /** FAQ 상세 페이지 */
  async faqDetailPage(req: Request, res: Response, next: NextFunction) {
    try {
      const { faqId } = req.params;
      const faq = await this._faqsService.getFaqDetail(faqId);
      res.render("client/faqs/faqDetail", {
        faq,
      });
    } catch (error: any) {
      res.send(`<script>alert('${error.message}');
          location.href='/client/faqs';</script>`);
    }
  }
}