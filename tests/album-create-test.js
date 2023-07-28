/* eslint-disable no-undef */
const { expect } = require("chai");
const request = require("supertest");
const db = require("../db/index");
const app = require("../src/app");

afterEach(async () => {
  await db.query("TRUNCATE Albums CASCADE");
});

beforeEach(async () => {
  const responses = await Promise.all([
    db.query("INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *", [
      "Arctic Monkeys",
      "indie",
    ]),
    db.query("INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *", [
      "LCD Soundsystem",
      "dance",
    ]),
    db.query("INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *", [
      "MF DOOM",
      "rap",
    ]),
  ]);

  albums = responses.map(({ rows }) => rows[0]);
});

describe("create album", () => {
  describe("/albums", () => {
    describe("POST", () => {
      it("creates a new album in the database", async () => {
        const { status, body } = await request(app)
          .post("/artists/1/albums")
          .send({
            name: "AM",
            year: 2013,
          });

        expect(status).to.equal(201);
        expect(body.name).to.equal("AM");
        expect(body.year).to.equal(2013);

        const {
          rows: [albumData],
        } = await db.query(`SELECT * FROM Albums WHERE id = ${body.artistid}`);
        expect(albumData.name).to.equal("AM");
        expect(albumData.year).to.equal(2013);
      });
    });
  });
});
