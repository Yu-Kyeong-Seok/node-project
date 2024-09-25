import { NextFunction, Request, Response } from "express";
import { ProfileService } from "@/api/profile/service/profile.service.type";
// import { ProfileService } from "@/api/profile/service/profile.service.type";
import { User } from "@/api/users/model/user.model";

export default class ProfileController {
    private readonly _profileService: ProfileService;
    constructor(profileService: ProfileService) {
        this._profileService = profileService;
        this.profileSetting = this.profileSetting.bind(this);
    }

    /** 프로필 */
    async profile(req: Request, res: Response, next: NextFunction) {
        res.render("profile/profile");
    }

    /** 프로필 수정*/
    async profileEdit(req: Request, res: Response, next: NextFunction) {
        res.render("profile/profileEdit");
    }

    /** 이메일 수정*/
    async profileChangeEmail(req: Request, res: Response, next: NextFunction) {
        res.render("profile/profileChangeEmail");
    }

    /** 휴대폰번호 수정*/
    async profileChangeNumber(req: Request, res: Response, next: NextFunction) {
        res.render("profile/profileChangeNumbers");
    }
    /** 패스워드 수정*/
    async profileChangePassword(req: Request, res: Response, next: NextFunction) {
        res.render("profile/profileChangePassword");
    }

    async profileSetting(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        // const userId = req.user.userId;

        const profile = await this._profileService.getProfile(id);

        // console.log(id);
        // console.log(userId);
        // console.log(profile);

        // res.render("profile/profileSetting");
    }
}
