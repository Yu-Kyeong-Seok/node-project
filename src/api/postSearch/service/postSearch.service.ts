import { PostSearchModel } from '../model/postSearch.model';

// export class PostSearchService {
//   private postSearchModel: PostSearchModel;

//   constructor() {
//     this.postSearchModel = new PostSearchModel();
//   }

//   async searchPosts(keyword: string) {
//     return await this.postSearchModel.searchPosts(keyword);
//   }
// }


// service/postSearch.service.ts

export class PostSearchService {
  private postSearchModel: PostSearchModel;

  constructor() {
    this.postSearchModel = new PostSearchModel();
  }

  /** 키워드를 이용한 게시글 검색 */
  async searchPostsByKeyword(keyword: string): Promise<any> {
    try {
      // 모델을 통해 검색 로직을 실행
      const searchResults = await this.postSearchModel.searchPosts(keyword);
      return searchResults;
    } catch (error) {
      console.error("Error in PostSearchService:", error);
      throw error;
    }
  }
}

