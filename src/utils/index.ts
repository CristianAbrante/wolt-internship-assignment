import {
  Restaurant,
  GeoLocation,
  DiscoverySortingCriteria,
  DiscoverySortCompareFunctions,
  RestaurantsFilterFunctions,
  RestaurantsFilterFunction,
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
 * SORT FUNCTIONS
 */

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

/**
 * FILTER FUNCTIONS
 */

/**
 * Max number of elements that the list have to contain
 */
export const MAX_NUMBER_OF_RESTAURANTS = 10;

/**
 * Default distance (in meters) to use as a filter.
 */
export const MAX_DISTANCE = 1500;

/**
 * Maximum number of months between current time and opening time.
 */
export const MAX_NUMBER_OF_MONTHS = 4;

/**
 * Function wrapper that prunes out the restaurants given the
 * sorting criteria. It is important to point out that the maximum
 * length of the filtered array is given by the constant.
 *
 * @param restaurants
 * @param sortCriteria
 */
export const filterRestaurants = (
  restaurants: Restaurant[],
  referenceLocation: GeoLocation,
  sortCriteria: DiscoverySortingCriteria
) =>
  restaurants
    .filter((restaurant) =>
      restaurantsPruneFunction[sortCriteria](restaurant, { referenceLocation })
    )
    .slice(0, MAX_NUMBER_OF_RESTAURANTS);

/**
 * External filtering function using for filtering by location.
 *
 * @param restaurant
 * @param params
 */
const filterByDistance: RestaurantsFilterFunction = (restaurant, params) =>
  params
    ? getDistance(params.referenceLocation, restaurant) < MAX_DISTANCE
    : false;

/**
 * Dictionary that will contain all the filtering function based on the
 * sorting criteria.
 */
export const restaurantsPruneFunction: RestaurantsFilterFunctions = {
  location: filterByDistance,
  popularity: filterByDistance,
  date: (restaurant, params) => {
    let locationFilter = filterByDistance(restaurant, params);
    // in case the restaurant is not filtered by location
    // it is going to be filtered by date.
    if (locationFilter) {
      const currentTime = new Date();
      const restaurantDate = new Date(restaurant.launch_date);

      const yearsDiff =
        currentTime.getFullYear() - restaurantDate.getFullYear();
      const monthsDiff =
        12 * yearsDiff + (currentTime.getMonth() - restaurantDate.getMonth());
      return monthsDiff < MAX_NUMBER_OF_MONTHS;
    } else {
      // not filtered by location.
      return false;
    }
  },
};
