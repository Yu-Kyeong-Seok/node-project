type RoleType = "user" | "admin";

interface IProfile {
  /** ID */
  id: string;
  /** 생년월일 */
  birth?: string;
  nickName:string;
  /** 이름 */
  firstName: string;
  /** 프로필 이미지 */
  thumbnail?: string;
  /*전화번호 */
  telNumber:string;
}

interface IUser {
  /** ID */
  id: string;
  /** 이메일  (unique) */
  email: string;
  /** 비밀번호 */
  password?: string;
  /** 역할 */
  role: RoleType;
  /** salt */
  salt?: string;
  /** 프로필 */
  profile: IProfile;
  /** 게시글 목록 */
  posts?: IPost[];
}
