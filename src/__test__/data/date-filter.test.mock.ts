import { Restaurant, GeoLocation } from "../../types";

// Mock test data 1

export const dateFilterMock1: Restaurant[] = [
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.571345, 28.379189],
    name: "R1",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-11-26",
    location: [-16.571345, 28.379189],
    name: "R2",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-08-04",
    location: [-16.571345, 28.379189],
    name: "R3",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-11-29",
    location: [-16.571345, 28.379189],
    name: "R4",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-03-25",
    location: [-16.571345, 28.379189],
    name: "R5",
    online: false,
    popularity: 0.30706741877410304,
  },
];

export const dateFilteredMock1: Restaurant["name"][] = ["R2", "R4"];

export const dateFilterRLMock1: GeoLocation = {
  lat: 28.379294,
  lon: -16.567177,
};

// Mock test data 2

export const dateFilterMock2: Restaurant[] = [
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.571345, 28.379189],
    name: "R1",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // not close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2021-01-10",
    location: [-16.305739, 28.501223],
    name: "7 Islas",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-11-26",
    location: [-16.571345, 28.379189],
    name: "R2",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-08-04",
    location: [-16.571345, 28.379189],
    name: "R3",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-11-29",
    location: [-16.571345, 28.379189],
    name: "R4",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    // close
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2021-01-20",
    location: [-16.571345, 28.379189],
    name: "R5",
    online: false,
    popularity: 0.30706741877410304,
  },
];

export const dateFilteredMock2: Restaurant["name"][] = ["R2", "R4", "R5"];

export const dateFilterRLMock2: GeoLocation = {
  lat: 28.379294,
  lon: -16.567177,
};
