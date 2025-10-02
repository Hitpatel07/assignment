/*
 * Light.ts
 * A concrete implementation of a smart light device.
 */

import { IDevice, DeviceType } from './IDevice';
import { IObserver } from './IObserver';

export class Light implements IDevice, IObserver {
    id: number;
    name: string;
    readonly type: DeviceType = "Light";
    private isOn: boolean = false;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // --- IDevice Methods ---
    status(): string {
        return `${this.type} ${this.id} (${this.name}) is ${this.isOn ? "ON" : "OFF"}`;
    }
    turnOn(): void {
        if (!this.isOn) { this.isOn = true; }
    }
    turnOff(): void {
        if (this.isOn) { this.isOn = false; }
    }

    // --- IObserver Method ---
    // This is the trigger logic!
    update(subjectState: any): void {
        const temperature = subjectState as number;
        // If the temperature is over 25 degrees, the light turns off.
        if (temperature > 25 && this.isOn) {
            console.log(`Trigger: Temperature is ${temperature}°C. Turning off light "${this.name}".`);
            this.turnOff();
        }
    }
}