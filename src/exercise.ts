enum Priority {
  Normal = 1,
  Priority,
  Urgent,
}

class Luggage {
  constructor(
    private weight: number,
    protected description: string,
    readonly priority: Priority,
    public fee: number,
    public insurance?: number,
  ) {}

  get getWeight(): number {
    return this.weight;
  }

  set setWeigth(weight: number) {
    this.weight = weight;
  }

  get getDescription(): string {
    return this.description;
  }

  get getPriority(): Priority {
    return this.priority;
  }

  get getInsurance(): number {
    if (this.insurance) {
      return this.insurance;
    } else {
      return 0;
    }
  }

  set setInsuranceValue(value: number) {
    try {
      this.insurance = value;
    } catch {
      throw new Error("Insurance is only applicable to fragile luggage");
    }
  }
}

class carryOn extends Luggage {
  get getPrice(): number {
    const extraWeight = this.getWeight - 5;
    const finalPrice = this.getWeight <= 5 ? 0 : this.fee * 3 * extraWeight;

    return finalPrice;
  }
}
class regular extends Luggage {
  get getPrice(): number {
    const actualWeight = this.getWeight;
    let extraWeight = actualWeight - 23;
    let finalPrice = 0;

    if (actualWeight <= 23) {
      return 0;
    } else {
      if (this.priority === Priority.Normal) {
        finalPrice = this.fee * extraWeight;
      } else if (this.priority === Priority.Priority) {
        finalPrice = this.fee * 5 * extraWeight;
      } else {
        finalPrice = this.fee * 10 * extraWeight;
      }
    }

    return finalPrice;
  }
}
class fragile extends Luggage {
  get getPrice(): number {
    let finalPrice = 0;

    if (this.priority === Priority.Normal) {
      finalPrice = this.getInsurance;
    } else if (this.priority === Priority.Priority) {
      finalPrice = this.fee * 5 + this.getInsurance;
    } else {
      finalPrice = this.fee * 10 + this.getInsurance;
    }

    return finalPrice;
  }
}
