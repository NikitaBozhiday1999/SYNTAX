//  Объекты: основы 
let user = {};
    user.name = "Jhon";
    user.surname = "Smith";
    user.name = "Pete";
delete user.name;
console.log(user);


let cap = {};
alert( isEmpty(cat) ); // true
cat['8:30'] = 'get up';
alert( isEmpty(cat) ); // false


const user = {
    name: 'Jhon',
}
user.namec = 'Pete'; // Done!
user = 123; // Error..


let salaries = {
    jhon: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum); // 390


// Методы ц примитивов
let str = 'Привет';
str.test = 5;
alert(str.test);


// Числа
let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
alert(num1+num2);

alert( Math.round(6.35 * 10) / 10); // 6.4

// Массивы
let fruits = [1, 2, 3, 4];
let shoppingCart = fruits;
shoppingCart.push(55);
alert(fruits.length);// да скопираован выведен - 4

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(1, 1, 'Классика');
alert(styles.shift());
styles.unshift('Реп', 'Регги');


// Map и Set 
let map = new Map();
map.set('name', 'John');
let keys = Array.from(map.key())
key.push('more');
alert(key); // name, more


// WeakMap и  weekSet


// Дата и время 
let now = new Date(2012, 2, 20, 3, 12);
alert(now);