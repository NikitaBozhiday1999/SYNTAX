// Создание объектов через new
let object = {};
function A() { return object; }
function B() { return object; }
alert(new A() == new B()); 

//==============================
function Calculator() {
    this.read = function() {
        this.numb1 = +prompt('a?', 0);
        this.numb2 = +prompt('b?', 0);
    };
    this.sum = function() {
        return this.numb1 + this.numb2;
    };
    this.mul = function() {
        return this.numb1 * this.numb2;
    };
}
let calculator = new Calculator();
calculator.read();

alert('Sum = ' + calculator.sum());
alert('Mul = ' + calculator.sum());

//========================
function Accumulator(startingValue) {
    this.read = function() {
        this.value += +prompt('Сколько нужно добавить к текущему значению?', 0);
    };
}
let accumulator = new Accumulator(10);
accumulator.read();
accumulator.read();

alert(accumulator.value);

// Методы массивов
function camelize(str) {
    return str 
    this.split('-');
    this.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    this.join('');
}
camelize('background-color');
camelize('list-type-style');
camelize('-webkit-transition');

//===========================
// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered);
// alert(arr);

//======================
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

//=========================
let arr = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr) {
    arr.sort()
}
let sorted = copySorted(arr);
alert(sorted);
alert(arr);

//=============================
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert(names);

//============================


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let userMapped = user.map(user => ({
    fullName: `${users.name} ${users.surname}`,
    id: user.id
}));

//======================
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
function sortByAge(users) {
    users.sort((a, b) => a.age > b.age);
}
sortByAge(arr);
alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

//==================================
let arr = [1, 2, 3];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let arr = [1,2,3];
shuffle(arr);
alert(arr);

//=============================
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
function  getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  alert( getAverageAge(arr) );

  // Object.keys, values, entries​
  function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum;
  }
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250 
  };
  alert(sumSalaries(salaries));


//=======================
let user = {
    name: 'John',
    age: 30
  };
  function count(obj) {
      return object.keys(obj);
  }
  alert(count(user));