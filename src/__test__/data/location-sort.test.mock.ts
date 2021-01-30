import { Restaurant, GeoLocation } from "../../types";

// Mock test data 1

export const locationSortMock1: Restaurant[] = [
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-08-19",
    location: [-16.338892, 28.52453],
    name: "R1",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-06-06",
    location: [-16.556936, 28.393983],
    name: "R2",
    online: false,
    popularity: 0.3919633748546864,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-01-14",
    location: [-16.56558, 28.379792],
    name: "R3",
    online: false,
    popularity: 0.40907452479616846,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-09-20",
    location: [-16.562614, 28.381699],
    name: "R4",
    online: false,
    popularity: 0.13868764972681744,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-09-21",
    location: [-16.64129, 28.380377],
    name: "R5",
    online: false,
    popularity: 0.8212304387029502,
  },
];

export const locationSortedMock1: Restaurant["name"][] = [
  "R3",
  "R4",
  "R2",
  "R5",
  "R1",
];

export const referenceLocationMock1: GeoLocation = {
  lat: 28.379317,
  lon: -16.568459,
};
