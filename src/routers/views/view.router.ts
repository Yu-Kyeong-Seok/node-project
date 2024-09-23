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

viewRouter.get(`${BASE_PATH}/login`, (req, res) => {
  res.render(`login`);
});

viewRouter.get(`${BASE_PATH}/category`, (req, res) => {
  res.render(`category/category`);
});

viewRouter.get(`${BASE_PATH}/profile/profile`, (req, res) => {
  res.render(`profile/profile`);
});

viewRouter.get(`${BASE_PATH}/profile/profileEdit`, (req, res) => {
  res.render(`profile/profileEdit`);
});

viewRouter.get(`${BASE_PATH}/profile/profileChangeEmail`, (req, res) => {
  res.render(`profile/profileChangeEmail`);
});

viewRouter.get(`${BASE_PATH}/profile/profileChangeNumbers`, (req, res) => {
  res.render(`profile/profileChangeNumbers`);
});

viewRouter.get(`${BASE_PATH}/profile/profileChangePassword`, (req, res) => {
  res.render(`profile/profileChangePassword`);
});

viewRouter.get(`${BASE_PATH}`, (req, res) => {
  res.render("index", {
    title: "홈",
  });
});

viewRouter.get(`${BASE_PATH}/write`, (req, res) => {
  res.render("client/auth/question");
});
viewRouter.get(`${BASE_PATH}/profile/setting`, (req, res) => {
  res.render("profileSetting");
});

viewRouter.get(`${BASE_PATH}/users`, (req, res) => {
  res.send("회원가입 완료");
});

export default viewRouter;
