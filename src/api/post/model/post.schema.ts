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

