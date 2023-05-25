class Travel {
  private direction: Direction;
  constructor(directionType: Direction) {
    this.direction = directionType;
  }

  calculateRoad(a: number, b: number) {
    this.direction.calculateRoad(a, b);
  }
}

interface Direction {
  calculateRoad(a: number, b: number): number;
}

class DirectionForCar implements Direction {
  calculateRoad(a: number, b: number): number {
    return a * b;
  }
}

class DirectionForWalker implements Direction {
  calculateRoad(a: number, b: number): number {
    return Math.pow(a * b, 2);
  }
}

const humanTraveler = new Travel(new DirectionForWalker());

const carTraveler = new Travel(new DirectionForWalker());

console.log(humanTraveler.calculateRoad(5, 5));

console.log(carTraveler.calculateRoad(5, 5));
