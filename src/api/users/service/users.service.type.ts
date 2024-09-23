import { GetUserResponseDTO } from "@/api/users/dto/getUserResponse.dto";
import { GetUsersResponseDTO } from "@/api/users/dto/getUsersResponse.dto";
import { UserResponseDTO } from "@/api/users/dto/userResponse.dto";

export interface UserService {
  /** 유저 목록 조회 */
  getUsers(): Promise<GetUsersResponseDTO[]>;
  /** 유저 조회 */
  getUser(id: string): Promise<GetUserResponseDTO | null>;
  /** 유저 생성 */
  createUser(
    params: Omit<IUser, "id" | "role" | "profile"> & {
      profile: Omit<IProfile, "id">;
    }
  ): Promise<UserResponseDTO>;
  /** 유저 수정 */
  updateUser(
    id: string,
    params: Partial<
      Omit<IUser, "id" | "role" | "profile"> & {
        profile: Omit<IProfile, "id">;
      }
    >
  ): Promise<void>;
  /** 유저 삭제 */
  deleteUser(id: string): Promise<void>;
  /** 유저 대량 삭제 */
  deleteUsers(ids: string[]): Promise<void>;
}
