import mongoose from "mongoose";

const commentSchema=new mongoose.Schema<IComment>({
    // id:{
    //     type:String,
    //     required:true,
    // },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required: true, 
    },
    content:{
       type:String,
       required:true,
        length:200
    },
    author:{
        id: { type: String, required: true },
  userName: { type: String, required: true },
    },
    image:{
        type:String
    },},
   
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          },
    },
)

export const MongooseComment=mongoose.model<IComment>(
    "Comment",
    commentSchema
)