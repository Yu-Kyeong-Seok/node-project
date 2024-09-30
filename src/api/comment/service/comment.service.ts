import HttpException from "@/api/common/exceptions/http.exception";
import { commentResponseDTO } from "../dto/commentResponse.dto";
import { CommentService } from "./comment.service.type";
import { CommentRepository } from "../repository/comment.respository";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { PostRepository } from "@/api/post/repository/post.repository";
import { MongooseComment } from "../model/comment.schema";

export class CommentsServiceImpl implements CommentService{
    private readonly _commentRepository:CommentRepository;
    private readonly _postRepository:PostRepository;
    private readonly _userRepository:UserRepository;
  

    constructor(commentRepository:CommentRepository,userRepository:UserRepository,postRepository:PostRepository){
        this._commentRepository=commentRepository;
        this._postRepository=postRepository;
        this._userRepository=userRepository;
    }
    
    
     async getComments(postId:string): Promise<commentResponseDTO[]> {
        const comments = await this._commentRepository.findByAllPostId(postId);
        if (!comments) {
            return []; // comments가 null일 경우 빈 배열 반환
        }
       // console.log('9/25commentssss',comments)
        return comments.map(comment => ({
            _id: comment._id,
            content: comment.content,
            image: comment.image,
            author:comment.postId.author._id,
            createdAt: comment.createdAt,
            postId: comment.postId._id, // postId의 _id만 포함
         
        }));
    }
    async createComment(userId:string,params:Omit<IComment,"_id" |"commentId" |"author"| "createdAt">):Promise<commentResponseDTO | null>{
         // 1. 작성자 찾기
    const author = await this._userRepository.findById(userId);
    
    if (!author) {
        throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    // 2. 부모 글 찾기
    const post = await this._postRepository.findById(params.postId);
    
    if (!post) {
        throw new HttpException(404, "해당 게시물이 없습니다.");
    }

    // 3. 새로운 댓글 생성
    const newComment = await this._commentRepository.save({
        ...params,
        author,
            // id: author.id,
            // userName: author.userName,
        
        createdAt: new Date(), // 생성 시간 추가
    });
 
    // 4. 저장
    const savedComment = await this._commentRepository.save(newComment);
    return new commentResponseDTO(savedComment); 
    
    }
    async  deleteComment(commentId: string): Promise<commentResponseDTO | null> {
        const comment=await this._commentRepository.findById(commentId);
        if(!comment){
            throw new HttpException(401,'댓글 없음.')
        }
        await this._commentRepository.delete(commentId);
        return comment;
       
    }
    async editComment(commentId: string, updatedComment: Partial<IComment>): Promise<IComment> {
        const updatedResult = await this._commentRepository.update(commentId, updatedComment);
    
        if (!updatedResult) {
            throw new Error("댓글 수정에 실패했습니다.");
        }

        return updatedResult; // 수정된 댓글을 반환
    }
    
}