import chai from "chai";
import chaiHTTP from "chai-http";
import app from "../index";

const { assert, expect, use } = chai;

use(chaiHTTP);

const API_PREFIX = "/api/v1";

describe("Order Endpoints", () => {
  context("Get all Orders (Caterer)", () => {
    it(`GET ${API_PREFIX}/orders - Fetch All Orders`, done => {
      chai
        .request(app)
        .get(`${API_PREFIX}/orders`)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("GET /orders", err.message));
      done();
    });
  });

  context("Create an Order (User)", () => {
    it(`POST ${API_PREFIX}/orders - User can create an Order)`, done => {
      let order = {
        mealId: "3",
        userId: "1",
        quantity: "1",
        deliveryCost: "100",
        totalCost: "850",
        status: "pending"
      };
      chai
        .request(app)
        .post(`${API_PREFIX}/orders`)
        .send(order)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("POST /orders", err.message));
      done();
    });
  });

  context("Modify Orders (Users)", () => {
    it(`PUT ${API_PREFIX}/orders/:id - Modify Orders (Users)`, done => {
      let oldOrder = {
        id: 2,
        mealId: "3",
        userId: "1",
        quantity: "1",
        deliveryCost: "100",
        totalCost: "850",
        status: "pending"
      };

      let newOrder = {
        mealId: "4",
        userId: "1",
        quantity: "1",
        deliveryCost: "150",
        totalCost: "800",
        status: "pending"
      };
      chai
        .request(app)
        .put(`${API_PREFIX}/orders/${oldOrder.id}`)
        .send(newOrder)
        .then(res => {
          expect(res).to.have.status(200);
          assert.equal(res.body.status, "success");
        })
        .catch(err => console.log("PUT /orders/:id", err.message));
      done();
    });
  });
});
