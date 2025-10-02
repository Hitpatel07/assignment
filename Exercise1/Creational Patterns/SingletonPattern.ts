/*
 * Use Case Demonstration for the Singleton Pattern.
 * This is a Creational Design Pattern.
 *
 * In this example, a DatabaseConnection class can only be instantiated once,
 * ensuring a single point of access to the database throughout the application.
 */

class DatabaseConnection {
    private static instance: DatabaseConnection;

    // The constructor is private to prevent direct instantiation
    private constructor() {
        // Simulate the time and resources needed to create a new connection
        console.log("Connecting to the database... (This should only happen once)");
    }

    // The static method that controls access to the singleton instance
    static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    // Example method
    public query(sql: string): void {
        console.log(`Executing query: ${sql}`);
    }
}

// Test Code
console.log("--- Attempting to get DB connections ---");
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

// The constructor should only be called once, even though we called getInstance() twice.
console.log("\n--- Verifying if they are the same instance ---");
if (db1 === db2) {
    console.log("Success: db1 and db2 are the same instance.");
} else {
    console.log("Error: Singleton pattern failed.");
}

console.log("\n--- Using the connection ---");
db1.query("SELECT * FROM users");