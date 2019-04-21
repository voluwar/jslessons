var appdata = {
    budget: money,
    timeData: time,
    expenses: {
        firstQuestion: var firstAnswer,
        secondQustions: var secondAnswer
        },
    optionalExpenses: {},
    income:[],
    savings: false
    };

alert('все работает?');
var money = prompt("Ваш бюджет в месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

appdata.expenses.firstAnswer = prompt('Введите обязательную статью расходов в этом месяце');
appdata.expenses.secondAnswer = prompt('Введите обязательную статью расходов в этом месяце');



console.log(money);
console.log(time);
console.log(appdata.expenses.firstAnswer);
console.log(appdata.expenses.secondAnswer);

console.log(appdata);
