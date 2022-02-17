//common function
function getInput(value) {
    let InputFiled = parseInt(document.getElementById(value).value);
    if (InputFiled < 0) {
        alert("Please Provide a positive amount");

    }

    if (InputFiled >= 0) {
        return InputFiled;
    }
    InputFiled.value= "";
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


    let balanceDashboard = dashBoard('total-balance-dashboard');
    const startingBalance = balanceDashboard.innerText;
    console.log(incomeInputFiled);
    balanceDashboard.innerText = (isNaN(incomeInputFiled) ? 0 : +incomeInputFiled) - (isNaN(totalExpensesDashboard.innerText) ? 0 : +totalExpensesDashboard.innerText);


    if (totalExpensesDashboard.innerText > incomeInputFiled) {
        alert("insufficient balance");
        balanceDashboard.innerText = incomeInputFiled;

        totalExpensesDashboard.innerText = 0;

    }

    let remainingBalance = dashBoard('remaining-balance-dashboard');
    remainingBalance.innerText = balanceDashboard.innerText;


})

//save button's function
document.getElementById('saving-button').addEventListener('click', function () {
    const balance = document.getElementById('total-balance-dashboard').innerText;
    const saving = parseInt(document.getElementById('saving-input').value);

    const savingFinal = (saving / 100) * balance;

    const savingAmount = document.getElementById('saving-amount-dashboard');
    savingAmount.innerText = savingFinal;

    const remainingBalanceFinal = document.getElementById('remaining-balance-dashboard');
    remainingBalanceFinal.innerText = balance - savingFinal;

})