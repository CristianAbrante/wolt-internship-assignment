import "jest";
import { sortRestaurants } from "../utils";
import {
  popularityMock1,
  popularitySortedMock1,
  popularityMock2,
  popularitySortedMock2,
  popularityMock3,
  popularitySortedMock3,
} from "./data/popularity-sort.test.mock";

describe("Sort functions tests - popularity", () => {
  test("Popularity sort empty array", () => {
    const restaurants = sortRestaurants([], { lat: 0, lon: 0 }, "popularity");
    expect(restaurants).toEqual([]);
  });

  test("Popularity sort mock 1", () => {
    const restaurants = sortRestaurants(
      popularityMock1,
      { lat: 0, lon: 0 },
      "popularity"
    );
    expect(
      restaurants.map((restaurant) => restaurant.popularity)
    ).toMatchObject(popularitySortedMock1);
  });

  test("Popularity sort mock 2 (all zeros)", () => {
    const restaurants = sortRestaurants(
      popularityMock2,
      { lat: 0, lon: 0 },
      "popularity"
    );
    expect(
      restaurants.map((restaurant) => restaurant.popularity)
    ).toMatchObject(popularitySortedMock2);
  });

  test("Popularity sort mock 3", () => {
    const restaurants = sortRestaurants(
      popularityMock3,
      { lat: 0, lon: 0 },
      "popularity"
    );
    expect(
      restaurants.map((restaurant) => restaurant.popularity)
    ).toMatchObject(popularitySortedMock3);
  });
});
