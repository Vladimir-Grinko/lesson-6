const existedUserLogin = 'the_best_user';
const existedUserPassword = 12345678;

let userLogin = prompt('Введите логин');
userLogin = String(userLogin.trim());
console.log(userLogin);

let userPassword = prompt('Введите пароль');
userPassword = Number(userPassword.trim());
console.log(userPassword);

if (existedUserLogin === userLogin && existedUserPassword === userPassword) 
{
        alert(`Добро пожаловать, ${userLogin}!`);
    } else {
        alert('Логин и (или) Пароль введены неверно!');
} 
