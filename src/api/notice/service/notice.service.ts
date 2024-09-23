import { NoticeResponseDTO } from "../dto/noticeResponse.dto";
import { NoticeService } from './notice.service.type';

export class NoticeServiceImpl implements NoticeService {
 async createNotice(): Promise<NoticeResponseDTO> {
  throw new Error("method not implemented.")
 }
 async getNotices(): Promise<NoticeResponseDTO[]> {
  throw new Error("method not implemented.")
 }
 async getNoticeDetail(): Promise<NoticeResponseDTO> {
  throw new Error("method not implemented.")
 }
 async updateNotice(): Promise<void> {
  throw new Error("method not implemented.")
 }
 async deleteNotice(): Promise<void> {
  throw new Error("method not implemented.")
 }
}
