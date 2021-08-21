let userNumber = prompt('Введите число, до которого хотите найти сумму:');
userNumber = Number(userNumber.trim());
console.log(userNumber);
let sum = 0;
for (let start = 1; start <= userNumber; start++) {
    sum += start;
}
alert(sum);// сделал задачу немного по-своему) данная программа находит сумму всех чисел до нужного, которое введет пользователь)

//P.S. надеюсь, ругать никто не будет:)))