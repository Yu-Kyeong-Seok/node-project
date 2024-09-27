export class Faq implements IFaq {
  id: string;
  title: string;
  content: string;
  // author: IUser;

  constructor(params: IFaq) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    // this.author = params.author;
  }
}