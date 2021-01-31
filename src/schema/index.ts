import * as yup from "yup";
import { GeoLocation, Restaurant } from "../types";

export const restaurantsJsonValidationSchema: yup.SchemaOf<{
  restaurants: Restaurant[];
}> = yup
  .object()
  .shape({
    restaurants: yup
      .array()
      .of(
        yup.object().shape({
          blurhash: yup
            .string()
            .min(1, "hash should have at least 1 characters")
            .defined(),
          location: yup
            .array()
            .of(yup.number())
            .length(
              2,
              "Location must have two coordinates longitude and latitude."
            )
            .defined(),
          name: yup
            .string()
            .min(1, "Name must have at least one character.")
            .defined(),
          online: yup.boolean().defined(),
          launch_date: yup.string().defined(),
          popularity: yup
            .number()
            .min(0.0, "popularity must be greater than 0.")
            .max(1.0, "popularity must be lower than 1.")
            .defined(),
        })
      )
      .defined(),
  })
  .defined();

export const geoLocationValidationSchema: yup.SchemaOf<GeoLocation> = yup
  .object()
  .shape({
    lat: yup.number().defined("Latitude must be specified"),
    lon: yup.number().defined("Longitude must be specified"),
  })
  .defined();
