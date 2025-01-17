import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AuthViewController from "../controller/auth.view.controller";
import { AuthServiceImpl } from "../service/auth.service";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { UsersServiceImpl } from "@/api/users/service/users.service";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { createUserValidator } from "@/api/users/dto/validations/users.validation"
import {validate} from "@/api/common/middlewares/validation.middleware"
const authViewRouter = express.Router();

const authViewController = new AuthViewController(
  new AuthServiceImpl(new MongooseUserRepository()),
  new UsersServiceImpl(
    new MongooseUserRepository(),
    new MongooseProfileRepository()
  )
);

const AUTH_VIEW_ROUTES = {
  /** 유저 로그인 */
  SIGN_IN: `/auth/login`,
  /** 유저 회원가입 */
  SIGN_UP: `/auth/signUp`,
} as const;

authViewRouter.get(
  extractPath(AUTH_VIEW_ROUTES.SIGN_IN, ROUTES_INDEX.AUTH_VIEW),
  authViewController.loginPage
  // AUTH_VIEW_ROUTES.SIGN_IN,(req,res)=>{
  //   res.render('client/auth/login')
  // }
);

// authViewRouter.post(
//   extractPath(AUTH_VIEW_ROUTES.SIGN_IN, ROUTES_INDEX.AUTH_VIEW),
//   authViewController.login
// );

authViewRouter.get(
  extractPath(AUTH_VIEW_ROUTES.SIGN_UP, ROUTES_INDEX.AUTH_VIEW),
 // validate(createUserValidator),
  authViewController.signUpPage
  // AUTH_VIEW_ROUTES.SIGN_UP,(req,res)=>{
  //   res.render('client/auth/signup')
  // }
);
authViewRouter.post(
  extractPath(AUTH_VIEW_ROUTES.SIGN_UP, ROUTES_INDEX.AUTH_VIEW),
  validate(createUserValidator),
  authViewController.signup // 실제 회원가입 처리 로직
);


export default authViewRouter;
