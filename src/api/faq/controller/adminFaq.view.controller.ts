import { NextFunction, Request, Response } from "express";
import { FaqsService } from "../service/faq.service.type";

export default class AdminFaqsViewController {
  private readonly _faqsService: FaqsService;
  constructor(_faqsService: FaqsService) {
    this._faqsService = _faqsService;
    this.getFaqsView = this.getFaqsView.bind(this);
    // this.faqDetailPage = this.faqDetailPage.bind(this);
    this.createFaqView = this.createFaqView.bind(this);
    this.updateFaqView = this.updateFaqView.bind(this);
  }

  /** FAQ 목록 페이지 */
async getFaqsView(req: Request, res: Response, next: NextFunction) {
    const faqs = await this._faqsService.getFaqs();
    res.render("admin/faq", {
      faqs,
    });
  }

  /** FAQ 상세 페이지 */
// async getFaqsViewDetail(req: Request, res: Response, next: NextFunction) {
//     try {
//       const { faqId } = req.params;
//       const faq = await this._faqsService.getFaqDetail(faqId);
//       res.render("client/faq/faqDetail", {
//         faq,
//       });
//     } catch (error: any) {
//       res.send(`<script>alert('${error.message}');
//           location.href='/admin/faq/faqDetail';</script>`);
//     }
//   }

   /** FAQ 작성 페이지 */
async createFaqView(req: Request, res: Response, next: NextFunction) {
    res.render("admin/faq/write");
  }

  /** FAQ 수정 페이지 */
  async updateFaqView(req: Request, res: Response, next: NextFunction) {
    try {
      const { faqId } = req.params;
      const faq = await this._faqsService.updateFaq(faqId, req.body);
      res.render("admin/faq/edit", { faq });
    } catch (error: any) {  
      next(error);  
    }
  }
}  