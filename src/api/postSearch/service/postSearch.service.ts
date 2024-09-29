import { PostSearchModel } from '../model/postSearch.model';

export class PostSearchService {
  private postSearchModel: PostSearchModel;

  constructor() {
    this.postSearchModel = new PostSearchModel();
  }

  async searchPosts(keyword: string) {
    return await this.postSearchModel.searchPosts(keyword);
  }
}
