import express from "express";
import { ROUTES_INDEX } from "@/routers";
import { ProfileServiceImpl } from "@/api/profile/service/profile.service";
import ProfileController from "../controller/profile.controller";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { extractPath } from "@/utils/path.util";

const profileRouter = express.Router();

const PROFILE_VIEW_ROUTERS = {
    // 프로필
    PROFILE: "/profile",
    // 프로필 수정
    PROFILE_EDIT: "/profile/edit",
    // 이메일 수정
    CHANGE_EMAIL: "/profile/changeEmail",
    // 휴대폰번호 수정
    CHANGE_NUMBER: "/profile/changeNumbers",
    // 패스워드 수정
    CHANGE_PASSWORD: "/profile/changePassword",
    // 계정설정
    SETTING: "/profile/setting:id",

    SETTUBG_TMP: "/profile/setting",
} as const;

const profileController = new ProfileController(
    new ProfileServiceImpl(
        new MongooseUserRepository(),
        new MongooseProfileRepository()
    )
);

profileRouter.get(
    extractPath(PROFILE_VIEW_ROUTERS.PROFILE, ROUTES_INDEX.PROFILE),
    profileController.tmpMyProfile
);

profileRouter.get(
    extractPath(PROFILE_VIEW_ROUTERS.SETTUBG_TMP, ROUTES_INDEX.PROFILE),
    profileController.MyProfile2
);

profileRouter.get(
    extractPath(PROFILE_VIEW_ROUTERS.SETTING, ROUTES_INDEX.PROFILE),
    profileController.myProfile
);

export default profileRouter;