class Duck {
  public iFlyBehavior: IFlyBehavior;
  public iDisplayBehavior: IDisplayBehavior;
  public iQuackBehavior: IQuackBehavior;

  constructor(
    iFlyBehavior: IFlyBehavior,
    iDisplayBehavior: IDisplayBehavior,
    iQuackBehavior: IQuackBehavior
  ) {
    this.iFlyBehavior = iFlyBehavior;
    this.iDisplayBehavior = iDisplayBehavior;
    this.iQuackBehavior = iQuackBehavior;
  }

  public fly() {
    this.iFlyBehavior.fly();
  }

  public display() {
    this.iDisplayBehavior.display();
  }

  public quack() {
    this.iQuackBehavior.quack();
  }
}

interface IFlyBehavior {
  fly(): void;
}

interface IDisplayBehavior {
  display(): void;
}

interface IQuackBehavior {
  quack(): void;
}

class FlyWithWings implements IFlyBehavior {
  fly() {
    console.log("Flying with wings");
  }
}

class FlyNoWay implements IFlyBehavior {
  fly() {
    console.log("Cannot fly");
  }
}

class DisplayAsNormal implements IDisplayBehavior {
  display() {
    console.log("Displaying as a normal duck");
  }
}

class DisplayAsModel implements IDisplayBehavior {
  display() {
    console.log("Displaying as a model duck");
  }
}

class Quack implements IQuackBehavior {
  quack() {
    console.log("Quack quack");
  }
}

class Squeak implements IQuackBehavior {
  quack() {
    console.log("Squeak squeak");
  }
}

// Usage
const mallardDuck = new Duck(
  new FlyWithWings(),
  new DisplayAsNormal(),
  new Quack()
);
mallardDuck.display(); // Displaying as a normal duck
mallardDuck.fly(); // Flying with wings
mallardDuck.quack(); // Quack quack

const rubberDuck = new Duck(
  new FlyNoWay(),
  new DisplayAsNormal(),
  new Squeak()
);
rubberDuck.display(); // Displaying as a normal duck
rubberDuck.fly(); // Cannot fly
rubberDuck.quack(); // Squeak squeak
