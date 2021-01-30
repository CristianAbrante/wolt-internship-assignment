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
export type RestaurantSortingType = "popularity";

/**
 * This is the type of the sorting function.
 */
export type RestaurantSortCompareFn = (
  referenceLocation: GeoLocation
) => (a: Restaurant, b: Restaurant) => number;

/**
 * This method will define the sorting functions
 * that could be used.
 */
export type RestaurantsSortFunctions = Record<
  RestaurantSortingType,
  RestaurantSortCompareFn
>;
