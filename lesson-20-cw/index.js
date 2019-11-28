let favorite = 'myFav';
let color = 'brown';
let width = '600';
// prompt('Введите название свойства', '');
let pab = prompt('Введите название свойства', '');

let cap = {
    color,
    width,
    shape: 'circle',
    isSolid: 'false',
    myFav: true,
}
alert(cap[pab]);
// console.log(cap);
// console.log(cap.isSolid);
// console.log(cap['myfavorite']);
// console.log(cap[myFav]);
// console.log(color in cap);
if ('shape' in cap) {
    alert('Boom!');
}
// cap.shape = rhombus;
// delete cap.color;

// Программа из двух строк
// ????
for (let key in cap) {
        console.log(key);
}
// Копирование объекта?!

// let people = ['Сергей', 'Нина', 'Андрей', 'Александр', 'Алексей'];
// people[4];
// people[1] = 'Никита';
// people.length;

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// let student = [1, 2, 3, 4];

// for  (i = 0; i < student.length; i++) {
//     console.log(i, ':', student[i]);
// }
// for (let peoples of people) {
//     console.log(people);
// }
// people.push('Григорьевич');
// console.log(people);
// people.unshift('Лука');
// console.log(people);

// // Удаление и вставление елементов из массива?!

// let array = [1, 2, 3, 4];


