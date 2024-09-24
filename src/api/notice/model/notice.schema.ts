import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema<INotice>({
  id:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true,
    
  }
});

  //     author: {
//       type: String,
//       required: true,
//     },

export const MongooseNotice = mongoose.model<INotice>(
  "Notice",
  noticeSchema
);
