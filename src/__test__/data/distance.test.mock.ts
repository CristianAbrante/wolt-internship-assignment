import { Restaurant, GeoLocation } from "../../types";

// Mock test data 1

export const restaurantsMock1: Restaurant[] = [
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.571345, 28.379189],
    name: "Guachinche Casa Lito",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.567672, 28.380537],
    name: "Guachinche La Casona",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // not close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.780884, 28.352232],
    name: "El Frenazo",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.565884, 28.386142],
    name: "El rincon",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // not close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.305739, 28.501223],
    name: "7 Islas",
    online: false,
    popularity: 0.30706741877410304,
  },
];

export const closeRestaurantsMock1: Restaurant[] = [
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.571345, 28.379189],
    name: "Guachinche Casa Lito",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.567672, 28.380537],
    name: "Guachinche La Casona",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.565884, 28.386142],
    name: "El rincon",
    online: false,
    popularity: 0.30706741877410304,
  },
];

export const referenceLocationMock1: GeoLocation = {
  lat: 28.379294,
  lon: -16.567177,
};

// Mock test data 2

export const restaurantsMock2: Restaurant[] = [
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-14.072135, 28.238407],
    name: "Loc 1",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-4.613748, 38.942563],
    name: "Loc 2",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // not close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.676256, 28.375647],
    name: "Loc 3",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [7.908166, 46.592793],
    name: "Loc 4",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // not close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [7.907466, 46.594536],
    name: "Loc 5",
    online: false,
    popularity: 0.30706741877410304,
  },
];

export const closeRestaurantsMock2: Restaurant[] = [
  {
    // not close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.676256, 28.375647],
    name: "Loc 3",
    online: false,
    popularity: 0.30706741877410304,
  },
];

export const referenceLocationMock2: GeoLocation = {
  lat: 28.37416,
  lon: -16.678234,
};
