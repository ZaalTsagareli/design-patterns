class DuckNormal {
  public flyBehavior: string;
  public displayBehavior: string;
  public quackBehavior: string;

  constructor(
    flyBehavior: string,
    displayBehavior: string,
    quackBehavior: string
  ) {
    this.flyBehavior = flyBehavior;
    this.displayBehavior = displayBehavior;
    this.quackBehavior = quackBehavior;
  }

  public fly() {
    if (this.flyBehavior === "withWings") {
      console.log("Flying with wings");
    } else if (this.flyBehavior === "noWay") {
      console.log("Cannot fly");
    }
  }

  public display() {
    if (this.displayBehavior === "normal") {
      console.log("Displaying as a normal duckNormal");
    } else if (this.displayBehavior === "model") {
      console.log("Displaying as a model duckNormal");
    }
  }

  public quack() {
    if (this.quackBehavior === "quack") {
      console.log("Quack quack");
    } else if (this.quackBehavior === "squeak") {
      console.log("Squeak squeak");
    }
  }
}

// Usage
const mallardDuckNormal = new DuckNormal("withWings", "normal", "quack");
mallardDuckNormal.display(); // Displaying as a normal duckNormal
mallardDuckNormal.fly(); // Flying with wings
mallardDuckNormal.quack(); // Quack quack

const rubberDuckNormal = new DuckNormal("noWay", "normal", "squeak");
rubberDuckNormal.display(); // Displaying as a normal duckNormal
rubberDuckNormal.fly(); // Cannot fly
rubberDuckNormal.quack(); // Squeak squeak
