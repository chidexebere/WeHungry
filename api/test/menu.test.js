import chai from "chai";
import chaiHTTP from "chai-http";
import app from "../server";

const { assert, expect, use } = chai;

use(chaiHTTP);

const API_PREFIX = "/api/v1";

describe("Menu Endpoints", () => {
  context("Add Meal To Menu (Caterer)", () => {
    it(`POST ${API_PREFIX}/menus/ - Add Menu Option To Menus - (Caterer Can Add Menu)`, done => {
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
        .post(`${API_PREFIX}/menus/`)
        .send(menu)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("POST /menus/", err.message));
      done();
    });
  });

  context("Get all Menus (User)", () => {
    it(`GET ${API_PREFIX}/menus/ - Fetch All Menus`, done => {
      chai
        .request(app)
        .get(`${API_PREFIX}/menus/`)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("GET /menus/", err.message));
      done();
    });
  });

  context("delete a Menu ", () => {
    it(`DELETE ${API_PREFIX}/menus/:id - Delete a Menu `, done => {
      let menu = {
        id: 2
      };
      chai
        .request(app)
        .delete(`${API_PREFIX}/menus/${menu.id}`)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("DELETE /menus/:id", err.message));
      done();
    });
  });
});
