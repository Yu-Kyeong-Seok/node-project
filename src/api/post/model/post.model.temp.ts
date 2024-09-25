export class Post implements IPost {
id: string;
title: string;
content: string;
category: string;
image: string;
createdAt: Date;
author: IUser;

constructor(params: IPost) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.category = params.category;
    this.image = params.image;
    this.createdAt = params.createdAt
    this.author = params.author;
  }
}