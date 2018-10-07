'use strict'

function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    
    if (ownerFullName.split(' ').length == 2) {
        this.ownerFullName = ownerFullName;
    } else {
        this.ownerFullName = 'John Doe';
    }

    this.getBrand = function () {
        return this.brand;
    };

    this.getFuelTank = function () {
        return this.fuelTank;
    };

    this.getOwnerFullName = function () {
        return this.ownerFullName;
    };

    this.getFirstNamePart = function () {
        let fullName = ownerFullName.split(' ');
        return fullName[0];
    };

    this.getSecondNamePart = function () {
        let fullName = ownerFullName.split(' ');
        return fullName[1];
    };
}
var car = new Car('BMW', 10, 'Sergiy Mohurenko');

console.log("Brand: " + car.getBrand());
console.log("FuelTank: " + car.getFuelTank());
console.log("OwnerFullName: " + car.getOwnerFullName());
console.log("FirstNamePart: " + car.getFirstNamePart());
console.log("SecondNamePart: " + car.getSecondNamePart());