export interface Restaurant {
  blurhash: string;
  location: number[];
  name: string;
  online: boolean;
  launch_date: string;
  popularity: number;
}

export interface Location {
  lat?: number;
  lon?: number;
}
