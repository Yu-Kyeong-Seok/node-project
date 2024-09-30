import { Request, Response, NextFunction } from "express";
import { CategoriesService } from "@/api/category/service/categoryService.type";
import { PostService } from "@/api/post/service/post.service.type";

export default class CategoryViewController {
    private readonly _categoryService: CategoriesService;
    private readonly _postService: PostService;

    constructor(_categoryService: CategoriesService, _postService: PostService) {
        this._categoryService = _categoryService;
        this._postService = _postService;
    }

    // 카테고리 목록을 EJS에 전달
    async getCategoryView(req: Request, res: Response, next: NextFunction) {
        const categoryNameMapping: { [key: string]: string } = {
            "animal": "동물",
            "food": "음식",
            "movie": "영화",
            "gran": "육아",
            "game": "게임",
            // Add more mappings as needed
        };

        try {
            const categories = await this._categoryService.getCategory();

            // Map the categories to include Korean names and keep English names for classes
            const categoriesWithKoreanNames = categories.map(category => ({
                ...category,
                koreanName: categoryNameMapping[category.name] || category.name, // Korean name for rendering
                className: category.name // English name for class attribute
            }));

            res.render('category/category', { category: categoriesWithKoreanNames });
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    // 카테고리 상세 정보 EJS에 전달
    async getCategoryDetailView(req: Request, res: Response, next: NextFunction) {
        const categoryNameMapping: { [key: string]: string } = {
            "animal": "동물",
            "food": "음식",
            "movie": "영화",
            "gran": "육아",
            "game": "게임",
            // Add more mappings as needed
        };
        try {
            const category = await this._categoryService.getCategoryDetail(req.params.categoryName);
            if (category) {
                // 한글 이름으로 변환
                const koreanName = categoryNameMapping[category.name] || category.name;

                // 해당 카테고리의 게시글 가져오기
                const postsData = await this._postService.getPosts({
                    limit: 10, // 필요에 따라 limit, offset을 조정
                    offset: 0
                });

                console.log("Category Detail:", category);
                console.log("Posts for Category:", postsData);

                // 카테고리 상세 정보를 EJS로 전달
                res.render('category/categoryDetail', { 
                    category: {
                        ...category,
                        koreanName // 한글 이름 추가
                    },
                    posts: postsData.results
                });
            } else {
                res.status(404).send("Category not found");
            }
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}