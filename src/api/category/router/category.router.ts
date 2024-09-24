import express from "express";
import CategoryController from "../controller/category.controller";

const categoryRouter = express.Router();
const categoryController = new CategoeyController;

const CATEGORY_ROUTER = {
    /** 카테고리 조회 */
    GET_CATEGORIES: `/api/category`,
    /** 상세 카테고리 조회 */
    GET_CATEGORYDETAIL:`/api/category/:categoryID`
} as const;

categoryRouter.get(CATEGORY_ROUTER.GET_CATEGORIES,categoryController.getCategory);

categoryRouter.get(CATEGORY_ROUTER.GET_CATEGORYDETAIL,categoryController.getCategoryDetail);