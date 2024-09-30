import express from "express";
import CategoryController from "@/api/category/controller/category.controller";
import { CategoriesServiceImpl } from "@/api/category/service/categoryService";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";

export const categoryRouter=express.Router();
const categoryController=new CategoryController(new CategoriesServiceImpl(new MongooseCategoryRepository(), new MongoosePostRepository()));
const CATEGORY_ROUTES={
    /**카테고리 조회 */
    GET_CATEGORIES:`/api/category`,
    /**상세 카테고리 조회 */
    GET_CATEGORYDETAIL:`/api/:categoryName`
}as const;

categoryRouter.get(CATEGORY_ROUTES.GET_CATEGORIES,categoryController.getCategory.bind(categoryController))
categoryRouter.get(CATEGORY_ROUTES.GET_CATEGORYDETAIL,categoryController.getCategoryDetail.bind(categoryController))
