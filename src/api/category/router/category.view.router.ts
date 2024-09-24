import express from "express";
import CategoryViewController from "../controller/category.view.controller";
import { CategoriesServiceImpl } from "../service/categoryService";
import { MongooseCategoryRepository } from "../repository/mongooseCategory.repository";

const categoryViewRouter = express.Router();
const categoryViewController = new CategoryViewController(new CategoriesServiceImpl(new MongooseCategoryRepository()));

const BASE_PATH = "/views";

categoryViewRouter.get(`${BASE_PATH}/category`, (req, res, next) => {
    categoryViewController.getCategoryView(req, res, next); 
});

categoryViewRouter.get(`${BASE_PATH}/category/:categoryName`, (req, res, next) => {
    categoryViewController.getCategoryDetailView(req, res, next); 
});

export default categoryViewRouter;