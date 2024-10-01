
export interface CommentRepository{
     /*댓글 목록 조회*/
     findAll():Promise<IComment[]>;
    findByAllPostId(postId:string):Promise<IComment[]>;
   // findById(commentId:string):Promise<IComment>;
    findById(commentId:string):Promise<IComment | null>;
    /*댓글 생성*/
    save(comment:Omit<IComment,"_id" |"commentId">):Promise<IComment>;
   
    /**댓글 수정 */
    update(commentId:string,updateCommentInfo:Partial<IComment>):Promise<IComment>;
    /*댓글 삭제*/
    delete(commentId:string): Promise<void>;
    /** 내 댓글 조회 */
    findByAllAuthor(id:string): Promise<IComment[]>;
    /**댓글 수 */
    countByPostId(postId:string):Promise<number>;
}