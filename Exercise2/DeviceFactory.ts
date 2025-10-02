/*
 * DeviceFactory.ts
 * Implements the Factory Method pattern to create various types of devices.
 * This decouples the main application from the concrete device classes.
 */

import { IDevice, DeviceType } from './IDevice';
import { Light } from './Light';
import { Thermostat } from './Thermostat';
import { DoorLock } from './DoorLock';

export class DeviceFactory {
    public createDevice(type: DeviceType, id: number, name: string): IDevice {
        switch (type) {
            case "Light":
                return new Light(id, name);
            case "Thermostat":
                return new Thermostat(id, name);
            case "DoorLock":
                return new DoorLock(id, name);
            default:
                throw new Error("Invalid device type specified.");
        }
    }
}