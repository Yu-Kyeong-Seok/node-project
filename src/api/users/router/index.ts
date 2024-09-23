import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { UsersServiceImpl } from "@/api/users/service/users.service";
import { UserService } from "@/api/users/service/users.service.type";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";

class UserConfig {
  static userSevice(): UserService {
    return new UsersServiceImpl(
      UserConfig.userRepository(),
      UserConfig.profileRepository()
    );
  }

  static profileRepository(): ProfileRepository {
    return new MongooseProfileRepository();
  }

  static userRepository(): UserRepository {
    return new MongooseUserRepository();
  }
}

export default UserConfig;
