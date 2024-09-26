import { MongooseFaq } from "../model/faq.schema";
import { FaqRepository } from "./faq.repository";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseFaqRepository implements FaqRepository{
  async save(faq: Omit<IFaq, "id">): Promise<IFaq> {
    const newFaq = new MongooseFaq(faq);

    await newFaq.save();

    return newFaq;
  }
  
  
  async findAll():Promise<IFaq[]>{
        const faqs=await MongooseFaq.find();
        return faqs;
    }
    async findById(faqId:string):Promise<IFaq | null>{
      try{
          const findFaqId = await MongooseFaq.findOne({ id: faqId } )
          return findFaqId;
      }catch(error){
          console.log(error)
          return null;
      }
       
    }
    async update(
    faqId: string,
    updateFaqInfo: Partial<IFaq>
  ): Promise<IFaq> {
    const results = await MongooseFaq.findOneAndUpdate(
      { id: faqId },
      updateFaqInfo,
      { new: true }
    );
    if (!results) {
      throw new HttpException(404, "공지사항을 찾을 수 없습니다.");
    }

    return results;
  }
    async delete(faqId: string): Promise<void> {
      await MongooseFaq.deleteOne({ id: faqId });
  
      return;
    }

}