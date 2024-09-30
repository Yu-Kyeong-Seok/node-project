import { Router } from 'express';
import { PostSearchController } from '../controller/postSearch.controller';
import { PostSearchService } from '../service/postSearch.service';

const postSearchRouter = Router();
const postSearchService = new PostSearchService();
const postSearchController = new PostSearchController(postSearchService);

/** 검색 라우트 */
postSearchRouter.get('/api/search', postSearchController.searchPosts.bind(postSearchController));

export default postSearchRouter;
