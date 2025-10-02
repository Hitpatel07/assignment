/*
 * Use Case Demonstration for the Observer Pattern.
 * This is a Behavioural Design Pattern.
 *
 * In this example, a WeatherStation (the Subject) notifies multiple
 * Display devices (the Observers) whenever the temperature changes.
 */

interface IObserver {
    update(temp: number): void;
}

class WeatherStation {
    private observers: IObserver[] = [];
    private temperature: number = 0;

    addObserver(o: IObserver): void {
        this.observers.push(o);
    }

    removeObserver(o: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== o);
    }

    setTemperature(temp: number): void {
        console.log(`Weather Station: New temperature measured: ${temp}°C`);
        this.temperature = temp;
        this.notifyObservers();
    }

    private notifyObservers(): void {
        console.log("Weather Station: Notifying all observers...");
        this.observers.forEach(o => o.update(this.temperature));
    }
}

class PhoneDisplay implements IObserver {
    update(temp: number): void {
        console.log(`Phone Display: Temperature has updated to ${temp}°C`);
    }
}

class LEDDisplay implements IObserver {
    update(temp: number): void {
        console.log(`LED Display: Current temperature is now ${temp}°C`);
    }
}

const station = new WeatherStation();
const phone = new PhoneDisplay();
const led = new LEDDisplay();

station.addObserver(phone);
station.addObserver(led);

station.setTemperature(25);

console.log("\n--- A bit later... ---\n");

station.setTemperature(30);