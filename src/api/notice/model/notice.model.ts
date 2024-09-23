export class Notice implements INotice {
  id: string;
  title: string;
  content: string;
  // author: IUser;

  constructor(params: INotice) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    // this.author = params.author;
  }
}