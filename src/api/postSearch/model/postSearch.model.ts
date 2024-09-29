import { MongoosePost } from "@/api/post/model/post.schema";
import mongoose from 'mongoose';

/** 게시글 검색 기능 */
export class PostSearchModel {
  async searchPosts(keyword: string): Promise<any> {
    try {
      // 제목 또는 내용에 키워드가 포함된 게시글 검색
      const posts = await MongoosePost.find({
        $or: [
          { title: { $regex: keyword, $options: 'i' } },  // 제목에서 검색
          { content: { $regex: keyword, $options: 'i' } } // 내용에서 검색
        ]
      });
      return posts;
    } catch (error) {
      console.error("Error searching posts:", error);
      throw new Error("Search failed");
    }
  }
}
