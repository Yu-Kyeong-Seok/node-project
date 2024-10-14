import mongoose from "mongoose";

const postSchema = new mongoose.Schema<IPost>(
    {
    category: {
        type: String,
        required: true,
        length: 10,
    },
    title : {
        type: String,
        required: true,
        length: 20,
    },
    image : {
        type: String,
    },
    content : {
        type: String,
        required: true,
        length: 50,
    },
    likeCount: {
        type: Number,
        default: 0, // 기본값을 0으로 설정
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },},
    

    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          },
    },

);

export const MongoosePost = mongoose.model<IPost>("Post", postSchema);


