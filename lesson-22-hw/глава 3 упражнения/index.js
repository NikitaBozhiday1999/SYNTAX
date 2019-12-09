// #1-2
let randomBodyParts = ['глаз', 'нога', 'череп', 'лицо', 'спина'];
let randomAdjectives = ['грязная', 'кривая', 'смешная'];
let randomWords = ['таракан', 'свинья', 'макака', 'собака', 'крыса'];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];
let randomInsult = 'У тебя ' + randomBodyPart + ' словно ' + randomAdjective + ' ' + randomWord + '!';
alert(randomInsult);

// #4
let arr = [3, 2, 1];
let arrJoin = arr.join('больше, чем');

