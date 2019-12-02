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

