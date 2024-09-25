import { NextFunction, Request, Response } from "express";
import { PostService } from "@/api/post/service/post.service.type";
import { off } from "process";

export default class PostViewController {
    private readonly _postService: PostService;
    constructor(_postService: PostService) {
        this._postService = _postService;
    
        this.postListPage = this.postListPage.bind(this);
        this.postDetailPage = this.postDetailPage.bind(this);
        this.postWritePage = this.postWritePage.bind(this);
        this.postEditPage = this.postEditPage.bind(this);
      }

    async postListPage(req:Request, res:Response, next: NextFunction) {
        const offset = Number(req.query.offset) || 0;
        const limit = Number(req.query.limit) || 3; 

        const post = await._postService.getPost({
            offset, limit
        }); 
    }

    async postDetailPage(req:Request, res:Response, next: NextFunction) {
        const offset = Number(req.query.offset) || 0;
        const limit = Number(req.query.limit) || 3; 

        const post = await._postService.getPost({
            offset, limit
        }); 
    }

