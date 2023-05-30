class ParkingSystem {
  private slots: Map<number, number>;

  constructor(big: number, medium: number, small: number) {
    this.slots = new Map([
      [1, big],
      [2, medium],
      [3, small],
    ]);
  }

  addCar(carType: number): boolean {
    if (![1, 2, 3].includes(carType)) {
      throw new Error("Invalid carType");
    }

    const availableSlots = this.slots.get(carType);
    if (availableSlots && availableSlots > 0) {
      this.slots.set(carType, availableSlots - 1);
      return true;
    }

    return false;
  }
}

const obj = new ParkingSystem(1, 1, 0);

console.log(obj.addCar(1));
console.log(obj.addCar(3));

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
