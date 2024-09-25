import mongoose from "mongoose";

const faqSchema = new mongoose.Schema<IFaq>({
  id:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true,
    
  },
  content:{
    type:String,
    required:true,
    
  }
});

  //     author: {
//       type: String,
//       required: true,
//     },

export const MongooseFaq = mongoose.model<IFaq>(
  "Faq",
  faqSchema
);
