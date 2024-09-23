import express from "express";
import { link } from "node:fs";
// import { ROUTES_INDEX } from "..";
// import { extractPath } from "@/utils/path.util";
// import UsersController from "@/api/users/controller/users.controller";
// import { UsersServiceImpl } from "@/api/users/service/users.service";
// import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
// import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";

const postRouter = express.Router();
// const usersController = new UsersController(
//   new UsersServiceImpl(
//     new MongooseUserRepository(),
//     new MongooseProfileRepository()
//   )
// );

const BASE_PATH = "/views";

postRouter.get(`${BASE_PATH}/post`, (req, res) => {
  res.render(`post/index`);
});

postRouter.get(`${BASE_PATH}/post/Detail`, (req, res) => {
  res.render(`post/postDetail`);
});

export default postRouter;
