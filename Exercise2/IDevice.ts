/*
 * IDevice.ts
 * The main interface contract for all smart devices.
 */

export type DeviceType = "Light" | "Thermostat" | "DoorLock";

export interface IDevice {
    id: number;
    name: string;
    type: DeviceType;
    status(): string;
    turnOn(): void;
    turnOff(): void;
}