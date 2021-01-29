import "jest";
import { Restaurant, GeoLocation } from "../types";
import { filterRestaurantsByDistance } from "../utils";
import {
  restaurantsMock1,
  closeRestaurantsMock1,
  referenceLocationMock1,
  restaurantsMock2,
  closeRestaurantsMock2,
  referenceLocationMock2,
} from "./data/distance.test.mock";

describe("Distance filtering test", () => {
  test("Test with negative distance", () => {
    const closeRestaurants = filterRestaurantsByDistance(
      restaurantsMock1,
      referenceLocationMock1,
      -10
    );
    expect(closeRestaurants.length).toBe(0);
  });

  test("Mock restaurants 1 - default distance", () => {
    const restaurants = filterRestaurantsByDistance(
      restaurantsMock1,
      referenceLocationMock1
    );

    expect(restaurants).toMatchObject(closeRestaurantsMock1);
  });

  test("Mock restaurants 1 - big distance - 500km", () => {
    const restaurants = filterRestaurantsByDistance(
      restaurantsMock1,
      referenceLocationMock1,
      500000
    );

    expect(restaurants).toMatchObject(restaurantsMock1);
  });

  test("Mock restaurants 1 - small distance - 0.1km", () => {
    const restaurants = filterRestaurantsByDistance(
      restaurantsMock1,
      referenceLocationMock1,
      100
    );

    expect(restaurants).toMatchObject([]);
  });

  test("Mock restaurants 2 - default distance", () => {
    const restaurants = filterRestaurantsByDistance(
      restaurantsMock2,
      referenceLocationMock2
    );

    expect(restaurants).toMatchObject(closeRestaurantsMock2);
  });

  test("Mock restaurants 2 - big distance - 1500km", () => {
    const restaurants = filterRestaurantsByDistance(
      restaurantsMock1,
      referenceLocationMock1,
      1500000
    );

    expect(restaurants).toMatchObject(restaurantsMock1);
  });
});
