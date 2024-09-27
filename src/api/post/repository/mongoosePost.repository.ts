import HttpException from "@/api/common/exceptions/http.exception";
import { MongoosePost } from "@/api/post/model/post.schema";
import { PostRepository } from "@/api/post/repository/post.repository";

export class MongoosePostRepository implements PostRepository {
  async findAllWithPagination({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: IPost[];
    next: string | null;
  }> {
    const offsetValue = Number(offset) || 0;
    const limitValue = Number(limit) || 10;
    // throw new Error("Method not implemented.");
    const list = await MongoosePost.find()
      .limit(limitValue)
      .skip(offsetValue)
      .populate({
        path: "author",
        populate: {
          path: "profile",
        },
      })
      .sort({ createdAt: -1 });

    const totalCount = await MongoosePost.find().countDocuments();

    return {
      totalCount,
      results: list,
      prev:
        offsetValue - limitValue >= 0
          ? `?offset=${offsetValue - limitValue}&limit=${limitValue}`
          : null,
      next:
        offsetValue + limitValue < totalCount
          ? `?offset=${offsetValue + limitValue}&limit=${limitValue}`
          : null,
    };
  }

  async save(post: Omit<IPost, "id">): Promise<IPost> {
    const newPost = new MongoosePost({
      ...post,
    });

    await newPost.save();

    return newPost;
  }
  async findAll(): Promise<IPost[]> {
    const values = await MongoosePost.find().populate({
      path: "author",
      populate: {
        path: "profile",
      },
    });

    return values;
  }
  async findById(id: string): Promise<IPost | null> {
    const post = await MongoosePost.findById(id).populate({
      path: "author",
      populate: {
        path: "profile",
      },
    });
    return post;
  }
  async update(postId: string, updatePostInfo: Partial<IPost>): Promise<IPost> {
    const results = await MongoosePost.findByIdAndUpdate(
      postId,
      updatePostInfo
    );

    if (!results) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    return results;
  }
  async delete(postId: string): Promise<void> {
    await MongoosePost.deleteOne({ _id: postId });

    return;
  }
}
