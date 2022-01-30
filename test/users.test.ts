import { PrismaClient } from "@prisma/client";
import request from "supertest";
import { app } from "../src/app";

describe("Users Integration", () => {
  let prismaClient: PrismaClient;

  beforeAll(async () => {
    prismaClient = new PrismaClient();

    await prismaClient.$connect();
  });

  beforeEach(async () => {
    await prismaClient.user.deleteMany();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  it("should return users data", async () => {
    const user = await prismaClient.user.create({
      data: {
        email: "anymail@mail.com",
        name: "any_name",
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    const response = await request(app).post("/graphql").send({
      query: "{ users { id, email, name } }",
    });

    expect(response.body.data.users).toEqual([user]);
  });

  it("should create user", async () => {
    const params = {
      email: "anymail@mail.com",
      name: "any_name",
    };

    const response = await request(app)
      .post("/graphql")
      .send({
        query: `mutation { createUser(input: { email: "${params.email}", name: "${params.name}" }) { id, email, name } }`,
      });

    expect(response.body.data.createUser).toMatchObject(params);
  });
});
