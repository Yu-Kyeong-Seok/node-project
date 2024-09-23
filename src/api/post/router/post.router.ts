import express from "express";
// import { ROUTES_INDEX } from "..";
// import { extractPath } from "@/utils/path.util";
// import UsersController from "@/api/users/controller/users.controller";
// import { UsersServiceImpl } from "@/api/users/service/users.service";
// import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
// import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";

const viewRouter = express.Router();
// const usersController = new UsersController(
//   new UsersServiceImpl(
//     new MongooseUserRepository(),
//     new MongooseProfileRepository()
//   )
// );
const BASE_PATH = "/views";

viewRouter.get(`${BASE_PATH}/Post/Post`, (req, res) => {
  res.render(`Post/Post`);
});

viewRouter.get(`${BASE_PATH}/Post/PostDetail`, (req, res) => {
  res.render(`Post/PostDetail`);
});
