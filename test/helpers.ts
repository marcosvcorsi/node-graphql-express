import request from "supertest";
import { app } from "../src/app";

export const makeGraphQLRequest = (query: string) => {
  return request(app).post("/graphql").send({ query });
};
