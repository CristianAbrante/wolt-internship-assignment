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
 * This is the type of the sorting function.
 */
export type RestaurantSortCompareFn = (
  a: Restaurant,
  b: Restaurant,
  additionalParams?: { referenceLocation: GeoLocation }
) => number;

/**
 * This method will define the sorting functions
 * that could be used.
 */
export type DiscoverySortCompareFunctions = Record<
  DiscoverySortingCriteria,
  RestaurantSortCompareFn
>;
