let listEl = document.querySelector('.pagination');
let targetEl; 
let elementMenu;
let spiner = document.querySelector('.preloader-wrapper');

 

function buildGallery(image) {
  let bodyEl = document.querySelector(".row");
  bodyEl.innerHTML = '';
  for(let i = 0; i < image.length; i++) {
      let rand = Math.round(100 + Math.random() * 100);
      image[i].height = rand;
      image[i].width = rand;
      rand = Math.round(1 + Math.random() * 1000);
      image[i].id = rand;
      image[i].download_url = `https://picsum.photos/id/${image[i].id}/${image[i].height}/${image[i].width}`;
      let cardImg = `<img class="col xl3 l4 m6 s12 materialboxed" src="${image[i].download_url}">`;
      bodyEl.insertAdjacentHTML('beforeend', cardImg);
      M.AutoInit();
  }
}


async function readImage() {
    try {
        let img = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`);
        let images = await img.json();
        buildGallery(images);
    }
    catch {
        alert("So sorry, it's error...")
    }
    finally {
        spiner.remove();
    }
}

function startSession() {
    console.log(localStorage);
    if(localStorage.length == 0) {
        localStorage.setItem('value', 1);
        console.log(localStorage);
    }
        targetEl = listEl.children[localStorage.getItem('value')];
        targetEl.classList.add('active');
    readImage();
}

function pagination(event) {
    if(localStorage.getItem('value') > 5) {
        targetEl.classList.add('disabled');
        targetEl.classList.remove('disabled');
    }
    else if(localStorage.getItem('value') == 1) {
        targetEl.classList.add('disabled');
        targetEl.classList.remove('disabled');
    }
    else if (localStorage.getItem('value') > 1 && localStorage.getItem('value') < 5) {
        targetEl.classList.remove('disabled');
    }
    targetEl = listEl.children[listEl.children.length - 1];
    targetEl = listEl.children[0];
    if ((localStorage.getItem('value') == 1 && event.target.textContent.length == 12) || (localStorage.getItem('value') == 5 && event.target.textContent.length == 13)) {
        return ;
    }
    else if (localStorage.getItem('value') > 1 && event.target.textContent.length == 12) {
        localStorage.setItem('value', +localStorage.getItem('value') - 1);
    }
    else if ((localStorage.getItem('value') > 0 && localStorage.getItem('value') < 5) && event.target.textContent.length == 13) {
        localStorage.setItem('value', +localStorage.getItem('value') + 1);
    }
    else if (event.target.textContent.length < 12) {
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


document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
  });


