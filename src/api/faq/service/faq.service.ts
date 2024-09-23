import { FaqResponseDTO } from "../dto/faqResponse.dto";
import { FaqService } from "./faq.service.type";

export class FaqServiceImpl implements FaqService {
  async createFaq(): Promise<FaqResponseDTO> {
    throw new Error("method not implemented.")
  }
  async getFaqs(): Promise<FaqResponseDTO[]> {
    throw new Error("method not implemented.")
  }
  async getFaqDetail(): Promise<FaqResponseDTO> {
    throw new Error("method not implemented.")
  }
  async updateFaq(): Promise<void> {
    throw new Error("method not implemented.")
  }
  async deleteFaq(): Promise<void> {
    throw new Error("method not implemented.")
  }
}
