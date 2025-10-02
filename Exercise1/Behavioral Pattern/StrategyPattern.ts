/*
 * Use Case Demonstration for the Strategy Pattern.
 * This is a Behavioural Design Pattern.
 *
 * In this example, a ShoppingCart (the Context) can use different
 * payment methods (the Strategies) interchangeably to complete a checkout.
 */

// Strategy interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategies
class CreditCard implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card`);
    }
}

class PayPal implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal`);
    }
}

// Context
class ShoppingCart {
    private strategy!: PaymentStrategy;

    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    checkout(amount: number): void {
        // The context delegates the work to the strategy object
        this.strategy.pay(amount);
    }
}

// Test Code
const cart = new ShoppingCart();

console.log("Customer wants to pay with Credit Card.");
cart.setPaymentStrategy(new CreditCard());
cart.checkout(500);

console.log("\nCustomer changes their mind and wants to use PayPal.");
cart.setPaymentStrategy(new PayPal());
cart.checkout(1000);