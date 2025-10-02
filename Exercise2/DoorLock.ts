/*
 * DoorLock.ts
 * A concrete implementation of a smart door lock device.
 */

import { IDevice, DeviceType } from './IDevice';

export class DoorLock implements IDevice {
    id: number;
    name: string;
    readonly type: DeviceType = "DoorLock";
    private isLocked: boolean = true;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    status(): string {
        return `${this.type} ${this.id} (${this.name}) is ${this.isLocked ? "LOCKED" : "UNLOCKED"}`;
    }

    turnOn(): void { // "Turn On" for a lock means UNLOCK
        this.isLocked = false;
    }

    turnOff(): void { // "Turn Off" for a lock means LOCK
        this.isLocked = true;
    }

   
    public getIsLocked(): boolean {
        return this.isLocked;
    }
}