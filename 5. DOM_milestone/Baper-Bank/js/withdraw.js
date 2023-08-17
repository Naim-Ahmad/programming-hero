const btnWithdraw = document.getElementById('btn-withdraw');
const displayWithdraw = document.getElementById('display-withdraw');
const inpWithdraw = document.getElementById('inp-withdraw');

btnWithdraw.addEventListener('click', function () {
    const sumOfCurPrev =
      Number(displayWithdraw.innerText) + Number(inpWithdraw.value);
  const inpWithdrawValue = Number(inpWithdraw.value)
  
  const totalWithdraw = sumOfCurPrev < 10 ? '0' + sumOfCurPrev : sumOfCurPrev;
  
  const totalBalance = Number(displayBalance.innerText) - inpWithdrawValue;

  inpWithdraw.value = ''
  
    if (inpWithdrawValue > Number(displayBalance.innerText)) {
        alert('baper hotele taka nei')
        return
    }
  displayWithdraw.innerText = totalWithdraw;
  displayBalance.innerText = totalBalance;
  

})