import { Request, Response, NextFunction } from 'express';
import { PostSearchService } from '../service/postSearch.service';

export class PostSearchController {
  private postSearchService: PostSearchService;

  constructor(postSearchService: PostSearchService) {
    this.postSearchService = postSearchService;
  }

  async searchPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const keyword = req.query.keyword as string;
      const posts = await this.postSearchService.searchPosts(keyword);
      res.json(posts);
    } catch (error) {
      next(error);
    }
  }
}
