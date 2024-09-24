import express from "express";
import path from "node:path";
import morgan from "morgan";
import appRouter from "./routers/app.router";
import userRouter from "@/api/users/router/users.router";
import postRouter from "../src/api/post/router/post.router";
import viewRouter from "./routers/views/view.router";
import authViewRouter from "@/api/auth/router/auth.view.router";
import { ROUTES_INDEX } from "./routers";
import cookieParser from "cookie-parser";
import authRouter from "./api/auth/router/auth.router";
import errorHandler from "./api/common/middlewares/errorHandler.middleware";
import {categoryRouter} from "@/api/category/router/category.router";
// import { ROUTES_INDEX } from "./routers";
// import authRouter from "./api/auth/router/auth.router";

const app = express();

app.use(express.json());
app.use(cookieParser());
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

app.use(appRouter);
//app.use(userRouter);
app.use(viewRouter);
app.use(authViewRouter);
app.use(postRouter);
app.use(categoryRouter); 


app.use(ROUTES_INDEX.USERS_API, userRouter);
app.use(ROUTES_INDEX.AUTH_API, authRouter);
// view 파일들 모아놓는 위치 설정
app.set("views", path.join(__dirname, "views"));
// view engine 세팅
app.set("view engine", "ejs");

app.use(morgan("dev")); // 클로져
app.use("/static", express.static(path.join(__dirname, "../public")));

app.get("/", function (req, res) {
  res.render("index", { title: "홈페이지" });
});

app.get("/notice", (req, res) => {
  res.render("notice/notice", { title: "공지사항" });
});

app.get("/notice/:id", (req, res) => {
  res.render("notice/noticedetail", { title: "공지사항상세" });
});

app.get("/faq", (req, res) => {
  res.render("faq/faq", { title: "FAQ" });
});

app.use(errorHandler);

// 이제 더이상 안녕 안써도돼 express.static과 함께니까
// app.get("/star.png", (req, res) => {
//   res.sendFile(__dirname + "/views/star.png");
// });

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});
