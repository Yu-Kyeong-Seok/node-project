
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema<ICategory>({
  id:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    requried:true,
    
  }
});

export const MongooseCategory = mongoose.model<ICategory>(
  "Category",
  categorySchema
);
