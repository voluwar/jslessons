/*Задание 1
console.log(50%3);
console.log("Hello primitive data"[7]);
console.log("Hello"[3] + "world"[3]);
console.log("Hello".length / "world".length);
*/

/* Задание анкета

var name;
var surname;
var age;

name = prompt("Введите имя");
surname = prompt("Введите фамилию");
age = prompt("Введите возраст");

console.log("Пользователь: " + name + " " + surname);
console.log("Возраст: " + age);
*/
/*
var exchangeRate = 2.14;
var usd;
var rub;

usd = prompt("Сколько хотите поменять долларов?");
rub = "Вы получите " + Math.round(usd*exchangeRate*100)/100 + "рублей";
alert(rub);*/

// задание лишний вес
/*
var height=prompt("Укажите Ваш рост в метрах");
var weight=prompt("Укажите Ваш вес в кг");
var age = prompt("Укажите возраст");


var result = weight/Math.pow(height,2);

if (age>=18 && age<=25){
    if (result < 17.5) {
    alert(result + " " +"Недостаточно, опасно для здоровья");
    }
    else if (result >= 17.5 && result<19.5) {
    alert(result + " " +"Слегка снижен, неопасно для здоровья");
    }
    else if (result >= 19.5 && result<23) {
    alert(result + " " + "Нормальный");
    }

    else if (result >= 23 && result<27.5) {
    alert(result + " " +"Излишний");
    }
    else if (result >= 27.5 && result<30) {
    alert(result + " " +"Ожирение 1 степени");
    }

    else if (result >= 30 && result<35) {
    alert(result + " " +"Ожирение 2 степени");
    }

    else if (result >= 35 && result<40) {
    alert(result + " " +"Ожирение 3 степени");
    }

    else if (result >= 40) {
    alert(result + " " +"Ожирение 4 степени");
    }
}

else if (age>=26 && age<=46){

    if (result < 18) {
    alert(result + " " +"Недостаточно, опасно для здоровья");
    }
    else if (result >= 18 && result<20) {
    alert(result + " " +"Слегка снижен, неопасно для здоровья");
    }
    else if (result >= 20 && result<26) {
    alert(result + " " +"Нормальный");
    }

    else if (result >= 26 && result<28) {
    alert(result + " " +"Излишний");
    }
    else if (result >= 28 && result<31) {
    alert(result + " " +"Ожирение 1 степени");
    }

    else if (result >= 31 && result<36) {
    alert(result + " " +"Ожирение 2 степени");
    }

    else if (result >= 36 && result<41) {
    alert(result + " " +"Ожирение 3 степени");
    }

    else if (result >= 41) {
    alert(result + " " +"Ожирение 4 степени");
    }
}




else {alert("Нет данных")
}
*/

for (var i=30; i >= 1; i--) {

if (i%2 !== 0){

console.log(i);

}

}




