import express, { response } from "express";
import { Location } from "./types";
const app = express();

app.get<{ name: string }, string, {}, Location>("/", (req, res) => {
  res.send("Hello from node and typescript.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
