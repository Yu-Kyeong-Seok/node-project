
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema<ICategory>({
  id:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  }
});

export const MongooseCategory = mongoose.model<ICategory>(
  "Category",
  categorySchema
);
