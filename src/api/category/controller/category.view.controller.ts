import { Request, Response, NextFunction } from "express";
import { CategoriesService } from "../service/categoryService.type";

export default class CategoryViewController {
    private readonly _categoryService: CategoriesService;

    constructor(_categoryService: CategoriesService) {
        this._categoryService = _categoryService;
    }

    // 카테고리 목록을 EJS에 전달
    async getCategoryView(req: Request, res: Response, next: NextFunction) {
        try {
            const categories = await this._categoryService.getCategory();
            res.render('category/category', { categories });
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    // 카테고리 상세 정보 EJS에 전달
    async getCategoryDetailView(req: Request, res: Response, next: NextFunction) {
        try {
            const category = await this._categoryService.getCategoryDetail(req.params.categoryId);
            res.render('category/:categoryName', { category });
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}