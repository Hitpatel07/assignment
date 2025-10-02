// Thermostat.ts
import { IDevice, DeviceType } from './IDevice';
import { IObserver } from './IObserver';
import { ISubject } from './ISubject';

export class Thermostat implements IDevice, ISubject {
    id: number;
    name: string;
    readonly type: DeviceType = "Thermostat";
    private isOn: boolean = false;
    private temperature: number = 20;
    private observers: IObserver[] = []; // List of observers

    constructor(id: number, name: string, initialTemp = 20) {
        this.id = id;
        this.name = name;
        this.temperature = initialTemp;
    }

    // --- IDevice Methods ---
    status(): string {
        return `${this.type} ${this.id} (${this.name}) is ${this.isOn ? "ON" : "OFF"}, temp=${this.temperature}°C`;
    }
    turnOn(): void { this.isOn = true; }
    turnOff(): void { this.isOn = false; }

    // --- Thermostat-specific method ---
    setTemperature(temp: number): void {
        console.log(`Hub: ${this.name} temperature is being set to ${temp}°C.`);
        this.temperature = temp;
        // Notify all observers about the change!
        this.notifyObservers();
    }

    // --- ISubject Methods ---
    addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }
    removeObserver(observer: IObserver): void {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notifyObservers(): void {
        // Pass the current temperature to each observer
        this.observers.forEach(o => o.update(this.temperature));
    }
}