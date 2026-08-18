import { Luggage } from "./luggage";

class CarryOn extends Luggage {
  get getPrice(): number {
    const extraWeight = this.getWeight - 5;
    const finalPrice =
      this.getWeight <= 5 ? 0 : Number((this.fee * 3 * extraWeight).toFixed(2));

    return finalPrice;
  }
}

export { CarryOn };
