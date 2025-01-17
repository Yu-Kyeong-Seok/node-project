export class PostResponseDTO {
    postId: string;
    category?: string;
    title: string;
    content: string;
    author: {
      id: string;
      userName: string;
      nickName : string;
    };
    createdAt: Date;
    image ?: string;
    likeCount:number;
    commentCount: number;  // 댓글 수 필드 추가

    
    constructor(params: IPost, commentCount: number) {
      this.postId = params.id;
      this.category= params.category;
      this.title = params.title;
      this.image = params.image;
      this.content = params.content;
      this.author = {
        id: params.author?.id,
        userName: params.author?.profile?.firstName,
        nickName: params.author?.profile?.nickName
      };
      this.createdAt = params.createdAt;
      this.likeCount=params.likeCount
      this.commentCount = commentCount;  
    }
  }
  
