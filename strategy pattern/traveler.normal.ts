class TravelNormal {
  private directionType: string;

  constructor(directionType: string) {
    this.directionType = directionType;
  }

  calculateRoad(a: number, b: number): number {
    if (this.directionType === "car") {
      return a * b;
    } else if (this.directionType === "walker") {
      return Math.pow(a * b, 2);
    } else {
      throw new Error("Invalid direction type");
    }
  }
}

const humanTravelNormaler = new TravelNormal("walker");
console.log(humanTravelNormaler.calculateRoad(5, 5));

const carTravelNormaler = new TravelNormal("car");
console.log(carTravelNormaler.calculateRoad(5, 5));
