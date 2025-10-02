/*
 * DoorLockProxy.ts
 * Implements the Proxy Pattern to control access to a real DoorLock.
 */

import { IDevice, DeviceType } from './IDevice';
import { DoorLock } from './DoorLock';

export class DoorLockProxy implements IDevice {
    private realLock: DoorLock;
    private secretCode: string = "1234";
    private hasAccess: boolean = false;

    constructor(id: number, name: string) {
        this.realLock = new DoorLock(id, name);
    }

    public authenticate(code: string): void {
        if (code === this.secretCode) {
            this.hasAccess = true;
            console.log("Proxy: Authentication successful. Access granted.");
        } else {
            this.hasAccess = false;
            console.log("Proxy: Authentication failed. Access denied.");
        }
    }

    // --- Implementation of the IDevice interface ---

    public get id(): number { return this.realLock.id; }
    public get name(): string { return this.realLock.name; } // MISTAKE #1: Added the missing 'name' property
    public get type(): DeviceType { return this.realLock.type; }

    public status(): string { // MISTAKE #2: Correctly named this method 'status()' instead of 'getStatus()'
        return this.realLock.status();
    }

    public turnOn(): void { // turnOn() => unlock
        if (this.hasAccess) {
            console.log("Proxy: Access confirmed. Unlocking the door.");
            this.realLock.turnOn();
        } else {
            console.log("Proxy: ACCESS DENIED. You must authenticate first.");
        }
    }

    public turnOff(): void { // turnOff() => lock
        console.log("Proxy: Locking the door.");
        this.hasAccess = false; 
        this.realLock.turnOff();
    }
}