export interface Restaurant {
  blurhash: string;
  location: [number, number]; // longitude, latitude
  name: string;
  online: boolean;
  launch_date: string;
  popularity: number;
}

export interface GeoLocation {
  lat: number;
  lon: number;
}
