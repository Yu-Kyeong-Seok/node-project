interface IComment {
    /** 댓글 ID */
    commentId: string;
    /**부모 게시글 ID */
    // postId:IPost;
    postId: ObjectId;
    /** 댓글 내용 */
    content : string;
    /** 댓글 이미지 */
    image? : string;
    /** 작성자 */
    author: IUser
     /** 게시글 작성날짜 */
    createdAt : Date;
}

interface ICommentResponseDTO{
 /** 게시글 ID */
  postId: string;

 /**댓글 내용*/
 content: string;
image?:string;
 /** 작성자 */
 author: {
   id: string;
   userName: string;
 };
 createdAt: Date; 
}