// [유저]
// 회원가입 - signUp
// 내 정보 조회 - getMyInfo

import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/users/service/users.service.type";
import { CryptoService } from "@/api/common/services/crypto.service";

export default class UsersController {
  constructor(private _userService: UserService) {
    this.signUp = this.signUp.bind(this);
    this.getMyInfo = this.getMyInfo;
    this.updateMyInfo = this.updateMyInfo.bind(this);
    this.logout=this.logout.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  /** 회원가입 (사용자페이지) */
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = req.body;
      // console.log('pssw',password)
      const { hashedPassword, salt } = CryptoService.encryptPassword(password);
      
      const user = await this._userService.createUser({
        email: req.body.email,
        password: hashedPassword,
        salt,
        profile: {
          nickName:req.body.profile.nickName,
          firstName: req.body.profile.firstName,
          telNumber:req.body.profile.telNumber
        },
      });
      console.log('Request body:', req.body);
       
      res.send(user);
    } catch (error) {
      console.log('error',error);
      next(error);
    }
  }


  /** 내 정보 조회 (사용자페이지) */
  async getMyInfo(req: Request, res: Response, next: NextFunction) {
    const user = await this._userService.getUser(req.user.userId);

    res.send(user);
  }

  /** 내 정보 수정 (사용자 페이지) */
  async updateMyInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;

      const user = await this._userService.updateUser(userId, {
        profile: {
          ...req.body.profile,
        },
      });

      res.send(user);
    } catch (error) {
      next(error);
    }
  }
  /**로그아웃 */
  async logout(req:Request,res:Response,next:NextFunction){
        try{
          // res.setHeader(
          //   "Set-Cookie",
          //   "accessToken=; Path=/; HttpOnly: Max-Age=0"
          // )
          res.clearCookie('accessToken',{path:'/'})
          res.status(200).send()
          res.redirect('/')
        }catch(error){
          next(error)
        }
      // const{userId}=req.user;
      // const user=await 
    // res.clearCookie("accessToken");
    // res.status(200).send(`<script>alert('로그아웃됨.나가!');
    // location.href='/login';</script>`);
   
  }
  
  /** 패스워드 수정 */
  async updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;
      const { password } = req.body;
      const { hashedPassword, salt } = CryptoService.encryptPassword(password);

      const user = await this._userService.updateUser(userId, {
        password: hashedPassword,
        salt,
      });

      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}
