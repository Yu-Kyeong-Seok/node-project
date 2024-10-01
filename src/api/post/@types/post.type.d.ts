interface IPost {
       /** 게시글 ID */
    id: string;
       /** 게시글 카테고리 */
    category?: string;

       /** 게시글 제목 */
    title : string;
  
        /** 게시글 이미지 */
    image? : string;

         /** 게시글 내용 */
    content : string;

       /** 게시글 작성자 */
    author: IUser

        /** 게시글 작성날짜 */
    createdAt : Date;
    /**좋아요 수 */
    likeCount: number;
}

interface IPostResponseDTO{
    /** 게시글 ID */
    postId: string;

    /** 게시글 카테고리 */
    category: string;

    /** 게시글 제목 */
    title: string;

    /** 게시글 내용 */
    content: string;
    
    /** 작성자 */
    author: {
      id: string;
      userName: string;
    };
   // commentCount:number;
}