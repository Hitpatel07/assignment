/*
 * Use Case Demonstration for the Strategy Pattern.
 * This is a Behavioural Design Pattern.
 *
 * In this example, a ShoppingCart (the Context) can use different
 * payment methods (the Strategies) interchangeably to complete a checkout.
 */
// Concrete Strategies
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.pay = function (amount) {
        console.log("Paid ".concat(amount, " using Credit Card"));
    };
    return CreditCard;
}());
var PayPal = /** @class */ (function () {
    function PayPal() {
    }
    PayPal.prototype.pay = function (amount) {
        console.log("Paid ".concat(amount, " using PayPal"));
    };
    return PayPal;
}());
// Context
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    ShoppingCart.prototype.setPaymentStrategy = function (strategy) {
        this.strategy = strategy;
    };
    ShoppingCart.prototype.checkout = function (amount) {
        // The context delegates the work to the strategy object
        this.strategy.pay(amount);
    };
    return ShoppingCart;
}());
// Test Code
var cart = new ShoppingCart();
console.log("Customer wants to pay with Credit Card.");
cart.setPaymentStrategy(new CreditCard());
cart.checkout(500);
console.log("\nCustomer changes their mind and wants to use PayPal.");
cart.setPaymentStrategy(new PayPal());
cart.checkout(1000);
