import mongoose from "@/vendors/mongoose";

const userSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    salt: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const MongooseUser = mongoose.model<IUser>("User", userSchema);
