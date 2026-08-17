import { Luggage, Priority } from "./luggage";

class regular extends Luggage {
  get getPrice(): number {
    const actualWeight = this.getWeight;
    let extraWeight = actualWeight - 23;
    let finalPrice = 0;

    if (actualWeight <= 23) {
      return 0;
    } else {
      if (this.priority === Priority.Normal) {
        finalPrice = Number((this.fee * extraWeight).toFixed(2));
      } else if (this.priority === Priority.Priority) {
        finalPrice = Number((this.fee * 5 * extraWeight).toFixed(2));
      } else {
        finalPrice = Number((this.fee * 10 * extraWeight).toFixed(2));
      }
    }

    return finalPrice;
  }
}

export { regular };
