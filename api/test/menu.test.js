import chai from "chai";
import chaiHTTP from "chai-http";
import app from "../index";
import Meals from "../models/meal.model";

const { assert, expect, use } = chai;

use(chaiHTTP);

const API_PREFIX = "/api/v1";

describe("Menu Endpoints", () => {
  context("Add Meal To Menu (Caterer)", () => {
    it(`POST ${API_PREFIX}/menu/ - Add Menu Option To Menus - (Caterer Can Add Menu)`, done => {
      let menu = {
        cusine: "Regular",
        meals: [
          {
            id: 1,
            name: "Fried Rice",
            image: "1",
            price: "450",
            catererId: 2
          },
          {
            id: 2,
            name: "Jollof Rice",
            image: "2",
            price: "550",
            catererId: 1
          }
        ]
      };
      chai
        .request(app)
        .post(`${API_PREFIX}/menu/`)
        .send(menu)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("POST /menu/", err.message));
      done();
    });
  });

  context("Get all Menus (User)", () => {
    it(`GET ${API_PREFIX}/menu/ - Fetch All Menus`, done => {
      chai
        .request(app)
        .get(`${API_PREFIX}/menu/`)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("GET /menu/", err.message));
      done();
    });
  });
});
