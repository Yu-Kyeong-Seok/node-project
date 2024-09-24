import { NextFunction, Request, Response } from "express";
import { ProfileService } from "@/api/profile/service/profile.service.type";
// import { ProfileService } from "@/api/profile/service/profile.service.type";
import { User } from "@/api/users/model/user.model";

export default class ProfileController {
    private _profileService: ProfileService;
    constructor(profileService: ProfileService) {
        this._profileService = profileService;

    }

    async tmpMyProfile(req: Request, res: Response, next: NextFunction) {
        console.log("13");
        res.render("profile/profile");
    }

    async MyProfile2(req: Request, res: Response, next: NextFunction) {
        console.log("14");
        res.render("profile/profileSetting");
    }
    
    async myProfile(
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
        console.log("15");
        const { id } = req.params;

        const user = await this._profileService.getProfile(id);

        res.send(user);
    } catch (error) {
        next(error);
    }
    }
}
