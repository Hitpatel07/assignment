/*
 * Use Case Demonstration for the Observer Pattern.
 * This is a Behavioural Design Pattern.
 *
 * In this example, a WeatherStation (the Subject) notifies multiple
 * Display devices (the Observers) whenever the temperature changes.
 */
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
        this.temperature = 0;
    }
    WeatherStation.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        this.observers = this.observers.filter(function (obs) { return obs !== o; });
    };
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log("Weather Station: New temperature measured: ".concat(temp, "\u00B0C"));
        this.temperature = temp;
        this.notifyObservers();
    };
    WeatherStation.prototype.notifyObservers = function () {
        var _this = this;
        console.log("Weather Station: Notifying all observers...");
        this.observers.forEach(function (o) { return o.update(_this.temperature); });
    };
    return WeatherStation;
}());
var PhoneDisplay = /** @class */ (function () {
    function PhoneDisplay() {
    }
    PhoneDisplay.prototype.update = function (temp) {
        console.log("Phone Display: Temperature has updated to ".concat(temp, "\u00B0C"));
    };
    return PhoneDisplay;
}());
var LEDDisplay = /** @class */ (function () {
    function LEDDisplay() {
    }
    LEDDisplay.prototype.update = function (temp) {
        console.log("LED Display: Current temperature is now ".concat(temp, "\u00B0C"));
    };
    return LEDDisplay;
}());
var station = new WeatherStation();
var phone = new PhoneDisplay();
var led = new LEDDisplay();
station.addObserver(phone);
station.addObserver(led);
station.setTemperature(25);
console.log("\n--- A bit later... ---\n");
station.setTemperature(30);
