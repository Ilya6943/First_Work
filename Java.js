let money = +prompt ("Ваш бюджет на месяц?", 20000),
    time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    bydjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};
for (let i = 0; i < 2; i++) {
    let n1 = prompt ("Введите обязательную статью расходов в этом месяце"),
        n2 = prompt ("Во сколько обойдется?");

    if ( (typeof(n1))=== "string" && (typeof(n1)) != null && (typeof(n2)) != null 
        && n1 != "" && n2 != "" && n1.length < 50) {
            console.log("Done!");
            appData.expenses[n1] = n2;
    } else {
        n1 = prompt ("Введите обязательную статью расходов в этом месяце");
        n2 = prompt ("Во сколько обойдется?");

        if ( (typeof(n1))=== "string" && (typeof(n1)) != null && (typeof(n2)) != null 
        && n1 != "" && n2 != "" && n1.length < 50) {
            console.log("Done!");
            appData.expenses[n1] = n2;
        } 
    }
}
appData.moneyPerDay = appData.bydjet / 30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
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