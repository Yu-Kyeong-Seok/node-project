import express from "express";
import path from "node:path";
import morgan from "morgan";
import userRouter from "@/api/users/router/users.router";

import postViewRouter from "../src/api/post/router/post.view.router";
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

import postSearchRouter from "./api/postSearch/router/postSearch.router";
import postSearchViewRouter from "./api/postSearch/router/postSearch.view.router";

import profileViewRouter from "./api/profile/router/profile.view.router";
import profileRouter from "./api/profile/router/profile.router";
import adminUsersRouter from "./api/users/router/adminUsers.router";
import uploadRouter from "./api/upload/router/upload.router";

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




/*----- post 검색---------*/
app.use(postSearchViewRouter);
app.use(postSearchRouter);

/*----- 인증 ,유저 ---------*/
app.use(ROUTES_INDEX.AUTH_API, authRouter);
app.use(ROUTES_INDEX.USERS_API, userRouter);
app.use(ROUTES_INDEX.ADMIN_USERS_API, adminUsersRouter);
app.use(authViewRouter);

/**---- 공지사항,faq--------*/
app.use(noticeViewRouter);
app.use(faqViewRouter);
app.use(adminFaqRouter);
app.use(faqRouter);
app.use(adminNoticeRouter);
app.use(noticeRouter);
// app.use(appRouter);
// app.use(viewRouter);

/**----- 마이프로필 --------*/
app.use(ROUTES_INDEX.UPLOAD_API, uploadRouter);
app.use(profileViewRouter);
app.use(profileRouter);

/**----- 댓글 ------------ */
app.use(commentRouter);


/**---게시글(post)--------- */
app.use(postViewRouter);
app.use(postRouter);

/**-----카테고리----------- */
app.use(categoryViewRouter);
app.use(categoryRouter);


app.use(errorHandler);

// 이제 더이상 안녕 안써도돼 express.static과 함께니까
// app.get("/star.png", (req, res) => {
//   res.sendFile(__dirname + "/views/star.png");
// });

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});

