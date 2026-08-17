import { Luggage, Priority } from "../src/luggage";

const luggage1 = new Luggage(
  10,
  "Box with fragile items",
  Priority.Priority,
  100,
);

const luggage2 = new Luggage(
  20,
  "luggage full of clothes and food",
  Priority.Normal,
);

describe("testing Luggage class", () => {
  test("Return luggage weight", () => {
    expect(luggage1.getWeight).toBe(10);
  });

  test("Should throw an error when weight < 0", () => {
    expect(() => {
      luggage1.setWeigth = -3;
    }).toThrow("Invalid weight! Please set weight > 0");
  });

  test("Return set weight when weight > 0", () => {
    expect((luggage1.setWeigth = 8)).toBe(8);
  });

  test("Return luggage description", () => {
    expect(luggage1.getDescription).toBe("Box with fragile items");
  });

  test("Return luggage priority", () => {
    expect(luggage1.getPriority).toBe(2);
  });

  test("Return insurance value when insurance is not undefined", () => {
    expect(luggage1.getInsuranceValue).toBe(100);
  });

  test("Return insurance value = 0 when insurance is undefined", () => {
    expect(luggage2.getInsuranceValue).toBe(0);
  });

  test("Set insurance value when insurance is not undefined", () => {
    expect((luggage1.setInsuranceValue = 321)).toBe(321);
  });

  test("Should throw an error when insurance is undefined", () => {
    expect(() => {
      luggage2.setInsuranceValue = 321;
    }).toThrow("Insurance is only applicable to fragile luggage");
  });
});
