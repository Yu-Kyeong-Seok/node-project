import HttpException from "@/api/common/exceptions/http.exception";
import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { ProfileService } from "@/api/profile/service/profile.service.type";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";
import { GetProfileResponseDTO } from "../dto/getProfileResponse.dto";

export class ProfileServiceImpl implements ProfileService {
    constructor(
        private readonly _userRepository: UserRepository,
        private readonly _profileRepository: ProfileRepository
    ) {}
    async createProfile(profile: Omit<IProfile, "id">): Promise<IProfile> {
        const newprofile = await this._profileRepository.save(profile);

        return new GetProfileResponseDTO(newprofile);
    }
    async getProfile(): Promise<GetProfileResponseDTO[]> {
        const profiles = await this._profileRepository.findAll();

        const newList = await Promise.all(
            profiles.map((profile) => new GetProfileResponseDTO(profile))
        );

        return newList;
    }
    async getProfileDetail(id: string): Promise<GetProfileResponseDTO | null> {
        const profile = await this._profileRepository.findById(id);
    
        if (!profile) throw new HttpException(404, "프로필을 찾을 수 없습니다.");
    
        const dtoProfile = await new GetProfileResponseDTO(profile);
    
        return dtoProfile;
    }
    async updateProfile(id: string, updateProfileInfo: Partial<IProfile>): Promise<void> {
        const findProfile = await this._profileRepository.findById(id);
    
        if (!findProfile) throw new HttpException(404, "프로필을 찾을 수 없습니다.");
        
        await this._profileRepository.update(id, {
            ...updateProfileInfo,
        });

        return;
    }
    async deleteProfile(id: string): Promise<void> {
        const findProfile = await this._profileRepository.findById(id);
    
        if (!findProfile) throw new HttpException(404, "프로필을 찾을 수 없습니다.");
    
        await this._profileRepository.delete(id);
    
        return;
    }

    async getUser(id: string): Promise<GetUserResponseDTO | null> {
        const profile = await this._userRepository.findById(id);
        
        if (!profile) throw new HttpException(404, "유저를 찾을 수 없습니다.");

        const dtoProfile = await new GetUserResponseDTO(profile);

        return dtoProfile;
    }
}
