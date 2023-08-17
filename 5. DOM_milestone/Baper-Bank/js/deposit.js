const btnDeposit = document.getElementById('btn-deposit');
const displayDeposit = document.getElementById('display-deposit');
const inputDeposit = document.getElementById('inp-deposit')
const displayBalance = document.getElementById('display-balance')

btnDeposit.addEventListener('click', function (event) {
    const inpFieldValue = Number(inputDeposit.value)
    const sumOfPrevCurWithdraw = Number(displayDeposit.innerText) + inpFieldValue;
    const totalDeposit =
      sumOfPrevCurWithdraw < 10
        ? '0' + sumOfPrevCurWithdraw
        : sumOfPrevCurWithdraw;
    const totalBalanceAfterDeposit = Number(displayBalance.innerText) + inpFieldValue;

    displayDeposit.innerText = totalDeposit;
    displayBalance.innerText = totalBalanceAfterDeposit;
    inputDeposit.value = ''
})