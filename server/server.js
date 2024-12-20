import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { typeDefs } from "./schemaQL.js";
import { resolvers } from "./resolvers.js";

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log("DB connected to fail: " + err);
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

const PORT = process.env.PORT || 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT }
});

console.log(`🚀: Server ready at: ${url}`);



