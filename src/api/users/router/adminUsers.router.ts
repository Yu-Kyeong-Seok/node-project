import AdminUserController from "@/api/users/controller/adminUsers.controller";
import express from "express";
import { UsersServiceImpl } from "@/api/users/service/users.service";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  createUserValidator,
  updateUserValidator,
} from "@/api/users/dto/validations/adminUsers.validation";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authRoleMiddleware } from "@/api/common/middlewares/authRole.middleware";

const adminUsersRouter = express.Router();

/** 관리자 유저 관련 API 경로 객체  */
const ADMIN_USER_ROUTES = {
  /** 유저 목록 조회 (관리자) */
  GET_USERS: `/admin-api/users`,
  /** 유저 상세 조회 (관리자) */
  GET_USER: `/admin-api/users/:userId`,
  /** 유저 생성 (관리자) */
  CREATE_USER: `/admin-api/users`,
  /** 유저 수정 (관리자) */
  UPDATE_USER: `/admin-api/users/:userId`,
  /** 유저 삭제 (관리자) */
  DELETE_USER: `/admin-api/users/:userId`,
} as const;

const adminUserController = new AdminUserController(
  new UsersServiceImpl(
    new MongooseUserRepository(),
    new MongooseProfileRepository()
  )
);

adminUsersRouter.get(
  extractPath(ADMIN_USER_ROUTES.GET_USERS, ROUTES_INDEX.ADMIN_USERS_API),
  adminUserController.getUsers
);
adminUsersRouter.get(
  extractPath(ADMIN_USER_ROUTES.GET_USER, ROUTES_INDEX.ADMIN_USERS_API),
  adminUserController.getUser
);
adminUsersRouter.post(
  extractPath(ADMIN_USER_ROUTES.CREATE_USER, ROUTES_INDEX.ADMIN_USERS_API),
  validate(createUserValidator),
  adminUserController.createUser
);
adminUsersRouter.put(
  extractPath(ADMIN_USER_ROUTES.UPDATE_USER, ROUTES_INDEX.ADMIN_USERS_API),
  validate(updateUserValidator),
  adminUserController.updateUser
);
adminUsersRouter.delete(
  extractPath(ADMIN_USER_ROUTES.DELETE_USER, ROUTES_INDEX.ADMIN_USERS_API),
  adminUserController.deleteUser
);

export default adminUsersRouter;
