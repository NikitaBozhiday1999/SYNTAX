let vehicle = {
    // showPops: function() {}
    transmission: 'automatic',
    showPops() {
        alert(`${this.type}, ${this.subtype} with ${this.engines} engines and ${this.wheels} wheels`);
    }
};

// let car = Object.create(vehicle);

// car.type = 'car';
// car.engines = 1;
// car.wheel = 4;

// function Vechicle(type, engines, wheels) {
//     this.typev = type;
//     this.engines = engines;
//     this.wheels = wheels;
// }

// Vechicle.prototype = vehicle;

// let car = new Vechicle('car', 1, 4);
// let hybrid = new Vechicle('car', 2, 4);

let car = {
    type: 'car',
    engines: 1,
    wheels: 4,
    showPops() {
        alert(`${this.type}, ${this.subtype} with ${this.engines} engines and ${this.wheels} wheels`);
    }
};

setTimeout(car.showPops.bind(car), 3000);

let hybridCar = {
    engines: 2,
    subtype: 'hybrid',
}

Object.setPrototypeOf(hybridCar, car);

car.__proto__ = vehicle;
hybridCar.__proto__ = car;

// hybridCar.showPops();
// car.showPops();
// car.transmission;
// car.subtype;




let errorTimerId = setTimeout(showServerError, 5000);
let responseTimerId = setTimeout(getServerResponse, 2000);

function showServerError(){
    alert('Server error!!!');
    clearTimeout(responseTimerId);
}

function getServerResponse() {
    alert('Get response!');
    clearTimeout(errorTimerId);
} 

function sayHi() {
    console.log('hello');
}
let intervalId = setInterval(sayHi, 1000);
setTimeout(() => clearInterval(intervalId), 5000);

// let obj = {
//     name: Nick,
//     sayHi() {
//         console.log(this.name);
//     }
// }
//  setTimeout(() => obj.sayHi(), 3000);
