import { Priority } from "../src/luggage";
import { CarryOn } from "../src/carry-on";
import { Regular } from "../src/regular";
import { Fragile } from "../src/fragile";
import { LuggageList } from "../src/luggage-list";

const luggage1 = new Fragile(
  10,
  "Box with fragile items",
  Priority.Normal,
  100,
);
const luggage2 = new Regular(30, "Luggage full of clothes", Priority.Priority);
const luggage3 = new CarryOn(6, "Luggage with personal items", Priority.Urgent);
const luggage4 = new Fragile(5, "Luggage with medicine", Priority.Urgent, 210);

const list = new LuggageList([luggage1, luggage2, luggage3]);
const list2 = new LuggageList([luggage2, luggage3]);
const list3 = new LuggageList([]);
const list4 = new LuggageList([luggage1, luggage4]);

describe("Testing LuggageList class", () => {
  test("Insert new luggage to the list", () => {
    expect(list.insertLuggage(luggage4)).toBe(luggage4);
  });

  test("Print all luggage list", () => {
    expect(list.printAllLuggages()).toEqual([
      luggage1,
      luggage2,
      luggage3,
      luggage4,
    ]);
  });

  test("Return the price of each luggage", () => {
    expect(list.priceOfEachLuggage()).toEqual([100, 182, 15.6, 262]);
  });

  test("Return list total price", () => {
    expect(list.totalPrice()).toBe(559.6);
  });

  test("Return total price = 0 if list is empty", () => {
    expect(list3.totalPrice()).toBe(0);
  });

  test("Return the quantity of fragile luggages and the total insurance value", () => {
    expect(list.getFragileLuggageWithInsurance()).toBe(
      "Fragile luggages qty: 2, Total insurance: 310",
    );
  });

  test("Return quantity = 0 and total = 0 if list has not fragile luggage ", () => {
    expect(list2.getFragileLuggageWithInsurance()).toBe(
      "Fragile luggages qty: 0, Total insurance: 0",
    );
  });

  test("Return all luggages sorted by price", () => {
    expect(list.sortByPrice()).toEqual([
      {
        weight: 6,
        description: "Luggage with personal items",
        priority: 3,
        insurance: undefined,
        fee: 5.2,
        price: 15.6,
      },
      {
        weight: 10,
        description: "Box with fragile items",
        priority: 1,
        insurance: 100,
        fee: 5.2,
        price: 100,
      },
      {
        weight: 30,
        description: "Luggage full of clothes",
        priority: 2,
        insurance: undefined,
        fee: 5.2,
        price: 182,
      },
      {
        weight: 5,
        description: "Luggage with medicine",
        priority: 3,
        insurance: 210,
        fee: 5.2,
        price: 262,
      },
    ]);
  });

  test("Return empty array if luggage list = [] when sorting by price", () => {
    expect(list3.sortByPrice()).toEqual([]);
  });

  test("Return all luggages sorted by weight", () => {
    expect(list.sortByWeight()).toEqual([
      luggage4,
      luggage3,
      luggage1,
      luggage2,
    ]);
  });

  test("Return empty array if luggage list = [] when sorting by weight", () => {
    expect(list3.sortByWeight()).toEqual([]);
  });

  test("Remove 2 luggages from the list", () => {
    expect(list.removeLuggage(1, 2)).toEqual([luggage1, luggage4]);
  });

  test("Should throw an error when trying to remove luggage from empty list", () => {
    expect(() => {
      list3.removeLuggage(0, 1);
    }).toThrow("Can not remove item from empty list!");
  });

  test("Should throw an error when trying to remove luggage using index > list length", () => {
    expect(() => {
      list.removeLuggage(10, 1);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to remove luggage using index = list length", () => {
    expect(() => {
      list.removeLuggage(4, 1);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to remove luggage using index < 0", () => {
    expect(() => {
      list.removeLuggage(-2, 1);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to remove a number of luggages greater than we have available in the list", () => {
    expect(() => {
      list.removeLuggage(1, 10);
    }).toThrow(
      "You are trying to remove more luggages that we have available. Maximum number to remove is 3",
    );
  });

  test("Update luggage weight", () => {
    expect(list.updateWeight(2, 12)).toBe("Updated weight of luggage 3: 12kg");
  });

  test("Should throw an error when trying to update luggage weight using index > list length", () => {
    expect(() => {
      list.updateWeight(7, 1);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to update luggage weight using index = list length", () => {
    expect(() => {
      list.updateWeight(4, 1);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to update luggage weight using index < 0", () => {
    expect(() => {
      list.updateWeight(-3, 1);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to update luggage weight using weight < 0", () => {
    expect(() => {
      list.updateWeight(1, -5);
    }).toThrow("Invalid weight!");
  });

  test("Update luggage insurance", () => {
    expect(list4.updateInsurance(1, 150)).toBe(
      "Updated insurance of luggage 2: 150",
    );
  });

  test("Should throw an error when trying to update luggage insurance using index > list length", () => {
    expect(() => {
      list4.updateInsurance(10, 222);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to update luggage insurance using index = list length", () => {
    expect(() => {
      list4.updateInsurance(4, 200);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to update luggage insurance using index < 0", () => {
    expect(() => {
      list4.updateInsurance(-1, 189);
    }).toThrow("Invalid index!");
  });

  test("Should throw an error when trying to update luggage insurance using value < 0", () => {
    expect(() => {
      list4.updateInsurance(1, -432);
    }).toThrow("Invalid insurance value!");
  });
});
