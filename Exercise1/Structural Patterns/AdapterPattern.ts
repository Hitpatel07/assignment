/*
 * Use Case Demonstration for the Adapter Pattern.
 * This is a Structural Design Pattern.
 *
 * In this example, a ChargerAdapter allows a client that expects a standard
 * Charger interface to work with an incompatible TypeCCharger class.
 */

// Target interface (what the client expects)
interface Charger {
    charge(): void;
}

// Adaptee (the existing, incompatible class)
class TypeCCharger {
    // This method has a different name than what the client expects
    public plugInTypeC(): void {
        console.log("Charging with a Type-C charger.");
    }
}

// Adapter (makes the Adaptee work with the Target interface)
class ChargerAdapter implements Charger {
    private typeCCharger: TypeCCharger;

    constructor(typeC: TypeCCharger) {
        this.typeCCharger = typeC;
    }

    // The adapter implements the target interface and translates the call
    public charge(): void {
        console.log("Using adapter to connect Type-C charger...");
        this.typeCCharger.plugInTypeC();
    }
}

// Test Code
console.log("--- Client needs to charge a device ---");
const typeC = new TypeCCharger();
const adapter: Charger = new ChargerAdapter(typeC);

// The client can now use the charge() method, thanks to the adapter.
adapter.charge();