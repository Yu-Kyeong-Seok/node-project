//import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";

export class GetUserResponseDTO {
  id: string;
  email: string;
  profile: {
    id: string;
    birth?: string;
    nickName: string;
    firstName: string;
    thumbnail?: string;
    telNumber: string;
    greeting?: string
  };
 // posts?: PostResponseDTO[];

  constructor(user: IUser) {
    this.id = user.id;
    this.email = user.email;
   // this.posts = user.posts?.map((post) => new PostResponseDTO(post));
    this.profile = {
      id: user.profile.id,
      birth: user.profile.birth,
      nickName: user.profile.nickName,
      firstName: user.profile.firstName,
      thumbnail: user.profile.thumbnail,
      telNumber: user.profile.telNumber,
      greeting: user.profile.greeting,
    };
  }
}
