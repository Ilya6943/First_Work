let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", 20000);
    time = prompt ("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", 20000);
    }
}
start();

let o1, o2, o3;
function chooseOptExpenses() {
    o1 = prompt("Статья необязательных расходов?");
    o2 = prompt("Статья необязательных расходов?");
    o3 = prompt("Статья необязательных расходов?");
}

let appData = {
    bydget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {
        1: o1,
        2: o2,
        3: o3
    },
    income: {},
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let n1 = prompt ("Введите обязательную статью расходов в этом месяце"),
            n2 = prompt ("Во сколько обойдется?");

        if ( (typeof(n1))=== "string" && (typeof(n1)) != null && (typeof(n2)) != null 
            && n1 != "" && n2 != "" && n1.length < 50) {
                console.log("Done!");
                appData.expenses[n1] = n2;
        } else {
            i = i - 1; 
        }
    }
}

chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay =(appData.bydget / 30).toFixed();
    alert ("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();



//let i = 0;
//while (i < 2) {
//    let n1 = prompt ("Введите обязательную статью расходов в этом месяце"),
//        n2 = prompt ("Во сколько обойдется?");
//    i = i++;
//    if ( (typeof(n1))=== "string" && (typeof(n1)) != null && (typeof(n2)) != null 
//        && n1 != "" && n2 != "" && n1.length < 50) {
//            console.log("Done!");
//           appData.expenses[n1] = n2;
//    } else {
//    }
//}

// let i = 0;
// do {
//     let n1 = prompt ("Введите обязательную статью расходов в этом месяце"),
//         n2 = prompt ("Во сколько обойдется?");
//         i = i++;
//     if ( (typeof(n1))=== "string" && (typeof(n1)) != null && (typeof(n2)) != null 
//         && n1 != "" && n2 != "" && n1.length < 50) {
//             console.log("Done!");
//             appData.expenses[n1] = n2;
//     } else 
//     }
// } while (i < 2);