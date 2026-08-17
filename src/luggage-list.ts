import { Luggage } from "./luggage";
import { carryOn } from "./carry-on";
import { regular } from "./regular";
import { fragile } from "./fragile";

type luggageOptions = carryOn | regular | fragile;

class luggageList {
  luggages: luggageOptions[];

  constructor(luggages: luggageOptions[]) {
    this.luggages = luggages;
  }

  insertLuggage(luggage: luggageOptions): string {
    this.luggages.push(luggage);
    return `Total luggages: ${this.luggages.length}`;
  }

  printAllLuggages(): void {
    console.log(this.luggages);
  }

  priceOfEachLuggage(): string {
    let prices = "";
    let count = 1;

    for (let luggage of this.luggages) {
      prices += `Luggage ${count}: ${luggage.getPrice.toFixed(2)}\n`;
      count++;
    }

    return prices;
  }

  totalPrice(): string {
    let total = 0;

    for (let luggage of this.luggages) {
      total += luggage.getPrice;
    }

    return `Total price: ${total}`;
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

  sortByPrice(): number[] {
    let prices = [];

    for (let luggage of this.luggages) {
      prices.push(luggage.getPrice);
    }

    return prices.toSorted((a, b) => a - b);
  }

  sortByWeight(): number[] {
    let weights = [];

    for (let luggage of this.luggages) {
      weights.push(luggage.getWeight);
    }

    return weights.toSorted((a, b) => a - b);
  }
}

export { luggageList };
