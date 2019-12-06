// Функции 
function checkAge(age) {
    if (age > 18) {
        return true
    }
    return confirm('Родители разрешили?');// будет работать
}

// ================
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// ==================
function min(a, b) {
    if (a < b) {
        return(a);
    }
    return(b);
}

function min(a, b) {
    return (a < b) ? a : b;
}

// ===============
function pow(x, n) {
    let numX = prompt(`Введите число ${x}`);
    let numN = prompt(`Введите степень ${n}`);
    return (Math.floor(x ** n));
}

// Функции и стрелки 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask (
    'Вы согласны?',
    () => alert('Вы отменили выполнение.')
);

// Методы объекта
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
}
(user.go)() // ошибка
 
//===============
