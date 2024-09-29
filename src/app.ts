import express from "express";
import path from "node:path";
import morgan from "morgan";
import appRouter from "./routers/app.router";
import userRouter from "@/api/users/router/users.router";

import postViewRouter from "../src/api/post/router/post.view.router";
import viewRouter from "./routers/views/view.router";
import authViewRouter from "@/api/auth/router/auth.view.router";
import categoryViewRouter from "@/api/category/router/category.view.router";
import adminFaqViewRouter from "./api/faq/router/adminFaq.view.router";
import faqViewRouter from "./api/faq/router/faq.view.router";
import adminNoticeViewRouter from "./api/notice/router/adminNotice.view.router";
import noticeViewRouter from "./api/notice/router/notice.view.router";
import { ROUTES_INDEX } from "./routers";
import cookieParser from "cookie-parser";
import authRouter from "./api/auth/router/auth.router";
import adminFaqRouter from './api/faq/router/adminFaq.router';
import faqRouter from './api/faq/router/faq.router';
import adminNoticeRouter from './api/notice/router/adminNotice.router';
import noticeRouter from "./api/notice/router/notice.router";
import errorHandler from "./api/common/middlewares/errorHandler.middleware";
import {categoryRouter} from "@/api/category/router/category.router";
import postRouter from "./api/post/router/post.router";
import commentRouter from "./api/comment/router/comment.router";
import profileViewRouter from "./api/profile/router/profile.view.router";
import profileRouter from "./api/profile/router/profile.router";
import adminUsersRouter from "./api/users/router/adminUsers.router";

// import { ROUTES_INDEX } from "./routers";
// import authRouter from "./api/auth/router/auth.router";

const app = express();

app.use(morgan("dev")); // 클로져
app.use("/static", express.static(path.join(__dirname, "../public")));


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true})) 

// view 파일들 모아놓는 위치 설정
app.set("views", path.join(__dirname, "views"));
// view engine 세팅
app.set("view engine", "ejs");

// /admin-api

// function sampleMiddleware(message: string) {
//   return (
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     console.log(message);

//     next();
//   };
// }

// app.use(sampleMiddleware("미들웨어 동작"));
app.use(noticeViewRouter);
app.use(faqViewRouter);
app.use(adminFaqRouter);
app.use(faqRouter);
app.use(adminNoticeRouter);
app.use(noticeRouter);
app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use(appRouter);
app.use(viewRouter);

app.use(profileViewRouter);
app.use(profileRouter);

app.use(categoryViewRouter);
app.use(authViewRouter);

app.use(commentRouter);
app.use(postViewRouter);
app.use(postRouter);
app.use(categoryRouter);

app.use(ROUTES_INDEX.USERS_API, userRouter);
app.use(ROUTES_INDEX.ADMIN_USERS_API, adminUsersRouter);
app.use(ROUTES_INDEX.AUTH_API, authRouter);

app.use(errorHandler);

// 이제 더이상 안녕 안써도돼 express.static과 함께니까
// app.get("/star.png", (req, res) => {
//   res.sendFile(__dirname + "/views/star.png");
// });

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});

