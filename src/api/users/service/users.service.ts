import HttpException from "@/api/common/exceptions/http.exception";
import { UserResponseDTO } from "@/api/users/dto/userResponse.dto";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { UserService } from "@/api/users/service/users.service.type";
import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { GetUsersResponseDTO } from "@/api/users/dto/getUsersResponse.dto";
import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";

export class UsersServiceImpl implements UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _profileRepository: ProfileRepository
  ) {}

  async createUser(params: Omit<IUser, "id">): Promise<UserResponseDTO> {
    //프로필 리포지토리에서 유저를 생성하고
    const profile = await this._profileRepository.save(params.profile);
    //유저 리포지토리에 주입하기.
    const user = await this._userRepository.save({
      ...params,
      profile,
    });

    return new UserResponseDTO(user);
  }

  async getUsers(): Promise<GetUsersResponseDTO[]> {
    const users = await this._userRepository.findAll();

    const newList = await Promise.all(
      users.map((user) => new GetUsersResponseDTO(user))
    );

    return newList;
  }
  async getUser(id: string): Promise<GetUserResponseDTO | null> {
    console.log("64");
    const user = await this._userRepository.findById(id);

    if (!user) throw new HttpException(404, "유저를 찾을 수 없습니다.");

    const dtoUser = await new GetUserResponseDTO(user);

    return dtoUser;
  }

  async updateUser(userId: string, params: Partial<IUser>): Promise<void> {
    const findUser = await this._userRepository.findById(userId);

    if (!findUser) throw new HttpException(404, "유저를 찾을 수 없습니다.");

    const updateProfile = await this._profileRepository.update(
      findUser.profile.id,
      params?.profile || {}
    );

    await this._userRepository.update(userId, {
      ...params,
      profile: updateProfile,
    });

    return;
  }

  async deleteUser(id: string): Promise<void> {
    const findUser = await this._userRepository.findById(id);

    if (!findUser) throw new HttpException(404, "유저를 찾을 수 없습니다.");

    await this._profileRepository.delete(findUser.profile.id);

    await this._userRepository.delete(id);

    return;
  }

  async deleteUsers(ids: string[]): Promise<void> {
    await Promise.all((ids || []).map((id) => this._userRepository.delete(id)));

    return;
  }
}
