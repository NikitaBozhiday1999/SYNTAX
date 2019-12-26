import {askAge, name} from './libri.js';

askAge();
alert(question);

// function mul(a, b, c) {
//     let multiply = Math.floor(a * b * c);
// }

// mul(prompt(`Введите числа  ${a, b, c}`));

// function mul(a) {
//     return function(b) {
//         return function(c) {
//             return a * b * c;
//         }
//     }
// }


function square(arr) {
    return arr.map(item => item * item);
}

// string 


let titleE1 = document.querySelector('.title');

if (!localStorage.getItem('name')) {
    
    let name = prompt(`Enter name`);

    localStorage.setItem('name', name);

    titleE1.textContent = `Привет ${name}`;
}

titleE1.textContent = `Привет ${localStorage.getItem('name')}`;
// let double = n => n * 2;


let userName = prompt(`Введите ваше имя и фамилию`);



// let firstName = userName.split(' ')[0];
// let lastName = userName.split(' ')[1];

// console.log(userName);

let [firstName, lastName] = userName.split(' ');



let arr = [1, 2, 3, 4, 5];
let [a, b, , , e] = arr;


let repositories = [];

repositories.forEach(({name, desqription, owner}) => {
    owner.avatar_url;
    name;
    description;
});


function drawCircle({ width = 50, height = 50, color = 'red', shadow = '2px 2px #000' }) {

}

drawCircle({color: 'green'});