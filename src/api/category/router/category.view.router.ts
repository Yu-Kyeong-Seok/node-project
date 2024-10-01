import express from "express";
import CategoryViewController from "@/api/category/controller/category.view.controller";
import { CategoriesServiceImpl } from "@/api/category/service/categoryService";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { PostsServiceImpl } from "@/api/post/service/post.service";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";

const categoryViewRouter = express.Router();

const categoryViewController = new CategoryViewController(new CategoriesServiceImpl(new MongooseCategoryRepository(), new MongoosePostRepository()), new PostsServiceImpl(new MongoosePostRepository(), new MongooseUserRepository(),new MongooseCommentRepository));

// const BASE_PATH = "/views";
const CATEGORY_VIEW_ROUTES={
    /**카테고리 목록 */
    CATEGORY_LIST:`/category`,
    CATEGORY_DETAIL:`/category/:categoryName`
}
categoryViewRouter.get(CATEGORY_VIEW_ROUTES.CATEGORY_LIST, (req, res, next) => {
    categoryViewController.getCategoryView(req, res, next); 
});

categoryViewRouter.get(CATEGORY_VIEW_ROUTES.CATEGORY_DETAIL, (req, res, next) => {
    categoryViewController.getCategoryDetailView(req, res, next); 
});

export default categoryViewRouter;