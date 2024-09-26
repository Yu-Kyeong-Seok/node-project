import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema<INotice>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

//     author: {
//       type: String,
//       required: true,
//     },

export const MongooseNotice = mongoose.model<INotice>("Notice", noticeSchema);
