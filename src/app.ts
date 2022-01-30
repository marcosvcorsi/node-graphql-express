import "reflect-metadata";
import express from "express";
import cors from "cors";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./graphql/resolvers/users";
import { ApolloServer } from "apollo-server-express";

const app = express();

app.use(cors());
app.use(express.json());

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });
}

bootstrap();

export { app };
