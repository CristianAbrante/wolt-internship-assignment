import {
  Restaurant,
  GeoLocation,
  DiscoverySortingCriteria,
  DiscoverySortCompareFunctions,
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
 * sorting criteria. It is important to say that gives more priority
 * to the restaurants that are opened: "online: true"
 *
 * @param restaurants
 * @param referenceLocation
 * @param sortCriteria
 */
export const sortRestaurants = (
  restaurants: Restaurant[],
  referenceLocation: GeoLocation,
  sortCriteria: DiscoverySortingCriteria
) =>
  [...restaurants].sort((a, b) => {
    // in case a is online and b is not then a should be first
    if (a.online && !b.online) return -1;
    // in case b is online and be is not then b should be first
    if (b.online && !a.online) return +1;

    // in case both are open or none of them, then the sorting
    // criteria is applied.
    return discoverySortCompareFn[sortCriteria](a, b, { referenceLocation });
  });

/**
 * This object defines the possible sorting criteria
 * available.
 */
const discoverySortCompareFn: DiscoverySortCompareFunctions = {
  popularity: (a, b) => b.popularity - a.popularity,
  date: (a, b) =>
    new Date(b.launch_date).getTime() - new Date(a.launch_date).getTime(),
  location: (a, b, additionalParams) =>
    // if the additional params are specified then the location is calculated
    // or all the elements are zero otherwise.
    additionalParams
      ? getDistance(additionalParams.referenceLocation, a) -
        getDistance(additionalParams.referenceLocation, b)
      : 0,
};
