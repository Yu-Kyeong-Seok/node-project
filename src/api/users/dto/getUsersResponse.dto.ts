/**  유저 목록 조회 응답 DTO */
export class GetUsersResponseDTO {
  id: string;
  email: string;
  profile: {
    firstName: string;
    nickName:string;
    telNumber:string;
  };
  constructor(user: IUser) {
    this.id = user.id;
    this.email = user.email;
    this.profile = {
      firstName: user.profile.firstName,
      nickName:user.profile.nickName,
      telNumber:user.profile.telNumber
    };
  }
}
