import express from "express";
import CategoryViewController from "@/api/category/controller/category.view.controller";
import { CategoriesServiceImpl } from "@/api/category/service/categoryService";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { PostsServiceImpl } from "@/api/post/service/post.service";

const categoryViewRouter = express.Router();

const categoryViewController = new CategoryViewController(new CategoriesServiceImpl(new MongooseCategoryRepository(), new MongoosePostRepository()), new PostsServiceImpl(new MongoosePostRepository(), new MongooseUserRepository()));

const BASE_PATH = "/views";

categoryViewRouter.get(`${BASE_PATH}/category`, (req, res, next) => {
    categoryViewController.getCategoryView(req, res, next); 
});

categoryViewRouter.get(`${BASE_PATH}/category/:categoryName`, (req, res, next) => {
    categoryViewController.getCategoryDetailView(req, res, next); 
});

export default categoryViewRouter;