export class PostResponseDTO {
    postId: string;
    category: string;
    title: string;
    content: string;
    author: {
      id: string;
      userName: string;
    };
    createdAt: Date;
    image : string;
    
    constructor(params: IPost) {
      this.postId = params.id;
      this.category= params.category;
      this.title = params.title;
      this.image = params.image;
      this.content = params.content;
      this.author = {
        id: params.author?.id,
        userName: params.author?.profile?.firstName,
      };
      this.createdAt = params.createdAt;
    }
  }
  
