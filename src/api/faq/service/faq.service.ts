import { FaqResponseDTO } from '../dto/faqResponse.dto';
import { FaqsService } from "./faq.service.type";
import { FaqRepository } from "../repository/faq.repository";
import HttpException from "@/api/common/exceptions/http.exception";

export class FaqsServiceImpl implements FaqsService {
  // constructor(
  //   private readonly _faqRepository: FaqRepository
  // ) {}
  private readonly _faqRepository: FaqRepository;
  constructor(faqRepository: FaqRepository) {
    this._faqRepository = faqRepository;
  }


  async createFaq(faq: IFaq): Promise<FaqResponseDTO> {
    const newFaq = await this._faqRepository.save({
      ...faq,
    });

    return new FaqResponseDTO(newFaq);
  }

  async getFaqs(): Promise<FaqResponseDTO[]> {
    const faqs = await this._faqRepository.findAll();

    return await Promise.all(faqs.map((faq) => new FaqResponseDTO(faq)));
  }

  // async getFaqDetail(faqId: string): Promise<FaqResponseDTO | null> {
  //   const faq = await this._faqRepository.findById(faqId);

  //   if (!faq) {
  //     throw new HttpException(404, "FAQ를 찾을 수 없습니다.");
  //   }

  //   return new FaqResponseDTO(faq);
  // }

  async updateFaq(
    faqId: string,
    params: Partial<IFaq>
  ): Promise<void> {
    const findFaq = await this._faqRepository.findById(faqId);
    await this._faqRepository.update(faqId, {
      ...params,
    });
    return;
  }
  async deleteFaq(faqId: string): Promise<void> {
    const findFaq = await this._faqRepository.findById(faqId);

    await this._faqRepository.delete(findFaq?.id ?? "");

    return;
  }
}
