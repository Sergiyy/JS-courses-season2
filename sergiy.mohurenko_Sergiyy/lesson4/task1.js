'use strict'

function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    this.ownerFullName = ownerFullName;

    this.getBrand = function () {
        return this.brand;
    };

    this.getFuelTank = function () {
        return this.fuelTank;
    };

    this.getOwnerFullName = function () {
        return this.ownerFullName;
    };
}

var car = new Car('BMW', 10, 'Sergiy Mohurenko');

console.log("Brand: " + car.getBrand());
console.log("FuelTank: " + car.getFuelTank());
console.log("OwnerFullName: " + car.getOwnerFullName());