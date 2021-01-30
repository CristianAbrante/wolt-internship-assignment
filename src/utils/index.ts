import {
  Restaurant,
  GeoLocation,
  RestaurantSortingType,
  RestaurantsSortFunctions,
} from "../types";
const geolib = require("geolib");

/**
 * Custom function for computing the distance, using geolib in the inside
 *
 * @param location
 * @param restaurant
 */
export const getDistance = (location: GeoLocation, restaurant: Restaurant) =>
  geolib.getDistance(
    { lat: location.lat, lon: location.lon },
    { lat: restaurant.location[1], lon: restaurant.location[0] }
  );

/**
 * Default distance (in meters) to use as a filter.
 */
export const DEFAULT_DISTANCE = 1500;

/**
 * Method filters the restaurant list by a given distance threshold,
 * from a reference location.
 *
 * @param restaurants
 * @param referenceLocation
 * @param distanceThreshold
 */
export const filterRestaurantsByDistance = (
  restaurants: Restaurant[],
  referenceLocation: GeoLocation,
  distanceThreshold: number = DEFAULT_DISTANCE
) =>
  restaurants.filter(
    (restaurant) =>
      getDistance(referenceLocation, restaurant) < distanceThreshold
  );

/**
 * This methods sorts the list of restaurants according to a given
 * sorting criteria.
 *
 * @param restaurants
 * @param referenceLocation
 * @param sortCriteria
 */
export const sortRestaurants = (
  restaurants: Restaurant[],
  referenceLocation: GeoLocation,
  sortCriteria: RestaurantSortingType
) =>
  restaurants.sort(restaurantsSortFunctions[sortCriteria](referenceLocation));

/**
 * This object defines the possible sorting criteria
 * available.
 */
const restaurantsSortFunctions: RestaurantsSortFunctions = {
  popularity: (_) => (a, b) => b.popularity - a.popularity,
};
