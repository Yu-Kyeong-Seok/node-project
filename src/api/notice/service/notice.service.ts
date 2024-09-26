import { NoticeResponseDTO } from "../dto/noticeResponse.dto";
import { NoticesService } from "./notice.service.type";
import { NoticeRepository } from "../repository/notice.repository";
import HttpException from "@/api/common/exceptions/http.exception";

export class NoticesServiceImpl implements NoticesService {
  // constructor(
  //   private readonly _noticeRepository: NoticeRepository
  // ) {}
  private readonly _noticeRepository: NoticeRepository;
  constructor(noticeRepository: NoticeRepository) {
    this._noticeRepository = noticeRepository;
  }

  async createNotice(notice: INotice): Promise<NoticeResponseDTO> {
    const newNotice = await this._noticeRepository.save({
      ...notice,
    });

    return new NoticeResponseDTO(newNotice);
  }
  async getNotices(): Promise<NoticeResponseDTO[]> {
    const notices = await this._noticeRepository.findAll();

    return await Promise.all(
      notices.map((notice) => new NoticeResponseDTO(notice))
    );
  }
  async getNoticeDetail(noticeId: string): Promise<NoticeResponseDTO | null> {
    const notice = await this._noticeRepository.findById(noticeId);

    if (!notice) {
      throw new HttpException(404, "공지사항을 찾을 수 없습니다.");
    }

    return new NoticeResponseDTO(notice);
  }

  async updateNotice(
    noticeId: string,
    params: Partial<INotice>
  ): Promise<void> {
    const findNotice = await this._noticeRepository.findById(noticeId);
    await this._noticeRepository.update(noticeId, {
      ...params,
    });
    return;
  }
  async deleteNotice(noticeId: string): Promise<void> {
    const findNotice = await this._noticeRepository.findById(noticeId);

    await this._noticeRepository.delete(findNotice?.id ?? "");

    return;
  }
}
