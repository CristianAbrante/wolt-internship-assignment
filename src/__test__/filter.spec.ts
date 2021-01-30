import "jest";
import { filterRestaurants } from "../utils";
import {
  restaurantsMock1,
  closeRestaurantsMock1,
  referenceLocationMock1,
  restaurantsMock2,
  closeRestaurantsMock2,
  referenceLocationMock2,
  restaurantsMock3,
  referenceLocationMock3,
  closeRestaurantsMock3,
} from "./data/location-filter.test.mock";

describe("LOCATION - Filter test", () => {
  test("Filter empty array", () => {
    const restaurants = filterRestaurants(
      [],
      referenceLocationMock1,
      "location"
    );

    expect(restaurants).toMatchObject([]);
  });

  test("Mock restaurants 1", () => {
    const restaurants = filterRestaurants(
      restaurantsMock1,
      referenceLocationMock1,
      "location"
    );

    expect(restaurants).toMatchObject(closeRestaurantsMock1);
  });

  test("Mock restaurants 2", () => {
    const restaurants = filterRestaurants(
      restaurantsMock2,
      referenceLocationMock2,
      "location"
    );

    expect(restaurants).toMatchObject(closeRestaurantsMock2);
  });

  test("Mock restaurants 3", () => {
    const restaurants = filterRestaurants(
      restaurantsMock3,
      referenceLocationMock3,
      "location"
    );

    expect(restaurants.map((r) => r.name)).toMatchObject(closeRestaurantsMock3);
  });
});

// As popularity have the same filtering criteria as location
// we can reuse the mock data.
describe("POPULARITY - Filter test", () => {
  test("Filter empty array", () => {
    const restaurants = filterRestaurants(
      [],
      referenceLocationMock1,
      "popularity"
    );

    expect(restaurants).toMatchObject([]);
  });

  test("Mock restaurants 1", () => {
    const restaurants = filterRestaurants(
      restaurantsMock1,
      referenceLocationMock1,
      "popularity"
    );

    expect(restaurants).toMatchObject(closeRestaurantsMock1);
  });

  test("Mock restaurants 2", () => {
    const restaurants = filterRestaurants(
      restaurantsMock2,
      referenceLocationMock2,
      "popularity"
    );

    expect(restaurants).toMatchObject(closeRestaurantsMock2);
  });

  test("Mock restaurants 3", () => {
    const restaurants = filterRestaurants(
      restaurantsMock3,
      referenceLocationMock3,
      "popularity"
    );

    expect(restaurants.map((r) => r.name)).toMatchObject(closeRestaurantsMock3);
  });
});
