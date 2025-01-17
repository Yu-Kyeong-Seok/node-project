import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/users/service/users.service.type";

export default class UsersViewController {
  private _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
    this.myPage = this.myPage.bind(this);
    this.userDetailPage = this.userDetailPage.bind(this);
    this.withDrawPage = this.withDrawPage.bind(this);
  }

  async myPage(req: Request, res: Response, next: NextFunction) {
    try {
      const myInfo = await this._userService.getUser(req.user.userId);

      res.render("client/users/myPage", {
        user: myInfo,
      });
    } catch (error) {
      next(error);
    }
  }

  async userDetailPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("client/users/userDetail");
    } catch (error) {
      next(error);
    }
  }

  async withDrawPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("client/users/userDelete");
    } catch (error) {
      next(error);
    }
  }
}
