import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";
import { UserService } from "@/api/users/service/users.service.type";
import HttpException from "@/api/common/exceptions/http.exception";

export default class AuthViewController {
  private readonly _authService: AuthService;
  private readonly _userService: UserService;

  constructor(authService: AuthService, userService: UserService) {
    this._authService = authService;
    this._userService = userService;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const{email, password } = req.body;

      const result = await this._authService.login(email, password);
 
      res
        .status(200)
        .setHeader("Authorization", `Bearer ${result.accessToken}`)
        .setHeader(
          `Set-Cookie`,
          `accessToken=Bearer ${result.accessToken}; Path=/;`
        )
        .redirect("/");
    } catch (error: any) {
      res.status(401).send(`
        <script>alert('${error.message}'); location.href='/auth/login';</script>`);
    }
  }

  /** 로그인 페이지 */
  async loginPage(req: Request, res: Response, next: NextFunction) {
    res.render("client/auth/login");
  }

  /** 회원가입 페이지 */
  async signUpPage(req: Request, res: Response, next: NextFunction) {
    res.render("client/auth/signup");
  }

  async signup(req:Request,res:Response,next:NextFunction){
    try{
      const {email,password,profile}=req.body;
      const newUser=await this._userService.createUser(req.body);
      res.redirect('/login')
    }catch(error){
      throw new HttpException(400,'회원가입 중 오류 발생하였습니다.')
    }
  } 
}
