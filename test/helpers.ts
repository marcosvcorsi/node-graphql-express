import request from "supertest";
import { app } from "../src/app";

export const makeGraphQLRequest = (query: string) => {
  return request(app).post("/graphql").send({ query });
};

const getValueInput = (value: unknown): string => {
  return typeof value === "string" ? `"${value}"` : String(value);
};

export const buildInput = (input: Record<string, unknown>): string => {
  const values = Object.entries(input)
    .map(([key, value]) => `${key}: ${getValueInput(value)}`)
    .join(", ");

  return `{ ${values} }`;
};
