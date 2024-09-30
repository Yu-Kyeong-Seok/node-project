import express from "express";
import { ProfileServiceImpl } from "@/api/profile/service/profile.service";
import ProfileViewController from "../controller/profile.view.controller";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

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