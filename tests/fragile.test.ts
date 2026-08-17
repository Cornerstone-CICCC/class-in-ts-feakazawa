import { Fragile } from "../src/fragile";
import { Priority } from "../src/luggage";

const luggage1 = new Fragile(
  10,
  "Box with fragile items",
  Priority.Normal,
  100,
);

const luggage2 = new Fragile(
  10,
  "Box with fragile items",
  Priority.Priority,
  248,
);

const luggage3 = new Fragile(
  10,
  "Box with fragile items",
  Priority.Urgent,
  520,
);

describe("Testing Fragile class", () => {
  test("Return price when priority = normal", () => {
    expect(luggage1.getPrice).toBe(100);
  });

  test("Return price when priority = priority", () => {
    expect(luggage2.getPrice).toBe(274);
  });

  test("Return price when priority = urgent", () => {
    expect(luggage3.getPrice).toBe(572);
  });
});
