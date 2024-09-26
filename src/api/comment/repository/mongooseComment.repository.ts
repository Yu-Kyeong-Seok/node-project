import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseComment } from "../model/comment.schema";
import { CommentRepository } from "./comment.respository";

export class MongooseCommentRepository implements CommentRepository{
    async save(comment:Omit<IComment,"commentId">):Promise<IComment>{
        try{
            const newComment= new MongooseComment(comment)
            return await newComment.save();
        }
        catch(error){
            throw new HttpException(404, "댓글을 등록할 수 없습니다.");
        }
    }

    async findAll():Promise<IComment[]>{
        const values=await MongooseComment.find().populate({
            path:"postId",
            populate:{
                path:"author"
            }
        })
        .populate("author");  
        return values;
    }
    async findById(postId:string):Promise<IComment | null >{
        try{
        const comment=await MongooseComment.findById(postId).populate({
            path:"postId",
            populate:{
                path:"author"
            }
        })
        return comment; 
    }catch(error:any){
        const message = error.message.toString();
          if (message.includes("Cast to ObjectId failed")) {
            return null;
          }
          throw error;
    }
    }

    async update(commentId: string, updateCommentInfo: Partial<IComment>): Promise<IComment> {
        const results = await MongooseComment.findByIdAndUpdate(
          commentId,
          updateCommentInfo,
          { new: true } //새로운 내용으로 업뎃.
        );
        
    
        if (!results) {
          throw new HttpException(404, "게시글을 찾을 수 없습니다.");
        }
    
        return results;
      }

      async delete(commentId:string): Promise<void>{
        const result=await MongooseComment.deleteOne({_id:commentId})
        if (result.deletedCount === 0) {
            throw new HttpException(404, "댓글을 찾을 수 없습니다.");
          }
          return;
      }

}