import {
  Restaurant,
  GeoLocation,
  DiscoverySortingCriteria,
  DiscoverySortCompareFunctions,
  RestaurantsFilterFunctions,
  RestaurantsFilterFunction,
  DiscoveryTitles,
  Discovery,
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
 * Auxiliary function for computing the months since restaurant
 * was launched.
 *
 * @param restaurant
 */
export const getMonthsSinceLaunch = (restaurant: Restaurant) => {
  const currentDate = new Date();
  const launchDate = new Date(restaurant.launch_date);

  const yearsDiff = currentDate.getFullYear() - launchDate.getFullYear();
  return 12 * yearsDiff + (currentDate.getMonth() - launchDate.getMonth());
};

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
      restaurantsFilterFunction[sortCriteria](restaurant, { referenceLocation })
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
export const restaurantsFilterFunction: RestaurantsFilterFunctions = {
  location: filterByDistance,
  popularity: filterByDistance,
  // in case the restaurant is not filtered by location
  // it is going to be filtered by date.
  date: (restaurant, params) =>
    filterByDistance(restaurant, params)
      ? getMonthsSinceLaunch(restaurant) < MAX_NUMBER_OF_MONTHS
      : false,
};

/**
 * DISCOVERY FUNCTIONS
 */

/**
 * Dictionary that contains the
 * discovery section titles
 */
export const discoveryTitles: DiscoveryTitles = {
  popularity: "Popular restaurants",
  date: "New Restaurants",
  location: "Nearby Restaurants",
};

/**
 * Method used for returning the discovery section
 * given the restaurants list and the given location.
 *
 * @param restaurants
 * @param location
 */
export const getDiscovery = (
  restaurants: Restaurant[],
  location: GeoLocation
): Discovery => {
  let discovery: Discovery = {
    sections: [],
  };

  // iterating over the possible discovery sections
  for (let criteriaStr in discoveryTitles) {
    const criteria = criteriaStr as DiscoverySortingCriteria;
    const sortedRestaurants = sortRestaurants(restaurants, location, criteria);
    const filteredRestaurants = filterRestaurants(
      sortedRestaurants,
      location,
      criteria
    );

    // only section is added if the length is
    // greater than zero.
    if (filteredRestaurants.length > 0) {
      discovery.sections.push({
        title: discoveryTitles[criteria],
        restaurants: filteredRestaurants,
      });
    }
  }

  return discovery;
};
