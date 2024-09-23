import HttpException from "@/api/common/exceptions/http.exception";
import { User } from "@/api/users/model/user.model";
import { UserRepository } from "@/api/users/repository/user/user.repository";

// Router -> Controller -> Service (Skip) -> Repository
export class MemoryUserRepository implements UserRepository {
  static index = 0;
  static readonly store: Map<string, IUser> = new Map();

  async save(user: IUser): Promise<IUser> {
    const existUser = await this.findByEmail(user.email);

    if (existUser) {
      throw new HttpException(409, "이미 존재하는 이메일입니다.");
    }

    const newUser = new User({
      ...user,
      id: `user-${MemoryUserRepository.index++}`,
      role: "user",
    });

    MemoryUserRepository.store.set(newUser.id, newUser);

    return newUser;
  }
  async findAll(): Promise<IUser[]> {
    const values = Array.from(MemoryUserRepository.store.values());

    return values;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const users = Array.from(MemoryUserRepository.store.values());

    return users.find((user) => user.email === email) ?? null;
  }

  async findById(id: string): Promise<IUser | null> {
    const findUser = MemoryUserRepository.store.get(id);

    return findUser ?? null;
  }

  async update(userId: string, updateUserInfo: Partial<IUser>): Promise<void> {
    const findUser = MemoryUserRepository.store.get(userId);

    if (!findUser) {
      throw new HttpException(404, "유저를 찾을 수 없습니다.");
    }

    MemoryUserRepository.store.set(userId, {
      ...findUser,
      ...updateUserInfo,
    });
  }
  async delete(userId: string): Promise<void> {
    const findUser = MemoryUserRepository.store.get(userId);

    if (!findUser) {
      throw new HttpException(404, "유저를 찾을 수 없습니다.");
    }

    MemoryUserRepository.store.delete(userId);

    return;
  }
}
