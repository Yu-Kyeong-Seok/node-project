import express from "express";
import CategoryViewController from "../controller/category.view.controller";
import { CategoriesServiceImpl } from "../service/categoryService";
import { MongooseCategoryRepository } from "../repository/mongooseCategory.repository";

const categoryViewRouter = express.Router();
const categoryViewController = new CategoryViewController(new CategoriesServiceImpl(new MongooseCategoryRepository()));

const BASE_PATH = "/views";

categoryViewRouter.get(`${BASE_PATH}/category`,categoryViewController.getCategoryView.bind(CategoryViewController));

categoryViewRouter.get(`${BASE_PATH}/category/:categoryId`,categoryViewController.getCategoryDetailView.bind(CategoryViewController));

export default categoryViewRouter;