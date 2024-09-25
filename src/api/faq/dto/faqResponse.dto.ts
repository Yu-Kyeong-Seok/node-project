//공통 응답 DTO 만들어둔 것
export class FaqResponseDTO {
  faqId!: string;
  title: string;
  content: string;

  constructor(params: IFaq) {
    this.faqId = params.id;
    this.title = params.title;
    this.content = params.content;
  }
}