// [관리자]
// 유저 목록 조회 - getUsers
// 유저 상세 조회 - getUser
// 유저 생성 - createUser
// 유저 수정 - updateUser
// 유저 삭제 - deleteUser

import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/users/service/users.service.type";
import { CryptoService } from "@/api/common/services/crypto.service";

export default class AdminUserController {
  constructor(private _userService: UserService) {
    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  /** 유저 목록 조회 (관리자) */
  async getUsers(
    req: Request<
      adminGetUsersRequest["path"],
      adminGetUsersResponse,
      adminGetUsersRequest["body"],
      adminGetUsersRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = await this._userService.getUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  }

  /** 유저 상세 조회 (관리자) */
  async getUser(
    req: Request<
      adminGetUserRequest["path"],
      adminGetUserResponse,
      adminGetUserRequest["body"],
      adminGetUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.params;

      const user = await this._userService.getUser(userId);

      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  /** 유저 생성 (관리자) */
  async createUser(
    req: Request<
      adminCreateUserRequest["path"],
      adminCreateUserResponse,
      adminCreateUserRequest["body"],
      adminCreateUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { password } = req.body;

      const { hashedPassword, salt } = CryptoService.encryptPassword(password);

      const newUser = await this._userService.createUser({
        ...req.body,
        password: hashedPassword,
        salt,
      });
      res.send(newUser);
    } catch (error) {
      next(error);
    }
  }

  /** 유저 수정 (관리자) */
  async updateUser(
    req: Request<
      adminUpdateUserRequest["path"],
      adminUpdateUserResponse,
      adminUpdateUserRequest["body"],
      adminUpdateUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      await this._userService.updateUser(req.params.userId, req.body);

      res.status(204).send();
    } catch (error: any) {
      next(error);
    }
  }

  /** 유저 삭제 (관리자) */
  async deleteUser(
    req: Request<
      adminDeleteUserRequest["path"],
      adminDeleteUserResponse,
      adminDeleteUserRequest["body"],
      adminDeleteUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.params;

      await this._userService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
