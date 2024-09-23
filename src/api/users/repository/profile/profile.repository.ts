export interface ProfileRepository {
  // case B

  /** 프로필 생성 */
  save(profile: Omit<IProfile, "id">): Promise<IProfile>;
  /** 프로필 목록 조회 */
  findAll(): Promise<IProfile[]>;
  /** 프로필 조회 */
  findById(id: string): Promise<IProfile | null>;
  /** 프로필 수정 */
  update(
    profileId: string,
    updateProfileInfo: Partial<IProfile>
  ): Promise<IProfile>;
  /** 프로필 삭제 */
  delete(profileId: string): Promise<void>;
}
