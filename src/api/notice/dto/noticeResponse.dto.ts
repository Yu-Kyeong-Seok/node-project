//공통 응답 DTO 만들어둔 것
export class NoticeResponseDTO {
  id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  // author: IUser;

  constructor(params: INotice) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}