import mongoose from "mongoose";

const profileSchema = new mongoose.Schema<IProfile>({
  birth: {
    type: String,
    length: 10,
  },
  firstName: {
    type: String,
    required: true,
    length: 100,
  },
  nickName:{
    type:String,
    required:true,
    length:20,
    unique:true,
  },
  thumbnail: {
    type: String,
    // data:Buffer,
    // contentType:String,
  },
  telNumber:{
    type:String,
    require:true,
    length:11,
    unique:true,
  },
  greeting:{
    type:String,
    required:false,
    length:20,
    unique:true,
    default:'Hello'
  },
});

export const MongooseProfile = mongoose.model<IProfile>(
  "Profile",
  profileSchema
);
