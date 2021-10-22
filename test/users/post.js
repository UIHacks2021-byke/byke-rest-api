// set node environment to test
process.env.NODE_ENV = "test";
const expect = require("chai").expect;
const request = require("supertest");
const conn = require('../../utils/db');
const app = require("../../app");

describe("POST /users", () => {
  before(async () => {
      await conn.open()
  });

  after(async () => {
      await conn.close();
  });

  it("OK, creating a new user works", async () => {
    const data = {
      name: "john Luck",
      email: "john@lucky.com",
      username: "@johnnyLuck",
      password: "luck",
    };

    const res = await request(app).post("/users").send(data);
    expect(res.status).to.equal(201);
  });
});
