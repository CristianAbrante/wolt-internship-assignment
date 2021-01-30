import { Discovery, GeoLocation, Restaurant } from "../../types";

// Mock test data 1

export const discoveryRestaurantsMock1: Restaurant[] = [
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-12-25",
    location: [-3.705515, 40.419288], // close 5
    name: "R1",
    online: false,
    popularity: 0.3,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-11-11",
    location: [-3.704483, 40.417729], // close 4
    name: "R2",
    online: false,
    popularity: 0.99,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-10-21",
    location: [-3.704403, 40.416843], // close 2
    name: "R3",
    online: true,
    popularity: 0.35,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-03-01",
    location: [-3.704347, 40.41756], // close 3
    name: "R4",
    online: true,
    popularity: 0.7,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-12-12",
    location: [-3.70355, 40.417168], // close 1
    name: "R5",
    online: false,
    popularity: 0.1,
  },
];

export const discoveryRLMock1: GeoLocation = {
  lat: 40.416908,
  lon: -3.703518,
};

export const discoveryMock1: Discovery = {
  sections: [
    {
      title: "Popular restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-03-01",
          location: [-3.704347, 40.41756], // close 3
          name: "R4",
          online: true,
          popularity: 0.7,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-10-21",
          location: [-3.704403, 40.416843], // close 2
          name: "R3",
          online: true,
          popularity: 0.35,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-11-11",
          location: [-3.704483, 40.417729], // close 4
          name: "R2",
          online: false,
          popularity: 0.99,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-25",
          location: [-3.705515, 40.419288], // close 5
          name: "R1",
          online: false,
          popularity: 0.3,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-12",
          location: [-3.70355, 40.417168], // close 1
          name: "R5",
          online: false,
          popularity: 0.1,
        },
      ],
    },
    {
      title: "New Restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-10-21",
          location: [-3.704403, 40.416843], // close 2
          name: "R3",
          online: true,
          popularity: 0.35,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-25",
          location: [-3.705515, 40.419288], // close 5
          name: "R1",
          online: false,
          popularity: 0.3,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-12",
          location: [-3.70355, 40.417168], // close 1
          name: "R5",
          online: false,
          popularity: 0.1,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-11-11",
          location: [-3.704483, 40.417729], // close 4
          name: "R2",
          online: false,
          popularity: 0.99,
        },
      ],
    },
    {
      title: "Nearby Restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-10-21",
          location: [-3.704403, 40.416843], // close 2
          name: "R3",
          online: true,
          popularity: 0.35,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-03-01",
          location: [-3.704347, 40.41756], // close 3
          name: "R4",
          online: true,
          popularity: 0.7,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-12",
          location: [-3.70355, 40.417168], // close 1
          name: "R5",
          online: false,
          popularity: 0.1,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-11-11",
          location: [-3.704483, 40.417729], // close 4
          name: "R2",
          online: false,
          popularity: 0.99,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-25",
          location: [-3.705515, 40.419288], // close 5
          name: "R1",
          online: false,
          popularity: 0.3,
        },
      ],
    },
  ],
};

// Mock test data 2

export const discoveryRestaurantsMock2: Restaurant[] = [
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-12-25",
    location: [-3.704347, 40.41756], // close 3
    name: "R1",
    online: true,
    popularity: 0.2,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-07-07",
    location: [-3.704483, 40.417729], // close 4
    name: "R2",
    online: false,
    popularity: 0.9,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-10-21",
    location: [-3.70355, 40.417168], // close 1
    name: "R3",
    online: false,
    popularity: 0.88,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-03-01",
    location: [-3.857554, 40.308035], // FAR
    name: "R4",
    online: true,
    popularity: 0.99,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-01",
    location: [-3.704403, 40.416843], // close 2
    name: "R5",
    online: true,
    popularity: 0.7,
  },
];

export const discoveryRLMock2: GeoLocation = {
  lat: 40.416908,
  lon: -3.703518,
};

export const discoveryMock2: Discovery = {
  sections: [
    {
      title: "Popular restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-02-01",
          location: [-3.704403, 40.416843], // close 2
          name: "R5",
          online: true,
          popularity: 0.7,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-25",
          location: [-3.704347, 40.41756], // close 3
          name: "R1",
          online: true,
          popularity: 0.2,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-07-07",
          location: [-3.704483, 40.417729], // close 4
          name: "R2",
          online: false,
          popularity: 0.9,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-10-21",
          location: [-3.70355, 40.417168], // close 1
          name: "R3",
          online: false,
          popularity: 0.88,
        },
      ],
    },
    {
      title: "New Restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-25",
          location: [-3.704347, 40.41756], // close 3
          name: "R1",
          online: true,
          popularity: 0.2,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-10-21",
          location: [-3.70355, 40.417168], // close 1
          name: "R3",
          online: false,
          popularity: 0.88,
        },
      ],
    },
    {
      title: "Nearby Restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-02-01",
          location: [-3.704403, 40.416843], // close 2
          name: "R5",
          online: true,
          popularity: 0.7,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-12-25",
          location: [-3.704347, 40.41756], // close 3
          name: "R1",
          online: true,
          popularity: 0.2,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-10-21",
          location: [-3.70355, 40.417168], // close 1
          name: "R3",
          online: false,
          popularity: 0.88,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-07-07",
          location: [-3.704483, 40.417729], // close 4
          name: "R2",
          online: false,
          popularity: 0.9,
        },
      ],
    },
  ],
};

// Mock test data 3

export const discoveryRestaurantsMock3: Restaurant[] = [
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-01-25",
    location: [-3.704347, 40.41756], // close 3
    name: "R1",
    online: true,
    popularity: 0.2,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-07",
    location: [-3.704483, 40.417729], // close 4
    name: "R2",
    online: false,
    popularity: 0.9,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-05-21",
    location: [-3.70355, 40.417168], // close 1
    name: "R3",
    online: false,
    popularity: 0.88,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-03-01",
    location: [-3.857554, 40.308035], // FAR
    name: "R4",
    online: true,
    popularity: 0.99,
  },
  {
    blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
    launch_date: "2020-02-01",
    location: [-3.704403, 40.416843], // close 2
    name: "R5",
    online: true,
    popularity: 0.7,
  },
];

export const discoveryRLMock3: GeoLocation = {
  lat: 40.416908,
  lon: -3.703518,
};

export const discoveryMock3: Discovery = {
  sections: [
    {
      title: "Popular restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-02-01",
          location: [-3.704403, 40.416843], // close 2
          name: "R5",
          online: true,
          popularity: 0.7,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-01-25",
          location: [-3.704347, 40.41756], // close 3
          name: "R1",
          online: true,
          popularity: 0.2,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-02-07",
          location: [-3.704483, 40.417729], // close 4
          name: "R2",
          online: false,
          popularity: 0.9,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-05-21",
          location: [-3.70355, 40.417168], // close 1
          name: "R3",
          online: false,
          popularity: 0.88,
        },
      ],
    },
    {
      title: "Nearby Restaurants",
      restaurants: [
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-02-01",
          location: [-3.704403, 40.416843], // close 2
          name: "R5",
          online: true,
          popularity: 0.7,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-01-25",
          location: [-3.704347, 40.41756], // close 3
          name: "R1",
          online: true,
          popularity: 0.2,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-05-21",
          location: [-3.70355, 40.417168], // close 1
          name: "R3",
          online: false,
          popularity: 0.88,
        },
        {
          blurhash: "UKFGw4^KM}$$x@X8N1kB10R+xEWWR8Rlt4o0",
          launch_date: "2020-02-07",
          location: [-3.704483, 40.417729], // close 4
          name: "R2",
          online: false,
          popularity: 0.9,
        },
      ],
    },
  ],
};
