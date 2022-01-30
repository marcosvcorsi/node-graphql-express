import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { UsersRepository } from "../../repositories/users";
import { CreateUserService } from "../../services/create-user";
import { FindUsersService } from "../../services/find-users";
import { CreateUserInput, User } from "../schemas/user";

@Resolver()
export class UsersResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const findUsersService = new FindUsersService(new UsersRepository());

    return findUsersService.execute();
  }

  @Mutation(() => User)
  async createUser(@Arg("input") input: CreateUserInput): Promise<User> {
    const createUserService = new CreateUserService(new UsersRepository());

    return createUserService.execute(input);
  }
}
