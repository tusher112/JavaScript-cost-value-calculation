//calculate button's function
document.getElementById('calculate-button').addEventListener('click', function () {


    const incomeInputFiled = parseInt(document.getElementById('income-input').value);

    const foodInputFiled = parseInt(document.getElementById('food-cost').value);
    const rentInputFiled = parseInt(document.getElementById('rent-cost').value);
    const clothesInputFiled = parseInt(document.getElementById('clothes-cost').value);

    let totalExpensesDashboard = document.getElementById('total-expenses-dashboard');
    totalExpensesDashboard.innerText = parseInt(foodInputFiled + rentInputFiled + clothesInputFiled);

    let balanceDashboard = document.getElementById('total-balance-dashboard');
    balanceDashboard.innerText = incomeInputFiled - totalExpensesDashboard.innerText;

    let remainingBalance = document.getElementById('remaining-balance-dashboard');
    remainingBalance.innerText = balanceDashboard.innerText;

})

//save button's function
document.getElementById('saving-button').addEventListener('click', function () {
    const balance = document.getElementById('total-balance-dashboard').innerText;
    console.log(balance);

    let saving = parseInt(document.getElementById('saving-input').value);

    const savingFinal = (saving / 100) * balance;

    const savingAmount = document.getElementById('saving-amount-dashboard');
    savingAmount.innerText = savingFinal;

    const remainingBalanceFinal = document.getElementById('remaining-balance-dashboard');
    remainingBalanceFinal.innerText = balance - savingFinal;

})