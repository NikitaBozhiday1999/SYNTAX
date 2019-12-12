// Рекурсия стек
function sumTo(n) {
    let sum = 0; 
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
alert(sumTo(100));

//=======
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n-1);
}
alert(sumTo(100));

//=======
function sumTo(n) {
    return n * (n+1) / 2;
}
alert(sumTo(100));

// ==================== 
function fact(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * (fact(n-1))
    }
}

//=================
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert(fib(3));
alert(fib(7));


// Декораторы Call и Apply
