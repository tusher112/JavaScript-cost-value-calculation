//common function
function getInput(value) {
    let InputFiled = parseInt(document.getElementById(value).value);
    if (InputFiled < 0) {
        alert("Please Provide a positive amount");

    }

    if (InputFiled >= 0) {
        return InputFiled;
    }
    InputFiled.value = "";
}



function dashBoard(value) {
    const valueOfDashboard = document.getElementById(value);
    return valueOfDashboard;
}



//calculate button's function
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInputFiled = getInput('income-input');
    const foodInputFiled = getInput('food-cost');
    const rentInputFiled = getInput('rent-cost');
    const clothesInputFiled = getInput('clothes-cost');

    let totalExpensesDashboard = dashBoard('total-expenses-dashboard');
    totalExpensesDashboard.innerText = parseInt((isNaN(foodInputFiled) ? 0 : +foodInputFiled) + (isNaN(rentInputFiled) ? 0 : +rentInputFiled) + (isNaN(clothesInputFiled) ? 0 : +clothesInputFiled));


    let totalBalanceDashboard = dashBoard('total-balance-dashboard');
    
    totalBalanceDashboard.innerText = (isNaN(incomeInputFiled) ? 0 : +incomeInputFiled) - (isNaN(totalExpensesDashboard.innerText) ? 0 : +totalExpensesDashboard.innerText);


    if (totalExpensesDashboard.innerText > incomeInputFiled) {
        alert("insufficient balance");

        totalBalanceDashboard.innerText = incomeInputFiled;
        totalExpensesDashboard.innerText = 0;


    }

    let remainingDashboard = dashBoard('remaining-balance-dashboard');
    remainingDashboard.innerText = totalBalanceDashboard.innerText;


})

//save button's function
document.getElementById('saving-button').addEventListener('click', function () {

    const incomeInputFiled = getInput('income-input');
    let totalExpensesDashboard = dashBoard('total-expenses-dashboard');


    const saving = parseInt(document.getElementById('saving-input').value);
    const savingFinal = (saving / 100) * incomeInputFiled;

    const savingAmount = document.getElementById('saving-amount-dashboard');
    savingAmount.innerText = (isNaN(savingFinal) ? 0 : +savingFinal);


    let remainingDashboard = dashBoard('remaining-balance-dashboard');
    remainingDashboard.innerText = (isNaN(incomeInputFiled) ? 0 : +incomeInputFiled) - ((isNaN(totalExpensesDashboard) ? 0 : +totalExpensesDashboard) + (isNaN(savingFinal) ? 0 : +savingFinal));

    remainingDashboard.innerText = ((isNaN(incomeInputFiled) ? 0 : +incomeInputFiled) - (isNaN(savingAmount.innerText) ? 0 : +savingAmount.innerText) - (isNaN(totalExpensesDashboard.innerText) ? 0 : +totalExpensesDashboard.innerText));


})