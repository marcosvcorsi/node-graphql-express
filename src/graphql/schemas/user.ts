import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  email!: string;

  @Field()
  name!: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  email!: string;

  @Field()
  name!: string;
}
