/*
 * test.ts
 * A temporary file to test our device classes.
 */

import { Light } from './Light';
import { Thermostat } from './Thermostat';
import { DoorLock } from './DoorLock';

console.log("--- Initializing Smart Home Devices ---");

// Test the Light
const livingRoomLight = new Light(1, "Living Room Light");
console.log(livingRoomLight.status()); // Should be OFF

console.log("\n--- Testing the Light ---");
livingRoomLight.turnOn();
console.log(livingRoomLight.status()); // Should be ON
livingRoomLight.turnOff();
console.log(livingRoomLight.status()); // Should be OFF

// Test the Thermostat
const mainThermostat = new Thermostat(2, "Main Thermostat");
console.log(mainThermostat.status()); // Should be OFF, temp=20°C

console.log("\n--- Testing the Thermostat ---");
mainThermostat.turnOn();
mainThermostat.setTemperature(25);
console.log(mainThermostat.status()); // Should be ON, temp=25°C

// Test the Door Lock
const frontDoorLock = new DoorLock(3, "Front Door");
console.log(frontDoorLock.status()); // Should be LOCKED

console.log("\n--- Testing the Door Lock ---");
frontDoorLock.turnOn(); // This should UNLOCK the door
console.log(frontDoorLock.status()); // Should be UNLOCKED
console.log("Is the door locked?", frontDoorLock.getIsLocked()); // Should be false
frontDoorLock.turnOff(); // This should LOCK the door
console.log(frontDoorLock.status()); // Should be LOCKED
console.log("Is the door locked?", frontDoorLock.getIsLocked()); // Should be true



import { DeviceFactory } from './DeviceFactory';

console.log("\n--- Testing the Device Factory ---");
const factory = new DeviceFactory();
const factoryLight = factory.createDevice("Light", 4, "Garage Light");
factoryLight.turnOn();
console.log(factoryLight.status()); // Should be ON

const factoryLock = factory.createDevice("DoorLock", 5, "Back Door");
console.log(factoryLock.status()); // Should be LOCKED