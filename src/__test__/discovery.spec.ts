import "jest";
import { Discovery } from "../types";
import { getDiscovery } from "../utils";
import {
  discoveryMock1,
  discoveryMock2,
  discoveryMock3,
  discoveryRestaurantsMock1,
  discoveryRestaurantsMock2,
  discoveryRestaurantsMock3,
  discoveryRLMock1,
  discoveryRLMock2,
  discoveryRLMock3,
} from "./data/discovery.test.mock";

const logDiscovery = (discovery: Discovery) =>
  console.log(
    discovery.sections.forEach((section) => {
      console.log(
        section.title,
        section.restaurants.map((r) => r.name)
      );
    })
  );

describe("DISCOVERY - tests", () => {
  test("Test with empty array", () => {
    const discovery = getDiscovery([], discoveryRLMock1);
    expect(discovery).toMatchObject({ sections: [] });
  });

  test("Mock 1 test", () => {
    const discovery = getDiscovery(discoveryRestaurantsMock1, discoveryRLMock1);
    expect(discovery).toMatchObject(discoveryMock1);
  });

  test("Mock 2 test", () => {
    const discovery = getDiscovery(discoveryRestaurantsMock2, discoveryRLMock2);
    expect(discovery).toMatchObject(discoveryMock2);
  });

  test("Mock 3 test", () => {
    const discovery = getDiscovery(discoveryRestaurantsMock3, discoveryRLMock3);
    expect(discovery).toMatchObject(discoveryMock3);
  });
});
