import connectDB from "../src/config/db";
import supertest from "supertest";
import app from "../src/app";

const request = supertest(app);

describe("Connect to server", () => {

    beforeAll(async () => {
        await connectDB();
    });

  it("should connect to server", async () => {
    const res = await request
      .get("/graphql")
      .send({
        query: `
          query {
            projects {
                id
                name
                description
                status
            }
          }
        `
      })
      .set("Content-Type", "application/json")
      .expect(200);
    expect(res.body).toBeInstanceOf(Object);
  });
});
