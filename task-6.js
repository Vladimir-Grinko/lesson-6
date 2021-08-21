let clientName  = prompt('Введите имя клиента');
clientName = clientName.trim();
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?').trim());
console.log(clientSpentToday);
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?').trim());
console.log(clientSpentForAllTime);
if (!isNaN(clientSpentToday && clientSpentForAllTime)) {
    console.log('Корректные числа');
} else {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку!');
}

let discount = 0;

if (clientSpentForAllTime >= 500) {
    discount = clientSpentToday*0.3;
    console.log('К оплате с учетом скидки 30%: ', clientSpentToday-discount+'$');
    alert('Вам предоставляется скидка в 30%!');

} else if (300 <= clientSpentForAllTime && clientSpentForAllTime <= 499){
    discount = clientSpentToday*0.2;
    console.log('К оплате с учетом скидки 20%: ', clientSpentToday-discount+'$');
    alert('Вам предоставляется скидка в 20%!');

} else if (100 <= clientSpentForAllTime && clientSpentForAllTime <=299){
    discount = clientSpentToday*0.1;
    console.log('К оплате с учетом скидки 10%: ', clientSpentToday-discount+'$');
    alert('Вам предоставляется скидка в 10%!');
}
else {
    console.log('0%');
    alert('Вам пока скидка не предоставляется!');
}
clientSpentForAllTime = clientSpentForAllTime + clientSpentToday - discount;
alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday-discount}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)

