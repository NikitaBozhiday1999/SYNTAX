// Навигация по DOM элементам 
document.querySelector(div);
document.querySelector(ul);
document.body.lastElementChild.lastElementChild;

// ======================
// true
// false

// =============
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    rows.cells[i].style.backgroundColor = 'red';
}


// Поиск элементов
document.getElementById('age-table');
document.querySelectorAll('#age-table label');
document.table.querySelector('td');
document.querySelector('form[name="search"]');
form.querySelector('input')
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1];

// Свойства узлов 
for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;  
}


// Атрибуты и свойства
let elem = document.querySelector('[data-widget-name]');
alert('elem.dataset.widgetName');

// Изменение документа



