import { Faq } from "@/api/faq/model/faq.model"
import { FaqRepository } from "@/api/faq/repository/faq.repository";

export class MemoryFaqRepository implements FaqRepository {
  static index = 0;
  static readonly store: Map<string, IFaq> = new Map();

  async save(faq: Omit<IFaq, "id">): Promise<IFaq> {
    const newFaq = new Faq ({
      ...faq,
      id: `faq-${MemoryFaqRepository.index++}`,

    });

    MemoryFaqRepository.store.set(newFaq.id, newFaq);
    return newFaq;

  }
  //기본 틀이어서 기능 추가하면됨. e.g. 필터검색 기능 추가 findFilter 
  async findAll(): Promise<IFaq[]> {
    const values = Array.from(MemoryFaqRepository.store.values());
    return values;
  }
  async findById(id: string): Promise<IFaq | null> {
    const findFaq = MemoryFaqRepository.store.get(id);
    return findFaq ?? null;
  }
  async update(faqId: string, updateFaqInfo: Partial<IFaq>): Promise<IFaq> {
    const findFaq = MemoryFaqRepository.store.get(faqId);

    if (!findFaq) {
      throw new Error("FAQ를 찾을 수 없습니다.");
    }

    MemoryFaqRepository.store.set(faqId, {
      ...findFaq,
      ...updateFaqInfo,
    });

    return MemoryFaqRepository.store.get(faqId)!;
  }
  async delete(faqId: string): Promise<void> {
    const findFaq = MemoryFaqRepository.store.get(faqId);

    if (!findFaq) {
      throw new Error("FAQ를 찾을 수 없습니다.");
    }

    MemoryFaqRepository.store.delete(faqId);

    return;
  }

  
}
