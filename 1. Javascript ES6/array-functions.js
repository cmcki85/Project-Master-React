const numbers = [1, 2, 3, 4];

const doubleNumArray = numbers.map((num) => {   // This function maps through each individual element in the array and preforms the operation. 
    return num*2;   // The output of this is stored in a new Real array in doubleNumArray. 
})

console.log(numbers); // outputs: [1, 2, 3, 4]
console.log(doubleNumArray); // outputs: [2, 4, 6, 8]