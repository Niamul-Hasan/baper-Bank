document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('input-deposit');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //Update deposit
    const depositTotoal = document.getElementById('deposit-total');
    const previousDepositeTotalText = depositTotoal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalText);
    const currentDepositeTotal = depositAmount + previousDepositeTotal;
    depositTotoal.innerText = currentDepositeTotal;

    //balance update
    const balanceUpdate = document.getElementById('balance');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const currentBalance = previousBalance + depositAmount;
    balanceUpdate.innerText = currentBalance;

    //clear deposit input field
    depositInput.value = "";
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    //Update withdraw
    const withdrawTotoal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotoal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const currentWithdrawTotal = withdrawAmount + previousWithdrawTotal;
    withdrawTotoal.innerText = currentWithdrawTotal;

    //balance update
    const balanceUpdate = document.getElementById('balance');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const currentBalance = previousBalance - withdrawAmount;
    balanceUpdate.innerText = currentBalance;

    //clear withdraw input field
    withdrawInput.value = "";
})