import HttpException from "@/api/common/exceptions/http.exception";
import { UserResponseDTO } from "@/api/users/dto/userResponse.dto";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { UserService } from "@/api/users/service/users.service.type";
import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { GetUsersResponseDTO } from "@/api/users/dto/getUsersResponse.dto";

// 레거시
export class UsersServiceImpl implements UserService {
  constructor(private readonly _userRepository: UserRepository) {}
  async getUsers(): Promise<GetUsersResponseDTO[]> {
    const users = await this._userRepository.findAll();

    // const newList = users.map((user) => {
    //   const { password, ...rest } = user;
    //   return rest;
    // });

    const newList = await Promise.all(
      users.map((user) => new GetUsersResponseDTO(user))
      // users.map((user) => this._getUserMapDTO(user))
    );

    return newList;

    // Promise Chaining 방식 (async 안붙여도됌)
    // return users
    //   .then((users) => {
    //     return users.map((user) => {
    //       const { password, ...rest } = user;
    //       return rest;
    //     });
    //   })
    //   .then((newList) => {
    //     return Promise.resolve(newList);
    //   });
  }
  async getUser(id: string): Promise<GetUserResponseDTO | null> {
    const user = await this._userRepository.findById(id);

    if (!user) throw new HttpException(404, "유저를 찾을 수 없습니다.");

    // const dtoUser = await this._getUserMapDTO(user);

    const dtoUser = await new GetUserResponseDTO(user);

    return dtoUser;
  }
  async createUser(params: Omit<IUser, "id">): Promise<UserResponseDTO> {
    const user = await this._userRepository.save(params);

    return new UserResponseDTO(user);
  }
  async updateUser(id: string, params: Partial<IUser>): Promise<void> {
    await this._userRepository.update(id, params);

    return;
  }
  async deleteUser(id: string): Promise<void> {
    await this._userRepository.delete(id);

    return;
  }

  async deleteUsers(ids: string[]): Promise<void> {
    await Promise.all((ids || []).map((id) => this._userRepository.delete(id)));

    return;
  }

  // private async _getUserMapDTO(user: IUser) {
  //   const { password, ...rest } = user;
  //   return rest;
  // }
}
