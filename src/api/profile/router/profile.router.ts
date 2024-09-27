import express from "express";
import { ProfileServiceImpl } from "@/api/profile/service/profile.service";
import ProfileController from "../controller/profile.controller";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";

const profileRouter = express.Router();

const PROFILE_ROUTERS = {
    /** 글 목록 조회 */
    GET_PROFILES: "/api/profile",
    /** 글 상세 조회 */
    GET_PROFILE: "/api/profile/:id",
    /** 글 생성 */
    CREATE_PROFILE: "/api/profile",
    /** 글 수정 */
    UPDATE_PROFILE: "/api/profile/:id",
    /** 글 삭제 */
    DELETE_PROFILE: "/api/profile/:id",
} as const;

const profileController = new ProfileController(
    new ProfileServiceImpl(
        new MongooseUserRepository(),
        new MongooseProfileRepository()
    )
);

profileRouter.get(
    PROFILE_ROUTERS.GET_PROFILES,
    // validate(getPostsValidator),
    profileController.getProfile
);
profileRouter.get(
    PROFILE_ROUTERS.GET_PROFILE,
    // validate(getPostDetailValidator),
    // authCookieViewMiddleware,
    profileController.getProfileDetail
);
profileRouter.post(
    PROFILE_ROUTERS.CREATE_PROFILE,
    // authUserMiddleware,
    profileController.createProfile
);
profileRouter.put(
    PROFILE_ROUTERS.UPDATE_PROFILE,
    // authUserMiddleware,
    profileController.updateProfile
);
profileRouter.delete(
    PROFILE_ROUTERS.DELETE_PROFILE,
    // authUserMiddleware,
    profileController.deleteProfile
);

export default profileRouter;