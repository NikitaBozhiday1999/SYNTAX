let listEl = document.querySelector('.pagination');
let targetEl; 
let elementMenu;
let spiner = document.querySelector('.preloader-wrapper');
const LEFT_CHEVRON_SYMBOLS = 12;
const RIGHT_CHEVRON_SYMBOLS = 13;
let leftArrow = document.querySelector('.arrowL');
let rightArrow = document.querySelector('.arrowR');



async function readImage() {
    let page = localStorage.getItem('value');
    let bodyEl = document.querySelector(".row");
    bodyEl.innerHTML = '';
    try {
        let img = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        let images = await img.json();
        for (let image of images) {
            let cardImg = `<img class="col xl3 l4 m6 s12 materialboxed" src="${image.download_url}">`;
            bodyEl.insertAdjacentHTML('beforeend', cardImg);
        }
        M.AutoInit();
    }
    catch {
        alert("So sorry, it's error...")
    }
    finally {
        spiner.remove();
    }
}

function startSession() {
    if(localStorage.length == 0) {
        localStorage.setItem('value', 1);
    }
        targetEl = listEl.children[localStorage.getItem('value')];
        targetEl.classList.add('active');
    readImage();
}

function pagination(event) {
    if (localStorage.getItem('value') == 5) {
        // elementMenu = listEl.children[localStorage.getItem('value')];
        rightArrow.classList.add('disabled');
    }
    // else if (localStorage.getItem('value' < 5)) {
    //     rightArrow.classList.remove('disabled');
    // }




    
    // if(localStorage.getItem('value') > 5) {
    //     targetEl.classList.add('disabled');
    //     targetEl.classList.remove('disabled');
    // }
    // else if(localStorage.getItem('value') == 1) {
    //     targetEl.classList.add('disabled');
    //     targetEl.classList.remove('disabled');
    // }
    // else if (localStorage.getItem('value') > 1 && localStorage.getItem('value') < 5) {
    //     targetEl.classList.remove('disabled');
    // }
    // targetEl = listEl.children[listEl.children.length - 1];
    // targetEl = listEl.children[0];
    if ((localStorage.getItem('value') == 1 && event.target.textContent.length == LEFT_CHEVRON_SYMBOLS) || (localStorage.getItem('value') == 5 && event.target.textContent.length == RIGHT_CHEVRON_SYMBOLS)) {
        return;
    }
    else if (localStorage.getItem('value') > 1 && event.target.textContent.length == LEFT_CHEVRON_SYMBOLS) {
        localStorage.setItem('value', +localStorage.getItem('value') - 1);
    }
    else if ((localStorage.getItem('value') > 0 && localStorage.getItem('value') < 5) && event.target.textContent.length == RIGHT_CHEVRON_SYMBOLS) {
        localStorage.setItem('value', +localStorage.getItem('value') + 1);
    }
    else if (event.target.textContent.length < LEFT_CHEVRON_SYMBOLS) {
        localStorage.setItem('value', event.target.textContent);
    }
    elementMenu = listEl.children[localStorage.getItem('value')];
    for (let i = 0; i < listEl.children.length; i++) {
        let removeClass = listEl.children[i];
        removeClass.classList.remove('active');
    }
    elementMenu.classList.add('active');   
    readImage();  
}

listEl.addEventListener('click', pagination);
startSession();


// document.addEventListener('DOMContentLoaded', function() {
//     let elems = document.querySelectorAll('.materialboxed');
//     M.Materialbox.init(elems);
//   });


