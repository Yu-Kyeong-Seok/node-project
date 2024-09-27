import mongoose from "mongoose";
import { INotice } from "../@types/notice.type";


const noticeSchema = new mongoose.Schema<INotice>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
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
