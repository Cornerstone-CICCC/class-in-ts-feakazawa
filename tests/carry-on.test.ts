import { CarryOn } from "../src/carry-on";
import { Priority } from "../src/luggage";

const luggage = new CarryOn(10, "Luggage with personal items", Priority.Urgent);
const luggage2 = new CarryOn(
  3,
  "Luggage with beauty products",
  Priority.Priority,
);

const luggage3 = new CarryOn(5, "Luggage with medicine", Priority.Priority);

describe("Testing CarryOn class", () => {
  test("Return price when luggage weight > 5kg", () => {
    expect(luggage.getPrice).toBe(78);
  });

  test("Return price = 0 when luggage weight < 5kg", () => {
    expect(luggage2.getPrice).toBe(0);
  });

  test("Return price = 0 when luggage weight = 5kg", () => {
    expect(luggage3.getPrice).toBe(0);
  });
});
