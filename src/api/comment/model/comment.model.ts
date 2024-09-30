export class Comment implements IComment{
    /** 댓글 ID */
    commentId: string;
    /**부모 게시글 ID */
    //postId:IPost;
    postId: IPost;
    /** 댓글 내용 */
    content : string;
    /** 댓글 이미지 */
    image? : string;
    /** 작성자 */
    author: IUser;
     /** 게시글 작성날짜 */
    createdAt : Date;
    _id: string;

    constructor(params:IComment){
        this.commentId=params.commentId;
        this.postId=params.postId;
        this.content=params.content;
        this.author=params.author;
        this.createdAt=params.createdAt;
        this._id=params._id;
    }
}