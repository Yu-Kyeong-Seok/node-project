import express from "express";
import CategoryController from "../controller/category.controller";
import { CategoriesServiceImpl } from "../service/categoryService";
import { MongooseCategoryRepository } from "../repository/mongooseCategory.repository";

export const categoryRouter=express.Router();
const categoryController=new CategoryController(new CategoriesServiceImpl(new MongooseCategoryRepository()));
const CATEGORY_ROUTES={
    /**카테고리 조회 */
    GET_CATEGORIES:`/api/category`,
    /**상세 카테고리 조회 */
    GET_CATEGORYDETAIL:`/api/category/:categoryId`
}as const;


categoryRouter.get(CATEGORY_ROUTES.GET_CATEGORIES,categoryController.getCategory.bind(categoryController))
categoryRouter.get(CATEGORY_ROUTES.GET_CATEGORYDETAIL,categoryController.getCategoryDetail.bind(categoryController))