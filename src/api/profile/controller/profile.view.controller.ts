import { NextFunction, Request, Response } from "express";
import { ProfileService } from "@/api/profile/service/profile.service.type";
// import { ProfileService } from "@/api/profile/service/profile.service.type";
import { User } from "@/api/users/model/user.model";
import { PostService } from "@/api/post/service/post.service.type";
import { CommentService } from "@/api/comment/service/comment.service.type";

export default class ProfileViewController {
    private readonly _profileService: ProfileService;
    private readonly _postService: PostService;
    private readonly _commentService: CommentService;
    constructor(profileService: ProfileService , postService: PostService, commentService: CommentService) {
        this._profileService = profileService;
        this._postService = postService;
        this._commentService = commentService;

        this.profile = this.profile.bind(this);
        this.profileEdit = this.profileEdit.bind(this);
        this.profileChangeEmail = this.profileChangeEmail.bind(this);
        this.profileChangeNumber = this.profileChangeNumber.bind(this);
        this.profileChangePassword = this.profileChangePassword.bind(this);
        this.profileSetting = this.profileSetting.bind(this);
    }

    /** 프로필 */
    async profile(req: Request, res: Response, next: NextFunction) {

        const user = await this._profileService.getUser(req.user.userId);

        const post = await this._postService.getMyPost(req.user.userId);

        const comment = await this._commentService.getMyComments(req.user.userId);
        
        console.log(comment);

        res.render("profile/profile", { user, post, comment });
    }

    /** 프로필 수정*/
    async profileEdit(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        
        const user = await this._profileService.getUser(id);

        res.render("profile/profileEdit", { user });
    }

    /** 이메일 수정*/
    async profileChangeEmail(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const user = await this._profileService.getUser(id);

        res.render("profile/profileChangeEmail", { user });
    }

    /** 휴대폰번호 수정*/
    async profileChangeNumber(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const user = await this._profileService.getUser(id);

        res.render("profile/profileChangeNumbers", { user });
    }
    /** 패스워드 수정*/
    async profileChangePassword(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const user = await this._profileService.getUser(id);

        res.render("profile/profileChangePassword", { user });
    }
    /** 계정 설정 */
    async profileSetting(req: Request, res: Response, next: NextFunction) {

        const user = await this._profileService.getUser(req.user.userId);

        res.render("profile/profileSetting", { user });
    }
}
