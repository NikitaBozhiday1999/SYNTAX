function Car(make, color, power) {
    this.make = make;
    this.color = color;
    this.power = power;

    this.showDetails = function() {
        alert(`Марка ${make}, цвет ${color}, Мощность ${power} л/с!`);
    }

    return false;
}
let nissan = new Car('nissan', 'red', 350);
let opel= new Car('opel', 'blue', 350);
let lada = new Car('lada', 'black', 50);

nissan.showDetails();
opel.showDetails();
console.log(nissan, Car());
console.log(window);

let cars = [nissan, opel, lada];
cars.forEach (function (car) {
    alert(car.make + ' ' + car.power + ' л/c');
});
// Стрелочная функция???????

// let findMarks = cars.find(function (car) {
//     return car.mark === 'opel';
// });

// let findMarks = cars.find(car => car.mark === 'opel')

// let findMarks = cars.findIndex(function (car) {
//     return car.mark === 'opel';
// });

let result = cars.filter(car => car.power > 300);

console.log(result);


//  Метод .map   ?????????

let priseCar = cars.map(car => car.praise = car.power * 10000 + ' $');
console.log(priseCar);
// .some ??

// .every ????

// .sort ???

function sortFn(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if(a < b) return -1;
}
cars.sort((a, b) => a.power - b.power);
console.log(cars)