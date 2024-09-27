import express from "express";
import { ROUTES_INDEX } from "@/routers";
import { ProfileServiceImpl } from "@/api/profile/service/profile.service";
import ProfileController from "../controller/profile.view.controller";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { extractPath } from "@/utils/path.util";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

const profileRouter = express.Router();

const PROFILE_VIEW_ROUTERS = {
    // 프로필
    PROFILE: "/profile/:id",
    // 프로필 수정
    PROFILE_EDIT: "/profile/edit/:id",
    // 이메일 수정
    CHANGE_EMAIL: "/profile/changeEmail/:id",
    // 휴대폰번호 수정
    CHANGE_NUMBER: "/profile/changeNumbers/:id",
    // 패스워드 수정
    CHANGE_PASSWORD: "/profile/changePassword/:id",
    // 계정설정
    SETTING: "/profile/setting/:id",
} as const;

const profileController = new ProfileController(
    new ProfileServiceImpl(
        new MongooseUserRepository(),
        new MongooseProfileRepository()
    )
);

profileRouter.get(
    PROFILE_VIEW_ROUTERS.PROFILE,
    authCookieViewMiddleware(false),
    profileController.profile
)

profileRouter.get(
    PROFILE_VIEW_ROUTERS.PROFILE_EDIT,
    authCookieViewMiddleware(false),
    profileController.profileEdit
)

profileRouter.get(
    PROFILE_VIEW_ROUTERS.CHANGE_EMAIL,
    authCookieViewMiddleware(false),
    profileController.profileChangeEmail
)

profileRouter.get(
    PROFILE_VIEW_ROUTERS.CHANGE_NUMBER,
    authCookieViewMiddleware(false),
    profileController.profileChangeNumber
)

profileRouter.get(
    PROFILE_VIEW_ROUTERS.CHANGE_PASSWORD,
    authCookieViewMiddleware(false),
    profileController.profileChangePassword
)
profileRouter.get(
    PROFILE_VIEW_ROUTERS.SETTING,
    authCookieViewMiddleware(false),
    profileController.profileSetting
);

export default profileRouter;