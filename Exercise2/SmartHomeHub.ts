/*
 * SmartHomeHub.ts
 * The central "brain" of the smart home. It manages all devices.
 */

import { IDevice, DeviceType } from './IDevice';
import { DeviceFactory } from './DeviceFactory';

export class SmartHomeHub {
    private devices: Map<number, IDevice> = new Map();
    private factory: DeviceFactory = new DeviceFactory();
    
    // NEW: Property to hold scheduled tasks
    private scheduledTasks: any[] = [];

    public addDevice(type: DeviceType, id: number, name: string): IDevice {
        const newDevice = this.factory.createDevice(type, id, name);
        this.devices.set(id, newDevice);
        console.log(`Hub: Added device "${name}" (ID: ${id})`);
        return newDevice;
    }

    public addDeviceInstance(device: IDevice): void {
        this.devices.set(device.id, device);
        console.log(`Hub: Added device "${(device as any).name || 'Proxy'}" (ID: ${device.id})`);
    }

    // NEW: Method to add a scheduled task
    public addSchedule(deviceId: number, time: string, action: "Turn On" | "Turn Off"): void {
        this.scheduledTasks.push({ deviceId, time, action });
        console.log(`Hub: Scheduled task for device ${deviceId} at ${time} to ${action}.`);
    }

    // NEW: Method to print the scheduled tasks report
    public printSchedules(): void {
        console.log("\n--- Scheduled Tasks Report ---");
        if (this.scheduledTasks.length === 0) {
            console.log("No tasks are scheduled.");
            return;
        }
        this.scheduledTasks.forEach(task => {
            console.log(`- Device ${task.deviceId}: ${task.action} at ${task.time}`);
        });
        console.log("----------------------------");
    }

    public getDevice(id: number): IDevice | undefined {
        return this.devices.get(id);
    }

    public turnOnDevice(id: number): void {
        const device = this.devices.get(id);
        if (device) { device.turnOn(); }
    }
    
    public turnOffDevice(id: number): void {
        const device = this.devices.get(id);
        if (device) { device.turnOff(); }
    }

    public printAllDeviceStatuses(): void {
        console.log("\n--- Smart Home Status Report ---");
        this.devices.forEach(device => {
            console.log(`- ${device.status()}`);
        });
        console.log("--------------------------------");
    }
}