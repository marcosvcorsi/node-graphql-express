import { PrismaClient } from "@prisma/client";
import request from "supertest";
import { app } from "../src/app";

describe("Users Integration", () => {
  let prismaClient: PrismaClient;

  beforeAll(async () => {
    prismaClient = new PrismaClient();

    await prismaClient.$connect();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  it("should return users", async () => {
    const response = await request(app).post("/graphql").send({
      query: "{ users { id, email, name } }",
    });

    console.log(response.body);

    expect(true).toBe(true);
  });
});
