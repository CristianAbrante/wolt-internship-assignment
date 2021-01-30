/**
 * Interface that represents a restaurant object.
 */
export interface Restaurant {
  blurhash: string;
  location: [number, number]; // longitude, latitude
  name: string;
  online: boolean;
  launch_date: string;
  popularity: number;
}

/**
 * Interface that represents a geographical location.
 */
export interface GeoLocation {
  lat: number;
  lon: number;
}

/**
 * This key represents all the possible sorting criteria
 * that could be used to sort restaurants.
 */
export type DiscoverySortingCriteria = "popularity" | "date" | "location";

/**
 * Type of the sorting function.
 */
export type RestaurantSortCompareFn = (
  a: Restaurant,
  b: Restaurant,
  additionalParams?: { referenceLocation: GeoLocation }
) => number;

/**
 * Type used for define the different functions
 * that could be used as a sort compare function.
 */
export type DiscoverySortCompareFunctions = Record<
  DiscoverySortingCriteria,
  RestaurantSortCompareFn
>;

/**
 * Type of the prune function
 */
export type RestaurantsFilterFunction = (
  restaurant: Restaurant,
  additionalParams?: { referenceLocation: GeoLocation }
) => boolean;

/**
 * Dictionary type fot the possible prune functions given
 * the sorting criteria.
 */
export type RestaurantsFilterFunctions = Record<
  DiscoverySortingCriteria,
  RestaurantsFilterFunction
>;

/**
 * Type used for defining all the possible discovery titles.
 * This is necessary because if a new criteria is added,
 * TS will throw a compile error.
 */
export type DiscoveryTitles = Record<DiscoverySortingCriteria, string>;

/**
 * Discovery section type.
 */
export type Discovery = {
  sections: { title: string; restaurants: Restaurant[] }[];
};
