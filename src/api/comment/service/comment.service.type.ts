import { commentResponseDTO } from "../dto/commentResponse.dto"
export interface CommentService{
    /**댓글 목록 조회 */
    getComments(postId:string):Promise<commentResponseDTO[]>
    /**댓글 작성 */
    createComment(userId:string,params:Omit<IComment,"postId"| "commentId" | "author"| "createdAt">):Promise<commentResponseDTO | null>;
    /**댓글 삭제 */
    deleteComment(commentId:string):Promise<void>
    /**댓글 수정 */
    editComment(
        commentId:string,
        updatedComment:Omit<IComment,"commentId"|"postId"| "author"|"createdAt">
        ):Promise<commentResponseDTO | null>
}