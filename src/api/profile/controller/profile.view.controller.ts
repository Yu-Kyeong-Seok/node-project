import { NextFunction, Request, Response } from "express";
import { ProfileService } from "@/api/profile/service/profile.service.type";
// import { ProfileService } from "@/api/profile/service/profile.service.type";
import { User } from "@/api/users/model/user.model";

export default class ProfileViewController {
    private readonly _profileService: ProfileService;
    constructor(profileService: ProfileService) {
        this._profileService = profileService;
        this.profile = this.profile.bind(this);
        this.profileEdit = this.profileEdit.bind(this);
        this.profileChangeEmail = this.profileChangeEmail.bind(this);
        this.profileChangeNumber = this.profileChangeNumber.bind(this);
        this.profileChangePassword = this.profileChangePassword.bind(this);
        this.profileSetting = this.profileSetting.bind(this);
    }

    /** 프로필 */
    async profile(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const profile = await this._profileService.getUser(id);

        res.render("profile/profile", { profile });
    }

    /** 프로필 수정*/
    async profileEdit(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        
        const profile = await this._profileService.getUser(id);

        res.render("profile/profileEdit", { profile });
    }

    /** 이메일 수정*/
    async profileChangeEmail(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const profile = await this._profileService.getUser(id);

        res.render("profile/profileChangeEmail", { profile });
    }

    /** 휴대폰번호 수정*/
    async profileChangeNumber(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const profile = await this._profileService.getUser(id);

        res.render("profile/profileChangeNumbers", { profile });
    }
    /** 패스워드 수정*/
    async profileChangePassword(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const profile = await this._profileService.getUser(id);

        res.render("profile/profileChangePassword", { profile });
    }

    async profileSetting(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        // 유저 정보 넘겨줄때 사용
        console.log(req.user.userId);

        const profile = await this._profileService.getUser(id);

        res.render("profile/profileSetting", { profile });
    }
}
