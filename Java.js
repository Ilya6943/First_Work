var money, time, n1, n2, n3, n4, optionalExpenses, income;
money = prompt ("Ваш бюджет на месяц?", 20000);
time = prompt ("Введите дату в формате YYYY-MM-DD");
n1 = prompt ("Введите обязательную статью расходов в этом месяце");
n2 = prompt ("Во сколько обойдется?");
n3 = prompt ("Введите обязательную статью расходов в этом месяце");
n4 = prompt ("Во сколько обойдется?");
var expenses = {
    n1: n2,
    n3: n4
};
var appData = {
    bydjet: money,
    timeData: time,
    expenses,
    optionalExpenses,
    income,
    savings: false
};
alert ("Ваш бюджет на 1 день:" + appData.bydjet/30);


