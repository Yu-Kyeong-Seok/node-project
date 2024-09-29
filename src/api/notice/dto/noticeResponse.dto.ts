//공통 응답 DTO 만들어둔 것
export class NoticeResponseDTO {
  _id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  // author: IUser;

  constructor(notice: any) {
    this._id = notice._id;
    this.title = notice.title;
    this.content = notice.content;
    this.createdAt = notice.createdAt;
    this.updatedAt = notice.updatedAt;
  }
}