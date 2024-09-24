import HttpException from "@/api/common/exceptions/http.exception";
import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { ProfileService } from "@/api/profile/service/profile.service.type";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";

export class ProfileServiceImpl implements ProfileService {
    constructor(
        private readonly _userRepository: UserRepository,
        private readonly _profileRepository: ProfileRepository
    ) {}

    async getProfile(id: string): Promise<GetUserResponseDTO | null> {
        console.log("24");
        const profile = await this._userRepository.findById(id);
        
        if (!profile) throw new HttpException(404, "유저를 찾을 수 없습니다.");

        const dtoProfile = await new GetUserResponseDTO(profile);

        return dtoProfile;
    }
}
