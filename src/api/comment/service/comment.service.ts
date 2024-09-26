import HttpException from "@/api/common/exceptions/http.exception";
import { commentResponseDTO } from "../dto/commentResponse.dto";
import { CommentService } from "./comment.service.type";
import { CommentRepository } from "../repository/comment.respository";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { PostRepository } from "@/api/post/repository/post.repository";

export class CommentsServiceImpl implements CommentService{
    private readonly _commentRepository:CommentRepository;
    private readonly _userRepository:UserRepository;
    private readonly _postRepository:PostRepository;

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
        return comments.map(comment => ({
           // commentId: comment._id,
            content: comment.content,
            image: comment.image,
            author:comment.postId.author._id,
            createdAt: comment.createdAt,
            postId: comment.postId._id, // postId의 _id만 포함
        }));

       //console.log('comments service',comments)
        // return comments;
      
     
  
    }
    async createComment(userId:string,params:Omit<IComment,"commentId" |"author"| "createdAt">):Promise<commentResponseDTO | null>{
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
    async editComment(commentId: string,
        updatedComment: Omit<IComment, "id" | "postId" | "author" | "createdAt">): Promise<commentResponseDTO | null> {
        const comment=await this._commentRepository.findById(commentId);
        if(!comment){
            throw new HttpException(401,'댓글 없음.')
        }
        const updated=await this._commentRepository.update(commentId, updatedComment);
        return updated;
    }
}