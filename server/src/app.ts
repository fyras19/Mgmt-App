import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

dotenv.config();
const app = express();
app.use(cors());

app.get("/", function(req, res) {
  res.send("Hello world!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;
