// f for input value
const inputValue = (id) => {
    const feild = document.getElementById(id);
    const newFeild = parseFloat(feild.value)
    feild.value = '';   
    return newFeild
};
// f for get text value and sum 
const TextValue = (id,money) => {
    const TextFeild = document.getElementById(id);
    const newTextFeild = parseFloat(TextFeild.innerText);
    const currentTextFeild= newTextFeild + money;
    return  TextFeild.innerText =currentTextFeild;  
}

// f for get text value and substrac
const TextValue2 = (id,money) => {
    const TextFeild = document.getElementById(id);
    const newTextFeild = parseFloat(TextFeild.innerText);
    const currentTextFeild= newTextFeild - money;
    return  TextFeild.innerText =currentTextFeild;  
}
