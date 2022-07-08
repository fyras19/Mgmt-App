import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import connectDB from "./config/db";
import schema from "./schema/schema";

const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
connectDB();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Server started on port ${port}`));
