import { MongooseNotice } from "../model/notice.schema";
import { NoticeRepository } from "./notice.repository";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseNoticeRepository implements NoticeRepository{
  async save(notice: Omit<INotice, "id">): Promise<INotice> {
    const newNotice = new MongooseNotice(notice);

    await newNotice.save();

    return newNotice;
  }
  
  
  async findAll():Promise<INotice[]>{
        const notices=await MongooseNotice.find();
        return notices;
    }
    async findById(noticeId: string): Promise<INotice | null> {
        try{
            const findNotice=await MongooseNotice.findById(noticeId)
            return findNotice;
        }catch(error:any){
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
              return null;
            }
            throw error;
        }
       
    }
    async update(noticeId: string, updateNoticeInfo: Partial<INotice>): Promise<INotice> {
      const results = await MongooseNotice.findByIdAndUpdate(
        noticeId, 
        updateNoticeInfo
      );
      if (!results) {
        throw new HttpException(404, "FAQ를 찾을 수 없습니다.");
      }
  
      return results;
    }
    async delete(noticeId: string): Promise<void> {
      await MongooseNotice.deleteOne({ _id: noticeId });
  
      return;
    }

}