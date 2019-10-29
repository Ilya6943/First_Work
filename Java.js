let money, time;


let btn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    input = document.getElementsByClassName('expenses-item'),
    buttons = document.getElementsByTagName('button'),
    btn1 = buttons[0],
    btn2 = buttons[2],
    input2 = document.querySelectorAll('.optionalexpenses-item'),
    input3 = document.querySelector('.choose-income'),
    input4 = document.getElementById('savings'),
    input5 = document.querySelector('.choose-sum'),
    input6 = document.querySelector('.choose-percent'),
    input7 = document.querySelector('.year-value'),
    input8 = document.querySelector('.month-value'),
    input9 = document.querySelector('.day-value');

btn1.disabled = true;
buttons[1].disabled = true;
btn2.disabled = true;

btn.addEventListener('click', function(){
    time = prompt ("Введите дату в формате YYYY-MM-DD");
    money = +prompt ("Ваш бюджет на месяц?", 20000);

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", 20000);
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    input7.value = new Date(Date.parse(time)).getFullYear();
    input8.value = new Date(Date.parse(time)).getMonth() + 1;
    input9.value = new Date(Date.parse(time)).getDate();

    btn1.disabled = false;
    buttons[1].disabled = false;
    btn2.disabled = false;

});


btn1.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let n1 = input[i].value,
            n2 = input[++i].value;

        if ( (typeof(n1))=== "string" && (typeof(n1)) != null && (typeof(n2)) != null 
            && n1 != "" && n2 != "" && n1.length < 50) {
                console.log("Done!");
                appData.expenses[n1] = n2;
                sum += +n2;
        } else {
            i = i - 1; 
        }
    }
    expensesValue.textContent = sum;
});

buttons[1].addEventListener('click', function() {
    for (let i = 0; i < input2.length; i++) {
        let opt = input2[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btn2.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

input3.addEventListener('input', function() {
    let items = input3.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

input4.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

input5.addEventListener('input', function() {
    if (appData.savings == true) {
    let sum = +input5.value,
        percent = +input6.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

input6.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +input5.value,
        percent = +input6.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


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
