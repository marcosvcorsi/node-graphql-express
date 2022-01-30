import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users";

type Params = {
  name: string;
  email: string;
};

export class CreateUserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({ name, email }: Params): Promise<User> {
    const existingEmailUser = await this.usersRepository.findByEmail(email);

    if (existingEmailUser) {
      throw new Error("Email address already in use");
    }

    return this.usersRepository.create({
      name,
      email,
    });
  }
}
