let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", 20000);
    time = prompt ("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", 20000);
    }
}
start();

let appData = {
    bydget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay =(appData.bydget / 30).toFixed();
        alert ("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let opt = prompt("Статья необязательных расходов", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if (typeof(items)=== "string" && items != "" && items != null) {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
            appData.income.forEach(function(item, i) {
                console.log("Способы дополнительного заработка: " + i + ". " + item);
            });
            } else {
                i = i - 1;
            }
        }
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + appData[key]);
}



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