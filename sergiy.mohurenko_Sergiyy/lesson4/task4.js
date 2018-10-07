'use strict'

let user = {
  name: "Sergiy",
  age: 23,
  occupation: "programmer",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  getOccupation: function () {
    return this.occupation;
  }
}

Object.defineProperty(user, "getInfo", {
  get: function () {
    return this.name + ' ' + this.age + ' ' + this.occupation;
  }
});

let businessCard = new User(user);

function User(user) {
  this.name = user.name;
  this.occupation = user.occupation;
}

User.showCountry = function () {
  User.country = "Ukraine";
  return this.country;
}

console.log("User name: " + user.getName());
console.log("User age: " + user.getAge());
console.log("User Occupation: " + user.getOccupation());
console.log("User Info: " + user.getInfo);
console.log(businessCard);
console.log("User Country: " + User.showCountry());
