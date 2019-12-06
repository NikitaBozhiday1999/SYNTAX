// let name = prompt('Как вас зовут?');
// console.log("Привет, " + name);

// let likeCats = confirm('Тебе нравятся кошки?');
//     if (likeCats) {
//         console.log('Из тебя выйдет классная кошка.');
//     }
//     else {
//         console.log('Что ж, не проблема. Все равно на собаку похож!');
//     }
// alert('JavaScript это круто!');

/* Выбрать случайное слово
Пока слово не угадано {
Показать игроку текущее состояние игры
Запросить у игрока вариант ответа
Если игрок хочет выйти из игры {
Выйти из игры
}
Иначе Если вариант ответа — не одиночная буква {
Сообщить игроку, что он должен ввести букву
}
Иначе {
Если такая буква есть в слове {
Обновить состояние игры, подставив новую букву
}
}
}
Поздравить игрока с победой — слово угадано */

let words = [
    'небоскреб',
    'машина',
    'трансформатор',
    'петух',
    'пистолет',
    'солнце',
    'животное',
    'бетон',
    'миссисипи'
];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(' '));

    let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры');
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert('Пожалуйста, введите только одну букву.');
    }
    else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + word);