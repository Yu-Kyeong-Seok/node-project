import { FaqResponseDTO } from "../dto/faqResponse.dto";
import { FaqService } from "./faq.service.type";
import { FaqRepository } from "../repository/faq.repository";

export class FaqServiceImpl implements FaqService {
  constructor(
    private readonly _faqRepository: FaqRepository
  ) {}

  async createFaq(faq: IFaq): Promise<FaqResponseDTO> {
    const newFaq = await this._faqRepository.save({
      ...faq,
    });

    return new FaqResponseDTO(newFaq);
  }

  async getFaqs(): Promise<FaqResponseDTO[]> {
    const faps = await this._faqRepository.findAll();

    return faps;
  }
  async getFaqDetail(faqId: string): Promise<FaqResponseDTO | null> {
    const faq = await this._faqRepository.findById(faqId);

    return faq;
  }
  async updateFaq(faqId: string, params: Partial<IFaq>): Promise<void> {
    const findFaq = await this._faqRepository.findById(faqId);
    
    return; 
  }
  async deleteFaq(id: string): Promise<void> {
    const findFaq = await this._faqRepository.findById(id);

    return;
  }
}
