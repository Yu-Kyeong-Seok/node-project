import HttpException from "@/api/common/exceptions/http.exception";
import { MongoosePost } from "@/api/post/model/post.schema";
import { PostRepository } from "@/api/post/repository/post.repository";
import { promises } from "node:dns";

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
      likeCount: 0,
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
  async likePost(postId: string): Promise<void> {
    const post = await MongoosePost.findById(postId);

    if (!post) {
        throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    post.likeCount = (post.likeCount || 0) + 1;
    await post.save();
  }
  async findByAllAuthor(id: string): Promise<IPost[]> {
    const posts = await MongoosePost.find({ author: id })

    return posts;
  }
  async getTopLikesByCategory(): 
    Promise<{
    category: string;
    totalCount: number;
    cssClass: string;
    }[]>{
    const result = await MongoosePost.aggregate([
      {
          $group: {
              _id: "$category", // 카테고리별로 그룹화
              totalCount: { $sum: "$likeCount" } // 각 카테고리의 문서 수 합산
          }
      }
    ]);
  
    const sortedResult = result.sort((a,b) => b.totalCount - a.totalCount);

    return sortedResult.slice(0, 3).map(item => ({
      category: item._id as string,
      totalCount: item.totalCount as number,
      cssClass: "" as string,
    }));
  }

}
