let weight = ' вес ';
let numbers1 = [1, 2, 3];
let numbers2 = [1, 2, 3, 4];
function areArraySame(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let num1 of arr1) {
        if (!arr2.includes(num1)) {
            return false;
        }
    }
    return true;
}
areArraySame(numbers1, numbers2);

// let name = areArraySame;
// alert(`Hello ${areArraySame}`);

// массив функция???


// Параматры по умолчанию??



function askParam(param = 'рост') {
    prompt(`Укажите ваш ${ param }`);
    // return askParam;
}
askParam('возраст');
askParam();


// Возврат значения функции?????


// Использование return??

// ?????????????????????

let power = function (x = 1, n = 1) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result
}

let askParaments = function (ok, error) {
    let x = prompt(`Введите число`);
    let n = prompt(`Введите степень`);
    if (n < 1) error();
    else ok(x, n);
}

let showError = function () {
    alert(`Введите число больше еденицы.`);
}
askParaments(power, showError);

let calculater = {
    a: 50,
    b: -9,
    sum: function () {
        // calculater.a + calculater.b;
        alert(`${this.a} + ${this.b}`)
    }
}

function mul () {
    return this.a * this.b
}

calculater.mul = mul;

calculater.mul();