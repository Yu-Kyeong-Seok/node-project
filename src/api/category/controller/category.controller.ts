import { NextFunction,Request,Response } from "express";
import { CategoriesService } from "../service/categoryService.type";

export default class CategoryController{
    private readonly _categoryService:CategoriesService;

    constructor(_categoryService:CategoriesService){
        this._categoryService=_categoryService;
    }

    async getCategory(
        req:Request<getCategoriesRequest["path"],
        getCategoriesRequest["body"],
        getCategoriesRequest["params"]>,
        res:Response,next:NextFunction){
        try{
            const categories=await this._categoryService.getCategory();
            res.json(categories);
        }catch(error){
            console.log(error);
            next(error);
        }
    }
    async getCategoryDetail(
        req:Request<getCategoryDetailRequest["path"],
        getCategoryDetailRequest["body"],
        getCategoryDetailRequest["params"]>,
        res:Response,next:NextFunction){
        try{
            const category=await this._categoryService.getCategoryDetail(req.params.categoryId);
            res.json(category);

        }catch(error){
            console.log(error);
            next(error);
        }
    }
  
}