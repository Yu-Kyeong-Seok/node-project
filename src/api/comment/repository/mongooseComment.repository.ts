import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseComment } from "../model/comment.schema";
import { CommentRepository } from "./comment.respository";
import mongoose from "mongoose";

export class MongooseCommentRepository implements CommentRepository{
    async save(comment:Omit<IComment,"_id" | "commentId">):Promise<IComment>{
        try{
            const newComment= new MongooseComment(comment)
            return await newComment.save();
            }
            catch(error){
            console.error(error)
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
    async findByAllPostId(postId:string):Promise<IComment[] >{
        try{
            const comments = await MongooseComment.find({ postId })
            .populate({
              path: "postId",  // 댓글 작성자 정보
              populate: {
                path: "author",  // 프로필 정보 불러오기
                select: "profile.userName profile.id",  // 필요한 프로필 정보만 선택
            }});
          
    
            console.log('commentdMongoose,sdsd',comments)
        return comments; 
        
    }catch(error:any){
        const message = error.message.toString();
          if (message.includes("Cast to ObjectId failed")) {
            return [];
          }
          throw error;
    }
    }
    async findById(commentId: string): Promise<IComment | null> {
        try {
            const comment = await MongooseComment.findById(commentId).populate({
                path: "postId",
                populate: {
                    path: "author"
                }
            });
    
            // 찾은 댓글이 없으면 null 반환
            if (!comment) {
                return null; 
            }
            
            return comment; // 찾은 댓글 반환
        } catch (error:any) {
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
                return null; // 잘못된 ObjectId일 경우 null 반환
            }
            throw error; // 다른 에러는 throw
        }
       
    }

    async update(commentId: string, updateCommentInfo: Partial<IComment>): Promise<IComment> {
        console.log("Updating comment with ID:", commentId); 
        const objectId = new mongoose.Types.ObjectId(commentId); // ID 변환

        // if (comment.author.toString() !== userId) {
        //     throw new HttpException(403, "수정 권한이 없습니다.");
        //   }

        const updatedComment = await MongooseComment.findByIdAndUpdate(objectId, updateCommentInfo, { new: true });
        console.log('updateMOngekse',updatedComment)
        if (!updatedComment) {
          throw new HttpException(404, "댓글을 찾을 수 없습니다.");
        }
      
        return updatedComment; // 수정된 댓글을 반환
      }
        // try {
        //     const results = await MongooseComment.findByIdAndUpdate(
        //       commentId,
        //       updateCommentInfo,
        //       { new: true } 
        //     );
        //     console.log('results',updateCommentInfo);
        //     if (!results) {
        //       throw new HttpException(404, "댓글을 찾을 수 없습니다.");
        //     }
        //     return results;
        // } catch (error) {
        //     console.error('Update Error:', error);
        //     throw new HttpException(500, '댓글 업데이트 중 오류 발생');
        // }


      async delete(commentId:string): Promise<void>{
        console.log('delete',{_id:commentId})
        const result=await MongooseComment.deleteOne({_id:commentId})
        if (result.deletedCount === 0) {
            throw new HttpException(404, "댓글을 찾을 수 없습니다.");
          }
          return;
      }

      async findByAllAuthor(id: string): Promise<IComment[]> {
        
        const comments = await MongooseComment.find({ "author.id": id }).exec();

        return comments;
        }


      async countByPostId(postId: string): Promise<number> {
          return MongooseComment.countDocuments({postId})
      }

}