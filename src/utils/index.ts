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
  [...restaurants].sort(
    restaurantsSortFunctions[sortCriteria](referenceLocation)
  );

/**
 * This object defines the possible sorting criteria
 * available.
 */
const restaurantsSortFunctions: RestaurantsSortFunctions = {
  online: (_) => (a, b) => {
    // in case a is online and b is not then a should be first
    if (a.online && !b.online) return -1;
    // in case b is online and be is not then b should be first
    if (b.online && !a.online) return +1;
    // in case both are open or none of them, then they are equal.
    return 0;
  },
  popularity: (_) => (a, b) => {
    const onlineSort = restaurantsSortFunctions["online"](_)(a, b);
    // if according to online they are equal then they are sorted
    // based on popularity.
    return onlineSort === 0 ? b.popularity - a.popularity : onlineSort;
  },
  date: (_) => (a, b) => {
    const onlineSort = restaurantsSortFunctions["online"](_)(a, b);
    // if according to online they are equal then they are sorted
    // based on date.
    return onlineSort === 0
      ? new Date(b.launch_date).getTime() - new Date(a.launch_date).getTime()
      : onlineSort;
  },
  location: (location) => (a, b) => {
    const onlineSort = restaurantsSortFunctions["online"](location)(a, b);
    // if according to online they are equal then they are sorted
    // based on location.
    return onlineSort === 0
      ? getDistance(location, a) - getDistance(location, b)
      : onlineSort;
  },
};
