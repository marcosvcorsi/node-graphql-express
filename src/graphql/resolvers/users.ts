import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { v4 } from "uuid";
import { CreateUserInput, User } from "../schemas/user";

@Resolver()
export class UsersResolver {
  userList: User[];

  constructor() {
    this.userList = [];
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userList;
  }

  @Mutation(() => User)
  async createUser(@Arg("input") input: CreateUserInput): Promise<User> {
    const id = v4();

    const user = {
      id,
      ...input,
    };

    this.userList.push(user);

    return user;
  }
}
