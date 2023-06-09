// Write an arrow function where it will do the following:
//a) It will take an array where the array elements will be the name of your friends
//b) Check if the length of each element is even, push elements
//with even length to a new array and return the result Print the result.

const arr = ['mahdi', 'manum', 'Zihad','abal', 'Nahid', 'Jakir', 'Mahmud'];

const findEvenLength = (arr) => {  
    const copy = [];
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        if (element.length%2===0) {
          copy.push(element)
            
        }
        
    }
    return copy;


    
}

// console.log(findEvenLength(arr));

// Write an arrow function where it will do the following:
//.a) It will take two array inputs
//b) Combine the two arrays and assign them in a new array
//c) Find the maximum number from the new array and return the result

const numberOne = [20, 40, 10, 5, 4, 67, 4];
const numberTwo = [80, 90, 100, 400, 600, 10];

const findMaxNumber = (nOne, nTwo) => {
  
  const newArray = [...nOne, ...nTwo]
  const maxNmuber =Math.min.apply(null,newArray)
  return maxNmuber;


} 
// console.log(findMaxNumber(numberOne,numberTwo));