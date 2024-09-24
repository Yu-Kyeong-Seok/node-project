import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";

export interface ProfileService {
    // 프로필 조회
    getProfile(id: string): Promise<GetUserResponseDTO |null>;
}