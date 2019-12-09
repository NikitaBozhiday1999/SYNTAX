function fact(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;  
    } 
    return result;
}
fact(5);
console.log(fact);

function fact(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}
let result;

fact(5);
console.log(fact);

function sum(...rest) {
    let result = 0;
    rest.forEach(function (item) {
        result += item
    })
    return result;
}
sum(2, 3, 4);

function getRandomArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let numb = Math.round(Math.random() * 10);
        arr.push(numb);
    }
    return arr;
}

let number = getRandomArray(10);
Math.min(...number);

let name = 'Jhon';

function sayHi() {
    alert('Hello')
}

function getUserInfo() {
    alert(`${this.firstName} ${this.lastName}, ${country}, ${city}`);
}
let user = {
    firstName: 'Nick',
    lastName: 'Doe',
    country: 'Belarus',
    city: 'Grodno'
};
let user2 = {
    firstName: 'Henry',
    lastName: 'Ford',
    country: 'Belarus',
    city: 'Brest'
};

getUserInfo.call(user, country, city);
getUserInfo.call(user2, country, city);

