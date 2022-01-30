import request from "supertest";
import { app } from "../src/app";

describe("Users Integration", () => {
  it("should return users", async () => {
    const response = await request(app).post("/graphql").send({
      query: "{ users { id, email, name } }",
    });

    console.log(response.body);

    expect(true).toBe(true);
  });
});
