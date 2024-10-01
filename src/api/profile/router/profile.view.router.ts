import express from "express";
import { ProfileServiceImpl } from "@/api/profile/service/profile.service";
import ProfileViewController from "../controller/profile.view.controller";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import { PostsServiceImpl } from "@/api/post/service/post.service";
import { MongoosePostRepository } from "@/api/post/repository/mongoosePost.repository";
import { CommentsServiceImpl } from "@/api/comment/service/comment.service";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";

const profileViewRouter = express.Router();

const PROFILE_VIEW_ROUTERS = {
    // 프로필
    PROFILE: "/profile",
    // 프로필 수정
    PROFILE_EDIT: "/profile/edit/:id",
    // 이메일 수정
    CHANGE_EMAIL: "/profile/changeEmail/:id",
    // 휴대폰번호 수정
    CHANGE_NUMBER: "/profile/changeNumbers/:id",
    // 패스워드 수정
    CHANGE_PASSWORD: "/profile/changePassword/:id",
    // 계정설정
    SETTING: "/profile/setting",
} as const;

const profileController = new ProfileViewController(
    new ProfileServiceImpl(
        new MongooseUserRepository(),
        new MongooseProfileRepository()
    ),
    new PostsServiceImpl(
        new MongoosePostRepository(),
        new MongooseUserRepository()
    ),
    new CommentsServiceImpl(
        new MongooseCommentRepository(), // CommentRepository
        new MongooseUserRepository(),
        new MongoosePostRepository()    // PostRepository
    )
);

profileViewRouter.get(
    PROFILE_VIEW_ROUTERS.PROFILE,
    authCookieViewMiddleware(false),
    profileController.profile
);

profileViewRouter.get(
    PROFILE_VIEW_ROUTERS.PROFILE_EDIT,
    authCookieViewMiddleware(false),
    profileController.profileEdit
);

profileViewRouter.get(
    PROFILE_VIEW_ROUTERS.CHANGE_EMAIL,
    authCookieViewMiddleware(false),
    profileController.profileChangeEmail
);

profileViewRouter.get(
    PROFILE_VIEW_ROUTERS.CHANGE_NUMBER,
    authCookieViewMiddleware(false),
    profileController.profileChangeNumber
);

profileViewRouter.get(
    PROFILE_VIEW_ROUTERS.CHANGE_PASSWORD,
    authCookieViewMiddleware(false),
    profileController.profileChangePassword
);
profileViewRouter.get(
    PROFILE_VIEW_ROUTERS.SETTING,
    authCookieViewMiddleware(false),
    profileController.profileSetting
);

export default profileViewRouter;