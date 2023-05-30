document.getElementById('button-deposite').addEventListener('click', () => {
    
   // input value 
     const newDepositeAmount = inputValue('deposite-field')
  
     //depositeTotal
     TextValue('deposite-total',newDepositeAmount)

    // balanceTotal 
    TextValue('balance-total',newDepositeAmount)



})