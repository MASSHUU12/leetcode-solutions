class UndergroundSystem {
  private checkIns = new Map<number, [string, number]>();
  private travelTimes = new Map<string, [number, number]>();

  constructor() {}

  checkIn(id: number, stationName: string, t: number): void {
    if (this.checkIns.has(id)) return;

    this.checkIns.set(id, [stationName, t]);
  }

  checkOut(id: number, stationName: string, t: number): void {
    if (!this.checkIns.has(id)) return;

    const [startStation, checkInTime] = this.checkIns.get(id)!;
    const stations = `${startStation}-${stationName}`;

    if (this.travelTimes.has(stations)) {
      const [totalTime, count] = this.travelTimes.get(stations)!;
      this.travelTimes.set(stations, [totalTime + t - checkInTime, count + 1]);
    } else this.travelTimes.set(stations, [t - checkInTime, 1]);

    this.checkIns.delete(id);
  }

  getAverageTime(startStation: string, endStation: string): number {
    const stations = `${startStation}-${endStation}`;

    if (!this.travelTimes.has(stations)) return -1;

    const [totalTime, count] = this.travelTimes.get(stations)!;
    return totalTime / count;
  }
}

const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);

undergroundSystem.checkOut(45, "Waterloo", 15); // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20); // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14

// return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge"));
// return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));

undergroundSystem.checkIn(10, "Leyton", 24);

console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 11.00000

undergroundSystem.checkOut(10, "Waterloo", 38); // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14

// return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
