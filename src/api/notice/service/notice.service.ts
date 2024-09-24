import { NoticeResponseDTO } from "../dto/noticeResponse.dto";
import { NoticeService } from './notice.service.type';
import { NoticeRepository } from "../repository/notice.repository";

export class NoticeServiceImpl implements NoticeService {
  constructor(
    private readonly _noticeRepository: NoticeRepository
  ) {}

 async createNotice(notice: INotice): Promise<NoticeResponseDTO> {
  const newNotice = await this._noticeRepository.save({
    ...notice,
  });

  return new NoticeResponseDTO(newNotice);
 }
 async getNotices(): Promise<NoticeResponseDTO[]> {
  const notices = await this._noticeRepository.findAll();

  return notices;
 }
 async getNoticeDetail(noticeId: string): Promise<NoticeResponseDTO> {
  const notice = await this._noticeRepository.findById(noticeId);

  return notice;
 }
 async updateNotice(): Promise<void> {
  throw new Error("method not implemented.")
 }
 async deleteNotice(): Promise<void> {
  throw new Error("method not implemented.")
 }
}
