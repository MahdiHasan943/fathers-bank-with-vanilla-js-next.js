document.getElementById('button-withdraw').addEventListener('click', () => {
    // input value
    const newWithdrawAmount =inputValue('withdraw-field')
                        
// withdrawTotal 
    TextValue('withdraw-total', newWithdrawAmount) 
    
    // balanceTotal 
    TextValue2('balance-total',newWithdrawAmount)

})