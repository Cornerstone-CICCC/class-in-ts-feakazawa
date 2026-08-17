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
    public insurance?: number,
    public fee = 5.2,
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

  get getInsuranceValue(): number {
    if (this.insurance) {
      return this.insurance;
    } else {
      return 0;
    }
  }

  set setInsuranceValue(value: number) {
    if (this.insurance === undefined) {
      throw new Error("Insurance is only applicable to fragile luggage");
    }

    this.insurance = value;
  }
}

export { Luggage, Priority };
