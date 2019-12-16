//Прототипное наследование
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true 
};
alert( rabbit.jumps ); // true
delete rabbit.jumps;
alert(rabbit.jumps); // null
delete animal.jumps;
alert(rabbit.jumps); // undefined

// ===========
let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

//===========
let animal = {
    eat() {
      this.full = true;
    }
  };
  
let rabbit = {
__proto__: animal
};

rabbit.eat(); // rabbit

//==============
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");
alert( speedy.stomach ); // apple

alert( lazy.stomach ); // undefined


// F.prototype
function Rabbit() {}
    Rabbit.prototype = {
        eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // true

//==
function Rabbit() {}
    Rabbit.prototype = {
        eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false 

//==
function Rabbit() {}
    Rabbit.prototype = {
        eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // true

//==
function Rabbit() {}
    Rabbit.prototype = {
        eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined

//==================

// Встроенный прототипы
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };

function f() {
    alert('Hello!');
}
f.defer(1000);

//==========
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    lert( a + b );
}

f.defer(1000)(1, 2);

// Методы прототипов 
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

// ===============
function Rabbit(name) {
    this.name = name;
  }
Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined

// Планирование setTimeout setinterval
function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
          clearInterval(timerId);
        }
    current++;
    }, 1000);
}

printNumbers(5, 10);

//==
function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
    current++;
}, 1000);
}
  
printNumbers(5, 10)