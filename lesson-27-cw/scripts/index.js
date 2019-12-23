// import { getDataFromServerCb } from "./library";

// import { getDataFromServerCb } from './library.js';

// let user = {
//     name: 'John',
//     email: 'john@mail.com',
//     age: 16
// };
// console.log(user);

// let jsonUser = JSON.stringify(user, null, 4);
// console.log(jsonUser);

// let parseUser = JSON.parse(jsonUser);
// console.log(parseUser);

// getDataFromServerCb('myserver.com');

// function handleData() {
//     console.log('Готово');
// }

// console.log('Данные получены');


// let promise = new Promise(function (resolve, reject) {
//     // resolve('Выполнилось успешно');
//     reject('Ошибка!!!!!!');
// });
// console.log(promise);

// promise
//     .then(
//         result => console.log(result),
//         error => console.error(error)
//     )
//     .finally(() => console.log('конец'));

// function getDataFromServerCb(url) {
//     return new Promise (function (resolve, reject) {
//         setTimeout(() => {
//             // resolve(`Данные с ${ url } получены`);
//             reject(new Error('Ошибка!!!'));
//         }, 1500);
//     });
// }

// async function showResult() {
//     try {
//         let authors = await getDataFromServerCb('authors');
//         alert(authors);

//         let books = await getDataFromServerCb('books');
//         alert(books);

//         let description = await getDataFromServerCb('description');
//         alert(description);
//     }
//     catch (err) {
//         alert(err);
//     }
// }

// showResult();
// getDataFromServerCb('authors')
//     .then(result => {
//         console.log(result);

//         return getDataFromServerCb('books')
//     })
//     .then(books => {
//         console.log(books);

//         return getDataFromServerCb('desription')
//     })
//     .then(description => {
//         console.log(description);
//     })
//     .catch(error => {
//         alert(error);
//     });



async function readRepositories() {
   let response = await fetch('https://api.github.com/users/NikitaBozhiday1999/repos');
   let repositories = await response.json();

   buildCards(repositories);
}

function buildCards(repositories) {
    let gridE1 = document.querySelector('.grid');
    repositories.forEach(repository => {
        let card = `
            <div class="card hoverable">
            <div class="card-image">
                <img src="${ repository.owner.avatar_url }">
            </div>
            <div class="card-content text-darken-2">
                <span class="card-title"> ${ repository.name } </span>
                <p> ${ repository.description } </p>
            </div>
            </div>
        `;
        gridE1.insertAdjacentHTML('beforeend', card);
    });
}

readRepositories();