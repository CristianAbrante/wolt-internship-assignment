import "jest";
import request from "supertest";
import app from "../app";
import {
  discoveryMock1,
  discoveryMock2,
  discoveryMock3,
  discoveryRestaurantsMock1,
  discoveryRestaurantsMock2,
  discoveryRestaurantsMock3,
  discoveryRLMock1,
  discoveryRLMock2,
  discoveryRLMock3,
} from "./data/discovery.test.mock";

const jsonParse = JSON.parse;

describe("API tests - Integration", () => {
  // before each test json.parse function is stored
  // in an auxiliar variable.
  beforeEach(() => {
    const jsonParse = JSON.parse;
  });

  // after each test json parse is restored.
  afterEach(() => {
    JSON.parse = jsonParse;
  });

  test("GET /discovery - no query params", async () => {
    // expects bad query params
    await request(app).get("/discovery").expect(400);
  });

  test("GET /discovery - mock 1", async () => {
    // parse is mocked in order to inject the object that we want.
    JSON.parse = jest.fn().mockImplementationOnce(() => {
      return { restaurants: discoveryRestaurantsMock1 };
    });

    await request(app)
      .get("/discovery")
      .query(discoveryRLMock1)
      .expect(200)
      .then((res) => {
        const jsonRes = jsonParse(res.text);
        expect(jsonRes).toMatchObject(discoveryMock1);
      });
  });

  test("GET /discovery - mock 2", async () => {
    // parse is mocked in order to inject the object that we want.
    JSON.parse = jest.fn().mockImplementationOnce(() => {
      return { restaurants: discoveryRestaurantsMock2 };
    });

    await request(app)
      .get("/discovery")
      .query(discoveryRLMock2)
      .expect(200)
      .then((res) => {
        const jsonRes = jsonParse(res.text);
        expect(jsonRes).toMatchObject(discoveryMock2);
      });
  });

  test("GET /discovery - mock 3", async () => {
    // parse is mocked in order to inject the object that we want.
    JSON.parse = jest.fn().mockImplementationOnce(() => {
      return { restaurants: discoveryRestaurantsMock3 };
    });

    await request(app)
      .get("/discovery")
      .query(discoveryRLMock3)
      .expect(200)
      .then((res) => {
        const jsonRes = jsonParse(res.text);
        expect(jsonRes).toMatchObject(discoveryMock3);
      });
  });
});
