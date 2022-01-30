import { Query, Resolver } from "type-graphql";
import { User } from "../schemas/user";

@Resolver()
export class UsersResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return [
      {
        id: "1",
        email: "test@test.com",
        name: "Test",
      },
    ];
  }
}
