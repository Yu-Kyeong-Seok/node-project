import { NextFunction, Request, Response } from "express";

export default class CategoryController{

    async getCategory(req:Request, res:Response, next:NextFunction){
        try{
            res.send('카테고리 조회')
        }  catch(error){
            console.log(error)
        }
    }

    async getCategoryDetail(req:Request, res:Response, next:NextFunction){
        try{
            res.send('카테고리 상세 조회')
        }  catch(error){
            console.log(error)
        }
    }
}