/*
 * Use Case Demonstration for the Decorator Pattern.
 * This is a Structural Design Pattern.
 *
 * In this example, a base Coffee object is "decorated" with additional
 * ingredients (Milk, Sugar), which dynamically add to its cost and description.
 */

// Component interface
interface Coffee {
    cost(): number;
    description(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
    cost(): number { return 50; }
    description(): string { return "Simple Coffee"; }
}

// Decorator base class
abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }

    cost(): number {
        return this.decoratedCoffee.cost();
    }

    description(): string {
        return this.decoratedCoffee.description();
    }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 10;
    }

    description(): string {
        return super.description() + ", with Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 5;
    }

    description(): string {
        return super.description() + ", with Sugar";
    }
}

// Test Code
console.log("--- Preparing a simple coffee ---");
let myCoffee: Coffee = new SimpleCoffee();
console.log(myCoffee.description() + " → Cost: " + myCoffee.cost());

console.log("\n--- Now, decorating the coffee ---");
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);

console.log(myCoffee.description() + " → Cost: " + myCoffee.cost());