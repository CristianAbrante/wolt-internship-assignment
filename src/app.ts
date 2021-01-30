import express, { response } from "express";
import fs from "fs";
import { GeoLocation, Restaurant } from "./types";
const app = express();

app.get<{ name: string }, string, {}, GeoLocation>("/discovery", (req, res) => {
  fs.readFile("./data/restaurants.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let restaurants: Restaurant = JSON.parse(data.toString());
    console.log(restaurants);
  });

  res.send("Hello from node and typescript.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
