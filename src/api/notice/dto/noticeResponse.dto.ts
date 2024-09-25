//공통 응답 DTO 만들어둔 것
export class NoticeResponseDTO {
  noticeId: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  // author: IUser;

  constructor(params: INotice) {
    this.noticeId = params.id;
    this.title = params.title;
    this.content = params.content;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}