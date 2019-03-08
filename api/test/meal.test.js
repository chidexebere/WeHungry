import chai from "chai";
import chaiHTTP from "chai-http";
import app from "../server";
import meals from "../utils/mealData";

const { assert, expect, use } = chai;

use(chaiHTTP);

const API_PREFIX = "/api/v1";

describe("Meals Endpoint Tests", () => {
  it(`GET ${API_PREFIX}/meals/ - Fetch All Meals`, done => {
    chai
      .request(app)
      .get(`${API_PREFIX}/meals/`)
      .then(res => {
        expect(res).to.have.status(200);
        assert.equal(res.body.status, "success");
      })
      .catch(err => console.log("GET /meals/", err.message));
    done();
  });

  it(`GET ${API_PREFIX}/meals/:id - Fetch a Meal `, done => {
    let meal = {
      name: "Jollof Rice",
      image: "2",
      price: "550",
      catererId: 1
    };
    chai
      .request(app)
      .get(`${API_PREFIX}/meals/${meal.id}`)
      .then(res => {
        expect(res).to.have.status(200);
        assert.equal(res.body.status, "success");
      })
      .catch(err => console.log("GET /meals/:id", err.message));
    done();
  });

  it(`POST ${API_PREFIX}/meals/ - Add Meal Option `, done => {
    let meal = {
      name: "Ewedu",
      image: "4",
      price: "700",
      catererId: 4
    };

    chai
      .request(app)
      .post(`${API_PREFIX}/meals/`)
      .send(meal)
      .then(res => {
        expect(res).to.have.status(201);
        assert.equal(res.body.status, "success");
      })
      .catch(err => console.log("POST /meals/", err.message));
    done();
  });

  it(`PUT ${API_PREFIX}/meals/:id - Update a Meal Option `, done => {
    let meal = {
      id: 1,
      name: "Eba & Egusi soup",
      image: "3",
      price: "650",
      catererId: 2
    };

    let mealUpdate = {
      name: "Amala",
      image: "3",
      price: "700",
      catererId: 2
    };
    chai
      .request(app)
      .put(`${API_PREFIX}/meals/${meal.id}`)
      .send(mealUpdate)
      .then(res => {
        expect(res).to.have.status(200);
        assert.equal(res.body.status, "success");
      })
      .catch(err => console.log("PUT /meals/", err.message));
    done();
  });

  it(`DELETE ${API_PREFIX}/meals/:id - Delete Meal `, done => {
    let meal = {
      id: 2,
      name: "Jollof Rice",
      image: "2",
      price: "550",
      catererId: 1
    };
    chai
      .request(app)
      .delete(`${API_PREFIX}/meals/${meal.id}`)
      .then(res => {
        expect(res).to.have.status(200);
        assert.equal(res.body.status, "success");
      })
      .catch(err => console.log("DELETE /meals/:id", err.message));
    done();
  });
});
