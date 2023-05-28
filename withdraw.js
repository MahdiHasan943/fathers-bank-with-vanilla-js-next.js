document.getElementById('button-withdraw').addEventListener('click', () => {
    
    const inputField = document.getElementById('withdraw-field');
    const newDepositeAmount =parseFloat(inputField.value)



    const depositeTotal = document.getElementById('withdraw-total');

    const preveousDeposite = parseFloat(depositeTotal.innerText);
    const currentDepositeTotal = preveousDeposite + newDepositeAmount;

    depositeTotal.innerText =currentDepositeTotal;

   
    inputField.value = ''
    

  


    // balanceTotal 
    const balanceTotal = document.getElementById('balance-total');
    const preveousBalance = parseFloat(balanceTotal.innerText);
    const currentBalance = preveousBalance - newDepositeAmount;
    balanceTotal.innerText = currentBalance;



})