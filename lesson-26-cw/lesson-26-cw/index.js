function askAge() {
    let age = prompt('Your age?');
    return age;
}

let homeLink = document.querySelector('.header__link:first-of-type');

// homeLink.onclick = function() {
//     let random = Math.round(Math.random() * 9) + 1;

//     alert(random);
// }



// function getRandomNumber() {
//         let random = Math.round(Math.random() * 9) + 1;
    
//         alert(random);
//     }

// homeLink.onclick = getRandomNumber();


function getRandomNumber() {
    let random = Math.round(Math.random() * 9) + 1;

    alert(random);
}

homeLink.addEventListener('click', getRandomNumber);

// homeLink.addEventListener('click', function (event) {
//     // console.log(this.innerHTML = '<srtong> Home 777 </strong>');
//     console.log(event);
// });

// homeLink.addEventListener('click', function() {
//     console.log(Date());
// });

setTimeout(() => {
    homeLink.removeEventListener('click', getRandomNumber);
}, 5000);

let articleE1 = document.querySelector('.article');
let sectionE1 = document.querySelector('.section');
let blockE1 = document.querySelector('.block');

// articleE1.addEventListener('click', function(event) {
//     alert(event.target.tagName);
// }, true );

// sectionE1.addEventListener('click', function(event) {
//     alert(event.target.tagName);
// }, true );

// blockE1.addEventListener('click', function(event) {
//     alert(event.target.tagName);

//     event.stopPropagation();
// }, true );


// articleE1.addEventListener('click', function(event) {
//     alert('article');
// }, true );

// sectionE1.addEventListener('click', function(event) {
//     alert('section');
// }, true );

// blockE1.addEventListener('click', function(event) {
//     alert('div');

//     event.stopPropagation();
// }, true );

articleE1.addEventListener('click', function(event) {
    if (event.target === blockE1) {
        blockE1.style.backgroundColor = 'red';
        blockE1.style.color = 'black';
        blockE1.style.fontSize = '25px'; 
        blockE1.style.display = 'flex';
        blockE1.style.alignItems = 'center';
        blockE1.style.justifyContent = 'center';
    }
    else if (event.target === sectionE1) {
        alert('section');
    }
    else {
        alert('article');
    }
});


let linkE1 = document.querySelector('.habr-link');

linkE1.addEventListener('click', function (event) {
    event.preventDefault();
});

let menuIcon = document.querySelector('.header__menu-icon');
let headerLink = document.querySelector('.header__links');
let closeIcon = document.querySelector('.header__close-icon');

menuIcon.addEventListener('click', function(event) {
    headerLink.classList.add('header__links--active');
});

closeIcon.addEventListener('click', function (event) {
    headerLink.classList.remove('header__links--active')
});

window.addEventListener('keyup', function(event) {
    if (!(event.ctrlKey && event.shiftKey)) return;

    let headerE1 = document.querySelector('.header');
    let headerStyles = headerE1.getBoundingClientRect();

    if (event.code === 'ArrowUp') {
        headerE1.style.height = headerStyles.height + 5 + 'px';
    }
    else if (event.code === 'ArrowDown') {
        headerE1.style.height = headerStyles.height - 5 + 'px';
    }
});

let submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
});

let userName = document.forms.messageForm.elements.userName;

// userName.addEventListener('blur', function(event) {
//     if (this.value.length < 5) {
//         this.classList.add('form-field--error');
//     }
//     else {
//         this.classList.remove('form-field--error');
//     }
// });

userName.addEventListener('input', function(event) {
    if (!this.value) {
        this.classList.remove('form-field--error');
        return;
    }
    if (this.value.length < 5) {
        this.classList.add('form-field--error');
    }
    else {
        this.classList.remove('form-field--error');
    }
});

