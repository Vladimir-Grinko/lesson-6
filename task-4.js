let correctAnswers = 0;
let incorrectAnswers = 0;

let question1 = prompt('Сколько будет 2 + 2?');
question1 = Number(question1.trim());
console.log(question1);
if (question1 === 4) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let question2 = prompt('Сколько будет 2 * 2?');
question2 = Number(question2.trim());
console.log(question2);
if (question2 === 4) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
question3 = Number(question3.trim());
console.log(question3);
if (question3 === 1) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
question4 = Number(question4.trim());
console.log(question4);
if (question4 === 12) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

let question5 = prompt('Сколько будет 2 + 2 * 2?');
question5 = Number(question5.trim());
console.log(question5);
if (question5 === 6) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

alert(` Конец теста! \n Правильные ответы - ${correctAnswers}\n Неправильные ответы - ${incorrectAnswers}`)