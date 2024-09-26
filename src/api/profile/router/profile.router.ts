import express from "express";
import { ROUTES_INDEX } from "@/routers";
import { ProfileServiceImpl } from "@/api/profile/service/profile.service";
import ProfileController from "../controller/profile.view.controller";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";

const profileRouter = express.Router();

const PROFILE_ROUTERS = {
    /** 글 목록 조회 */
    GET_POSTS: `/api/profile`,
    /** 글 싱세 조회 */
    GET_POST: `/api/profile/:id`,
    /** 글 생성 */
    CREATE_POST: `/api/profile`,
    /** 글 수정 */
    UPDATE_POST: `/api/profile/:id`,
    /** 글 삭제 */
    DELETE_POST: `/api/profile/:id`,
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