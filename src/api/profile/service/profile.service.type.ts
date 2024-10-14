import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";

export interface ProfileService {
    /** 프로필 생성 */
    createProfile(profile: Omit<IProfile, "id">): Promise<IProfile>;
    /** 프로필 목록 조회 */
    getProfile(): Promise<IProfile[]>;
    /** 프로필 조회 */
    getProfileDetail(id: string): Promise<IProfile | null>;
    /** 프로필 수정 */
    updateProfile(
        id: string,
        updateProfileInfo: Partial<IProfile>
    ): Promise<void>;
    /** 프로필 삭제 */
    deleteProfile(id: string): Promise<void>;
    // 프로필 조회
    getUser(id: string): Promise<GetUserResponseDTO |null>;
}