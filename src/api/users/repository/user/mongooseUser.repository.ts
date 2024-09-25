import { UserRepository } from "@/api/users/repository/user/user.repository";
import { MongooseUser } from "@/api/users/model/user.schema";

export class MongooseUserRepository implements UserRepository {
  async save(user: Omit<IUser, "id">): Promise<IUser> {
    const newUser = new MongooseUser(user);

    await newUser.save();

    return newUser;
  }
  async findAll(): Promise<IUser[]> {
    const values = await MongooseUser.find().populate("profile");
    return values;
  }

  async findById(id: string): Promise<IUser | null> {
    try {
      const findUser = await MongooseUser.findById(id)
        .populate({
          path: "posts",
          populate: {
            path: "author",
            populate: {
              path: "profile",
            },
          },
        })
        .populate("profile");

      return findUser;
    } catch (error: any) {
      const message = error.message.toString();
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const findUser = await MongooseUser.findOne({ email });

    return findUser ?? null;
  }
  async update(userId: string, updateUserInfo: Partial<IUser>): Promise<void> {
    await MongooseUser.findByIdAndUpdate(userId, updateUserInfo).populate(
      "profile",
      "posts"
    );

    return;
  }
  async delete(userId: string): Promise<void> {
    await MongooseUser.deleteOne({ _id: userId });

    return;
  }
}
