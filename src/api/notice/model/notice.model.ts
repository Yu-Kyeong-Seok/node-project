export class Notice implements INotice {
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
    // this.author = params.author;
  }
}