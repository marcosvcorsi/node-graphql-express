import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users";

export class FindUsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
