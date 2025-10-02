/*
 * Use Case Demonstration for the Factory Pattern.
 * This is a Creational Design Pattern.
 *
 * In this example, a NotificationFactory creates different types of notification
 * objects (SMS, Email) based on a given type, without the client
 * needing to know the specific class to instantiate.
 */

// Renamed from Notification to INotification to avoid name collision
interface INotification {
    send(msg: string): void;
}

// Concrete Products
class SMSNotification implements INotification {
    send(msg: string): void {
        console.log(`Sending notification via SMS: "${msg}"`);
    }
}

class EmailNotification implements INotification {
    send(msg: string): void {
        console.log(`Sending notification via Email: "${msg}"`);
    }
}

// The Factory
class NotificationFactory {
    // The static factory method
    public static createNotification(type: string): INotification {
        if (type === "SMS") {
            return new SMSNotification();
        }
        if (type === "Email") {
            return new EmailNotification();
        }
        throw new Error("Unknown notification type specified.");
    }
}

// Test Code
console.log("--- Using the Notification Factory ---");

const sms = NotificationFactory.createNotification("SMS");
sms.send("Your order has been shipped!");

const email = NotificationFactory.createNotification("Email");
email.send("Your monthly invoice is attached.");