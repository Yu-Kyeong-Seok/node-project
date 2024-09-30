import { NextFunction, Request, Response } from "express";
import { ProfileService } from "@/api/profile/service/profile.service.type";

// [유저]
// 프로필 목록 조회 - getProfile
// 프로필 상세 조회 - getProfileDetail

export default class ProfileController {
  // 컨트롤러에 DI 구조 잡아주는겁니다.
    private readonly _profilesService: ProfileService;
    constructor(_profilesService: ProfileService) {
    this._profilesService = _profilesService;

    this.getProfile = this.getProfile.bind(this);
    this.getProfileDetail = this.getProfileDetail.bind(this);
    this.createProfile = this.createProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    }

  /** 프로필 목록 조회 */
    async getProfile(
    req: Request<
        getProfileRequest["path"],
        getProfileResponse,
        getProfileRequest["body"],
        getProfileRequest["params"]
    >,
    res: Response,
    next: NextFunction
    ) {
    try {
        const profiles = await this._profilesService.getProfile();

        res.send(profiles);
    } catch (error) {
        next(error);
    }
    }   

  /** 프로필 상세 조회 */
    async getProfileDetail(
        req: Request<
        getProfileDetailRequest["path"],
        getProfileDetailResponse,
        getProfileDetailRequest["body"],
        getProfileDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
    ) {
        const { id } = req.params;
        try {
        const profile = await this._profilesService.getProfileDetail(id);

        res.send(profile);
        } catch (error) {
        next(error);
        }
    }

  /** 프로필 작성 */
    async createProfile(
        req: Request<
        createProfileRequest["path"],
        createProfileResponse,
        createProfileRequest["body"],
        createProfileRequest["params"]
        >,
        res: Response,
        next: NextFunction
    ) {
        try {
        const profile = await this._profilesService.createProfile(req.body);

        res.send(profile);
        } catch (error) {
        next(error);
        }
    }

    /** 프로필 수정 */
    async updateProfile(
        req: Request<
        updateProfileRequest["path"],
        updateProfileResponse,
        updateProfileRequest["body"],
        updateProfileRequest["params"]
        >,
        res: Response,
        next: NextFunction
    ) {
        try {
        await this._profilesService.updateProfile(req.params.id, req.body);

        res.status(204).send();
        } catch (error) {
        next(error);
        }
    }

    /** 프로필 삭제 */
    async deleteProfile(
        req: Request<
        deleteProfileRequest["path"],
        deleteProfileResponse,
        deleteProfileRequest["body"],
        deleteProfileRequest["params"]
        >,
        res: Response,
        next: NextFunction
    ) {
        const { id } = req.params;

        try {
        await this._profilesService.deleteProfile(id);

        res.send("삭제 성공");
        } catch (error) {
        next(error);
        }
    }
}
