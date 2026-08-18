import { Regular } from "../src/regular";
import { Priority } from "../src/luggage";

const luggage1 = new Regular(17.5, "Luggage full of clothes", Priority.Normal);
const luggage2 = new Regular(23, "Luggage full of clothes", Priority.Priority);
const luggage3 = new Regular(26.3, "Luggage full of clothes", Priority.Normal);
const luggage4 = new Regular(33, "Luggage full of clothes", Priority.Priority);
const luggage5 = new Regular(27, "Luggage full of clothes", Priority.Urgent);

describe("Testing Regular class", () => {
  test("Return price = 0 when luggage weight < 23kg", () => {
    expect(luggage1.getPrice).toBe(0);
  });

  test("Return price = 0 when luggage weight = 23kg", () => {
    expect(luggage2.getPrice).toBe(0);
  });

  test("Return price when luggage weight > 23kg and priority = normal", () => {
    expect(luggage3.getPrice).toBe(17.16);
  });

  test("Return price when luggage weight > 23kg and priority = priority", () => {
    expect(luggage4.getPrice).toBe(260);
  });

  test("Return price when luggage weight > 23kg and priority = urgent", () => {
    expect(luggage5.getPrice).toBe(208);
  });
});
