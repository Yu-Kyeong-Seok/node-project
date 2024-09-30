import { Router } from 'express';
import { PostSearchController } from '../controller/postSearch.controller';
import { PostSearchService } from '../service/postSearch.service';  // 여기서 PostSearch API의 서비스만 사용

const postSearchViewRouter = Router();
const postSearchService = new PostSearchService();
const postSearchController = new PostSearchController(postSearchService);  // PostSearchController만 사용

/** 검색 라우트 (뷰로 렌더링) */

const BASE_PATH = "/views";

postSearchViewRouter.get(`${BASE_PATH}/search`, async (req, res, next) => {
  try {
    const keyword = req.query.keyword as string;
  
    const searchResults = await postSearchController.searchPosts(req, res, next);
    if (!res.headersSent) {
    // 검색 결과를 EJS 템플릿에 넘겨줍니다.
    res.render('postSearch/postSearch', {
      searchResults,  // 검색 결과를 뷰에 넘깁니다.
      keyword,        // 검색어를 뷰에 넘깁니다.
    });
    }
  } catch (error) {
    if (!res.headersSent) {
      next(error);
    }
  }
});

export default postSearchViewRouter;
