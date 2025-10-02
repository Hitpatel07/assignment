/*
 * main.ts
 * The main entry point for the Smart Home simulation.
 */

import { SmartHomeHub } from './SmartHomeHub';
import { Thermostat } from './Thermostat';
import { Light } from './Light';
import { DoorLockProxy } from './DoorLockProxy';

// --- SETUP ---
console.log("Initializing Smart Home Hub...");
const hub = new SmartHomeHub();

const light = hub.addDevice("Light", 1, "Living Room Light") as Light;
const thermostat = hub.addDevice("Thermostat", 2, "Main Thermostat") as Thermostat;
const doorProxy = new DoorLockProxy(3, "Front Door");
hub.addDeviceInstance(doorProxy);

// --- DEMONSTRATE SCHEDULING ---
hub.addSchedule(light.id, "22:00", "Turn Off");


// --- DEMONSTRATE PROXY PATTERN ---
hub.printAllDeviceStatuses();

console.log("\n--- Attempting to unlock door without authentication ---");
hub.turnOnDevice(3); // This will fail
console.log(doorProxy.status()); // CORRECTED

console.log("\n--- Authenticating with the correct code ---");
doorProxy.authenticate("1234");
hub.turnOnDevice(3); // This will succeed
console.log(doorProxy.status()); // CORRECTED


// --- DEMONSTRATE OBSERVER PATTERN ---
console.log("\n--- Setting up Thermostat->Light trigger ---");
thermostat.addObserver(light);

console.log("\nAction: Setting temperature too high (26°C). This should trigger the light to turn off.");
light.turnOn(); // Make sure light is on first
console.log(light.status());
thermostat.setTemperature(26); // This will trigger the light to turn off
console.log(light.status());


// --- FINAL REPORTS ---
hub.printAllDeviceStatuses();
hub.printSchedules();