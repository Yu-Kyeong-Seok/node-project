// import { Notice } from "@/api/notice/model/notice.model"
// import { NoticeRepository } from "@/api/notice/repository/notice.repository";

// export class MemoryNoticeRepository implements NoticeRepository {
//   static index = 0;
//   static readonly store: Map<string, INotice> = new Map();

//   async save(notice: Omit<INotice, "id">): Promise<INotice> {
//     const newNotice = new Notice ({
//       ...notice,
//       id: `notice-${MemoryNoticeRepository.index++}`,

//     });

//     MemoryNoticeRepository.store.set(newNotice.id, newNotice);
//     return newNotice;

//   }
  //기본 틀이어서 기능 추가하면됨. e.g. 필터검색 기능 추가 findFilter 
//   async findAll(): Promise<INotice[]> {
//     const values = Array.from(MemoryNoticeRepository.store.values());
//     return values;
//   }
//   async findById(id: string): Promise<INotice | null> {
//     const findNotice = MemoryNoticeRepository.store.get(id);
//     return findNotice ?? null;
//   }
//   async update(noticeId: string, updateNoticeInfo: Partial<INotice>): Promise<INotice> {
//     const findNotice = MemoryNoticeRepository.store.get(noticeId);

//     if (!findNotice) {
//       throw new Error("공지사항을 찾을 수 없습니다.");
//     }

//     MemoryNoticeRepository.store.set(noticeId, {
//       ...findNotice,
//       ...updateNoticeInfo,
//     });

//     return MemoryNoticeRepository.store.get(noticeId)!;
//   }
//   async delete(noticeId: string): Promise<void> {
//     const findNotice = MemoryNoticeRepository.store.get(noticeId);

//     if (!findNotice) {
//       throw new Error("공지사항을 찾을 수 없습니다.");
//     }

//     MemoryNoticeRepository.store.delete(noticeId);

//     return;
//   }

  
// }
