import { Priority } from "./luggage";
import { CarryOn } from "./carry-on";
import { Regular } from "./regular";
import { Fragile } from "./fragile";

type luggageOptions = CarryOn | Regular | Fragile;

class LuggageList {
  luggages: luggageOptions[];

  constructor(luggages: luggageOptions[]) {
    this.luggages = luggages;
  }

  insertLuggage(luggage: luggageOptions): luggageOptions {
    this.luggages.push(luggage);
    return luggage;
  }

  printAllLuggages(): luggageOptions[] {
    return this.luggages;
  }

  priceOfEachLuggage(): number[] {
    let prices = [];

    for (let luggage of this.luggages) {
      prices.push(Number(luggage.getPrice.toFixed(2)));
    }

    return prices;
  }

  totalPrice(): number {
    let total = 0;

    for (let luggage of this.luggages) {
      total += luggage.getPrice;
    }

    return total;
  }

  getFragileLuggageWithInsurance(): string {
    let qty = 0;
    let total = 0;

    for (let luggage of this.luggages) {
      if (luggage.insurance === undefined) {
        qty += 0;
        total += 0;
      } else {
        qty++;
        total += luggage.getInsuranceValue;
      }
    }

    return `Fragile luggages qty: ${qty}, Total insurance: ${total}`;
  }

  sortByPrice(): luggageOptions[] {
    const sortedPrice = sortItems(this.luggages, "getPrice");
    return sortedPrice;
  }

  sortByWeight(): luggageOptions[] {
    const sortedWeight = sortItems(this.luggages, "getWeight");
    return sortedWeight;
  }

  removeLuggage(idx: number, numberItemsToBeDeleted: number): luggageOptions[] {
    if (this.luggages.length === 0) {
      throw new Error("Can not remove item from empty list!");
    }

    if (idx < 0 || idx >= this.luggages.length) {
      throw new Error("Invalid index!");
    }

    const remainingPositions = this.luggages.length - idx;
    if (numberItemsToBeDeleted > remainingPositions) {
      throw new Error(
        `You are trying to remove more luggages that we have available. Maximum number to remove is ${remainingPositions}`,
      );
    }

    const removed = this.luggages.toSpliced(idx, numberItemsToBeDeleted);
    return removed;
  }

  updateWeight(idx: number, value: number): string {
    if (idx < 0 || idx >= this.luggages.length) {
      throw new Error("Invalid index!");
    }

    if (value < 0) {
      throw new Error("Invalid weight!");
    }

    if (this.luggages[idx]) {
      this.luggages[idx].setWeigth = value;
    }

    return `Updated weight of luggage ${idx + 1}: ${this.luggages[idx]?.getWeight}kg`;
  }

  updateInsurance(idx: number, value: number): string {
    if (idx < 0 || idx >= this.luggages.length) {
      throw new Error("Invalid index!");
    }

    if (value < 0) {
      throw new Error("Invalid insurance value!");
    }

    if (this.luggages[idx]) {
      this.luggages[idx].setInsuranceValue = value;
    }

    return `Updated insurance of luggage ${idx + 1}: ${this.luggages[idx]?.getInsuranceValue}`;
  }

  sortByPriority(): void {
    sortItems(this.luggages, "getPriority");
  }
}

function sortItems(
  luggages: luggageOptions[],
  myMethod: string,
): luggageOptions[] {
  let sortedItems: any[] = [];

  if (myMethod === "getPrice") {
    const updatedItems = luggages.map((item) => ({
      ...item,
      price: item.getPrice,
    }));

    sortedItems = updatedItems.toSorted((a, b) => a.price - b.price);
  }

  if (myMethod === "getWeight") {
    sortedItems = luggages.toSorted((a, b) => a.getWeight - b.getWeight);
  }

  if (myMethod === "getPriority") {
    sortedItems = luggages.toSorted((a, b) => a.getPriority - b.getPriority);
  }

  return sortedItems;
}

export { LuggageList };
