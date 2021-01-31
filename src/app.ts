import express from "express";
import fs from "fs";
import {
  geoLocationValidationSchema,
  restaurantsJsonValidationSchema,
} from "./schema";
import { Discovery, GeoLocation } from "./types";
import { getDiscovery } from "./utils";

const app = express();

app.get<{}, Discovery, {}, GeoLocation>("/discovery", (req, res) => {
  fs.readFile("./data/restaurants.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    let restaurants = JSON.parse(data.toString());

    // All the validation is executed in parallel using promises.
    Promise.all([
      restaurantsJsonValidationSchema.validate(restaurants),
      geoLocationValidationSchema.validate(req.query),
    ])
      .then((values) => {
        const restaurants = values[0].restaurants;
        const location = values[1];
        const discovery = getDiscovery(restaurants, location);

        res.json(discovery);
      })
      .catch((err) => {
        const errors =
          err.errors.length > 1 ? err.errors.join(" - ") : err.errors[0];
        res.status(400).send(errors);
      });
  });
});

export default app;
