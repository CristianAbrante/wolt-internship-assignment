import { Restaurant, GeoLocation } from "../../types";

// Mock test data 1

export const dateMock1: Restaurant[] = [
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-08-19",
    location: [-16.571345, 28.379189],
    name: "R1",
    online: false,
    popularity: 0.30706741877410304,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-06-06",
    location: [-16.567672, 28.380537],
    name: "R2",
    online: false,
    popularity: 0.3919633748546864,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-01-14",
    location: [-16.780884, 28.352232],
    name: "R3",
    online: false,
    popularity: 0.40907452479616846,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-09-20",
    location: [-16.565884, 28.386142],
    name: "R4",
    online: false,
    popularity: 0.13868764972681744,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-09-21",
    location: [-16.305739, 28.501223],
    name: "R5",
    online: false,
    popularity: 0.8212304387029502,
  },
];

export const dateSortedMock1: Restaurant["launch_date"][] = [
  "2020-09-21",
  "2020-09-20",
  "2020-08-19",
  "2020-06-06",
  "2020-01-14",
];

// Mock test data 2

export const dateMock2: Restaurant[] = [
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.571345, 28.379189],
    name: "R1",
    online: true,
    popularity: 0.30706741877410304,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-19",
    location: [-16.567672, 28.380537],
    name: "R2",
    online: false,
    popularity: 0.3919633748546864,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-05-22",
    location: [-16.780884, 28.352232],
    name: "R3",
    online: false,
    popularity: 0.40907452479616846,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-11-11",
    location: [-16.565884, 28.386142],
    name: "R4",
    online: true,
    popularity: 0.13868764972681744,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-03-16",
    location: [-16.305739, 28.501223],
    name: "R5",
    online: false,
    popularity: 0.8212304387029502,
  },
];

export const dateSortedMock2: Restaurant["launch_date"][] = [
  "2020-11-11",
  "2020-02-23",
  "2020-05-22",
  "2020-03-16",
  "2020-02-19",
];

// Mock test data 3

export const dateMock3: Restaurant[] = [
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-23",
    location: [-16.571345, 28.379189],
    name: "R1",
    online: true,
    popularity: 0.30706741877410304,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-19",
    location: [-16.567672, 28.380537],
    name: "R2",
    online: false,
    popularity: 0.3919633748546864,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-19",
    location: [-16.780884, 28.352232],
    name: "R3",
    online: false,
    popularity: 0.40907452479616846,
  },
];

export const dateSortedMock3: Restaurant["launch_date"][] = [
  "2020-02-23",
  "2020-02-19",
  "2020-02-19",
];
