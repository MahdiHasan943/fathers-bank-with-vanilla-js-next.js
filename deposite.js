document.getElementById('button-deposite').addEventListener('click', () => {
    
    const inputField = document.getElementById('deposite-field');
    const newDepositeAmount =parseFloat(inputField.value)



    const depositeTotal = document.getElementById('deposite-total');

    const preveousDeposite = parseFloat(depositeTotal.innerText);
    const currentDepositeTotal = preveousDeposite + newDepositeAmount;

    depositeTotal.innerText =currentDepositeTotal;

   
    inputField.value = ''
    

   // Withdraw 
    




    // balanceTotal 
    const balanceTotal = document.getElementById('balance-total');
    const preveousBalance = parseFloat(balanceTotal.innerText);
    const currentBalance = preveousBalance + newDepositeAmount;
    balanceTotal.innerText = currentBalance;



})