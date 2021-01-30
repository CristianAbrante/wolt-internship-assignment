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
  popularity: () => false,
  date: () => false,
};
