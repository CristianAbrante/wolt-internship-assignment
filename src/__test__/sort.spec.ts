import "jest";
import { sortRestaurants } from "../utils";
import {
  dateMock1,
  dateMock2,
  dateMock3,
  dateSortedMock1,
  dateSortedMock2,
  dateSortedMock3,
} from "./data/date-sort.test.mock";
import {
  locationSortedMock1,
  locationSortMock1,
  referenceLocationMock1,
} from "./data/location-sort.test.mock";
import {
  popularityMock1,
  popularitySortedMock1,
  popularityMock2,
  popularitySortedMock2,
  popularityMock3,
  popularitySortedMock3,
  popularityMock4,
  popularitySortedMock4,
  popularityMock5,
  popularitySortedMock5,
} from "./data/popularity-sort.test.mock";

describe("POPULARITY - Sort test", () => {
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

  test("Popularity sort mock 4", () => {
    const restaurants = sortRestaurants(
      popularityMock4,
      { lat: 0, lon: 0 },
      "popularity"
    );
    expect(
      restaurants.map((restaurant) => restaurant.popularity)
    ).toMatchObject(popularitySortedMock4);
  });

  test("Popularity sort mock 5", () => {
    const restaurants = sortRestaurants(
      popularityMock5,
      { lat: 0, lon: 0 },
      "popularity"
    );
    expect(
      restaurants.map((restaurant) => restaurant.popularity)
    ).toMatchObject(popularitySortedMock5);
  });
});

describe("DATE - Sort test", () => {
  test("Date sort empty array", () => {
    const restaurants = sortRestaurants([], { lat: 0, lon: 0 }, "date");
    expect(restaurants).toEqual([]);
  });

  test("Date sort mock 1", () => {
    const restaurants = sortRestaurants(dateMock1, { lat: 0, lon: 0 }, "date");
    expect(
      restaurants.map((restaurant) => restaurant.launch_date)
    ).toMatchObject(dateSortedMock1);
  });

  test("Date sort mock 2", () => {
    const restaurants = sortRestaurants(dateMock2, { lat: 0, lon: 0 }, "date");
    expect(
      restaurants.map((restaurant) => restaurant.launch_date)
    ).toMatchObject(dateSortedMock2);
  });

  test("Date sort mock 3", () => {
    const restaurants = sortRestaurants(dateMock3, { lat: 0, lon: 0 }, "date");
    expect(
      restaurants.map((restaurant) => restaurant.launch_date)
    ).toMatchObject(dateSortedMock3);
  });
});

describe("LOCATION - Sort test", () => {
  test("Location sort empty array", () => {
    const restaurants = sortRestaurants([], referenceLocationMock1, "date");
    expect(restaurants).toEqual([]);
  });

  test("Date sort mock 1", () => {
    const restaurants = sortRestaurants(
      locationSortMock1,
      referenceLocationMock1,
      "location"
    );
    expect(restaurants.map((restaurant) => restaurant.name)).toMatchObject(
      locationSortedMock1
    );
  });
});
