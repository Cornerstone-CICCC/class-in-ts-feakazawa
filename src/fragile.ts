import { Luggage, Priority } from "./luggage";

class Fragile extends Luggage {
  get getPrice(): number {
    let finalPrice = 0;

    if (this.priority === Priority.Normal) {
      finalPrice = Number(this.getInsuranceValue.toFixed(2));
    } else if (this.priority === Priority.Priority) {
      finalPrice = Number((this.fee * 5 + this.getInsuranceValue).toFixed(2));
    } else {
      finalPrice = Number((this.fee * 10 + this.getInsuranceValue).toFixed(2));
    }

    return finalPrice;
  }
}

export { Fragile };
